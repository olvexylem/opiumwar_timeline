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

var popup = document.querySelector( '.map .popup' );
var popupTexts = document.querySelectorAll( '.map .text' );
var markers = document.querySelectorAll( '.map .marker' );

markers.forEach( function( marker, markerIndex ) {
    marker.addEventListener( 'mouseenter', function( ) {
        popup.classList.remove( 'hidden' );

        popupTexts.forEach( function( popupText, textIndex ) {
            if ( markerIndex == textIndex ) {
                popupText.classList.remove( 'hidden' );
            } else {
                popupText.classList.add( 'hidden' );
            }

        } );
    } );
    marker.addEventListener( 'mouseleave', function( ) {
        popup.classList.add( 'hidden' );

    } );

} )

var pipepopup = document.querySelector( '.opium-selection .pipemenu' );
var popupStats = document.querySelectorAll( '.opium-selection .stats' );
var pipemarkers = document.querySelectorAll( '.opium-selection .pipemarker' );

var pipeBox = document.querySelector( '.pipe-box' );
var pipeboxPending = document.getElementById( 'pipebox-pending' );

function initPipeboxPending( ) {
  pipeboxPending.style.display = 'block';
  pipeboxPending.style.background = 'yellow';
  pipeboxPending.innerHTML =
  'PENDING... <br> <img style="width:15vw; height:auto; margin-top: 20px; margin-bottom: 20px;" src="images/pending.png"> <br> ADVOCATES FOR THE LEGALIZATION OF OPIUM ARE ON THE VERGE OF SUCCESS.';



  setTimeout( function( ) {
    pipeboxPending.innerHTML = 
    'ERROR <br> <img style="width:21vw; height:auto; margin-top: 20px; margin-bottom: 20px; padding-left:0.5rem;" src="images/error.png"> <br> <a style="text-decoration: none; color: black; border:1px black solid; padding:0.6rem; bottom:1.2rem; right:1.2rem; position:absolute" href="scroll_timeline2.html">OK</a>';
    pipeboxPending.style.background = 'red';

    // 'ERROR' LEAVES SCREEN
    // setTimeout( function( ) {
    //   pipeboxPending.style.display = 'none';
    // }, 1000 );
  }, 5000 );

}

pipeBox.addEventListener( 'click', initPipeboxPending );


// 