import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMailPanelComponent } from './send-mail-panel.component';

describe('SendMailPanelComponent', () => {
  let component: SendMailPanelComponent;
  let fixture: ComponentFixture<SendMailPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendMailPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendMailPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
