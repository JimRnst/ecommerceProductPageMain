const menu = document.querySelector("#cart img");
const changeImages = document.querySelectorAll(".images");
const changeImagesFullScreen = document.querySelectorAll(".images-fullscreen");
const img = document.querySelector("#photo-view img");
const imgFullScreen = document.querySelector("#photo-view-fullscreen img");
const showMenu = document.querySelector("header");
const openColoseMenu = document.querySelector("header #menu");
const closeFullScreen = document.querySelector("#close-menu");
const addToCart = document.querySelector("#add-cart button");
const removeToCart = document.querySelector("#delete");
const checkout = document.querySelector("#checkout")

const changeImagesMobile = ["images/image-product-1.jpg", "images/image-product-2.jpg", "images/image-product-3.jpg", "images/image-product-4.jpg"];
let counterForImage = 0;

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const num = document.querySelector("#value-item");
let counterForItems = 0;


document.addEventListener("DOMContentLoaded", () => {
    let content = document.querySelector("body");
    // border and opacity
    document.querySelector("#product1").style.border = "4px solid hsl(26, 100%, 55%)";
    document.querySelector("#op1").style.opacity = "0.3";
    // active functions
    change(content);
    changeFullScreen(content);

})

// ___CART___
// dropdown
menu.addEventListener("click", () => {
    document.querySelector("#cart").classList.toggle("dropdown");
});

// items plus or minus

plus.addEventListener("click", () => {
    counterForItems++;
    num.innerText = counterForItems;
    console.log(counterForItems)
});

minus.addEventListener("click", () => {
    if(counterForItems > 0){
        counterForItems--;
        num.innerText = counterForItems;
    }
});

// add items
addToCart.addEventListener("click", () => {
    if(counterForItems > 0){
        // agregar div al carrito
        document.querySelector("#card_visibkle").classList.add("addToCart");
        // add items to cart
        document.querySelector("#cart_items #change").innerHTML = counterForItems ;
        // calc items
        document.querySelector("#cart_items #total").innerHTML = `<b>$${counterForItems * 125}.00</b>`;
        // iconItems
        document.querySelector("#cart").classList.add("counterItems");
        document.querySelector("#couter-items").innerHTML = counterForItems
    }
});
// remove items
removeToCart.addEventListener("click", () => {
    document.querySelector("#card_visibkle").classList.remove("addToCart");
    document.querySelector("#cart").classList.remove("counterItems");
})

// checkout
checkout.addEventListener("click", () => {
    window.location.reload();
});


// ___CHANGE IMAGES___
function clickBorder(a, bd1, bd2, bd3){
    document.querySelector(`#${a}`).style.border = "5px solid hsl(26, 100%, 55%)";
    document.querySelector(`#${bd1}`).style.border = "4px solid transparent";
    document.querySelector(`#${bd2}`).style.border = "4px solid transparent";
    document.querySelector(`#${bd3}`).style.border = "4px solid transparent";
}

function clickOpacity (a, objt1, objt2, objt3){
    document.querySelector(`#${a}`).style.opacity = "0.3";
    document.querySelector(`#${objt1}`).style.opacity = "1";
    document.querySelector(`#${objt2}`).style.opacity = "1";
    document.querySelector(`#${objt3}`).style.opacity = "1";
}

function clickOpacityForFullScreen (a, objt1, objt2, objt3){
    document.querySelector(`#${a}`).style.opacity = "0.7";
    document.querySelector(`#${objt1}`).style.opacity = "0";
    document.querySelector(`#${objt2}`).style.opacity = "0";
    document.querySelector(`#${objt3}`).style.opacity = "0";
}

changeImages.forEach( product =>{
    product.addEventListener("click", e => {
        const id = e.target.getAttribute('id');
        // console.log(id)

        switch (id){
            case "product1":
                img.setAttribute("src", "images/image-product-1.jpg");
                clickBorder("product1", "product2", "product3", "product4");
                clickOpacity("op1", "op2", "op3", "op4");
            break;
            case "product2":
                img.setAttribute("src", "images/image-product-2.jpg");
                clickBorder("product2", "product1", "product3", "product4");
                clickOpacity("op2", "op1", "op3", "op4");
            break;
            case "product3":
                img.setAttribute("src", "images/image-product-3.jpg");
                clickBorder("product3", "product1", "product2", "product4");
                clickOpacity("op3", "op1", "op2", "op4");
            break;
            case "product4":
                img.setAttribute("src", "images/image-product-4.jpg");
                clickBorder("product4", "product1", "product2", "product3");
                clickOpacity("op4", "op1", "op2", "op3");
            break;
        }
    });
});

// ___FULLSCREEN___
// open FULLSCREEN
img.addEventListener("click", () => {
    document.querySelector("body").classList.add("full-screen");
});
// close FULLSCREEN
closeFullScreen.addEventListener("click", () => {
    document.querySelector("body").classList.remove("full-screen")
});

