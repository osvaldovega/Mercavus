
const getYearList = ()=> {
  const years = [];
  const actualYear = new Date().getFullYear();
  for (let year = actualYear; year >= actualYear - 100; year--) {
    years.push(year);
  }
  return years;
}

const severity = () => [
  'Low',
  'Medium',
  'High',
  'Very-High',
];

export default {
  getYearList,
  severity,
};
