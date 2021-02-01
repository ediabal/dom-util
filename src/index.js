const hasClassInTree = (
  element,
  className,
  stopAtParentWithClassName = null
) => {
  while (element) {
    if (element.classList) {
      if (element.classList.contains(className)) return true;
      if (
        stopAtParentWithClassName &&
        element.classList.contains(stopAtParentWithClassName)
      )
        return false;
    }
    element = element.parentNode;
  }
  return false;
};

const hasAttributeInTree = (
  element,
  attribute,
  stopAtParentWithClassName = null
) => {
  while (element) {
    if (element.hasAttribute(attribute)) return true;
    if (
      stopAtParentWithClassName &&
      element.classList.contains(stopAtParentWithClassName)
    )
      return false;
    element = element.parentNode;
  }
  return false;
};

exports = {
  hasClassInTree,
  hasAttributeInTree,
};
