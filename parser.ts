import * as minimist from 'minimist';

export function parseArgs(args: string[]) {
  const parsedArgs = minimist(args.slice(2), {
    string: ['grid', 'position', 'instructions'],
    alias: { h: 'help' },
    unknown: (arg) => {
      console.error('Unknown option: ', arg);
      return false;
    }
  });
  
  parsedArgs.grid = parsedArgs.grid.split(',').map(Number);
  const [x, y, direction] = parsedArgs.position.split(',');
  parsedArgs.position = [Number(x), Number(y), direction];
  return parsedArgs;
}
