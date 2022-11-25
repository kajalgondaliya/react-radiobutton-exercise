import axios from 'axios';
import { BASE_URL } from '../constant';

export const radioOption = () => {
  const data = axios.get(`${BASE_URL}/radio/options`).then((res) => res.data);
  return data;
};

export const postRadioOption = (selectedResponse: any) => {
 const data = axios
    .post(`${BASE_URL}/radio`, selectedResponse)
    .then((res) => res.data)
    .catch((error) => console.log(error));
    return data;
};

export const getRadioOption = ()=>{
  const data = axios.get(`${BASE_URL}/radio`).then((res) => res.data);
  return data;
}