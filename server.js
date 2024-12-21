import fetch from 'node-fetch';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/api/beer', async (req, res) => {
    const response = await fetch('https://api.catalog.beer/beer', {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Authorization": "Basic OTg0Yjc1ZDItMDM3Ni00OTBjLWJkNTUtYTI4ZTBlYzkwYjIxOg=="
        }
    });
    const data = await response.json();
    res.json(data);
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
});
