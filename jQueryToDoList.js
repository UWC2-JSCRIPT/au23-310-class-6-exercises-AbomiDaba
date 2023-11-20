/**
 * Toggles "done" class on <li> element
 */
$(document).ready(function() {
  const $ul = $('ul');
  $ul.on('click','li', function(e) {
    const $this = $(this);
    $this.toggleClass('done');
  })
/**
 * Delete element when delete link clicked
 */
  const $link = $('.delete');
  $ul.on('click','.delete', function(e) {
    const $this = $(this);
    $this.parent().fadeOut(1000);
    // $this.parent().remove();
  })
/**
 * Adds new list item to <ul>
 */
  const addListItem = function(e) {
    e.preventDefault();
    const $text = $('input').val();
    // rest here...
    const $newLi = $('<li>');
    const $span = $('<span>');
    $span.text($text);
    $newLi.append($span);
    const $deleteButton = $('<a>');
    $deleteButton.addClass('delete');
    $deleteButton.text('Delete')
    $newLi.append($deleteButton);

    $('ul').append($newLi);
  };
  
  // add listener for add
  const $addButton = $('.add-item');
  $addButton.on('click', function(e) {
    addListItem(e);
  })
})
