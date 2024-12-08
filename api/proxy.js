export default async function handler(req, res) {
    try {
        const targetUrl = `http://itgirlschool.justmakeit.ru${req.url}`;
        const response = await fetch(targetUrl, {
            method: req.method,
            headers: req.headers,
            body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined,
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}