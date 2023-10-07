class Position{
    constructor(
        private readonly x: number,
        private readonly y: number) {
    }

    addInY() {
        return new Position(this.x, this.y + 1);
    }
}

export default Position;