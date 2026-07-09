# Library

A simple React-based library website for a static, content-focused experience.

## Run locally

Open the file [index.html](index.html) in a browser, or serve the folder with a simple static server:

```bash
python3 -m http.server 3000
```

Then visit http://localhost:3000/

## Deploy to GitHub Pages

1. Push this project to a GitHub repository.
2. In GitHub, open the repository Settings → Pages.
3. Choose GitHub Actions as the source.
4. The workflow in [.github/workflows/deploy.yml](.github/workflows/deploy.yml) will publish the site automatically.

If your repository is named `Library`, the published site URL will be:

```text
https://prasadcp.github.io/Library/
```

If you want the site at the root domain, rename the repository to `prasadcp.github.io`.
