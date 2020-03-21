import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNewPlayerComponent } from './dialog-new-player.component';

describe('DialogNewPlayerComponent', () => {
  let component: DialogNewPlayerComponent;
  let fixture: ComponentFixture<DialogNewPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogNewPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogNewPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
