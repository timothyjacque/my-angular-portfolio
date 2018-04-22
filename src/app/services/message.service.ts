import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class MessageService {

  constructor(private db: AngularFireDatabase) { }

  create(message) {
    return this.db.list('/messages').push(message);
  }

}