// change images whit click FULLSCREEN
changeImagesFullScreen.forEach( product =>{
    product.addEventListener("click", e => {
        const id2 = e.target.getAttribute('id');
        // console.log(id)

        switch (id2){
            case "product1-fullscreen":
                imgFullScreen.setAttribute("src", "images/image-product-1.jpg");
                clickBorder("product1-fullscreen", "product2-fullscreen", "product3-fullscreen", "product4-fullscreen");
                clickOpacityForFullScreen("product1-fullscreen", "product2-fullscreen", "product3-fullscreen", "product4-fullscreen");
                counterForImage = 0;
            break;
            case "product2-fullscreen":
                imgFullScreen.setAttribute("src", "images/image-product-2.jpg");
                clickBorder("product2-fullscreen", "product1-fullscreen", "product3-fullscreen", "product4-fullscreen");
                clickOpacityForFullScreen("product2-fullscreen", "product1-fullscreen", "product3-fullscreen", "product4-fullscreen");
                counterForImage = 1;
            break;
            case "product3-fullscreen":
                imgFullScreen.setAttribute("src", "images/image-product-3.jpg");
                clickBorder("product3-fullscreen", "product1-fullscreen", "product2-fullscreen", "product4-fullscreen");
                clickOpacityForFullScreen("product3-fullscreen", "product1-fullscreen", "product2-fullscreen", "product4-fullscreen");
                counterForImage = 2;
            break;
            case "product4-fullscreen":
                imgFullScreen.setAttribute("src", "images/image-product-4.jpg");
                clickBorder("product4-fullscreen", "product1-fullscreen", "product2-fullscreen", "product3-fullscreen");
                clickOpacityForFullScreen("product4-fullscreen", "product1-fullscreen", "product2-fullscreen", "product3-fullscreen");
                counterForImage = 3;
            break;
        }
    })
});


// change images whit arrows FULLSCREEN
function changeFullScreen(container){
    container.addEventListener("click", (e) => {
        let btnPreview2 = document.querySelector("#preview-fullscreen img");
        let btnNext2 = document.querySelector("#next-fullscreen img");

        if(e.target === btnPreview2){
            if(counterForImage > 0){
                imgFullScreen.src = changeImagesMobile[counterForImage -1];
                counterForImage--;
            } else {
                imgFullScreen.src = changeImagesMobile[changeImagesMobile.length - 1];
                counterForImage = changeImagesMobile.length - 1;
            };
        } else if (e.target === btnNext2){
            if(counterForImage < changeImages.length - 1){
                imgFullScreen.src = changeImagesMobile[counterForImage +1];
                counterForImage++;
            } else {
                imgFullScreen.src = changeImagesMobile[0];
                counterForImage = 0
            };
        };

        if(counterForImage === 0){
            clickBorder("product1-fullscreen", "product2-fullscreen", "product3-fullscreen", "product4-fullscreen");
            clickOpacityForFullScreen("product1-fullscreen", "product2-fullscreen", "product3-fullscreen", "product4-fullscreen");
        } else if (counterForImage === 1){
            clickBorder("product2-fullscreen", "product1-fullscreen", "product3-fullscreen", "product4-fullscreen");
            clickOpacityForFullScreen("product2-fullscreen", "product1-fullscreen", "product3-fullscreen", "product4-fullscreen");
        } else if (counterForImage === 2){
            clickBorder("product3-fullscreen", "product1-fullscreen", "product2-fullscreen", "product4-fullscreen");
            clickOpacityForFullScreen("product3-fullscreen", "product1-fullscreen", "product2-fullscreen", "product4-fullscreen");
        } else if (counterForImage === 3){
            clickBorder("product4-fullscreen", "product1-fullscreen", "product2-fullscreen", "product3-fullscreen");
            clickOpacityForFullScreen("product4-fullscreen", "product1-fullscreen", "product2-fullscreen", "product3-fullscreen");
        }
    });
};

// ___MOBILE___
// dropdownmenu mobile
openColoseMenu.addEventListener("click", () => {
    openColoseMenu.classList.toggle("dropdown-mobile");
    showMenu.classList.toggle("dropdown-mobile");
})

// change images whit click MOBILE
function change(container){
    container.addEventListener("click", (e) => {
        let btnPreview = document.querySelector("#preview img");
        let btnNext = document.querySelector("#next img");

        if(e.target === btnPreview){
            if(counterForImage > 0){
                img.src = changeImagesMobile[counterForImage -1];
                counterForImage--;
            } else {
                img.src = changeImagesMobile[changeImagesMobile.length - 1];
                counterForImage = changeImagesMobile.length - 1;
            };
        } else if (e.target === btnNext){
            if(counterForImage < changeImages.length - 1){
                img.src = changeImagesMobile[counterForImage +1];
                counterForImage++;
            } else {
                img.src = changeImagesMobile[0];
                counterForImage = 0
            };
        };
    });
};




