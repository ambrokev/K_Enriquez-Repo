let overEl = null;

const thumbEl = document.querySelector( ".thumb-over" );

const filenames = [ "stl1-thumb.png", "stl2-thumb.png", "stl3-thumb.png" ];
filenames.forEach( filename => { // preload images
    const img = new Image();
    img.src = filename;
} );

window.addEventListener( "mousemove", e => {
    if ( !overEl ) return;
    thumbEl.style.top = e.clientY + "px";
    thumbEl.style.left = e.clientX + "px";
} );

document.querySelectorAll( ".volume-link a" ).forEach( el => {
    el.addEventListener( "mouseenter", e => {
        overEl = e.currentTarget;
        document.body.className = "has-thumb " + e.currentTarget.className;
    } );
    el.addEventListener( "mouseleave", e => {
        if ( overEl === e.currentTarget ) overEl = null;
        document.body.className = "";
    } );
} );

