module.exports = {
	options : {
		baseDir: 'contents',
		config : 'config.json',
		markdown: {
			breaks: true,
			smartLists: true,
			smartypants: true,
			langPrefix: 'language-'
		},
		wordpress: {
			apiRoot: 'http://wp.tridnguyen.com/wp-json',
			contents: [{
				postType: 'posts',
				folder: 'articles',
				template: 'article.hbs'
			}]
		},
		archives: {
			articles: {
				postsPerPage: 4,
				title: 'Articles',
				template: 'articles.hbs'
			}
		}
	},
	all: {
		src: 'contents/**/*.{json,md}',
		dest: 'build/data.json'
	}
};
