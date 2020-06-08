import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RealmService } from './realm.service';

describe('RealmService', () => {
  let service: RealmService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RealmService]
    });
    service = TestBed.inject(RealmService);
  });

  it('should be created', () => {
    const service: RealmService = TestBed.get(RealmService);
    expect(service).toBeTruthy();
  });

  it('should be have getRealm function', () => {
    const service: RealmService = TestBed.get(RealmService);
    expect(service.getRealms).toBeTruthy();
  });
});
