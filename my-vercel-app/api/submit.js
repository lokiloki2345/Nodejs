const db = require('./db');

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { text } = req.body;
        db.run("INSERT INTO data (text) VALUES (?)", [text], function(err) {
            if (err) {
                return res.status(500).json({ message: "Database error" });
            }
            res.status(200).json({ message: "Data saved successfully" });
        });
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}
