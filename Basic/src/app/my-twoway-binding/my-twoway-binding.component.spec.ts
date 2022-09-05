import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTwowayBindingComponent } from './my-twoway-binding.component';

describe('MyTwowayBindingComponent', () => {
  let component: MyTwowayBindingComponent;
  let fixture: ComponentFixture<MyTwowayBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTwowayBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTwowayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
