import { ENEMY_RANGE } from "../constants";
import { Component, CommonComponents } from "../WorldEngine/";

export class Enemy extends Component {
  constructor(public startPosition: CommonComponents.Position2d) {
    super();
  }
}
