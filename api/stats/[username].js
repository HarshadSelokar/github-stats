const { github } = require("../../../lib/github");
const { card } = require("../../../lib/card");

module.exports = async function handler(req, res) {
  try {
    const { username } = req.query;

    const { data } = await github.get(`/users/${username}`);

    const content = `
      <text x="20" y="70" fill="#c9d1d9">Repos: ${data.public_repos}</text>
      <text x="20" y="95" fill="#c9d1d9">Followers: ${data.followers}</text>
      <text x="20" y="120" fill="#c9d1d9">Following: ${data.following}</text>
    `;

    res.setHeader("Content-Type", "image/svg+xml");
    res.status(200).send(card(`${username}'s GitHub Stats`, content));
  } catch (err) {
    console.error(err);
    res.status(500).send("Error generating stats");
  }
};
