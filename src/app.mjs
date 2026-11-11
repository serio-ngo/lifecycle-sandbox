import { sum } from './sum.mjs';

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  document.querySelector('output').textContent = String(sum(data.get('a'), data.get('b')));
});

document.querySelector('form').addEventListener('reset', () => {
  document.querySelector('output').textContent = '';
});
