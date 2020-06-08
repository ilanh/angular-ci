import { Component, OnInit } from '@angular/core';
import { Realm } from '../realm';
import { RealmService } from '../realm.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  realms: Realm[] = [];

  constructor(private realmService: RealmService) { }

  ngOnInit(): void {
    this.getRealms();
  }

  getRealms(): void {
    this.realmService.getRealms()
    .subscribe(realms => this.realms = realms.slice(0, 3));
  }

}
