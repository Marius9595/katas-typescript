import Orientation from "./Orientation";
import WestFacing from "./WestFacing";
import EastFacing from "./EastFacing";

class SouthFacing implements Orientation{
    toTheLeft() {
        return new EastFacing();
    }
    toTheRight() {
        return new WestFacing();
    }

}

export default SouthFacing;