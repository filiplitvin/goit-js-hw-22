import "./murkup.js";
import "./pixbay.js";

import { fetchImages } from "../js/pixbay.js";
import { createImagesMarkup } from "../js/murkup.js";

const gallery = document.querySelector(".gallery");
const loadBtn = document.querySelector(".load-more");

let page = 1;
const perPage = 12;

const getImages = (params) => {
  fetchImages(params)
    .then((data) => {
      const markup = createImagesMarkup(data.hits);

      gallery.insertAdjacentHTML("beforeend", markup);

      if (data.hits.length < perPage) {
        loadBtn.disabled = true;
        loadBtn.textContent = "Зображень більше нема";
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

let params = new URLSearchParams({
  editors_choice: true,
  image_type: "photo",
  page: page,
  per_page: perPage,
});

getImages(params);

const handleLoadMore = () => {
  page += 1;

  params = new URLSearchParams({
    editors_choice: true,
    image_type: "photo",
    page: page,
    per_page: perPage,
  });

  getImages(params);
};

loadBtn.addEventListener("click", handleLoadMore);
