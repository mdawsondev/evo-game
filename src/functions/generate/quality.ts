import { quality } from "../../data";

interface IProbability {
  [index: number]: number;
}

class GenerateQuality {
  constructor() {
    this._odds = {
      0: this._percent(90),
      1: this._percent(6.5),
      2: this._percent(2.5),
      3: this._percent(0.02),
      4: this._percent(0.005),
      5: this._percent(0.001)
    }
  }
  private _odds: IProbability;
  private _percent = (num: number) => Number(num.toFixed(2)) / 100;
  private _weightedRandom = (prob: IProbability) => {
    const r = Math.random();
    let sum = 0;
    for (let i in prob) {
      sum += prob[i];
      if (r <= sum) return quality[Number(quality[i])] as unknown as quality;
    }
    return quality.common as quality;
  }


  public generate = () => this._weightedRandom(this._odds);
}

export const genQuality = new GenerateQuality().generate;