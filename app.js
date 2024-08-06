const btn = document.getElementById("btn");
let hex = document.getElementById("hexcode");



function randomcolor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0;i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
btn.addEventListener("click", () => {
document.body.style.backgroundcolor = randomcolor();
hex.innerHTML = randomcolor();
});