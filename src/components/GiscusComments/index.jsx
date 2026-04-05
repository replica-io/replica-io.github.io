import Giscus from '@giscus/react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComments(props) {
  const { colorMode } = useColorMode();
  const { siteConfig, i18n } = useDocusaurusContext();
  const { giscusConfig } = siteConfig.customFields;

  return (
    <Giscus
      id='comments'
      mapping='specific'
      strict='0' /* We don't include title hash in discussion body */
      term={props.title}
      theme={giscusConfig.themes[colorMode] || colorMode}
      lang={i18n.lang}
      {...giscusConfig}
    />
  );
}
