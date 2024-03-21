import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default function posts (posts = [], action) {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case UPDATE:
    case LIKE:
      // action.payload is the new post with new like value/new info
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case CREATE:
      return [...posts, action.payload];
    case DELETE:
      // action.payload is id
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};

