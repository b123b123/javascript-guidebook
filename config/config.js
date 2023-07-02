const config = {
	mode: "site",
	title: "JavaScript Guidebook",
	description: "JavaScript 完全知识体系",
	base: "./",
	publicPath: "./",
	favicon: "./favicon.ico",
	logo: "http://img.mrsingsing.com/javascript-guidebook-favicon.png",
	hash: true,
	exportStatic: {},
	navs: [
		null,
		{
			title: "Github",
			path: "./javascript-juidebook.png",
		},
	],
	extraBabelPlugins: [
		[
			"import",
			{
				libraryName: "antd",
				libraryDirectory: "es",
				style: "css",
			},
		],
	],
};

if (process.env.NODE_ENV !== "development") {
	config.ssr = {};
}

export default config;
