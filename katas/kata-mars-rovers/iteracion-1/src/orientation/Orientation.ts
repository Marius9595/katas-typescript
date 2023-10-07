import Position from "../valueObjects/Position";

interface Orientation {
  toTheRight();
  toTheLeft();
  positionForwardTo(position: Position): Position
}

export default Orientation