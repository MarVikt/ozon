import getData from "./getData";
import renderer from "./renderer";

const loadGoods = () => {

  getData().then((data) => {
    renderer(data);
  });

};
export default loadGoods;
