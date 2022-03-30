import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubSideNavigationComponent } from './sub-side-navigation.component';

describe('SubSideNavigationComponent', () => {
  let component: SubSideNavigationComponent;
  let fixture: ComponentFixture<SubSideNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubSideNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubSideNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
