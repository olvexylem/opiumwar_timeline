// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("questionBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



var inventoryBtn = document.querySelector( '.inventoryBtn' );
var inventory = document.getElementById( 'inventory' );

function initInventory( ) {


  inventory.innerHTML =
  'INVENTORY <br><br> <img src="images/inventorygrid.png">'


  inventory.classList.toggle( 'show' );
}

/* <div class="inventoryGrid"><div id="square"><div><div id="square"><div></div> */

inventoryBtn.addEventListener( 'click', initInventory );





var mapBtn = document.querySelector( '.mapBtn' );
var cantonMap = document.getElementById( 'cantonMap' );

function initCantonMap( ) {

  
  cantonMap.innerHTML =
  '<img src="images/CantonMap.png">'

  cantonMap.classList.toggle( 'show' );
}

mapBtn.addEventListener( 'click', initCantonMap );
