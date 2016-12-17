const { exec } = require('child_process');

function clearString(string){
	if (typeof string != 'string')
		throw new Error('Passed object has not only strings');

	return string.replace(/"/g, '').replace(/'/g, '');
};

function say(term = { message: 'I have nothing to say' }){
	var obj = {
		title: 'Mac notifier',
		subtitle: false,
		message: '',
	};

	if (typeof term === 'string')
		Object.assign(obj, { title: term });
	else {
		if(typeof term != 'object')
			throw new Error('Passed argument not object or string');

		Object.assign(obj, term);
	}

	var phrase = 'osascript -e \'display notification "'+clearString(obj.message)+'"';

	if(obj.title)
		phrase += ' with title "'+clearString(obj.title)+'"';

	if(obj.subtitle)
		phrase += ' subtitle "'+clearString(obj.subtitle)+'"';

	phrase += "'";

	exec(phrase);
};

module.exports = say;