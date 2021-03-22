const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    for (const node of mutation.addedNodes) {
      const isElementNode = node.nodeType === Node.ELEMENT_NODE;
      if (isElementNode && node.matches('.skip-credits')) {
        node.firstChild.click();
      }
      if (isElementNode && node.matches('.main-hitzone-element-container')) {
        const nextEpBtn = node.querySelector('[data-uia*="next-episode"]');
        nextEpBtn.dispatchEvent(
          new KeyboardEvent('keydown', {
            bubbles: true,
            cancelable: true,
            keyCode: 13,
          })
        );
      }
    }
  }
});

observer.observe(document.body, { childList: true, subtree: true });
