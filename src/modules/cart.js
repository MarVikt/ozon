import{animate} from './helpers';

const cart = () => {
  const cartBtn = document.getElementById('cart');
  const cartModal = document.querySelector('.cart');

  const showModal = () => {
    cartModal.style.display = "block";
    document.body.style.overflow = "hidden";
    animate({
      duration: 500,
      timing(timeFraction) {
        return Math.pow(timeFraction, 2);
      },
      draw(progress) {
        cartModal.style.opacity = progress;
      }
    });
  };

  const closeModal = (msec) => {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        if (cartModal.style.display === "block") {
          cartModal.style.display = "none";
          document.body.style.overflow = "auto";
        }
      }, msec);
    });
  };

  const modalProcessing = (e) => {
    e.preventDefault();
    // console.log((e.target));
    if (!e.target.closest('.cart-body') || e.target.matches('.cart-close')) {
      closeModal(0);
    // } else if (e.target.matches('input[type="submit"]')) {
    //   const formInputs = modalForm.querySelectorAll('input,textarea');
    //   const formData = {};
    //   formInputs.forEach(elem => {
    //     if (elem.getAttribute('name') !== null) {
    //       formData[elem.getAttribute('name')] = elem.value.trim();
    //     }
    //   });
    }
  };


  cartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showModal();
  });

  cartModal.addEventListener('click', modalProcessing);


};

export default cart;