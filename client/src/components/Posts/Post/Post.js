import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';

import { useDispatch } from 'react-redux';

import useStyles from './styles';

const Post = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <>
      Post
    </>
  );
};

export default Post;
