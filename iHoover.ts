import { Grid, Hoover } from './classes';
import { parseArgs } from './parser';

const args = parseArgs(process.argv);

if (args.h || args.help) {
  console.log(`Usage: node hoover.js --grid=[x,y] --position=[x,y,direction] --instructions=[instructions]
  Example: node hoover.js --grid=10,10 --position=5,5,N --instructions=DADADADAA`);
  process.exit(0);
}

let grid = new Grid(args.grid[0], args.grid[1]);
let hoover = new Hoover(args.position[0], args.position[1], args.position[2]);
hoover.run(grid, args.instructions);
console.log(`Final Position: x=${hoover.x} y=${hoover.y} orientation=${hoover.direction}`);