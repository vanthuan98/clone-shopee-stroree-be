export const convertNumber = (number: number) => {
  const pattern = /(\d)(?=(\d{3})+(?!\d))/g;
  const repl = '$1.';
  const string = String(number);
  return string.replace(pattern, repl);
};
