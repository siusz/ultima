import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContePage } from './conte.page';

describe('ContePage', () => {
  let component: ContePage;
  let fixture: ComponentFixture<ContePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ContePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
