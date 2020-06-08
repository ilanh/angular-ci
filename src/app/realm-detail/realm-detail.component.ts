import { Component, OnInit, Input } from '@angular/core';
import { Realm } from '../realm';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RealmService } from '../realm.service';

@Component({
  selector: 'app-realm-detail',
  templateUrl: './realm-detail.component.html',
  styleUrls: ['./realm-detail.component.css']
})

export class RealmDetailComponent implements OnInit {
  @Input() realm: Realm;

  constructor(
    private route: ActivatedRoute,
    private realmService: RealmService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getRealm();
  }

  getRealm(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.realmService.getRealm(id)
    .subscribe(realm => this.realm = realm);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.realmService.updateRealm(this.realm)
      .subscribe(() => this.goBack());
  }

}
