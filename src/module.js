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
	const sizeDuo = size * 2
	const ctx = canvas.getContext('2d')
	canvas.width = sizeDuo
	canvas.height = sizeDuo

	canvas.style.width = `${size}px`
	canvas.style.height = `${size}px`
	
	ctx.fillRect(0, 0, sizeDuo, sizeDuo)
	
	const cellWidth = sizeDuo / cells.length
	const cellHeight = sizeDuo / cells.length
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

export function imgOnLoad() {
	try {
		const { width, height } = this
		const percentage = width / height
		const containerSize = qrcode.width
		const imgW = containerSize * context.imgSize * ( width > height ?  1 : percentage )
		const imgH = containerSize * context.imgSize * (width > height ? (1 / percentage) : 1)
		const ctx = qrcode.getContext('2d')
		if (context.imgSize >= 1) return throw new Error('imageSize is to big')
		ctx.drawImage(this, (containerSize - imgW) / 2, (containerSize - imgH) / 2, imgW, imgH)
	} catch (err) {
		alert(err)
	}
}
