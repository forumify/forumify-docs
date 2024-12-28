# Forumify Documentation

This repository contains the documentation website for [forumify](https://github.com/forumify/forumify-platform)
as well as first party plugins.

### Running locally

Ensure you have [Node.js](https://nodejs.org/en) >= 22.0 installed.

Use npm to install the required dependencies:
```bash
npm install
```

Then start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser and you can see your changes live.

### Managing pages

The documentation website uses file based routing, or as NextJS calls it, [App Router](https://nextjs.org/docs/app/getting-started/layouts-and-pages).
You can find all pages in the `src/app/` directory.

A page located at `src/app/user-manual/calendar/page.mdx` would be available at `/user-manual/calendar`.

Pages are written in MDX, which is Markdown + React. This allows for very easy management of pages, while still
being able to leverage React with complex components sprinkled in.

### Contributing

Anyone is free to contribute to the documentation website. If you are documenting a new feature for
which a pull request is still open in the main forumify-platform repository, please mention it in your PR.
