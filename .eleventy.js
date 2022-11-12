module.exports = config => {
    // set directories to pass through to the _site folder
    config.addPassthroughCopy('./src/images/');
    
    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src'
        }
    };
};