const ulElement = document.querySelector('#ol-content')
const cityElement = document.querySelector('#city')

cityElement.onchange = (e) => {
    const value = cityElement.value
    ulElement.className = ''
    ulElement.classList.add(value) 
}

