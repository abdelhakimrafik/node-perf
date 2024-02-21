import { Router } from 'express';
import { eventV1 } from './event-emiter/event-v1';
import { eventV2 } from './event-emiter/event-v2';
import { handlerV1, handlerV2 } from './cached-object';

const memoRouter = Router();

/** Event emitter */
memoRouter.get('/event/v1', eventV1);
memoRouter.get('/event/v2', eventV2);

/** Cache */
memoRouter.get('/cache/v1', handlerV1);
memoRouter.get('/cache/v2', handlerV2);

export default memoRouter;
