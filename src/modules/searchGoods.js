import getData from "./getData";
import renderer from "./renderer";
import { filterSearch } from "./filters";

const searchGoods = () => {
  const searchInput = document.querySelector('.search-wrapper_input');

  searchInput.addEventListener('input', (e) => {
    console.log(e.target.value);

    getData().then((data) => {
      renderer(filterSearch(data, e.target.value));
    });
  });
};

export default searchGoods;