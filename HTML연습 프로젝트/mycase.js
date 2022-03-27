const toogleBTN = document.querySelector("List1BTN");
const togleList = document.querySelector(".LSNlist");

toogleBTN.addEventListener('click', () => {
    togleList.classList.toogle("active");
});