import Position from "./valueObjects/Position";
import Orientation from "./orientation/Orientation";
import position from "./valueObjects/Position";
import orientation from "./orientation/Orientation";

class MarsRovers{

    private constructor(
        private readonly  _position: Position,
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

    }
}

export default MarsRovers