export const SizeOfElement = (element) => {
  if (element) {
    let { width, height, top, right, bottom, left } =
      element.getBoundingClientRect();
    let parentHeight = document.body.offsetHeight;
    let parentWidth = document.body.offsetWidth;
    let parentFullHeight = document.body.scrollHeight;
    let parentFullWidth = document.body.scrollWidth;

    return {
      width: width,
      height: height,
      elementTop: top,
      elementBottom: parentHeight - bottom,
      elementRight: parentWidth - right,
      elementLeft: left,
      screenHeight: parentHeight,
      screenWidth: parentWidth,
      htmlWidth: parentFullWidth,
      htmlHeight: parentFullHeight,
    };
  }
};
