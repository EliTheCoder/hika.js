import Board from "./Board";
import MoveList from "./MoveList";
import Vector from "./Vector";

interface Rule {
	run: (moveList: MoveList, gameMoveList: MoveList, board: Board, pos: Vector) => MoveList;
}

export default Rule;
