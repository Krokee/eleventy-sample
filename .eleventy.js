// Eleventy config file

module.exports = function (eleventyConfig) {

	eleventyConfig.addPassthroughCopy("./src/css/style.css");
	eleventyConfig.addWatchTarget("./src/css/style.css");

	eleventyConfig.addPassthroughCopy("**/*.jpg");

	return {
		dir: {
			input: "src",
			output: "public",
		},
	};
};