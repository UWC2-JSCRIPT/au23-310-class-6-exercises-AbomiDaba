// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>
$(document).ready(function() {
    const $aTag = $('<a>');
    $aTag.attr('id', 'cta');
    $aTag.text('Buy Now');
    $('main').append($aTag);
})
// Access (read) the data-color attribute of the <img>,
// log to the console
$(document).ready(function() {
    const $img = $($('img')[0]);
    const $imgColor = $img.attr('data-color');
    console.log($imgColor);
})
// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"
$(document).ready(function() {
    const $thirdLi = $($('li')[2]);
    $thirdLi.addClass('highlight');
})
// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
$(document).ready(function() {
    const $pTag = $('p');
    $pTag.remove();
})
// Create a listener on the "Buy Now!" link that responds to a click event.
// When clicked, the the "Buy Now!" link should be removed
// and replaced with text that says "Added to cart"
$(document).ready(function() {
    const $link = $("#cta");
    $link.on('click', function(e) {
        const $this = $(this);
        this.remove();
        const $pText = $('<p>');
        $pText.text('Added to cart');
        $('main').append($pText);
    })
})
