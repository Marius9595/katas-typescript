class Position{
    constructor(
        private readonly _x: number,
        private readonly _y: number) {
    }

    get x(){
        return this._x;
    }

    get y(){
        return this._y;
    }

    addInY() {
        return new Position(this.x, this._y + 1);
    }

    substractInY() {
        return new Position(this.x, this._y - 1);
    }

    substractInX() {
        return new Position(this.x - 1, this._y);
    }

    addInX() {
        return new Position(this.x + 1, this._y);
    }

    isEqualTo(position: Position) {
        return this.x === position.x && this.y === position.y;
    }
}

export default Position;