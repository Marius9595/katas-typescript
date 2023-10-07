import Position from "./valueObjects/Position";
import Orientation from "./orientation/Orientation";

class MarsRovers{

    private constructor(
        private _position: Position,
        private readonly  _orientation: Orientation
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
        if(commands[0] === 'b'){
            this._position = new Position(0,-1);
            return
        }

        this._position = new Position(0,1);
    }
}

export default MarsRovers