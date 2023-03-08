import { Injectable, OnInit } from '@angular/core';
import { Information } from './information';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  facts: Information[] = [];
  fictions: Information[] = [];
  constructor(private http: HttpClient) {
    this.readFacts();
    this.readFictions();
  }
  private getFacts(): Information[] {
    return this.facts;
  }
  private getFictions(): Information[] {
    return this.fictions;
  }

  private readFacts() {
    return this.http.get('assets/facts.json').subscribe((data) => {
      this.facts = data as Information[];
    });
  }
  private readFictions() {
    return this.http.get('assets/fictions.json').subscribe((data) => {
      this.fictions = data as Information[];
    });
  }

  public generateRound(): Information[] {
    const round: Information[] = [];
    round.push(this.randomFact());
    round.push(this.randomFact());
    round.push(this.randomFiction());
    // the array is now [fact, fact, fiction]
    // shuffle the array so the order is random
    for (let i = round.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [round[i], round[j]] = [round[j], round[i]];
    }

    return round;
  }

  randomFact() {
    const fact =
      this.getFacts()[Math.floor(Math.random() * this.getFacts().length)];
    this.facts = this.facts.filter((item) => item !== fact);
    return fact;
  }

  randomFiction() {
    const fiction =
      this.getFictions()[Math.floor(Math.random() * this.getFictions().length)];
    this.fictions = this.fictions.filter((item) => item !== fiction);
    return fiction;
  }
}
