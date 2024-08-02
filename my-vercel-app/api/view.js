const db = require('./db');

export default function handler(req, res) {
    if (req.method === 'GET') {
        db.all("SELECT text FROM data", [], (err, rows) => {
            if (err) {
                return res.status(500).json({ message: "Database error" });
            }
            res.status(200).json(rows);
        });
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}
