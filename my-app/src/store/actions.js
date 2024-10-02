export const CELL_CLICK = 'CELL_CLICK';
export const HANDLE_RESTART = 'HANDLE_RESTART';

export const cellClick = (index) => ({
	type: CELL_CLICK,
	index,
});

export const handleRestart = () => ({
	type: HANDLE_RESTART,
});
