import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dissspatch => {
    const res = await axios.get('/api/current_user');
  
    dissspatch({ type: FETCH_USER, payload: res.data });
  };