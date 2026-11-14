import { sum } from './sum.mjs';

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const a = data.get('a');
  const b = data.get('b');
  document.querySelector('output').textContent = a === '' || b === '' ? 'Enter both numbers' : String(sum(a, b));
});

document.querySelector('form').addEventListener('reset', () => {
  document.querySelector('output').textContent = '';
});
