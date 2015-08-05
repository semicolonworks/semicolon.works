module.exports = {
	dev: {
		options: {
			outputStyle: 'expanded'
		},
		files: {
			'<%= buildPath %>/css/main.css': 'scss/main.scss'
		}
	},
	prod: {
		options: {
			outputStyle: 'compressed'
		},
		files: {
			'<%= buildPath %>/css/main.css': 'scss/main.scss'
		}
	}
};