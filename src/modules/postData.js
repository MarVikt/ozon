const postData = () => {
  const dataBaseUrl = 'http://localhost:4544/goods';
  return fetch(dataBaseUrl, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  }).then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${ response.status }`);
    }
    return response.json();
  });

};

export default postData;