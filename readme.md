# GitHub Stats

Lightweight service to generate GitHub profile cards (stats, top languages, streak) as embeddable images.

Deployed demo: https://github-stats-tau-weld.vercel.app/

## Endpoints

- `/api/stats/[username]` — GitHub contribution & activity stats image
- `/api/top-langs/[username]` — Top languages used image
- `/api/streak/[username]` — Contribution streak image

Replace `[username]` with any GitHub username.

## Examples

Markdown image embeds (replace `HarshadSelokar` with any username):

- Stats:

	![Stats](https://github-stats-tau-weld.vercel.app/api/stats/HarshadSelokar)

- Top languages:

	![Top Langs](https://github-stats-tau-weld.vercel.app/api/top-langs/HarshadSelokar)

- Streak:

	![Streak](https://github-stats-tau-weld.vercel.app/api/streak/HarshadSelokar)

## Usage

Embed the badge images in your README, blog, or profile by copying the markdown image link above. You can also use the raw image URL in HTML or any markdown-supported platform.

## Development

This repository contains the API routes under `api/` and helper libraries under `lib/`.

To run locally (if project uses Node):

1. Install dependencies: `npm install`
2. Start the dev server: `npm run dev`

(Adjust commands according to the project's `package.json`.)

## Contributing

PRs and issues are welcome. Open an issue to discuss changes first.

## License

Open source — use as you like.

