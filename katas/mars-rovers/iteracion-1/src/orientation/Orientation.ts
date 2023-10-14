import Position from "../valueObjects/Position";

interface Orientation {
  toTheRight();
  toTheLeft();
  nextForwardPositionRespectTo(position: Position): Position;
  nextBackwardPositionRespectTo(position: Position): Position;
  cardinalSymbol():string
}

export default Orientation