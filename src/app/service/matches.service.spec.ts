import { TestBed } from '@angular/core/testing';

import { MatchesService } from './matches.service';

describe('MatchesService', () => {
  let service: MatchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchesService);
  });

  it('service creation', () => {
    expect(service).toBeTruthy();
  });

  it('vérifie si le tableau random comprend entre 15 et 20', () => {
    let result = service.randomNrOfMatches();
    expect(result).toBeDefined();
    expect(result.length).toBeGreaterThanOrEqual(15);
    expect(result.length).toBeLessThanOrEqual(20);

  });

  it('doit renvoyer le tableau arrayRandom', () => {
    //je crée un tableau d'allumettes
    service.randomNrOfMatches();
    //Je vais chercher le tableau
    let result = service.arrayRandom;
    expect(result).toBeDefined();
    expect(result.length).toBeGreaterThanOrEqual(15);
    expect(result.length).toBeLessThanOrEqual(20);
  })

  it('verifie si le nombre d allumettes décroit de 1', ()=> {
    //je crée un tableau d'allumettes
    service.randomNrOfMatches();
    //Je vais chercher le tableau
    let result = service.arrayRandom.length;
    service.decreaseNrOfMatches(1);
    let newResult;
    service.checkNrOfMatches().subscribe( result => {
      newResult = result;
    })
    expect(newResult.length).toBe(result - 1);


  })


});
