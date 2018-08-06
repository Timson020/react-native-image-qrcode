import React, { Component } from 'react'
import { Platform, WebView, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import qr from 'qr.js'

import renderHtml from './html'

import { utf16to8, renderCanvas } from './module'

export default class Canvas extends Component {
	static propTypes = {
		value: PropTypes.string,
		size: PropTypes.number,
		bgColor: PropTypes.string,
		fgColor: PropTypes.string,
		imgUrl: PropTypes.string,
		imgSize: PropTypes.number,
	};

	static defaultProps = {
		value: 'https://github.com/Timson020',
		fgColor: 'white',
		bgColor: 'black',
		size: 150,
		imgUrl: '',
		imgSize: 0.4,
	};

	constructor(props) {
		super(props)
		this.state = {}
		this._utf16to8 = utf16to8.bind(this)
		this._renderCanvas = renderCanvas.bind(this)
	}

	render() {
		const { value, size, fgColor, bgColor, imgUrl, imgSize } = this.props
		
		const str = this._utf16to8(value)

		const context = { value, size, fgColor, bgColor, imgUrl, imgSize, cells: qr(str).modules }
		
		const renderMethod = renderCanvas.toString()
		
		return (
			<View style={{ width: size, height: size }}>
				<WebView 
					style={styles.webView}
					automaticallyAdjustContentInsets={false}
					contentInset={{ top: 0, right: 0, bottom: 0, left: 0 }}
					source={{ html: renderHtml(renderMethod, context) }}
					underlayColor="transparent"
					javaScriptEnabled={true}
					scrollEnabled={false}
					originWhitelist={['*']}
					scalesPageToFit={Platform.OS === 'android'} />
			</View>)
	}
}

const styles = StyleSheet.create({
	container: {
		width: 100,
		height: 100,
	},
	webView: {
		width: '100%',
		height: '100%',
	},
})
