import Orientation from "./Orientation";
import NorthFacing from "./NorthFacing";
import SouthFacing from "./SouthFacing";
import Position from "../valueObjects/Position";

class WestFacing implements Orientation{
    nextBackwardPositionRespectTo(position: Position): Position {
        return undefined;
    }
    nextForwardPositionRespectTo(position: Position): Position {
        return position.substractInX();
    }
    toTheLeft() {
        return new SouthFacing();
    }
    toTheRight() {
        return new NorthFacing();
    }

}

export default WestFacing;