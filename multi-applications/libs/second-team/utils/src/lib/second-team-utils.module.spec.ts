import { async, TestBed } from '@angular/core/testing';
import { SecondTeamUtilsModule } from './second-team-utils.module';

describe('SecondTeamUtilsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SecondTeamUtilsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SecondTeamUtilsModule).toBeDefined();
  });
});
