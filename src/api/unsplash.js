import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 648350fd647677d91f6e7e597103d0777d9643c101ce47387c0e1029661233b8'
      }
});