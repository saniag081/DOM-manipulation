(function() {
	const url = "https://platzi-avo.vercel.app";
	const appNode = document.querySelector('#app')

	appNode.addEventListener('click', (event) => {
		if (event.target.nodeName === 'H2') {
			window.alert('Hello');
		}
	})

	async function fetchData() {
		const request = await fetch(`${url}/api/avo`)
		const data = await request.json()
		return data
	}

	function formatPrice(price) {
		const newPrice = new window.Intl.NumberFormat("en-en", {
			style: 'currency',
			currency: 'USD'
		}).format(price)
		return newPrice
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
			const elementImage = createElementHtml('img')
			const ElementTitle = createElementHtml('h2')
			const ElementPrice = createElementHtml('div')
			const ElementContainer = createElementHtml('div')
			const priceFormatUS = formatPrice(element.price)
			ElementContainer.className = 'content'
			addTheTextToElements([
				{ elem: elementImage, src: `${url}${element.image}` },
				{ elem: ElementTitle, value: element.name },
				{ elem: ElementPrice, value: priceFormatUS}])
			ElementContainer.append(elementImage, ElementTitle, ElementPrice)
			allTheNodos.push(ElementContainer)
		});
		appNode.append(...allTheNodos)
	}

	async function initial() {
		const dataRequest = await fetchData()
		eachElement(dataRequest.data)
	}

	initial()
})()
