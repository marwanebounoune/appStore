import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiNousSommesComponent } from './qui-nous-sommes.component';

describe('QuiNousSommesComponent', () => {
  let component: QuiNousSommesComponent;
  let fixture: ComponentFixture<QuiNousSommesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuiNousSommesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuiNousSommesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
