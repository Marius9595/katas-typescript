import Orientation from "./Orientation";
import EastFacing from "./EastFacing";

class NorthFacing implements Orientation{
    toTheRight() {
        return new EastFacing();
    }

}

export default NorthFacing