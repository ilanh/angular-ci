import { Component, OnInit } from '@angular/core';
import { Realm } from '../realm';
import { RealmService } from '../realm.service';


@Component({
  selector: 'app-realm',
  templateUrl: './realm.component.html',
  styleUrls: ['./realm.component.css']
})
export class RealmComponent implements OnInit {

  selectedRealm: Realm;

  realms: Realm[];

  constructor(private realmService: RealmService) { }

  getRealms(): void {
    this.realmService.getRealms()
    .subscribe(realms => this.realms = realms);
  }

  ngOnInit(): void {
    this.getRealms();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.realmService.addRealm({ name } as Realm)
      .subscribe(realm => {
        this.realms.push(realm);
      });
  }

  delete(realm: Realm): void {
    this.realms = this.realms.filter(h => h !== realm);
    this.realmService.deleteRealm(realm).subscribe();
  }

}
