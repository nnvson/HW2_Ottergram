var DETAIL_IMAGE_SELECTOR = "[data-image-role=target]";
var DETAIL_TITLE_SELECTOR = "[data-image-role=title]";
var THUMBNAIL_LINK_SELECTOR = "[data-image-role=trigger]";
var currentThumb = 0;

function setDetails(imageUrl, titleText) {
  "use strict";
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute("src", imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  "use strict";
  return thumbnail.getAttribute("data-image-url");
}

function titleFromThumb(thumbnail) {
  "use strict";
  return thumbnail.getAttribute("data-image-title");
}

function setDetailsFromThumb(thumbnail) {
  "use strict";
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function getThumbnailsArray() {
  "use strict";
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function initializeEvents() {
  "use strict";
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(function(thumb, index) {
    thumb.addEventListener("click", function(event) {
      event.preventDefault();
      if (index == 5) { //previous clicked
        if (currentThumb <= 0) {
          currentThumb = 5;
        }
        thumb = thumbnails[--currentThumb];
      }
      else if (index == 6) { //next clicked
        if (currentThumb >= 4) {
          currentThumb = -1;
        }
        thumb = thumbnails[++currentThumb];
      }
      else { //neither previous nor clicked
        currentThumb = index;
        thumb = thumbnails[currentThumb];
      }
      setDetailsFromThumb(thumb);
    });
  });
}

initializeEvents();
