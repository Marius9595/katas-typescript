import Position from "./valueObjects/Position";
import Orientation from "./orientation/Orientation";

class Grid{
    private readonly _width: number;
    private readonly _height: number;

    constructor(){
        this._width = 10;
        this._height = 10;
    }

    nextForwardPositionAccordingTo(position: Position, orientation: Orientation) {
        return orientation.nextForwardPositionRespectTo(position);
    }
}

export default Grid