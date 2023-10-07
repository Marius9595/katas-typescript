import Orientation from "./Orientation";
import WestFacing from "./WestFacing";
import EastFacing from "./EastFacing";
import Position from "../valueObjects/Position";

class SouthFacing implements Orientation{
    positionBackwardTo(position: Position): Position {
        return undefined;
    }
    positionForwardTo(position: Position): Position {
        return undefined;
    }
    toTheLeft() {
        return new EastFacing();
    }
    toTheRight() {
        return new WestFacing();
    }

}

export default SouthFacing;