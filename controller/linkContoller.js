const LinkModel = require('../model/linkModel');
const shortid = require('shortid');

module.exports = {
    createShortLink: async (req, res) => {
        const { originalUrl } = req.body;
    
        console.log('Received originalUrl:', originalUrl); // בדיקה
    
        if (!originalUrl) {
            return res.status(400).json({ error: 'Original URL is required' });
        }
    
        try {
            const shortUrl = shortid.generate();
            const newLink = new LinkModel({ originalUrl, shortUrl });
            await newLink.save();
            res.status(201).json({ originalUrl, shortUrl });
        } catch (error) {
            console.error('Error saving link:', error.message); // בדיקה
            res.status(500).json({ error: 'Error creating short link' });
        }
    }
,

    redirectToOriginalLink: async (req, res) => {
        const { shortUrl } = req.params;

        try {
            const link = await LinkModel.findOne({ shortUrl });
            if (!link) {
                return res.status(404).send('Short URL not found');
            }

            res.redirect(301, link.originalUrl);
        } catch (error) {
            res.status(500).send('Error redirecting to the original link');
        }
    }
};
