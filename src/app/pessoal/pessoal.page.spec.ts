import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PessoalPage } from './pessoal.page';

describe('PessoalPage', () => {
  let component: PessoalPage;
  let fixture: ComponentFixture<PessoalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
