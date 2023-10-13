import Position from "./valueObjects/Position";
import Orientation from "./orientation/Orientation";
import NorthFacing from "./orientation/NorthFacing";

class Grid{
    private readonly _width: number;
    private readonly _height: number;
    private readonly _obstacles: Position[];

    constructor(obstacles: Position[] = []){
        this._width = 10;
        this._height = 10;
        this._obstacles = obstacles;
    }

    nextForwardPositionAccordingTo(position: Position, orientation: Orientation) {
        let nextForwardPosition=  orientation.nextForwardPositionRespectTo(position);

        if(this.isThereAnObstacleIn(nextForwardPosition)){
            return position;
        }

        if(orientation instanceof NorthFacing){
            nextForwardPosition = nextForwardPosition.isEqualTo(new Position(0, this._height))?
                new Position(0,0)
                : nextForwardPosition;
        }

        return nextForwardPosition;
    }

    nextBackwardPositionAccordingTo(position: Position, orientation: Orientation) {
        const nextBackwardPosition=  orientation.nextBackwardPositionRespectTo(position);

        if(this.isThereAnObstacleIn(nextBackwardPosition)){
            return position;
        }

        return nextBackwardPosition;
    }

    private isThereAnObstacleIn(nextForwardPosition: Position) {
        return this._obstacles.some(obstacle => obstacle.isEqualTo(nextForwardPosition));
    }


}

export default Grid