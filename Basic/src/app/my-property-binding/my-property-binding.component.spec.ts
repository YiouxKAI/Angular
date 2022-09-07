import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPropertyBindingComponent } from './my-property-binding.component';

describe('MyPropertyBindingComponent', () => {
  let component: MyPropertyBindingComponent;
  let fixture: ComponentFixture<MyPropertyBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPropertyBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
