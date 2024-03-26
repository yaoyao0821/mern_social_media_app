// import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js';

//controllers are for logic in routes
export const getPosts = async (req, res) => {
    try {
        const postMessage = await PostMessage.find()
        res.status(200).json(postMessage)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createPost = async (req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;
    const newPost = new PostMessage({ title, message, selectedFile, creator, tags })
    // const body = req.body
    // const newPost = new PostMessage(body)
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send(`No post with id: ${_id}`);
    }
    
    try {
        const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, { new: true });
        res.json(updatedPost);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const deletePost = async (req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send(`No post with id: ${_id}`);
    }
    try {
        await PostMessage.findOneAndDelete(_id);
        res.status(201).json({ message : 'Deleted Successfully'})
    } catch (error) {
        res.status(409).json({ message: error.message })
    }   
}

export const likePost = async (req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send(`No post with id: ${_id}`);
    }
    try {
        const post = await PostMessage.findById(_id);
        const updatedPost = await PostMessage.findByIdAndUpdate(_id, { likeCount: post.likeCount + 1 }, { new: true });
        res.json(updatedPost);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}