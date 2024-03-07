import { RootState } from '@/redux/rootReducer';
import axios from 'axios'
import {useSelector} from 'react-redux'

const setupAxiosInterceptors = () => {
    axios.interceptors.request.use(
      (config) => {
        const authToken = useSelector((state: RootState) => state.auth.authenticationToken);
        if (authToken) {
          config.headers.Authorization = `Bearer ${authToken}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  };
  
  export default setupAxiosInterceptors;