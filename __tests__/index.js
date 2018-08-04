import 'react-native'
import React from 'react'

import renderer from 'react-test-renderer'

import QRCode from '../index.js'

test('renders correctly', () => {
	const tree = renderer.create(<PostArea title="title" text="text" color="red" />).toJSON()
	expect(tree).toMatchSnapshot()
})

it('renders correctly', () => {
	const tree = renderer.create(<App />)
	console.info(tree)
})
