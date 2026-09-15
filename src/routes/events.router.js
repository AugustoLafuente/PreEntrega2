import { Router } from 'express';
import { getEvents } from '../controllers/events.controller.js';

const router = Router();

// GET /api/events
router.get('/', getEvents);

export default router;
