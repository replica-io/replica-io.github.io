import React, { useEffect, useState } from 'react';
import { DiscussionEmbed } from 'disqus-react';
import BlogPostItem from '@theme-original/BlogPostItem';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useColorMode } from '@docusaurus/theme-common';

export default function BlogPostItemWrapper(props) {
  const { metadata } = useBlogPost();
  const { frontMatter, permalink, title } = metadata;
  const currentUrlOrigin = typeof window !== 'undefined' ? window.location.origin : '';
  const fullPermalink = `${currentUrlOrigin}${permalink}`;
  const { comments = true } = frontMatter;
  const { siteConfig, i18n } = useDocusaurusContext();
  const shortname = siteConfig.customFields.disqusShortname;
  const { colorMode } = useColorMode();
  const [disqusColorMode, setDisqusColorMode] = useState(colorMode);

  useEffect(() => {
    // Disqus doesn't auto-update when the site's theme changes,
    // so we re-render the DiscussionEmbed to reflect the new theme.
    setDisqusColorMode(colorMode);
  }, [colorMode]);

  return (
    <>
      <BlogPostItem {...props} />
      {comments && (
        <DiscussionEmbed
          // This property is not used by `DiscussionEmbed`, but forces React to re-render it upon theme changes
          colorMode={disqusColorMode}
          shortname={shortname}
          config={{
            url: fullPermalink,
            title,
            language: i18n.currentLocale,
          }}
        />
      )}
    </>
  );
}
