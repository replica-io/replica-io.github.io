const blogPluginExports = require('@docusaurus/plugin-content-blog');

const defaultBlogPlugin = blogPluginExports.default;

async function blogPluginExtended(...pluginArgs) {
  const blogPluginInstance = await defaultBlogPlugin(...pluginArgs);

  return {
    ...blogPluginInstance,

    contentLoaded: async function (params) {
      const { content, actions } = params;

      const posts = content.blogPosts
        .filter((post) => !post.metadata.unlisted)
        .map(({ content: _, ...post }) => post);
      actions.createData('blog-posts-metadata.json', posts);

      return blogPluginInstance.contentLoaded(params);
    },
  };
}

module.exports = {
  ...blogPluginExports,
  default: blogPluginExtended,
};
