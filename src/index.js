(function() {
	console.log('Happy hacking :)')
	const url = "https://platzi-avo.vercel.app/api/avo";

	async function fetchData() {
		const request = await fetch(url)
		const data = await request.json()
		return data
	}

	function createElementHtml(etiqueta) {
		return document.createElement(etiqueta)
	}

	function eachElement(arr) {
		const allTheNodos = []
		arr.forEach(element => {
			const image = createElementHtml('img')
			const title = createElementHtml('h2')
			const price = createElementHtml('div')
			const container = createElementHtml('div')
			container.append(image, title, price)
			allTheNodos.push(container)
		});
		document.body.append(...allTheNodos)
	}

	async function initial() {
		const dataRequest = await fetchData()
		eachElement(dataRequest.data)
	}

	initial()
})()
