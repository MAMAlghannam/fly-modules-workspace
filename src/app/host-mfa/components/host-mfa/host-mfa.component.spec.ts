import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostMfaComponent } from './host-mfa.component';

describe('HostMfaComponent', () => {
  let component: HostMfaComponent;
  let fixture: ComponentFixture<HostMfaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostMfaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostMfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
