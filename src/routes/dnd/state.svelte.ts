type FramePointerEvent = PointerEvent & { currentTarget: HTMLElement };
type Item = { blockName: string; component: string };

export class Frame {
	frameEl = $state<HTMLElement | null>(null);
	draggingEl = $state<HTMLElement | null>(null);
	offsetX = $state(0);
	offsetY = $state(0);

	createCard = (item: Item) => {
		return new Card(this, item);
	};

	onPointerUp = (e: FramePointerEvent) => {
		e.preventDefault();
		this.draggingEl = null;
	};

	onPointerMove = (e: FramePointerEvent) => {
		console.log("onPointerMove");
		e.preventDefault();
		if (!this.draggingEl) return;

		const newX = e.clientX - this.offsetX;
		const newY = e.clientY - this.offsetY;
		// I need to write these values to local storage or something on mouse up
		this.draggingEl.style.left = `${newX}px`;
		this.draggingEl.style.top = `${newY}px`;
	};
}
type CardPointerEvent = PointerEvent & { currentTarget: HTMLElement };

class Card {
	frame: Frame;
	item: Item;
	el = $state<HTMLElement | null>(null);

	constructor(frame: Frame, item: Item) {
		this.frame = frame;
		this.item = item;
	}

	onPointerDown = (e: CardPointerEvent) => {
		this.frame.draggingEl = e.currentTarget;

		const rect = e.currentTarget.getBoundingClientRect();

		this.frame.offsetX = e.clientX - rect.left;
		this.frame.offsetY = e.clientY - rect.top;
	};

	// onPointerMove = (e: CardPointerEvent) => {
	// 	console.log("onPointerMove");
	// 	e.preventDefault();
	// 	console.log("client", e.clientX, e.clientY);
	// 	console.log("offset", e.offsetX, e.offsetY);
	// };
}
