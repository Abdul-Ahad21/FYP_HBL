var dropdowns = document.getElementsByClassName("dropdown");
var i;

for (i = 0; i < dropdowns.length; i++) {
  dropdowns[i].addEventListener('click', function() {
    // This will toggle the display of the dropdown-content
    this.querySelector('.dropdown-content').classList.toggle("show");
  });
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function checkSecurityKey() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var designation = document.getElementById('designation').value;
    var city = document.getElementById('city').value;
    var location = document.getElementById('location').value;
    var securityKey = document.getElementById('securityKey').value;
    if(securityKey === '1234567') {
        alert('Admin Added with Following Credentials: \n' +
              'Name: ' + firstName + ' ' + lastName + '\n' +
              'Designation: ' + designation + '\n' +
              'City: ' + city + '\n' +
              'Location: ' + location);
    } else {
        alert('Invalid credentials, admin can\'t be added');
    }
    // Clear the form
    var form = document.getElementById('myForm');
    form.reset();
    // Prevent form submission
    return false;
}