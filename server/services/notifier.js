// Posts a new-submission alert to Slack via incoming webhook.
export async function notifySlack(payload) {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) return; // notifications optional in dev

  const { name, email, budget, message } = payload;

  return fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text: `*New intake* — ${name} (${email})\nBudget: ${budget}\n${message}`,
    }),
  });
}
