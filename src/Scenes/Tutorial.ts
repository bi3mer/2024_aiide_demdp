import { CommonComponents, ECSScene, Engine } from "../WorldEngine";
import { C } from "../Components";
import { S } from "../Systems";
import { MAX_STAMINA } from "../constants";

export class Tutorial extends ECSScene {
  constructor() {
    super();
    this.setBB('x mod', 20);
    this.setBB('y mod', 20);

    const playerID = this.addEntity();
    this.addComponent(playerID, new CommonComponents.Position2d(5, 5));
    this.addComponent(playerID, new C.Movable());
    this.addComponent(playerID, new C.Player(MAX_STAMINA, 0));
    this.addComponent(playerID, new C.Render('@'));


    const instructions = this.addEntity();
    this.addComponent(instructions, new CommonComponents.Position2d(5, 20));

    // this.addSystem(10, new S.PlayerCollision());
    // this.addSystem(20, new S.EnemyAI());
    // this.addSystem(90, new S.PortalSystem());
    // this.addSystem(95, new S.RenderEnemyTerritory());
    this.addSystem(100, new S.RenderSystem());
    // this.addSystem(110, new S.RenderGameInfo());
    this.addSystem(900, new S.UpdatePlayerTurn());
  }

  public customUpdate(engine: Engine): number {
    return -1
  }
  public onEnter(engine: Engine): void {
  }

  public onExit(engine: Engine): void {
  }
}
