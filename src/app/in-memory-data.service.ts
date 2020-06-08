import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Realm } from './realm';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const realms = [
      { id: 11, name: 'Docker' },
      { id: 12, name: 'Jelastic' },
      { id: 13, name: 'Kubernetes' },
      { id: 14, name: 'Swarm' }
    ];
    return {realms};
  }

  genId(realms: Realm[]): number {
    return realms.length > 0 ? Math.max(...realms.map(realm => realm.id)) + 1 : 11;
  }
}
