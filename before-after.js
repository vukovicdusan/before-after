document.addEventListener("DOMContentLoaded", function () {
  /* Before and after editing services */

  const editingSlider = document.getElementById("before-after-slider-edit");
  const stagingSlider = document.getElementById("before-after-slider-staging");
  const twilightSlider = document.getElementById(
    "before-after-slider-twilight"
  );

  const beforeAfterImagesEdit = document.querySelectorAll(
    ".before-after--img-edit"
  );
  const beforeAfterImagesStaging = document.querySelectorAll(
    ".before-after--img-staging"
  );
  const beforeAfterImagesTwilight = document.querySelectorAll(
    ".before-after--img-twilight"
  );

  const editingServices = document.querySelector(".editing-services-container");
  const virtualStaging = document.querySelector(".virtual-staging-container");
  const twilight = document.querySelector(".twilight-container");

  const sliderButtonEdit = document.querySelector(
    ".before-after--slider-button-edit"
  );
  const sliderButtonStaging = document.querySelector(
    ".before-after--slider-button-staging"
  );
  const sliderButtonTwilight = document.querySelector(
    ".before-after--slider-button-twilight"
  );

  const editingServicesFilters = document.querySelectorAll(
    ".editing-services-filters"
  );

  let beforeImageStaging;
  if (beforeAfterImagesStaging.length >= 2) {
    beforeImageStaging = beforeAfterImagesStaging[1];
  }

  let beforeImageEdit;
  if (beforeAfterImagesEdit.length >= 2) {
    beforeImageEdit = beforeAfterImagesEdit[1];
  }

  let beforeImageTwilight;
  if (beforeAfterImagesTwilight.length >= 2) {
    beforeImageTwilight = beforeAfterImagesTwilight[1];
  }

  editingSlider.addEventListener("input", (e) => {
    const sliderPos = e.target.value;

    beforeImageEdit.style.width = `${sliderPos}%`;

    sliderButtonEdit.style.left = `calc(${sliderPos}% - 18px)`;
  });

  stagingSlider.addEventListener("input", (e) => {
    const sliderPos = e.target.value;

    beforeImageStaging.style.width = `${sliderPos}%`;

    sliderButtonStaging.style.left = `calc(${sliderPos}% - 18px)`;
  });

  twilightSlider.addEventListener("input", (e) => {
    const sliderPos = e.target.value;

    beforeImageTwilight.style.width = `${sliderPos}%`;

    sliderButtonTwilight.style.left = `calc(${sliderPos}% - 18px)`;
  });
});
