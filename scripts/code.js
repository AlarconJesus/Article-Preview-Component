var share = document.querySelector('.article-body-footer-shareBtn');
var shareBox = document.querySelector('.article-body-footer-share');
share.addEventListener('click', () => {
  shareBox.classList.toggle('active');
});