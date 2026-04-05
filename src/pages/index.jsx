import Link from '@docusaurus/Link';
import useBrokenLinks from '@docusaurus/useBrokenLinks';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';

import Heading from '@theme/Heading';
import RecentBlogPosts from '../components/RecentBlogPosts';
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

  useBrokenLinks().collectAnchor('#contact-email');

  const nrRecentBlogPosts = siteConfig.customFields.recentBlogPostsOnHomePage;

  return (
    <Layout
      description={siteConfig.customFields.description}>
      <HomepageHeader />
      <main>
        <p className="padding-vert--xl">
          <p className="container">
            <h2 className="text--center">
              What is Replica_IO about?
            </h2>
            <p className="row">
              <p className="col col--8 col--offset-2">
                <p>
                  This is an independent, open-ended effort to rethink distributed and concurrent computing from first principles, searching for a most natural way to express it. The emerging ideas are to take shape in a minimalistic, Rust-based open-source framework for core mechanisms of decentralized, distributed systems — such as BFT consensus.
                </p>
                <p>
                  For more details, check out the <a href="/about">About</a> page.
                </p>
              </p>
            </p>
            <h2 className="text--center">
              Sponsors
            </h2>
            <p className="row">
              <p className="col col--8 col--offset-2 text--center">
                <p>
                  Supported through the <a href="https://blueyard.medium.com/announcing-the-blueyard-dyor-do-your-own-research-funding-program-9be5f2f23d37" target="_blank" rel="noopener"> DYOR </a> funding program by BlueYard Capital.
                </p>
                <p>
                  <a href="https://www.blueyard.com" target="_blank" rel="noopener">
                    <img alt="BlueYard Capital" src="img/blueyard-logo.jpg" width="64px" />
                  </a>
                </p>
              </p>
            </p>
          </p>
        </p>
        <div className="container padding-bottom--xl">
          <RecentBlogPosts nrPosts={nrRecentBlogPosts} />
        </div>
      </main>
    </Layout>
  );
}
