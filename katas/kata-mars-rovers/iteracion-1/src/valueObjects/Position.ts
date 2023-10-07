class Position{
    constructor(
        private readonly x: number,
        private readonly y: number) {
    }

    addInY() {
        return new Position(this.x, this.y + 1);
    }

    substractInY() {
        return new Position(this.x, this.y - 1);
    }

    substractInX() {
        return new Position(this.x - 1, this.y);
    }
}

export default Position;