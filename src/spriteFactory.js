function variantMaker(length, arr = []) { // for options
	const temp = []

	if (arr.length > 0) {
		for (let i = 0; i < arr.length; i++) {
			temp.push({ value: arr[i], display: arr[i] })
		}

		return temp
	} else {
		for (let i = 1; i <= length; i++) {
			if (i < 10) {
				temp.push({ value: `variant0${i}`, display: `Variant ${i}` })
			} else {
				temp.push({ value: `variant${i}`, display: `Variant ${i}` })
			}
		}
	
		return temp
	}
}

export const adventurer = [
	{
		name: 'eyes',
		label: 'eyes',
		options: variantMaker(26),
	},
	{
		name: 'eyebrows',
		label: 'eyebrows',
		options: variantMaker(10),
	},
	{
		name: 'mouth',
		label: 'mouth',
		options: variantMaker(30),
	},
	{
		name: 'accessoires',
		label: 'accessories',
		options: variantMaker(0, ['none', 'sunglasses', 'glasses', 'smallGlasses', 'mustache', 'blush', 'birthmark']),
	},
	{
		name: 'hair',
		label: 'hair',
		options: variantMaker(0, [
			'long01', 'long02', 'long03', 'long04', 'long05', 'long06', 'long07', 'long08', 'long09', 'long10',
			'short01', 'short02', 'short03', 'short04', 'short05', 'short06', 'short07', 'short08', 'short09', 'short10',
		]),
	},
	{
		name: 'skinColor',
		label: 'skin color',
		options: variantMaker(5),
	},
	{
		name: 'hairColor',
		label: 'hair color',
		options: variantMaker(0, [
			'red01', 'red02', 'red03', 'blonde01', 'blonde02', 
			'blonde03', 'brown01', 'brown02', 'black', 'gray', 'green', 'blue', 'pink', 'purple'
		]),
	},
]