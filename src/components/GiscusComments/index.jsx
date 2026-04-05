import Giscus from '@giscus/react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComments(props) {
  const { colorMode } = useColorMode();
  const { siteConfig, i18n } = useDocusaurusContext();
  const { themes, ...giscusProps } = siteConfig.customFields.giscusConfig;

  return (
    <Giscus
      {...giscusProps}
      id='comments'
      mapping='specific'
      strict='0' /* We don't include title hash in discussion body */
      term={props.title}
      theme={themes[colorMode] || colorMode}
      lang={i18n.currentLocale}
    />
  );
}
