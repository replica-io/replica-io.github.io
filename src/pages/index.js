import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <img src="img/logo.svg" alt="Replica_IO Logo" width="240px" />
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/about">
            About
          </Link>
          <Link
            className="button button--primary button--lg"
            to={siteConfig.customFields.gitHubUrl}>
            Go to GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      description={siteConfig.customFields.description}>
      <HomepageHeader />
      <main>
        <div className="container container--fluid margin-vert--xl">
          <div className="video-container" style={{ maxWidth: '1280px' }}>
            <LiteYouTubeEmbed id='oJlryr6bMCo' title="Introduction to Replica_IO" />
          </div>
        </div>
      </main>
    </Layout>
  );
}
