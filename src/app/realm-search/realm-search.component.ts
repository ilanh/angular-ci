import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Realm } from '../realm';
import { RealmService } from '../realm.service';

@Component({
  selector: 'app-realm-search',
  templateUrl: './realm-search.component.html',
  styleUrls: ['./realm-search.component.css'],
})
export class RealmSearchComponent implements OnInit {
  realms$: Observable<Realm[]>;
  private searchTerms = new Subject<string>();

  constructor(private realmService: RealmService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.realms$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.realmService.searchRealms(term))
    );
  }
}
