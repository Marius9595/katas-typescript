import Orientation from "./Orientation";
import EastFacing from "./EastFacing";
import WestFacing from "./WestFacing";
import Position from "../valueObjects/Position";

class NorthFacing implements Orientation{
    nextBackwardPositionRespectTo(position: Position): Position {
        return position.substractInY();
    }
    nextForwardPositionRespectTo(position: Position): Position {
        return position.addInY();
    }
    toTheLeft() {
        return new WestFacing();
    }
    toTheRight() {
        return new EastFacing();
    }

}

export default NorthFacing