import { Direction, Command } from './enums';

export class Grid {
  constructor(public width: number, public height: number) {}
}

export class Hoover {
  public x: number;
  public y: number;
  public direction: Direction;

  constructor(x: number, y: number, direction: Direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  turn(command: Command) {
    const dirMatrix: { [key in Direction]: { [key in Command]: Direction } } = {
      N: { G: Direction.West, D: Direction.East, A: Direction.North },
      E: { G: Direction.North, D: Direction.South, A: Direction.East },
      S: { G: Direction.East, D: Direction.West, A: Direction.South },
      W: { G: Direction.South, D: Direction.North, A: Direction.West }
    };
    this.direction = command !== Command.Forward ? dirMatrix[this.direction][command] : this.direction;
  }

  move(grid: Grid) {
    if (this.direction === Direction.North && this.y < grid.height - 1) {
      this.y += 1;
    } else if (this.direction === Direction.East && this.x < grid.width - 1) {
      this.x += 1;
    } else if (this.direction === Direction.South && this.y > 0) {
      this.y -= 1;
    } else if (this.direction === Direction.West && this.x > 0) {
      this.x -= 1;
    }
  }

  run(grid: Grid, instructions: string) {
    for (let i of instructions) {
      let command = i as Command;
      this.turn(command);
      if (command === Command.Forward) {
        this.move(grid);
      }
    }
  }
}