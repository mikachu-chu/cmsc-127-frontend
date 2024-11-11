const getYear = (year) => {
  const today = new Date();
  const yearNow = today.getFullYear();
  const currentYear = (yearNow - year) + 1;

  const suffixes = ["th", "st", "nd", "rd"];
  const value = currentYear % 100;
  return `${currentYear}${(suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0])} Year`;
}

export default getYear