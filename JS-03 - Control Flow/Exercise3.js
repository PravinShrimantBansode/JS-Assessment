function businessHours(dayNumber, hourNumber) {
    if (hourNumber >= 9 && hourNumber <= 18) {
      console.log("It is business hours.");
      return true;
    } else {
      console.log("It is not business hours.");
      return false;
    }
  }
  
  
  function getDayNumber(janFirstDayNumber, yearDayNumber) {
    var dayNumber = (janFirstDayNumber + yearDayNumber) % 7;
    return dayNumber;
  }
  

  function isBusinessHours(yearDayNumber, hourNumber) {
    var janFirstDayNumber = 0;
    var dayNumber = getDayNumber(janFirstDayNumber, yearDayNumber);
    return businessHours(dayNumber, hourNumber);
  }
  
  
  console.log(isBusinessHours(100, 14)); 
  console.log(isBusinessHours(275, 20));