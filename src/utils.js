export const getStartDate = (dateRange) => {
  const today = new Date();
  let daysValue = today.getDate() - 30;

  console.log(dateRange);

  switch (dateRange) {
    case "1":
      daysValue = today.getDate() - 7;
      break;
    case "2":
      daysValue = today.getDate() - 14;
      break;
    default:
      break;
  }

  const startDate = new Date(today.getFullYear(), today.getMonth(), daysValue);

  return startDate;
};
