import { Injectable } from '@angular/core';
import { Information } from './information';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  facts: Information[] = [];
  fictions: Information[] = [];
  constructor(private http: HttpClient) {
    this.readFacts().subscribe((data) => {
      this.facts = data as Information[];
    });
    this.readFictions().subscribe((data) => {
      this.fictions = data as Information[];
    });
  }
  private getFacts(): Information[] {
    return this.facts;
  }
  private getFictions(): Information[] {
    return this.fictions;
  }

  private readFacts() {
    return this.http.get('assets/facts.json');
  }
  private readFictions() {
    return this.http.get('assets/fictions.json');
  }

  public getRound(): Information[] {
    const round: Information[] = [];
    // Get a random fact and remove it from the array
    while (round.length < 2) {
      const randomFact =
        this.getFacts()[Math.floor(Math.random() * this.getFacts().length)];
      if (!round.includes(randomFact)) {
        round.push(randomFact);
      }
    }
    // Get a random fiction and remove it from the array
    const randomFiction =
      this.getFictions()[Math.floor(Math.random() * this.getFictions().length)];
    if (!round.includes(randomFiction)) {
      round.push(randomFiction);
    }
    // the array is now [fact, fact, fiction]
    // shuffle the array so the order is random
    for (let i = round.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [round[i], round[j]] = [round[j], round[i]];
    }
    return round;
  }
}
