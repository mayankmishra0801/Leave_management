import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyLaeaveComponent } from './apply-laeave.component';

describe('ApplyLaeaveComponent', () => {
  let component: ApplyLaeaveComponent;
  let fixture: ComponentFixture<ApplyLaeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyLaeaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyLaeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
