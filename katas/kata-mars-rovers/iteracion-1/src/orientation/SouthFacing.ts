import Orientation from "./Orientation";
import WestFacing from "./WestFacing";
import EastFacing from "./EastFacing";
import Position from "../valueObjects/Position";

class SouthFacing implements Orientation{
    nextBackwardPositionRespectTo(position: Position): Position {
        return undefined;
    }
    nextForwardPositionRespectTo(position: Position): Position {
        return position.substractInY();
    }
    toTheLeft() {
        return new EastFacing();
    }
    toTheRight() {
        return new WestFacing();
    }

}

export default SouthFacing;