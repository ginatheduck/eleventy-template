module.exports = config => {
    // set directories to pass through to the _site folder
    config.addPassthroughCopy('./src/images/');
    
    return {
        // set template engine to njk
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',

        // set a pathPrefix to deploy to a subdirectory
        pathPrefix: "/eleventy-template/",

        dir: {
            input: 'src'
        }
    };
};