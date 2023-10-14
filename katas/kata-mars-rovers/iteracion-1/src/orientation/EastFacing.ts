import Orientation from "./Orientation";
import SouthFacing from "./SouthFacing";
import NorthFacing from "./NorthFacing";
import Position from "../valueObjects/Position";

class EastFacing implements Orientation{
    cardinalSymbol(): string {
        return "E";
    }
    nextBackwardPositionRespectTo(position: Position): Position {
        return position.substractInX();
    }
    nextForwardPositionRespectTo(position: Position): Position {
        return position.addInX();
    }
    toTheLeft() {
        return new NorthFacing();
    }
    toTheRight() {
        return new SouthFacing();
    }

}

export default EastFacing;