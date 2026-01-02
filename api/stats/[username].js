import { github } from "../../lib/github.js";
import { card } from "../../lib/card.js";

export default async function handler(req, res) {
  const { username } = req.query;

  const { data } = await github.get(`/users/${username}`);

  const content = `
    <text x="20" y="70" fill="#c9d1d9">Repos: ${data.public_repos}</text>
    <text x="20" y="95" fill="#c9d1d9">Followers: ${data.followers}</text>
    <text x="20" y="120" fill="#c9d1d9">Following: ${data.following}</text>
  `;

  res.setHeader("Content-Type", "image/svg+xml");
  res.send(card(`${username}'s GitHub Stats`, content));
}
