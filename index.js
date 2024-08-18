function validateAndCalculate() {
    // Get the input values
    var day = document.getElementById('day').value;
    var month = document.getElementById('month').value;
    var year = document.getElementById('year').value;

    // Error elements
    var dayError1 = document.getElementById('dayError1');
    var dayError2 = document.getElementById('dayError2');
    var monthError1 = document.getElementById('monthError1');
    var monthError2 = document.getElementById('monthError2');
    var yearError1 = document.getElementById('yearError1');
    var yearError2 = document.getElementById('yearError2');

    // Reset error display
    dayError1.style.display = 'none';
    dayError2.style.display = 'none';
    monthError1.style.display = 'none';
    monthError2.style.display = 'none';
    yearError1.style.display = 'none';
    yearError2.style.display = 'none';

    // Input validation
    var isValid = true;

    if (!day) {
      dayError1.style.display = 'block';
      isValid = false;
    } else if (day < 1 || day > 31) {
      dayError2.style.display = 'block';
      isValid = false;
    }

    if (!month) {
      monthError1.style.display = 'block';
      isValid = false;
    } else if (month < 1 || month > 12) {
      monthError2.style.display = 'block';
      isValid = false;
    }

    if (!year) {
      yearError1.style.display = 'block';
      isValid = false;
    } else if (year > 2024) {
      yearError2.style.display = 'block';
      isValid = false;
    }

    // Proceed with the calculation if all inputs are valid
    if (isValid) {
      calculateAge(day, month, year);
    }
  }

  function calculateAge(day, month, year) {
    // Get the current date
    var today = new Date();
    var currentYear = today.getFullYear();
    var currentMonth = today.getMonth() + 1; // Months are zero-based
    var currentDay = today.getDate();

    // Calculate differences
    var yearDifference = currentYear - year;
    var monthDifference = currentMonth - month;
    var dayDifference = currentDay - day;

    // Adjust for negative dayDifference
    if (dayDifference < 0) {
      var previousMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
      dayDifference += previousMonth;
      monthDifference -= 1;
    }

    // Adjust for negative monthDifference
    if (monthDifference < 0) {
      monthDifference += 12;
      yearDifference -= 1;
    }

    // Display the results
    document.getElementById('days').textContent = dayDifference;
    document.getElementById('months').textContent = monthDifference;
    document.getElementById('years').textContent = yearDifference;
  }