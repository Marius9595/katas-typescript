import Orientation from "./Orientation";
import EastFacing from "./EastFacing";
import WestFacing from "./WestFacing";

class NorthFacing implements Orientation{
    toTheLeft() {
        return new WestFacing();
    }
    toTheRight() {
        return new EastFacing();
    }

}

export default NorthFacing