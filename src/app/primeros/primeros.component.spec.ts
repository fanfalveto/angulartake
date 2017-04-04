import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerosComponent } from './primeros.component';

describe('FotosComponent', () => {
  let component: PrimerosComponent;
  let fixture: ComponentFixture<PrimerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
