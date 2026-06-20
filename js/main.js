// Add a small "copy" control to every code snippet on the page
document.addEventListener('DOMContentLoaded', function () {
  var blocks = document.querySelectorAll('.entry pre');
  blocks.forEach(function (block) {
    var btn = document.createElement('button');
    btn.textContent = 'copy';
    btn.setAttribute('aria-label', 'Copy code snippet');
    btn.style.cssText =
      'font-family: var(--font-mono); font-size: 11px; color: var(--ink-faint);' +
      'background: transparent; border: 1px solid var(--ink-faint);' +
      'border-radius: 4px; padding: 3px 8px; cursor: pointer; margin-bottom: 8px;';
    btn.addEventListener('click', function () {
      navigator.clipboard.writeText(block.innerText).then(function () {
        btn.textContent = 'copied';
        setTimeout(function () { btn.textContent = 'copy'; }, 1500);
      });
    });
    block.parentNode.insertBefore(btn, block);
  });
});
