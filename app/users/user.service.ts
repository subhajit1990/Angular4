import { Injectable } from '@angular/core';
import { User } from './user';
import { ALL_USERS } from './user-data';
import { findIndex } from 'lodash';

@Injectable()
export class UserService {
  private pItems = ALL_USERS;

  getUsersFromData(): User[] {
    console.log(this.pItems);
    return this.pItems
  }
}
