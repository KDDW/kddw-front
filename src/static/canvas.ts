const canvas = document.getElementById("canvas") as HTMLCanvasElement | null;
const ctx = canvas?.getContext("2d");

class Hexagon {
	public x: number;
	public y: number;
	public r: number;
	public filled: boolean;
	public c: string;
	public a: number;
	public dx: number;
	public dy: number;
	public shadowColor: string;
	public ctx?: CanvasRenderingContext2D | null;

	constructor(x: number, y: number, r: number) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.filled = this.randomYesNo();
		this.c = colors.orange;
		this.a = (2 * Math.PI) / 6;
		this.dx = Math.random() * MAX_SPEED + MIN_SPEED;
		this.dx *= this.randomYesNo() ? 1 : -1;
		this.dy = Math.random() * MAX_SPEED + MIN_SPEED;
		this.dy *= this.randomYesNo() ? 1 : -1;
		this.shadowColor = this.randomYesNo() ? colors.orange : colors.red;
		this.ctx = ctx;
	}

	draw() {
		ctx?.beginPath();
		for (let i = 0; i < 6; i++) {
			ctx?.lineTo(
				this.x + this.r * Math.cos(this.a * i),
				this.y + this.r * Math.sin(this.a * i)
			);
		}
		ctx?.closePath();
		if (this.filled) {
			ctx!.fillStyle = this.c;
			ctx?.fill();
		} else {
			ctx!.strokeStyle = this.c;
			ctx?.stroke();
		}
	}
	animate() {
		this.x += this.dx;
		this.y += this.dy;

		ctx!.shadowColor = this.shadowColor;
		ctx!.shadowBlur = 40;
		ctx!.shadowOffsetX = 0;
		ctx!.shadowOffsetY = 0;

		if (this.x + this.r > canvas!.width || this.x - this.r < 0)
			this.dx = -this.dx;
		if (this.y + this.r > canvas!.height || this.y - this.r < 0)
			this.dy = -this.dy;
		this.draw();
	}

	randomYesNo() {
		return Math.floor(Math.random() * 2) == 1 ? true : false;
	}
}
const MAX_RADIUS = 15;
const MIN_RADIUS = 10;
const MAX_SPEED = 0.1;
const MIN_SPEED = 0.05;
let HEX_NUMBER = 45;
let shouldAnimate = true;
const colors = {
	orange: "#F0883D",
	red: "#F0DE3D",
};

const hexagons: Hexagon[] = [];

const createHexagons = (n: number) => {
	for (let i = 0; i < n; i++) {
		let r = Math.floor(Math.random() * MAX_RADIUS + MIN_RADIUS);
		let x = Math.random() * (canvas!.width - r * 2) + r;
		let y = Math.random() * (canvas!.height - r * 2) + r;
		let hex = new Hexagon(x, y, r);
		hexagons.push(hex);
	}
};

const updateHexagons = () => {
	for (let i = 0; i < hexagons.length; i++) {
		let r = Math.floor(Math.random() * MAX_RADIUS + MIN_RADIUS);
		let x = Math.random() * (canvas!.width - r * 2) + r;
		let y = Math.random() * (canvas!.height - r * 2) + r;
		hexagons[i].r = r;
		hexagons[i].x = x;
		hexagons[i].y = y;
	}
};

const Update = () => {
	ctx?.clearRect(0, 0, canvas!.width, canvas!.height);
	for (let i = 0; i < hexagons.length; i++) {
		hexagons[i].animate();
	}
	if (shouldAnimate) requestAnimationFrame(Update);
};

const resizeCanvas = () => {
	canvas!.width = window.innerWidth;
	canvas!.height = window.innerHeight - 4;
};

const alterHexagonsNumber = () => {
	if (canvas!.width <= 1366) HEX_NUMBER = 30;
	if (canvas!.width <= 1024) HEX_NUMBER = 15;
};

const runAfterResizeEnd = (fnc: any) => {
	shouldAnimate = false;
	// @ts-ignore
	clearTimeout(window.resizeFinished);
	// @ts-ignore
	window.resizeFinished = setTimeout(fnc, 250);
};

const animateAfterResize = () => {
	runAfterResizeEnd(() => {
		shouldAnimate = true;
		updateHexagons();
		Update();
	});
};

const init = () => {
	resizeCanvas();
	animateAfterResize();
	alterHexagonsNumber();
};

createHexagons(HEX_NUMBER);
init();
window.onresize = init;
