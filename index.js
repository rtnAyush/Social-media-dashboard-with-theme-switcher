document.querySelector("#btn").addEventListener("click",function () {
    document.querySelector("body").classList.toggle("dark");
    document.querySelector("h3").classList.toggle("text-muted");
    document.querySelector("h6").classList.toggle("text-muted");
    for (let index = 0; index < document.querySelectorAll(".card").length; index++) {
        document.querySelectorAll(".card")[index].classList.toggle("card-dark");
    }
});