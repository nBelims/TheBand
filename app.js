const modal = document.querySelector(".js-modal");

const buyBtnList = document.querySelectorAll(".js-buy-ticket");

// Modal logic
const modalClose = document.querySelector(".modal-close");
const modalContainer = document.querySelector(".modal-container");

const showModal = function () {
    modal.classList.add("open");
};
const hideModal = function () {
    modal.classList.add("hidden");
    setTimeout(function () {
        modal.classList.remove("open");
    }, 500);
    setTimeout(function() {
        modal.classList.remove("hidden");
    },500);
};
const buy = buyBtnList.forEach(function (buyBtn) {
    buyBtn.addEventListener("click", showModal);
});

modalClose.addEventListener("click", hideModal);
modal.addEventListener("click", hideModal);
modalContainer.addEventListener("click", function (e) {
    e.stopPropagation();
});

// Navigation mobile logic
const barBtn = document.querySelector(".bar-btn");
const header = document.querySelector("#header");
const headerHeight = header.clientHeight;

const showNavigation = function () {};
barBtn.onclick = function () {
    const isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
        header.style.height = "auto";
    } else {
        header.style.height = null;
    }
    barBtn.classList.toggle("active", isClosed);
};
// SubNav mobile logic
const navList = document.querySelectorAll("#nav li");
console.log(navList);
navList.forEach(function (nav) {
    nav.onclick = function (e) {
        if (this.id == "js-more") {
            e.preventDefault();
        } else {
            header.style.height = null;
        }
    };
});
