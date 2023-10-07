import Orientation from "./Orientation";
import SouthFacing from "./SouthFacing";
import NorthFacing from "./NorthFacing";

class EastFacing implements Orientation{
    toTheLeft() {
        return new NorthFacing();
    }
    toTheRight() {
        return new SouthFacing();
    }

}

export default EastFacing;