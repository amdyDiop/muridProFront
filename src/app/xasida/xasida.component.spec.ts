import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XasidaComponent } from './xasida.component';

describe('XasidaComponent', () => {
  let component: XasidaComponent;
  let fixture: ComponentFixture<XasidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XasidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XasidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
