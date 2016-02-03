$(document).ready(function() {

	$('#testForm').on('submit', function(event) {
		event.preventDefault();

		var values = {};

		$.each($('#testForm').serializeArray(), function(i, field) {
			values[field.name] = field.value;
		});

		$('#testForm')[0].reset();

		console.log(values);
	});


	$('#HTML5Form').on('submit', function(event) {
		event.preventDefault();

		var values = {};

		$.each($('#HTML5Form').serializeArray(), function(i, field) {
			values[field.name] = field.value;
		});

		$('#HTML5Form')[0].reset();

		console.log(values);
	});



});