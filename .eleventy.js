const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Adiciona a coleção de posts
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md").reverse();
  });

  // Adiciona um filtro de data personalizado
  eleventyConfig.addFilter("date", (dateObj, format) => {
    return DateTime.fromJSDate(dateObj).toFormat(format);
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_includes/layouts",
      output: "_site"
    }
  };
};
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Adiciona a coleção de posts
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md").reverse();
  });

  // Adiciona um filtro de data personalizado
  eleventyConfig.addFilter("date", (dateObj, format) => {
    return DateTime.fromJSDate(dateObj).toFormat(format);
  });

  // Adiciona a paginação para a página inicial
  eleventyConfig.addCollection("paginatedPosts", function(collectionApi) {
    const allPosts = collectionApi.getFilteredByGlob("src/posts/*.md").reverse();
    return allPosts;
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_includes/layouts",
      output: "_site"
    },
    pagination: {
      size: 5, // Número de posts por página
      alias: "pagination" // Nome do objeto de paginação
    }
  };
};
module.exports = function(eleventyConfig) {
    // Adiciona a coleção de posts
    eleventyConfig.addCollection("posts", function(collectionApi) {
      return collectionApi.getFilteredByGlob("src/posts/*.md").reverse();
    });
  
    // Adiciona uma coleção de tags
    eleventyConfig.addCollection("allTags", function(collectionApi) {
      const tags = {};
      collectionApi.getAll().forEach(post => {
        (post.data.tags || []).forEach(tag => {
          if (!tags[tag]) {
            tags[tag] = [];
          }
          tags[tag].push(post);
        });
      });
      return Object.keys(tags).sort();
    });
  
    // Adiciona um filtro de data personalizado
    eleventyConfig.addFilter("date", (dateObj, format) => {
      return DateTime.fromJSDate(dateObj).toFormat(format);
    });
  
    return {
      dir: {
        input: "src",
        includes: "_includes",
        layouts: "_includes/layouts",
        output: "_site"
      }
    };
  };
  