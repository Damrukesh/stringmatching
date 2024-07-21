import express from 'express';
import bodyParser from 'body-parser';
import { naive, kmp, bm, rk } from './algorithms.mjs';

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/match', (req, res) => {
    const { str, paragraph, algorithm } = req.body;
    let occurrences = 0;

    switch (algorithm) {
        case 'naive':
            occurrences = naive(str, paragraph);
            break;
        case 'kmp':
            occurrences = kmp(str, paragraph);
            break;
        case 'bm':
            occurrences = bm(str, paragraph);
            break;
        case 'rk':
            occurrences = rk(str, paragraph);
            break;
        default:
            break;
    }

    res.json({ occurrences });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
