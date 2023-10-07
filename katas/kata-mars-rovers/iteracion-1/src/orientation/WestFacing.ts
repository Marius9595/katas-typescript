import Orientation from "./Orientation";
import NorthFacing from "./NorthFacing";
import SouthFacing from "./SouthFacing";

class WestFacing implements Orientation{
    toTheLeft() {
        return new SouthFacing();
    }
    toTheRight() {
        return new NorthFacing();
    }

}

export default WestFacing;