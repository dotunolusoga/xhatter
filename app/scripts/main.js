'use script';

var fb = new Firebase('https://xhatter.firebaseio.com/');


    $('form').submit(function (evt) {
	  var $form = $(evt.target),
	      $nameInput = $form.find('input[name="username"]'),
	      $textInput = $form.find('input[name="chatBox"]'),
	      name   = $nameInput.val(),
	      text   = $textInput.val();
	  $textInput.val('');

	  fb.push({name: name, text: text});
	  evt.preventDefault();
});


fb.on('child_added', function (snap) {
  // fires onload once for every object in the collection,
  // and again for additional children being added
  var message = snap.val();
    addChatMessage(message.name, message.text);
});

function addChatMessage(name, text) {
  $('<div></div>')
    .text(text)
    .prepend(
      $('<strong></strong>').text(name + ': ')
    )
    .appendTo($('.output'));
}