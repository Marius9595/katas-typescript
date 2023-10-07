import Orientation from "./Orientation";
import WestFacing from "./WestFacing";

class SouthFacing implements Orientation{
    toTheRight() {
        return new WestFacing();
    }

}

export default SouthFacing;