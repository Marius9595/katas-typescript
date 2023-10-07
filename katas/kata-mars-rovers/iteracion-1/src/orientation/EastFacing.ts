import Orientation from "./Orientation";
import SouthFacing from "./SouthFacing";

class EastFacing implements Orientation{
    toTheRight() {
        return new SouthFacing();
    }

}

export default EastFacing;