import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailBoxPanelComponent } from './mail-box-panel.component';

describe('MailBoxPanelComponent', () => {
  let component: MailBoxPanelComponent;
  let fixture: ComponentFixture<MailBoxPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailBoxPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailBoxPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
