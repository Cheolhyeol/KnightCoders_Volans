const login_btn = document.querySelector("#login-btn");
const cadastro_btn = document.querySelector("#cadastro-btn");
const container = document.querySelector(".container");
const login_btn2 = document.querySelector("#login-btn2");
const cadastro_btn2 = document.querySelector("#cadastro-btn2");

cadastro_btn.addEventListener("click", () => {
    container.classList.add("modo-de-login");
});

login_btn.addEventListener("click", () => {
    container.classList.remove("modo-de-login");
});

cadastro_btn2.addEventListener("click", () => {
    container.classList.add("modo-de-login2");
});
login_btn2.addEventListener("click", () => {
    container.classList.remove("modo-de-login2");
});