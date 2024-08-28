import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Copyright from '@theme-original/Footer/Copyright';
import React from 'react';

export default function CopyrightWrapper(props) {
  const { siteConfig: { customFields: {
    siteLicense,
  } } } = useDocusaurusContext();
  
  return (
    <>
      <div>Made with ❤️ on Earth.</div>
      <div>The content is licensed under the <a rel="license" href={siteLicense.url} target="_blank">{siteLicense.name}</a> license.</div >
      <div><Copyright {...props} /></div>
      <div>Built with <a target="_blank" href="https://docusaurus.io/">Docusaurus</a>.</div>
    </>
  );
}
