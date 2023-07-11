function businessHours(dayNumber, hourNumber){
  if((dayNumber>=1)&&(dayNumber<=5)&&(hourNumber=>9)&&(hourNumber<=18))
  {
      return true;
  } else {
      return false;
  }
}

console.log(businessHours(4,10))     

