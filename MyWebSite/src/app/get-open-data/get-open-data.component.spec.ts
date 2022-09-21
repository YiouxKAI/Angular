import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOpenDataComponent } from './get-open-data.component';

describe('GetOpenDataComponent', () => {
  let component: GetOpenDataComponent;
  let fixture: ComponentFixture<GetOpenDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetOpenDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetOpenDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
