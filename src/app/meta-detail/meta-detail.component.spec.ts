import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaDetailComponent } from './meta-detail.component';

describe('MetaDetailComponent', () => {
  let component: MetaDetailComponent;
  let fixture: ComponentFixture<MetaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetaDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
