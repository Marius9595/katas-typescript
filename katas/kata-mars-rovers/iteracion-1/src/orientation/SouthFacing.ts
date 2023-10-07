import Orientation from "./Orientation";
import WestFacing from "./WestFacing";
import EastFacing from "./EastFacing";
import Position from "../valueObjects/Position";

class SouthFacing implements Orientation{
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