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




var launchBtn = document.querySelector( '.launchBtn' );
var launchBomb = document.getElementById( 'launch-bomb' );

function initLaunchBomb( ) {

  
  launchBomb.innerHTML =
  '<img src="images/redbomb.gif">'

  launchBomb.classList.toggle( 'show' );

  setTimeout( function( ) {
    launchBomb.innerHTML = 
    '<h2 style="margin-top: 30px;"> [BRITAIN WINS]</h2> <h2 style="margin-top: 40vh;">F A T A L I T Y</h2> <a style="text-decoration: none; color: white; border:1px white solid; padding:0.3rem; bottom:1.2rem; right:1.2rem; position:absolute" href="scroll_timeline3.html">RETURN</a>';
    launchBomb.style.background = 'red';
    launchBomb.style.color = 'white';

    // // 'K.O.' LEAVES SCREEN
    // setTimeout( function( ) {
    //     launchBomb.style.display = 'none';
    // }, 3000 );

  }, 1000 );
}

launchBtn.addEventListener( 'click', initLaunchBomb );