//Convert YYYY-MM-DD to Month DD, YYYY

export function formatDate(str) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
        'August', 'September', 'October', 'November', 'December']
    let arr = str.split('-')
    return `${months[+arr[1] - 1]} ${+arr[2]}, ${arr[0]}`
}

//Remove HTML tags from the project description text and trim leading and trailing white space

export function removeTags(str) {
    if ((str === null) || (str === ''))
        return false;
    else str = str.toString();
	return str.replace(/(<([^>]+)>)/ig, '').trim()
}

//Generate random date to fetch APOD API

export function generateRandomDate() {
    const date = new Date()
    const today = date.toISOString().split('T')[0].replace(/-/g, '-')

    let [maxYear, maxMonth, maxDay] = today.split('-')
	let randomYear, randomMonth, randomDay

    randomYear = 1996 + Math.ceil(Math.random() * (maxYear - 1996))

	if (randomYear === 2024) {
		randomMonth = Math.ceil(Math.random() * maxMonth)
		randomDay = Math.floor(Math.random() * maxDay)
	} else {
		randomMonth = Math.ceil(Math.random() * 12)
		randomDay = Math.ceil(Math.random() * 28)
	}

	const randomDate = [randomYear, randomMonth, randomDay].map(num => String(num).padStart(2, '0')).join('-')

    return randomDate
}

//Generate today's date

export function getToday() {
    const date = new Date()
    const today = date.toISOString().split('T')[0].replace(/-/g, '-')

    return today
}