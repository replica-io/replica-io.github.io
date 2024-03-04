# Replica_IO Website

This is a website for the [Replica_IO][replica-io] project. It is built using
[Docusaurus](https://docusaurus.io/), a modern static website
generator.

[replica-io]: https://github.com/replica-io/replica-io

### Installation

```sh
npm install
```

### Local Development

```sh
npm run start
```

This command starts a local development server and opens up a browser
window. Most changes are reflected live without having to restart the
server.

### Build

```sh
npm run build
```

This command generates static content into the `build` directory and
can be served using any static contents hosting service.

### Deployment

This website is configured for deployment to [GitHub
Pages][github-pages]. The deployment is triggered with [GitHub
Actions][github-actions]; it uses a popular third-party deployment
action:
[peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages).

[github-pages]: https://pages.github.com/
[github-actions]: https://help.github.com/actions

### License

The site code is licensed under the [MIT license](LICENSE-code).

The site content in licensed under the [Creative Commons Attribution
4.0 International](LICENSE-content) license.
