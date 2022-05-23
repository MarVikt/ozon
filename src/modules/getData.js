const getData = () => {
  const dataBaseUrl = 'https://ozon-495db-default-rtdb.firebaseio.com/goods.json';
  return fetch(dataBaseUrl).then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${ response.status }`);
    }
    return response.json();
  });

};

export default getData;