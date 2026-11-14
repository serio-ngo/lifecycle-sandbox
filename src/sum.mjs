export const sum = (a, b) => (Number(a) + Number(b)).toFixed(2).replace(/^-(?=0\.00$)/, '');
