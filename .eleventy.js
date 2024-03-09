const { DateTime } = require("luxon");


module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/assets/css/main.css');

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    })
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
    
    eleventyConfig.addFilter("getProducts", (collection, category) => {
        console.log(collection, category)
        return ''
        // return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    })

    eleventyConfig.addCollection("products", function (collection) {
        // Fetch products data from products.json
        const products = require("./src/_data/products.json");
        return products;
    });



    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}