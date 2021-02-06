function toggleDropDown() {
  var x = document.getElementById('navtop');
  if (x.className === 'topnav' ) {
    x.className += ' responsive';
  }
  else {
    x.className = 'topnav';
  }
}
