import Orientation from "./Orientation";
import SouthFacing from "./SouthFacing";
import NorthFacing from "./NorthFacing";
import Position from "../valueObjects/Position";

class EastFacing implements Orientation{
    positionBackwardTo(position: Position): Position {
        return position.substractInX();
    }
    positionForwardTo(position: Position): Position {
        return undefined;
    }
    toTheLeft() {
        return new NorthFacing();
    }
    toTheRight() {
        return new SouthFacing();
    }

}

export default EastFacing;