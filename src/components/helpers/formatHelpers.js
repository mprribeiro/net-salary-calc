const formatter = Intl.NumberFormat('pt-Br', {
  style: 'currency',
  currency: 'BRL',
});

function formatNumber(value) {
  return formatter.format(value);
}

export { formatNumber };
