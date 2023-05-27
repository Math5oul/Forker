import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForkTreeComponent } from './fork-tree.component';

describe('ForkTreeComponent', () => {
  let component: ForkTreeComponent;
  let fixture: ComponentFixture<ForkTreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ForkTreeComponent]
    });
    fixture = TestBed.createComponent(ForkTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
