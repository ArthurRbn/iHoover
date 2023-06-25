import * as minimist from 'minimist';
import { Direction } from './enums';

const helpStr: string = 'Usage: node iHoover.js --grid=[x,y] --position=[x,y,direction] --instructions=[instructions]\n  Example: node iHoover.js --grid=10,10 --position=5,5,N --instructions=DADADADAA'

export function parseArgs(args: string[]) {
  const parsedArgs = minimist(args.slice(2), {
    string: ['grid', 'position', 'instructions'],
    alias: { h: 'help' },
    unknown: (arg) => {
      console.error('Unknown option: ', arg);
      return false;
    }
  });

  if (parsedArgs.h || parsedArgs.help) {
    console.log(helpStr);
    process.exit(0);
  } else if (!parsedArgs.grid || !parsedArgs.position || !parsedArgs.instructions) {
    console.error('Missing required arguments');
    process.exit(1);
  }

  let gridArgs = parsedArgs.grid.split(',').map(x => Number(x));
  if (gridArgs.length !== 2 || gridArgs.some(isNaN)) {
    console.error('Invalid grid argument. It should be x,y');
    process.exit(1);
  }

  let positionArgs = parsedArgs.position.split(',');
  if (positionArgs.length !== 3 || isNaN(positionArgs[0]) || isNaN(positionArgs[1]) || !Object.values(Direction).includes(positionArgs[2])) {
    console.error('Invalid position argument. It should be x,y,direction');
    process.exit(1);
  }

  let instructionsArgs = parsedArgs.instructions.split('');
  if (!instructionsArgs.every(ins => ['A', 'D', 'G'].includes(ins))) {
    console.error('Invalid instructions. Instructions can only be a combination of D, G and A');
    process.exit(1);
  }

  parsedArgs.grid = gridArgs;
  parsedArgs.position = [Number(positionArgs[0]), Number(positionArgs[1]), positionArgs[2]];
  parsedArgs.instructions = instructionsArgs.join('');
  return parsedArgs;
}
