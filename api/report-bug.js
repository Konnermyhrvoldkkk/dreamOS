module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  const { name, bug, url, ip } = req.body;
  const dscWebhook = process.env.webhookthing;
  if (!dscWebhook) {
    res.status(500).json({ error: 'Webhook not configured' });
    return;
  }
  try {
    const response = await fetch(dscWebhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: `# New Bug Report!`,
        embeds: [
          {
            title: "Bug Report",
            type: "rich",
            color: 0xff0000,
            fields: [
              { name: "Report Type:", value: name, inline: true },
              { name: "Description:", value: bug },
              { name: "Page URL:", value: url },
              { name: "From:", value: ip },
            ],
            footer: { text: "dreamOS Bug Report" },
            timestamp: new Date().toISOString(),
          },
        ],
      }),
    });

    if (response.ok) {
      res.status(200).json({ status: "ok" });
    } else {
      res.status(500).json({ error: "Failed to send bug report" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}