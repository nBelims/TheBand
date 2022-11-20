
const modal = document.querySelector('.js-modal');
// console.log(modal);

const buyBtnList = document.querySelectorAll('.js-buy-ticket');
// console.log(buyBtnList);

const modalClose = document.querySelector('.modal-close');
const modalContainer = document.querySelector('.modal-container');

const showModal = function() {
    modal.classList.add('open');
}
const hideModal = function() {
    modal.classList.remove('open');
}
const buy = buyBtnList.forEach(function(buyBtn) {
    buyBtn.addEventListener('click', showModal);
})

modalClose.addEventListener('click', hideModal);
modal.addEventListener('click',hideModal);
modalContainer.addEventListener('click',function(e) {
    e.stopPropagation();
});
