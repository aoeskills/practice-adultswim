const isNodeOnScreen = (node) => {
  if (node.offsetParent === null) return false;
  if (node.opacity === '0') return false;
  if (node.visibility === 'hidden') return false;
  if (node.getBoundingClientRect().bottom < 0) return false;
  if (node.getBoundingClientRect().top > document.body.offsetHeight) return false;

  return true;
};

const is = (node, what) => {
  switch (what) {
    case 'onScreen':
      return (isNodeOnScreen(node));
    default: return false;
  }
};

export default is;
