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