const express = require('express');
const router = express.Router();

router.post('/add/:id', function (req, res) {
    res.send(req.body.quantity);
});

module.exports = router;