# iHoover

Technical test based on a hoover movement simulation.

## How to use it ?

To execute iHoover use the following commands:

- Install node and typescript
- Run `npm i` to install dependencies
- Compile the files `tsc iHoover.ts enums.ts classes.ts parser.ts`
- Execute iHoover `node iHoover.js --grid=[x,y] --position=[x,y,direction] --instructions=[instructions]`

### Usage

`node iHoover.js --grid=[x,y] --position=[x,y,direction] --instructions=[instructions]`

All parameters are required and need to be provided with the following formatting:

- To configure the grid pass the `--grid` parameter with the width as `x` and the height as `y`. Both must be greater than 1, minimum size is 2, 2.
  - Ex: Generate a grid with a width of 10 and a height of 12 like this: `--grid=10,12`
- To set the starting position and direction pass the `--position` parameter with the x-coordinate as `x`, the y-coordinate as `y` and the direction as `direction`. The direction must be given using the English cardinal directions: N,E,W,S for North, East, West, South. The starting position can't be off-grid.
  - Ex: Start at x=2, y=4 and facing north like this: `--position=2,4,N`
- Provide the instructions set with the `--instructions` parameter. Instructions can only be D to turn right, G to turn left and A to go forward. Instructions leading the hoover off-grid are ignored.
  - Ex: Turn left, go forward two times and turn right like this: `--instructions=GAAD`
