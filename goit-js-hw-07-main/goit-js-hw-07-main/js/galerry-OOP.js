import { galleryItems } from "./gallery-items.js";
// Change code below this line

class Gallery {
  constructor(galleryRef, galleryItems) {
    this.galleryRef = galleryRef;
    this.galleryItems = galleryItems;
  }
  createMarcUp() {
    // console.log(this.galleryItems);
    return this.galleryCreateMurkup(this.galleryItems);
  }

  galleryCreateMurkup(arr) {
    return arr
      .map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
      })
      .join("");
  }
  onGalleryItemClick(evt) {
    evt.preventDefault();
    const imgData = evt.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src="${imgData}">`);

    if (evt.target.nodeName !== "IMG") {
      return;
    }

    instance.show();

    document.addEventListener(
      "keydown",
      (evt) => {
        if (evt.code !== "Escape") {
          return;
        }
        instance.close();
      },
      { once: true }
    );
  }
  addListeners() {
    this.galleryRef.addEventListener(
      "click",
      this.onGalleryItemClick.bind(this)
    );
  }

  insertToDom() {
    galleryRef.insertAdjacentHTML("beforeend", this.createMarcUp());
  }
  init() {
    this.addListeners();
    this.insertToDom();
  }
}
const galleryRef = document.querySelector(".gallery");

new Gallery(galleryRef, galleryItems).init();
