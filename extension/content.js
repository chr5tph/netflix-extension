const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    for (const node of mutation.addedNodes) {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const skipBtn = node.querySelector('.watch-video--skip-content');
        if (skipBtn && skipBtn.firstChild) {
          skipBtn.firstChild.click();
        }
        const nextEpBtn = node.querySelector('[data-uia*="next-episode"]');
        if (nextEpBtn) {
          nextEpBtn.click();
        }
      }
    }
  }
});

observer.observe(document.body, {
  attributes: true,
  childList: true,
  subtree: true,
});
