const isValidNumber = (num) => {
    
    if (Number.isInteger(Number(num)) && num >= 1 && num <= 9) {
      return true;
    } else {
      return false;
    }
  };
  