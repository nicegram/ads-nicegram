document.addEventListener('DOMContentLoaded', () => {
  const adsgram = document.getElementById('adsgram');
  const placeholder = document.getElementById('ad-placeholder');

  function showPlaceholder() {
    adsgram.style.display = 'none';
    placeholder.style.display = 'flex';
  }

  adsgram.addEventListener('onError', showPlaceholder);
  adsgram.addEventListener('onBannerNotFound', showPlaceholder);
  adsgram.addEventListener('onTooLongSession', showPlaceholder);
});
