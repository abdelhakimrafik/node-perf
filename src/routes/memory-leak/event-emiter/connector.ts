import { EventEmitter } from 'events';

export const connector = new EventEmitter();
connector.setMaxListeners(0);

setInterval(() => {
  connector.emit('connected', {
    async get() {
      return 'One';
    },
  });
}, 1000);
