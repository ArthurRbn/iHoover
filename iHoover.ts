import { Grid, Hoover } from './classes';
import { parseArgs } from './parser';


const args = parseArgs(process.argv);
let grid = new Grid(args.grid[0], args.grid[1]);
let hoover = new Hoover(args.position[0], args.position[1], args.position[2]);
hoover.run(grid, args.instructions);
console.log(`Final Position: x=${hoover.x} y=${hoover.y} orientation=${hoover.direction}`);