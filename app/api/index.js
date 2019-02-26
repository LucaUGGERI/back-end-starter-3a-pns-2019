const { Router } = require('express');
const TicketRouter = require('./tickets');
const StudentRouter = require('./student');

const router = new Router();
router.get('/status', (req, res) => res.status(200).json('ok'));
router.use('/student', StudentRouter);
router.use('/tickets', TicketRouter);

module.exports = router;
