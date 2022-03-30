import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNaviagtionComponent } from './side-naviagtion.component';

describe('SideNaviagtionComponent', () => {
  let component: SideNaviagtionComponent;
  let fixture: ComponentFixture<SideNaviagtionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNaviagtionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNaviagtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
