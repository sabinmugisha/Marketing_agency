const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/generate', async (req, res) => {
    const { businessDescription } = req.body;

    // Mock response if OpenAI isn't integrated
    const mockAdCopy = `Boost your business: "${businessDescription}" with targeted ads.`;

    try {
        // Replace with actual OpenAI API key and endpoint
        const response = await axios.post('https://api.openai.com/v1/completions', {
            prompt: `Write an ad for: ${businessDescription}`,
            model: 'text-davinci-003',
            max_tokens: 50,
        }, {
            headers: {
                'Authorization': `Bearer YOUR_OPENAI_API_KEY`,
            },
        });

        res.json({ adCopy: response.data.choices[0].text.trim() || mockAdCopy });
    } catch (error) {
        console.error('Error generating ad copy:', error.message);
        res.json({ adCopy: mockAdCopy });
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
