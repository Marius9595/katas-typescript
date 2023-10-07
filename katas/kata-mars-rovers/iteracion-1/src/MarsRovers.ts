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
        if(this.isMoveForward(firstCommand)){
            this._position = this._orientation.positionForwardTo(this._position);
        }else if(this.isBackward(firstCommand)){
            this._position = this._orientation.positionBackwardTo(this._position);
        }else if(this.isTurnleft(firstCommand)){
            this._orientation = this._orientation.toTheLeft();
        }else if(this.isTurnRight(firstCommand)){
            this._orientation = this._orientation.toTheRight();
        }
        this.applyCommands(restCommands);
    }

    private isTurnRight(firstCommand: string) {
        return firstCommand == 'r';
    }

    private isTurnleft(firstCommand: string) {
        return firstCommand == 'l';
    }

    private isBackward(firstCommand: string) {
        return firstCommand == 'b';
    }

    private isMoveForward(firstCommand: string) {
        return firstCommand === 'f';
    }
}

export default MarsRovers