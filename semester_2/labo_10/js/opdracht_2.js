"use strict";

const adjustURL = (url) => {
    let newUrl = "../img/opdracht_2/" + url;
    return newUrl.replace(" ","%20");
};

const createGallery = () => {
    //main image
    let img = document.createElement("img");
    img.id = "mainPhoto";
    img.src = adjustURL(galleryData[0].urlFull);
    img.alt = "first photo";

    document.querySelector(".image-navigator").appendChild(img);

    //copyright
    let copyright = document.createElement("p");
    copyright.id = "copyright";
    copyright.innerHTML = (`<strong>Photos:</strong> ${galleryData[0].copyright}`);

    document.querySelector(".image-data").appendChild(copyright);

    //description
    let description = document.createElement("p");
    description.id = "description";
    description.innerHTML = galleryData[0].description;

    document.querySelector(".image-data").appendChild(description);

    //counter
    let counter = document.createElement("div");
    counter.id = "counter";
    counter.innerText = `1 of ${galleryData.length}`;

    document.getElementById("thumbnails").appendChild(counter);

    //thumbnails
    let thumbnailContainer = document.createElement("div");
    for (let i = 0; i < galleryData.length && i < 11; i++) {
        let newThumb = document.createElement("img");
        newThumb.classList.add("thumbnail");
        if (!i) newThumb.classList.add("activeThumbnail");
        newThumb.id = i;
        newThumb.src = adjustURL(galleryData[i].urlThumb);

        newThumb.addEventListener("click", selectThumbnail);

        thumbnailContainer.appendChild(newThumb);
    }

    document.getElementById("thumbnails").appendChild(thumbnailContainer);

    //navigation arrows
    document.getElementById("image-nav-left").addEventListener("click", navigateEvent);
    document.getElementById("image-nav-right").addEventListener("click", navigateEvent);
};

const selectThumbnail = (e) => {
    let thumb = e.target;
    document.querySelector(".activeThumbnail").classList.remove("activeThumbnail");
    thumb.classList.add("activeThumbnail");

    changeMainImage(parseInt(thumb.id));
};

const navigateEvent = (e) => {
    let current = document.querySelector(".activeThumbnail");
    let nextIdx = 0;

    switch (e.target.id) {
        case "image-nav-left":
            nextIdx = parseInt(current.id) - 1;
            break;
        case "image-nav-right":
            nextIdx = parseInt(current.id) + 1;
            break;
    }

    if (nextIdx < 0) nextIdx = galleryData.length - 1;
    if (nextIdx > galleryData - 1) nextIdx = 0;

    current.classList.remove("activeThumbnail");
    document.getElementById(nextIdx).classList.add("activeThumbnail");
    changeMainImage(nextIdx);
};

const changeMainImage = (idx) => {
    let img = document.getElementById("mainPhoto");
    img.src = adjustURL(galleryData[idx].urlFull);

    let copyright = document.getElementById("copyright");
    copyright.innerHTML = (`<strong>Photos:</strong> ${galleryData[idx].copyright}`);
    
    let description = document.getElementById("description");
    description.innerHTML = galleryData[idx].description;

    document.getElementById("counter").innerText = `${idx + 1} of ${galleryData.length}`;
};

const setup = () => {
    createGallery();
};



window.addEventListener("load", setup);