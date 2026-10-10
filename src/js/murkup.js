export const createImagesMarkup = (images) => {
  return images
    .map(
      (image) => `
          <li class="gallery-item">
            <img> src="${image.webformatURL}" alt="${image.views}"
            
            <p>Likes: ${image.likes}</p>
            <p>Views: ${image.views}</p>
            <p>Comments: ${image.comments}</p>
            <p>Downloads: ${image.downloads}</p>
          </li>
        `
    )
    .join("");
};
