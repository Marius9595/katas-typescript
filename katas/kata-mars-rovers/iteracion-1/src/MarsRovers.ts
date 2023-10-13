import Position from "./valueObjects/Position";
import Orientation from "./orientation/Orientation";
import Grid from "./Grid";
import NorthFacing from "./orientation/NorthFacing";

class MarsRovers{
    private constructor(
        private _position: Position,
        private _orientation: Orientation,
        private readonly _grid: Grid
    ) {
    }

    applyCommands(commands: string[]) {
        if(commands.length === 0){
            return `${this._position.x}:${this._position.y}:${this._orientation.cardinalSymbol()}`
        }

        const firstCommand = commands[0];
        const restCommands = commands.slice(1);
        if(this.hasToMoveForwardDueTo(firstCommand)){
            const newPosition = this._grid.nextForwardPositionAccordingTo(this._position, this._orientation);
            if(newPosition.isEqualTo(this._position)){
                return `O:${this._position.x}:${this._position.y}:${this._orientation.cardinalSymbol()}`
            }
            this._position = newPosition;
        }else if(this.hasToMoveBackwardDueTo(firstCommand)){
            this._position = this._grid.nextBackwardPositionAccordingTo(this._position, this._orientation);
        }else if(this.hasToTurnleftDueTo(firstCommand)){
            this._orientation = this._orientation.toTheLeft();
        }else if(this.hasToTurnRightDueTo(firstCommand)){
            this._orientation = this._orientation.toTheRight();
        }
        return this.applyCommands(restCommands);
    }

    private hasToTurnRightDueTo(firstCommand: string) {
        return firstCommand == 'r';
    }

    private hasToTurnleftDueTo(firstCommand: string) {
        return firstCommand == 'l';
    }

    private hasToMoveBackwardDueTo(firstCommand: string) {
        return firstCommand == 'b';
    }

    private hasToMoveForwardDueTo(firstCommand: string) {
        return firstCommand === 'f';
    }

    static in(grid: Grid) {
        return new MarsRovers(
            new Position(0, 0),
            new NorthFacing(),
            grid
        );
    }
}

export default MarsRovers