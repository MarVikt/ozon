export const filterSearch = (goods, value) => {
  return goods.filter((item) => {
    return item.title.toLowerCase().includes(value.toLowerCase());
  });
};

export const filterCategory = (goods, value) => {
  return goods.filter((item) => {
    return item.category === value;
  });
};
