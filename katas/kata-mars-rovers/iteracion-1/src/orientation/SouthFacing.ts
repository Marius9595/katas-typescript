import Orientation from "./Orientation";
import WestFacing from "./WestFacing";
import EastFacing from "./EastFacing";
import Position from "../valueObjects/Position";

class SouthFacing implements Orientation{
    cardinalSymbol(): string {
        return "S";
    }
    nextBackwardPositionRespectTo(position: Position): Position {
        return position.addInY();
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