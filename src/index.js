(function() {
	const url = "https://platzi-avo.vercel.app";
	const appNode = document.querySelector('#app')

	async function fetchData() {
		const request = await fetch(`${url}/api/avo`)
		const data = await request.json()
		return data
	}

	function createElementHtml(etiqueta) {
		return document.createElement(etiqueta)
	}

	function addTheTextToElements(data) {
		data.forEach(detail => {
			detail.src
				? detail.elem.src = detail.src
				: detail.elem.textContent = detail.value
		} )
	}

	function eachElement(arr) {
		const allTheNodos = []
		arr.forEach(element => {
			const image = createElementHtml('img')
			const title = createElementHtml('h2')
			const price = createElementHtml('div')
			const container = createElementHtml('div')
			addTheTextToElements([
				{ elem: image, src: `${url}${element.image}` },
				{ elem: title, value: element.name },
				{ elem: price, value: element.price}
			])
			container.append(image, title, price)
			allTheNodos.push(container)
		});
		appNode.append(...allTheNodos)
	}

	async function initial() {
		const dataRequest = await fetchData()
		eachElement(dataRequest.data)
	}

	initial()
})()
