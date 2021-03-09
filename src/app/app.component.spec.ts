import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatchesService } from './service/matches.service';

let service: MatchesService;

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    service = TestBed.inject(MatchesService);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'matches'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('matches');
  });

  it('tableau ramdom initialisé', () => {
    let result = service.randomNrOfMatches();
    expect(result).toBeDefined();
    expect(result.length).toBeGreaterThanOrEqual(15);
    expect(result.length).toBeLessThanOrEqual(20);
  });

  it('verifier le switch entre les player', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.onDecreaseMatches(1);
    expect(app.isPlayerOne).toBe(false);
  })
});
