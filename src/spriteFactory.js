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

const openPeepsHead = [
	'afro', 'bangs', 'bantuKnots', 'bear', 'bun', 'buns', 
	'cornrows', 'dreads1', 'flatTop', 'flatTopLong', 'grayBun', 'grayMedium', 
	'grayShort', 'hatBeanie', 'hatHip', 'hijab', 'longBangs', 'longCurly', 
	'medium1', 'medium2', 'mediumBangs', 'mohawk', 'noHair1', 'noHair2', 
	'pomp', 'shaved1', 'shaved2', 'short1', 'short2','turban', 'twists', 'twists2'
]

const openPeepsFace = [
	'angryWithFang', 'awe', 'blank', 'calm', 'cheeky', 'concerned', 
	'concernedFear', 'contempt', 'cute', 'cyclops', 'driven', 'eatingHappy', 
	'explaining', 'eyesClosed', 'fear', 'hectic', 'lovingGrin1', 'lovingGrin2', 
	'monster', 'old', 'rage', 'serious', 'smile', 'smileBig', 'smileLOL', 
	'smileTeethGap', 'solemn', 'suspicious', 'tired', 'veryAngry'
]

const openPeepsFaceAccessories = ['eyepatch', 'glasses', 'glasses2', 'glasses3', 'glasses4', 'glasses5', 'sunglasses', 'sunglasses2']

const openPeepsClothe = ['red01', 'orange01', 'yellow01', 'green01', 'tail01', 'blue01', 'pink01']

export const openPeeps = [
	{
		name: 'head',
		label: 'head',
		options: variantMaker(0, openPeepsHead)
	},
	{
		name: 'face',
		label: 'face',
		options: variantMaker(0, openPeepsFace)
	},
	{
		name: 'accessories',
		label: 'accessories',
		options: variantMaker(0, openPeepsFaceAccessories)
	},
	{
		name: 'skinColor',
		label: 'skin color',
		options: variantMaker(5)
	},
	{
		name: 'clothingColor',
		label: 'clothing color',
		options: variantMaker(0, openPeepsClothe)
	},
	{
		name: 'hairColor',
		label: 'hair color',
		options: variantMaker(10)
	},
]

const bigSmileMouth = ['openedSmile', 'unimpressed', 'gapSmile', 'openSad', 'teethSmile', 'awkwardSmile', 'braces', 'kawaii']

const biSmileEyes = ['cheery', 'normal', 'confused', 'starstruck', 'winking', 'sleepy', 'sad', 'angry']

const biSmileHair = ['shortHair', 'mohawk', 'wavyBob', 'bowlCutHair', 'curlyBob', 'straightHair', 'braids', 'shavedHead', 'bunHair', 'froBun', 'bangs', 'halfShavedHead', 'curlyShortHair']

const bigSmileAccessories = ['catEars', 'glasses', 'sailormoonCrown', 'clownNose', 'sleepMask', 'sunglasses', 'faceMask', 'mustache']

export const bigSmile = [
	{
		name: 'mouth',
		label: 'mouth',
		options: variantMaker(0, bigSmileMouth)
	},
	{
		name: 'eyes',
		label: 'eyes',
		options: variantMaker(0, biSmileEyes)
	},
	{
		name: 'hair',
		label: 'hair',
		options: variantMaker(0, biSmileHair)
	},
	{
		name: 'accessories',
		label: 'accessories',
		options: variantMaker(0, bigSmileAccessories)
	},
	{
		name: 'skinColor',
		label: 'skin color',
		options: variantMaker(8)
	},
	{
		name: 'hairColor',
		label: 'hair color',
		options: variantMaker(8)
	},
]