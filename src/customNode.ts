import { Node } from "./GDM-TS/src/Graph/node";

export class CustomNode extends Node {
  public visitedCount: number;
  public sumPercentCompleted: number;
  public depth: number;

  private difficulty: number;
  private enjoyability: number;

  constructor(name: string, difficulty: number, enjoyability: number, utility: number, isTerminal: boolean, neighbors: string[], depth: number) {
    super(name, difficulty, utility, isTerminal, neighbors);

    this.difficulty = difficulty;
    this.enjoyability = enjoyability;
    this.depth = depth;

    this.visitedCount = 1;
    this.sumPercentCompleted = 1;
  }

  public updateReward(): void {
    // TODO: why is this multiply?
    this.reward = this.difficulty * this.visitedCount;
  }
}
