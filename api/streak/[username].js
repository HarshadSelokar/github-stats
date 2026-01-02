import { github } from "../../lib/github.js";
import { card } from "../../lib/card.js";

export default async function handler(req, res) {
  const { username } = req.query;

  const { data: events } = await github.get(
    `/users/${username}/events/public`
  );

  const dates = new Set(
    events.map(e => e.created_at.split("T")[0])
  );

  let streak = 0;
  let day = new Date();

  while (dates.has(day.toISOString().split("T")[0])) {
    streak++;
    day.setDate(day.getDate() - 1);
  }

  const content = `
    <text x="20" y="90" fill="#c9d1d9" font-size="26">
      🔥 Current Streak: ${streak} days
    </text>
  `;

  res.setHeader("Content-Type", "image/svg+xml");
  res.send(card("GitHub Streak", content));
}
