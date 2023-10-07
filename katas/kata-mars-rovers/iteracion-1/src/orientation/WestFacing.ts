import Orientation from "./Orientation";
import NorthFacing from "./NorthFacing";
import SouthFacing from "./SouthFacing";
import Position from "../valueObjects/Position";

class WestFacing implements Orientation{
    positionForwardTo(position: Position): Position {
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