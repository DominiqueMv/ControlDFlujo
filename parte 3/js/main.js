/* Se adjuntaron los 2 ejercicios previos para que funcionase el tercer ejercicio,
ya que está llamando funciones establecidas previamente. */

//ejercicio1
function businessHours(dayNumber, hourNumber){
  if((dayNumber>=1)&&(dayNumber<=5)&&(hourNumber=>9)&&(hourNumber<=18))
  {
      return true;
  } else {
      return false;
  }
} 
//ejercicio1

//ejercicio2
function getDayNumber(janFirstDayNumber, yearDayNumber) {
  if (janFirstDayNumber < 0 || janFirstDayNumber > 6 || yearDayNumber < 0 || yearDayNumber > 365) {
    return null;
  }

  const dayNumber = (janFirstDayNumber + yearDayNumber) % 7;
  return dayNumber;
}
//ejercicio2


//ejercicio3
function isBusinessHours(yearDayNumber, hourNumber) {
  const dayNumber = getDayNumber(0, yearDayNumber);
  return businessHours(dayNumber, hourNumber);
}

const chamba = isBusinessHours(72, 11);
console.log("¿Es hora de trabajar?", chamba);
//ejercicio3