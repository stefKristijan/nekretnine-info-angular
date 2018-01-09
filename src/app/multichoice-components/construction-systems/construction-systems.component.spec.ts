import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionSystemsComponent } from './construction-systems.component';

describe('ConstructionSystemsComponent', () => {
  let component: ConstructionSystemsComponent;
  let fixture: ComponentFixture<ConstructionSystemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructionSystemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
