import Board from "./Board";
import MoveList from "./MoveList";
import Vector from "./Vector";

interface Piece {
	getCurrentMoves: (board: Board, pos: Vector) => MoveList;
}

export default Piece;
