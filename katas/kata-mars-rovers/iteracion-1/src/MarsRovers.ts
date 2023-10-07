import Position from "./valueObjects/Position";
import Orientation from "./orientation/Orientation";

class MarsRovers{

    private constructor(
        private _position: Position,
        private _orientation: Orientation
    ) {
    }


    get position(): Position {
        return this._position;
    }

    get orientation(): Orientation {
        return this._orientation;
    }

    static at(position: Position, orientation: Orientation) {
        return new MarsRovers(position,orientation);
    }

    applyCommands(commands: string[]) {
        if(commands.length === 0){
            return
        }

        const firstCommand = commands[0];
        const restCommands = commands.slice(1);
        if(this.hasToMoveForwardDueTo(firstCommand)){
            this._position = this._orientation.nextForwardPositionRespectTo(this._position);
        }else if(this.hasToMoveBackwardDueTo(firstCommand)){
            this._position = this._orientation.nextBackwardPositionRespectTo(this._position);
        }else if(this.hasToTurnleftDueTo(firstCommand)){
            this._orientation = this._orientation.toTheLeft();
        }else if(this.hasToTurnRightDueTo(firstCommand)){
            this._orientation = this._orientation.toTheRight();
        }
        this.applyCommands(restCommands);
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
}

export default MarsRovers