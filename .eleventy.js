const { DateTime } = require("luxon");
const mdxPlugin = require("@jamshop/eleventy-plugin-mdx");

module.exports = function (eleventyConfig) {
    // Plugin for MDX
    eleventyConfig.addPlugin(mdxPlugin);

    // Passthrough copy for assets
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/assets/css/main.css');

    // Filter for formatting post dates
    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    // Shortcode for displaying current year
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    // Filter and collection for products
    eleventyConfig.addFilter("getProducts", (collection, category) => {
        console.log(collection, category);
        return '';
    });

    eleventyConfig.addCollection("products", function (collection) {
        // Fetch products data from products.json
        const products = require("./src/_data/products.json");
        return products;
    });

    // Filter and collection for blog topics
    eleventyConfig.addFilter("getBlogtopics", (collection, blogcategory) => {
        console.log(collection, blogcategory);
        return '';
    });

    eleventyConfig.addCollection("blogtopics", function (collection) {
        // Fetch blog data from blogtopics.json
        const blogtopics = require("./src/_data/blogtopics.json");
        return blogtopics;
    });

    // Configuration for input and output directories
    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
};
