import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TestComponent = () => {
  const [response, setResponse] = useState([]);
  const [formData] = useState({
    name: 'userNmae',
    email: 'userEmail',
    password: 'userPassword'
  });

  const handleSubmit = () => {
    // event.preventDefault();
    axios.post('http://localhost:4000/', formData)
      .then(response => setResponse(response.data))
      .catch(error => console.log(error));
  }
    useEffect(()=>{
      handleSubmit();
    });

    return (
      <h2>{response}</h2>
    )
}

export default TestComponent;