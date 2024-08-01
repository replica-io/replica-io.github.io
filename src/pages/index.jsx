import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';

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
        <p className="padding-vert--xl">
          <p className="container">
            <h2 className="text--center">
              What is Replica_IO about?
            </h2>
            <p className="row">
              <p className="col col--8 col--offset-2">
                <p>
                  Replica_IO is about making a breakthrough in designing
                  and implementing distributed protocols for the future of
                  decentralized computing! 🚀
                </p>
                <p>
                  The purpose of this project is to advance computing by
                  making highly reliable distributed systems more
                  practical to implement. The goal is to develop a
                  well-supported and widely used state-of-the-art
                  framework for building distributed replication
                  mechanisms. Specifically, the framework should provide a
                  carefully designed collection of primitives, components,
                  tools, and guidelines for developing core mechanisms of
                  fault-tolerant distributed systems. Possible areas of
                  application include blockchain, cloud computing,
                  distributed databases, etc. Following are the key areas
                  of focus:
                </p>
              </p>
            </p>
            <p className="row">
              <p className="col col--10 col--offset-1">
                <div className="row margin-vert--lg">
                  <div className="col">
                    <h3>Simplicity</h3>
                    <p>
                      Making protocol implementations well structured
                      and understandable.
                    </p>
                  </div>
                  <div className="col">
                    <h3>Flexibility</h3>
                    <p>
                      Keeping the framework adaptable, widely
                      applicable, and evolvable.
                    </p>
                  </div>
                  <div className="col">
                    <h3>Reliability</h3>
                    <p>
                      Ensuring that protocol correctness is verifiable
                      and the implementation is resilient.
                    </p>
                  </div>
                  <div className="col">
                    <h3>Efficiency</h3>
                    <p>
                      Allowing for various optimizations and
                      delivering good performance.
                    </p>
                  </div>
                  <div className="col">
                    <h3>Maintainability</h3>
                    <p>
                      Catering for maintenance needs and providing
                      great diagnostic mechanisms.
                    </p>
                  </div>
                </div>
              </p>
            </p>
          </p>
        </p>
      </main>
    </Layout>
  );
}
