const fs = require('fs');

function writeToFile(data) {
	const filePath = 'path/to/widgetorder.json'; // if this is server side where does this live?

	fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
	console.log(`Data written to ${filePath}`);
}

module.exports = writeToFile;
