import Position from "../valueObjects/Position";

interface Orientation {
  toTheRight();
  toTheLeft();
  nextForwardPositionRespectTo(position: Position): Position;
  nextBackwardPositionRespectTo(position: Position): Position;
}

export default Orientation