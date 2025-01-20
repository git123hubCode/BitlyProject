const express = require('express');
const router = express.Router();
const { createShortLink, redirectToOriginalLink } = require('../controller/linkContoller'); // לא linkContoller

// Shorten URL
router.post('/shorten', createShortLink);

// Redirect to original URL
router.get('/:shortUrl', redirectToOriginalLink);

module.exports = router;
