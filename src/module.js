export function utf16to8(str) {
	let out, i, len, c
	out = ''
	len = str.length
	for (i = 0; i < len; i++) {
		c = str.charCodeAt(i)
		if ((c >= 0x0001) && (c <= 0x007F)) {
			out += str.charAt(i)
    } else if (c > 0x07FF) {
			out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F))
			out += String.fromCharCode(0x80 | ((c >>  6) & 0x3F))
			out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F))
    } else {
			out += String.fromCharCode(0xC0 | ((c >>  6) & 0x1F))
			out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F))
    }
  }
	return out
}

export function renderCanvas(canvas) {
	const { size, fgColor, bgColor, cells } = this
	const ctx = canvas.getContext('2d')
	canvas.width = size
	canvas.height = size

	canvas.style.width = `${size}px`
	canvas.style.height = `${size}px`
	
	ctx.fillRect(0, 0, size, size)
	
	const cellWidth = size / cells.length
	const cellHeight = size / cells.length
	const nRoundedWidth = Math.round(cellWidth)
	const nRoundedHeight = Math.round(cellHeight)
	cells.forEach((row, rowIndex) => {
		row.forEach((column, columnIndex) => {
			const nLeft = columnIndex * cellWidth
			const nTop = rowIndex * cellHeight
			ctx.fillStyle = ctx.strokeStyle = column ? bgColor : fgColor
			ctx.lineWidth = 1
			ctx.fillRect(nLeft, nTop, cellWidth, cellHeight)
			ctx.strokeRect(Math.floor(nLeft) + 0.5, Math.floor(nTop) + 0.5, nRoundedWidth, nRoundedHeight)
			ctx.strokeRect( Math.ceil(nLeft) - 0.5, Math.ceil(nTop) - 0.5, nRoundedWidth, nRoundedHeight)
		})
	})
}
