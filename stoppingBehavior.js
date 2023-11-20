// Do not change
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});
$(document).ready(function(){
  // When clicked, "More info" link should alert "Here's some info"
  // instead of going to a new webpage
  const $aTag = $('#more-info');
  $aTag.on('click', function(e) {
    e.preventDefault();
    alert("Here's some info")
  })
  // When the bark button is clicked, should alert "Bow wow!"
  // Should *not* alert "meow"
  const $dogButton = $('#dog');
  $dogButton.on('click', function(e) {
    alert('Bow wow');
    e.stopPropagation();
  })
})
