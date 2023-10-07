import Orientation from "./Orientation";
import NorthFacing from "./NorthFacing";

class WestFacing implements Orientation{
    toTheRight() {
        return new NorthFacing();
    }

}

export default WestFacing;