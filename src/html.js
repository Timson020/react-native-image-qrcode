function renderHtml (render, context) {
	const htmlString = `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
			<title>qrcode</title>
		</head>
		<style type="text/css">
			
			html,body{
				margin:0;
				padding:0;
				width: 100%;
				height: 100%;
			}

			body{
				display: flex;
				align-items: center;
				justify-content: center;
			}

			canvas{
				width: 100%;
				height: 100%;
				vertical-align: middle;
				transform: translate3d(0, 0, 0);
			}
		</style>
		<body>
			<canvas id="qrcode"></canvas>
			<script type="text/javascript">
				var qrcode = document.getElementById('qrcode')
				try {
					(${render}).call(${context}, qrcode)
				} catch (err) {
					alert(err)
				}
			</script>
		</body>
		</html>
	`
	return htmlString
}

export default renderHtml
