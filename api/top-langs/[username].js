import { github } from "../../lib/github.js";
import { card } from "../../lib/card.js";

export default async function handler(req, res) {
  const { username } = req.query;

  const { data: repos } = await github.get(
    `/users/${username}/repos?per_page=100`
  );

  const map = {};
  repos.forEach(r => {
    if (r.language) map[r.language] = (map[r.language] || 0) + 1;
  });

  const total = Object.values(map).reduce((a, b) => a + b, 0);
  let y = 70;

  const bars = Object.entries(map).slice(0, 5).map(([lang, count]) => {
    const pct = Math.round((count / total) * 100);
    const barWidth = pct * 2.5;

    const row = `
      <text x="20" y="${y}" fill="#c9d1d9">${lang}</text>
      <rect x="120" y="${y - 12}" width="${barWidth}" height="10" fill="#58a6ff"/>
      <text x="${130 + barWidth}" y="${y}" fill="#8b949e">${pct}%</text>
    `;
    y += 25;
    return row;
  }).join("");

  res.setHeader("Content-Type", "image/svg+xml");
  res.send(card("Top Languages", bars, 200));
}
