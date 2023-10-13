import Position from "./valueObjects/Position";
import Orientation from "./orientation/Orientation";

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
        const nextForwardPosition=  orientation.nextForwardPositionRespectTo(position);

        if(this.isThereAnObstacleIn(nextForwardPosition)){
            return position;
        }

        return nextForwardPosition;
    }

    private isThereAnObstacleIn(nextForwardPosition: Position) {
        return this._obstacles.some(obstacle => obstacle.isEqualTo(nextForwardPosition));
    }

    nextBackwardPositionAccordingTo(position: Position, orientation: Orientation) {
        return orientation.nextBackwardPositionRespectTo(position);
    }
}

export default Grid