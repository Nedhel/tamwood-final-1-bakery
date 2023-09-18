//This two funcions are for change the images when you have the cursor over each image in the products page
function moveIn(id) {
    let bread = document.getElementById(id);
    switch (id) {
        case "concha":
            bread.setAttribute("src", "../imgs/concha2.jpg");
            break;
        case "croissant":
            bread.setAttribute("src", "../imgs/croissant2.jpg");
            break;
        case "squaredark":
            bread.setAttribute("src", "../imgs/squaredark2.jpg");
            break;
        case "cheescake":
            bread.setAttribute("src", "../imgs/capuchino2.jpg");
            break;
        case "cinnamon":
            bread.setAttribute("src", "../imgs/cinnamonroll2.jpg");
            break;
    }
}
function moveOut(id) {
    let bread = document.getElementById(id);
    switch (id) {
        case "concha":
            bread.setAttribute("src", "../imgs/concha1.jpg");
            break;
        case "croissant":
            bread.setAttribute("src", "../imgs/croissant1.jpg");
            break;
        case "squaredark":
            bread.setAttribute("src", "../imgs/squaredark1.jpg");
            break;
        case "cheescake":
            bread.setAttribute("src", "../imgs/capuchino1.jpg");
            break;
        case "cinnamon":
            bread.setAttribute("src", "../imgs/cinnamonroll1.jpg");
            break;
    }
}

window.addEventListener("load", () => {
    let arrayProducts = document.getElementsByClassName("product");
    for (const iterator of arrayProducts) {
        iterator.children[0].addEventListener("mouseenter", () => {
            moveIn(iterator.children[0].id);
        });
        iterator.children[0].addEventListener("mouseleave", () => {
            moveOut(iterator.children[0].id);
        });
    }
});
