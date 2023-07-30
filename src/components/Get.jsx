import React, {useEffect} from 'react';
import axios from "axios";

const Get = () => {
useEffect(() => {
  axios.get('/api/get')
    .then(response => {
      console.log(response)
    });
}, [])
  return (
    <div>

    </div>
  );
};

export default Get;