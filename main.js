const menuButton = document.querySelector('.menu-button');
const menuPanel = document.querySelector('.menu-panel');
const motionButton = document.querySelector('.motion-toggle');
const hero = document.querySelector('.hero');

function setMenuOpen(open) {
  menuPanel.hidden = !open;
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
}

menuButton.addEventListener('click', () => {
  setMenuOpen(menuPanel.hidden);
});

menuPanel.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenuOpen(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !menuPanel.hidden) {
    setMenuOpen(false);
    menuButton.focus();
  }
});

document.addEventListener('click', (event) => {
  if (!menuPanel.hidden && !menuPanel.contains(event.target) && !menuButton.contains(event.target)) {
    setMenuOpen(false);
  }
});

motionButton.addEventListener('click', () => {
  const paused = hero.classList.toggle('motion-paused');
  motionButton.setAttribute('aria-pressed', String(paused));
  motionButton.setAttribute('aria-label', paused ? '花のアニメーションを再開' : '花のアニメーションを停止');
  motionButton.innerHTML = paused ? 'Play motion <span aria-hidden="true">▶</span>' : 'Pause motion <span aria-hidden="true">Ⅱ</span>';
});
