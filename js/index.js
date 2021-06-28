const API_KEY = 'zV71fBPOCvdh97OH3Y3ELS1J7U1aoTkGabgbIEAl'
var app_div = document.querySelector('.App')
var img_wrapper = document.querySelector('.img-wrapper')

fetchAPI = () => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(responseText => showData(responseText))
}

showData = (responseText) => {
    var responseData = responseText
    console.log(responseData)

    //data da foto
    var createDate = document.createElement('p')
    createDate.innerHTML = responseData.date
    app_div.appendChild(createDate)

    //foto
    var createIMG = document.createElement('img')
    createIMG.src = responseData.hdurl
    img_wrapper.appendChild(createIMG)

    //titulo
    var createTitle = document.createElement('p')
    createTitle.innerHTML = `<b>${responseData.title}</b>`
    app_div.appendChild(createTitle)
    //copyright
    var createCopyright = document.createElement('p')
    createCopyright.innerHTML = `<b>Image Credit & Copyright:</b> ${responseData.copyright}`
    app_div.appendChild(createCopyright)

    //descrição
    var createDescription = document.createElement('p')
    createDescription.innerHTML = `<b>Explanation:</b> ${responseData.explanation}`
    app_div.appendChild(createDescription)
}

fetchAPI();