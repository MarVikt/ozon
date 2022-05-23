import getData from "./getData";
import renderer from "./renderer";
import { filterSearch, filterCategory } from "./filters";

const catalog = () => {
  const catalogBtn = document.querySelector('.catalog-button > button');
  const catalogModal = document.querySelector('.catalog');
  let isOpen = false;

  const choiceCategory = () => {
    catalogModal.addEventListener('click', (e) => {
      if (e.target.matches('li')) {
        catalogModal.style.display = 'none';
        isOpen = false;
        getData().then((data) => {
          renderer(filterCategory(data, e.target.textContent));
        });
    
      }
    });
  };

  catalogBtn.addEventListener('click', () => {
    isOpen = !isOpen;
    if (isOpen) {
      catalogModal.style.display = 'block';
      choiceCategory();
    } else {
      catalogModal.style.display = 'none';
    }
    console.log('cliick');
  });
};

export default catalog;