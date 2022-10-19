const elCont = document.querySelectorAll(".asset_count");

function random() {
    elCont[0].textContent = `${(Math.floor(Math.random() * 10))}`
    elCont[1].textContent = `${(Math.floor(Math.random() * 10000))}`
}
setInterval(function () {
    random();
}, 150)