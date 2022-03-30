import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageInputBoxComponent } from './message-input-box.component';

describe('MessageInputBoxComponent', () => {
  let component: MessageInputBoxComponent;
  let fixture: ComponentFixture<MessageInputBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageInputBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageInputBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
