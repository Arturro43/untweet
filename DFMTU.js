function autoUnlike() {
  for (const d of document.querySelectorAll('div[data-testid="unlike"]')) {
    d.click();
  }
  window.scrollTo(0, document.body.scrollHeight);
  requestAnimationFrame(autoUnlike);
}

autoUnlike();