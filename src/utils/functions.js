export const getImageURL = (imageName) => {
    return new URL(`../assets/img/${imageName}`, import.meta.url).href;
  };