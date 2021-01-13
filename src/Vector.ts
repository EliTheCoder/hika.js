import VectorType from "./VectorType";

class Vector {
	pos: VectorType;
	d: number;
	constructor(v: VectorType) {
		this.pos = v;
		this.d = v.length;
	}
	translate(v: Vector | VectorType) {
		if (v instanceof Vector) {
			if (v.d !== this.d) {
				throw new Error("Can't translate vector with unmatching dimensions");
			} else {
				this.pos = this.pos.map((a, i) => a + v.pos[i]);
			}
		} else {
			if (v.length !== this.d) {
				throw new Error("Can't translate vector with unmatching dimensions");
			} else {
				this.pos = this.pos.map((a, i) => a + v[i]);
			}
		}
	}
}

export default Vector;
