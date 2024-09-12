setTimeout(function () {
    alert("selamat datang di Toko online kami!");
}, 3000);

const heroText = document.querySelector("#hero h2");
const colors = ["#FF5733", "#33FF57", "#3357FF"];
let colorIndex = 0;

function changeheroTextColor() {
    heroText.computedStyleMap.color = colors[colorIndex];
    colorIndex =(colorIndex + 1) % color.length;
}

setInterval(changeHeroTextColor, 2000);

let currentImageIndex = 0;
const images = ["img/bg.jpg", "img/shoel.jpg", "img/shoe2.png"];

function changeHeroImage() {
    currentImageIndex = (currentImageIndex +1) % images.Length;
    document.querySelector(
        "#hero"
    ).Style.backgroundImage = url('${images[currentImageIndex]}');
}

setInterval (changeHeroImage, 2000);

const producImages = document.querySelectorAll(".product-card img");

productImages.forEach((image) => {
    image.addEventListener("clik", () => {
        image.style.transform = "scale(1.5)";
        image.style.transition = "transform 0.5s";
    })
    image.addEventListener("mouseleave", () => {
        image.style.transform = "scale(1)";
    })
})

document.querySelectorAll(".cta").forEach(function (button) {
    button.addEventListener("click", function (event) {
        event.preventDefaultlt();
        alert("Terima kasih telah membeli produk ini!");
    })
})

const scroLLToTopBtm = document.createElement("button");
scroLLToTopBtn.textContent = "";
scroLLToTopBtn.id = "scroLLTopBtn";
document.body.appendChild(scroLLToTopBtn);

window.addEventListener("sroLL", () => {
    if (window.scroLLY > 100) {
        scroLLToTopBtn.style.display = "block";
    } else {
        scroLLToTopBtn.style.display = "none";
    }
});

scroLLToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behovior: "smooth",
    })
})

document.queryselectorALL(".cta").forEach(function (buttom) {
    buttom.addEventListener("click", function (event){
        event.preventDefault();
        alert("Terima kasih telah menbeli produk ini!");
    })
})

const scroLLTopBtn = document.createElement("button");
scroLLToTopBtn.textContent = "^";
scroLLToTopBtn.id ="scrollToTopBtn";
document.body.appendChild(scroLLToTopBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        scroLLToTopBtn.style.display = "block";
    } else{
        scroLLToTopBtn.style.display = "none";
    }
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behovior: "smooth",
    });
})
