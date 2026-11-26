export function appendToBody(tag, content, count) {
  for (let i = 0; i < count; i++) {
    document.body.innerHTML += `<${tag}>${content}</${tag}>`;
  }
}

export function generateTree(childrenCount, level) {
  let html = '';

  for (let currentLevel = level; currentLevel >= 1; currentLevel--) {
    let childrenHtml = '';

    if (currentLevel < level) {
      for (let i = 0; i < childrenCount; i++) {
        childrenHtml += html;
      }
    }

    html = `<div class="item_${currentLevel}">${childrenHtml}</div>`;
  }

  const container = document.createElement('div');
  container.innerHTML = html;
  return container.firstElementChild;
}

export function replaceNodes() {
  const tree = generateTree(2, 3);
  const items = tree.querySelectorAll('.item_2');

  items.forEach(function(item) {
    const section = document.createElement('section');
    section.className = item.className;
    section.innerHTML = item.innerHTML;
    item.parentNode.replaceChild(section, item);
  });

  return tree;
}
