import EventEmitter from '@nebrob/event-emitter';
import Lobby from './Lobby';

export default class Player extends EventEmitter {
    name: string;

    lobby: Lobby;

    constructor(name: string, lobby: Lobby) {
        super();
        this.name = name;
        this.lobby = lobby;
    }
}
