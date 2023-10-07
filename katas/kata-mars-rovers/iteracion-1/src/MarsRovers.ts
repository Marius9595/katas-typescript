import Position from "./valueObjects/Position";
import Orientation from "./orientation/Orientation";
import WestFacing from "./orientation/WestFacing";
import EastFacing from "./orientation/EastFacing";

class MarsRovers{

    private constructor(
        private _position: Position,
        private _orientation: Orientation
    ) {
    }


    get position(): Position {
        return this._position;
    }

    get orientation(): Orientation {
        return this._orientation;
    }

    static at(position: Position, orientation: Orientation) {
        return new MarsRovers(position,orientation);
    }

    applyCommands(commands: string[]) {
        if(commands.length === 0){
            return
        }

        const firstCommand = commands[0];
        const restCommands = commands.slice(1);
        if(firstCommand === 'b'){
            this._position = this._position.substractInY();
        }else if(firstCommand == 'f'){
            this._position = this._position.addInY();
        }else if(firstCommand == 'l'){
            this._orientation = new WestFacing();
        }else if(firstCommand == 'r'){
            this._orientation = new EastFacing();
        }
        this.applyCommands(restCommands);
    }
}

export default MarsRovers