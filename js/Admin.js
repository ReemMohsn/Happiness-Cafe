// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

//
let cards = document.querySelectorAll('.card');

// Iterate over each card element
cards.forEach(function(card) {
    // Get the icon element within the current card
    let icon = card.querySelector('.icon');

    // Get the original and alternate image sources
    let originalSrc = icon.src;
    let alternateSrc;

    // Set alternate source based on the original source
    if (originalSrc.includes('D1')) {
        alternateSrc = originalSrc.replace('D1', 'D2');
    } else if (originalSrc.includes('D3')) {
        alternateSrc = originalSrc.replace('D3', 'D4');
    } else if (originalSrc.includes('D5')) {
        alternateSrc = originalSrc.replace('D5', 'D6');
    }

    // Add event listeners for mouseenter and mouseleave
    card.addEventListener('mouseenter', function() {
        icon.src = alternateSrc;
    });

    card.addEventListener('mouseleave', function() {
        icon.src = originalSrc;
    });
});

//
let customerRows = document.querySelectorAll('.customerRow');

// Iterate over each customerRow element
customerRows.forEach(function(customerRow) {
    // Get the profile image element within the current customerRow
    let profile = customerRow.querySelector('.profile');

    // Get the original and alternate image sources
    let originalSrc = profile.src;
    let alternateSrc = originalSrc.replace('customer', 'customer1');

    // Add event listeners for mouseenter and mouseleave
    customerRow.addEventListener('mouseenter', function() {
        profile.src = alternateSrc;
    });

    customerRow.addEventListener('mouseleave', function() {
        profile.src = originalSrc;
    });
});
