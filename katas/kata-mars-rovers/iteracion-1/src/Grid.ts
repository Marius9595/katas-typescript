import Position from "./valueObjects/Position";
import Orientation from "./orientation/Orientation";
import NorthFacing from "./orientation/NorthFacing";
import SouthFacing from "./orientation/SouthFacing";
import WestFacing from "./orientation/WestFacing";
import EastFacing from "./orientation/EastFacing";

class Grid{
    private readonly _width: number;
    private readonly _height: number;
    private readonly _obstacles: Position[];
    private xOrigin: number;
    private yOrigin: number;

    constructor(obstacles: Position[] = []){
        this._width = 10;
        this._height = 10;
        this._obstacles = obstacles;
        this.xOrigin = 0;
        this.yOrigin = 0;
    }

    nextForwardPositionAccordingTo(position: Position, orientation: Orientation) {
        let nextForwardPosition=  orientation.nextForwardPositionRespectTo(position);

        if(this.isThereAnObstacleIn(nextForwardPosition)){
            return position;
        }
        nextForwardPosition = this.wrapWhenItIsMovingForwardToEdgeOfGrid(orientation, nextForwardPosition);

        return nextForwardPosition;
    }

    private wrapWhenItIsMovingForwardToEdgeOfGrid(orientation: Orientation, nextForwardPosition: Position) {
        if (orientation instanceof NorthFacing) {
            nextForwardPosition = (
                nextForwardPosition.isEqualTo(new Position(nextForwardPosition.x, this._width)) ?
                    new Position(nextForwardPosition.x, this.yOrigin)
                    : nextForwardPosition
            );
        } else if (orientation instanceof WestFacing) {
            nextForwardPosition = (
                nextForwardPosition.isEqualTo(new Position(this.xOrigin-1, nextForwardPosition.y)) ?
                    new Position(this._width-1, nextForwardPosition.y)
                    : nextForwardPosition
            );
        } else if(orientation instanceof SouthFacing){
            nextForwardPosition = (
                nextForwardPosition.isEqualTo(new Position(nextForwardPosition.x, this.yOrigin-1)) ?
                    new Position(nextForwardPosition.x, this._height-1)
                    : nextForwardPosition
            );
        }else if(orientation instanceof EastFacing){
            nextForwardPosition = (
                nextForwardPosition.isEqualTo(new Position(this._width, nextForwardPosition.y)) ?
                    new Position(this.xOrigin, nextForwardPosition.y)
                    : nextForwardPosition
            );
        }
        return nextForwardPosition;
    }

    nextBackwardPositionAccordingTo(position: Position, orientation: Orientation) {
        let nextBackwardPosition=  orientation.nextBackwardPositionRespectTo(position);

        if(this.isThereAnObstacleIn(nextBackwardPosition)){
            return position;
        }

        nextBackwardPosition = this.wrapWhenItIsMovingBackwardToEdgeOfGrid(orientation, nextBackwardPosition);

        return nextBackwardPosition;
    }

    private isThereAnObstacleIn(nextForwardPosition: Position) {
        return this._obstacles.some(obstacle => obstacle.isEqualTo(nextForwardPosition));
    }

    private wrapWhenItIsMovingBackwardToEdgeOfGrid(orientation: Orientation, nextBackwardPosition: Position) {
        if (orientation instanceof NorthFacing) {
            nextBackwardPosition = (
                nextBackwardPosition.isEqualTo(new Position(nextBackwardPosition.x, -1)) ?
                    new Position(nextBackwardPosition.x, this._height-1)
                    : nextBackwardPosition
            );
        } else if (orientation instanceof WestFacing) {
            nextBackwardPosition = (
                nextBackwardPosition.isEqualTo(new Position(this._width, nextBackwardPosition.y)) ?
                    new Position(this.xOrigin, nextBackwardPosition.y)
                    : nextBackwardPosition
            );
        } else if(orientation instanceof SouthFacing){
            nextBackwardPosition = (
                nextBackwardPosition.isEqualTo(new Position(nextBackwardPosition.x, this._height)) ?
                    new Position(nextBackwardPosition.x, this.yOrigin)
                    : nextBackwardPosition
            );
        } else if(orientation instanceof EastFacing){
            nextBackwardPosition = (
                nextBackwardPosition.isEqualTo(new Position(this.xOrigin-1, nextBackwardPosition.y)) ?
                    new Position(this._width-1, nextBackwardPosition.y)
                    : nextBackwardPosition
            );
        }
        return nextBackwardPosition;
    }
}

export default Grid