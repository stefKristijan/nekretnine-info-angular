import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeilingMaterialsComponent } from './ceiling-materials.component';

describe('CeilingMaterialsComponent', () => {
  let component: CeilingMaterialsComponent;
  let fixture: ComponentFixture<CeilingMaterialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeilingMaterialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeilingMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
