function getDayNumber(janFirstDayNumber, yearDayNumber) {
  if (janFirstDayNumber < 0 || janFirstDayNumber > 6 || yearDayNumber < 0 || yearDayNumber > 365) {
    console.log("El dia o el año es invalido.");
    return null;
  }

  const dayNumber = (janFirstDayNumber + yearDayNumber) % 7;
  return dayNumber;
}
const dayNumber = getDayNumber(3, 60); 
console.log("Día de la semana", dayNumber);

