(function () {
  const PROPERTIES = {
    display: 'block',
    visibility: 'hidden',
    position: 'absolute',
  }

  window.getDimension = (element) => {
    const previous = {}
    for (let key in PROPERTIES) {
      previous[key] = element.style[key]
      element.style[key] = PROPERTIES[key]
    }

    const dimension = {
      width: element.offsetWidth,
      height: element.offsetHeight,
    }

    for (let key in PROPERTIES) {
      element.style[key] = previous[key]
    }

    return dimension
  }
})()

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const el = document.getElementById('someId')

    const dimension = window.getDimension(el)
    console.log('dimension.width :', dimension.width);
    console.log('dimension.height :', dimension.height);
  }, 1000)
})