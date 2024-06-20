  // Add event listeners to the radio buttons
  var sizeRadios = document.querySelectorAll('input[name="size"]');
  var sugarRadios = document.querySelectorAll('input[name="sugar"]');
  var milkRadios = document.querySelectorAll('input[name="milk"]');

  sizeRadios.forEach(function(radio) {
    radio.addEventListener('change', updatePrice);
  });

  sugarRadios.forEach(function(radio) {
    radio.addEventListener('change', updatePrice);
  });

  milkRadios.forEach(function(radio) {
    radio.addEventListener('change', updatePrice);
  });

  // Function to update the price based on selected choices
  function updatePrice() {
    // Get the selected values
    var size = document.querySelector('input[name="size"]:checked').value;
    var sugar = document.querySelector('input[name="sugar"]:checked').value;
    var milk = document.querySelector('input[name="milk"]:checked').value;

    // Check if all options are selected
    if (!size || !sugar || !milk) {
      return; // Do not update the price if any option is missing
    }

    // Define the price for each choice
    var sizePrice = {
      "s": 3,
      "m": 4,
      "l": 5
    };

    var sugarPrice = {
      "a lot": 1,
      "a little": 0.55,
      "no sugar": 0
    };

    var milkPrice = {
      "with": 3,
      "without": 0
    };

    // Get the base price
    var basePriceElement = document.querySelector('.price');
    var basePriceText = basePriceElement.textContent.trim();
    var basePrice = parseFloat(basePriceText.replace('$', ''));

    // Calculate the total price
    var totalPrice = basePrice + sizePrice[size] + sugarPrice[sugar] + milkPrice[milk];

    // Update the price display
    basePriceElement.textContent = "$" + totalPrice.toFixed(2);
  }
