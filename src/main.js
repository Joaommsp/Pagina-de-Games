console.log('JavaScript code starting...')

const cabecalho = document.querySelector('#cabecalho')
document.addEventListener('scroll', () => {
  const posicao = window.pageYOffset
  if (posicao == 0) {
    cabecalho.style.backgroundColor = 'transparent'
    cabecalho.style.backdropFilter = 'blur( 0 )'
  } else {
    cabecalho.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'
    cabecalho.style.backdropFilter = 'blur( 15px )'
    cabecalho.style.transition = 'all linear 0.5s'
  }
})

function consumirAPI() {
  let url =
    'https://api.rawg.io/api/games?key=7a244728cfb14f9e91a3d7d899cd0084&dates=2020-01-01,2022-10-27&ordering=-added'
  fetch(url).then(function (response) {
    response.json().then(function (data) {
      console.log(data)
      mostrarTela(data)
    })
  })
}

function mostrarTela(dados) {
  let minhaDiv = document.getElementById('card_api')
  for (let item = 0; item <= 5; item++) {
    var elemento = ''
    elemento += '<div class="cards">'
    elemento += `<img title="${dados.results[item].name}"  src="${dados.results[item].background_image}">`
    elemento += `<p id="nome_jogo">${dados.results[item].name}</p>`
    elemento += `<p id="avaliacao_jogo">${dados.results[item].rating} <img src="./Public/star.svg" alt=""></p>`
    elemento += '<h2>Disponível para:</h2>'
    for (
      let plataforma = 0;
      plataforma <= dados.results[item].parent_platforms.length;
      plataforma++
    ) {
      if (
        dados.results[item].parent_platforms[plataforma]?.platform?.name !=
        undefined
      ) {
        elemento += `<p id="plataformas_jogo">${dados.results[item].parent_platforms[plataforma]?.platform?.name}</p>`
      }
    }
    elemento += `<a href="#" id="link_baixar">COMPRAR</a>`
    elemento += '</div>'
    minhaDiv.innerHTML += elemento
  }
}

consumirAPI()

function getLancamentos() {
  let url =
    'https://api.rawg.io/api/games?key=f3a2f20205384b9189ee65203bfef8c7&dates=2022-08-01,2022-12-30&platforms=18,1,7'
  fetch(url).then(function (response) {
    response.json().then(function (data) {
      console.log(data)
      mostrarLancamentos(data)
    })
  })
}

function mostrarLancamentos(dados) {
  let minhaDiv = document.getElementById('card_api_lancamentos')
  for (let item = 0; item <= 5; item++) {
    var elemento = ''
    elemento += '<div class="cards">'
    elemento += `<img title="${dados.results[item].name}" src="${dados.results[item].background_image}">`
    elemento += `<p id="nome_jogo">${dados.results[item].name}</p>`
    elemento += `<p id="avaliacao_jogo">${dados.results[item].rating} <img src="./Public/star.svg" alt=""></p>`
    elemento += '<h2>Disponível para:</h2>'
    for (
      let plataforma = 0;
      plataforma <= dados.results[item].parent_platforms.length;
      plataforma++
    ) {
      if (
        dados.results[item].parent_platforms[plataforma]?.platform?.name !=
        undefined
      ) {
        elemento += `<p id="plataformas_jogo">${dados.results[item].parent_platforms[plataforma]?.platform?.name}</p>`
      }
    }
    elemento += `<a href="#" id="link_baixar">COMPRAR</a>`
    elemento += '</div>'
    minhaDiv.innerHTML += elemento
  }
}

getLancamentos()

function getAvaliacoes() {
  let url =
    'https://api.rawg.io/api/games?key=f3a2f20205384b9189ee65203bfef8c7&dates=2022-01-01,2022-12-31&ordering=-rating'
  fetch(url).then(function (response) {
    response.json().then(function (data) {
      console.log(data)
      mostrarAvaliacoes(data)
    })
  })
}

function mostrarAvaliacoes(dados) {
  let minhaDiv = document.getElementById('card_api_rate')
  for (let item = 0; item <= 5; item++) {
    var elemento = ''
    elemento += '<div class="cards">'
    elemento += `<img title="${dados.results[item].name}" src="${dados.results[item].background_image}">`
    elemento += `<p id="nome_jogo">${dados.results[item].name}</p>`
    elemento += `<p id="avaliacao_jogo">${dados.results[item].rating} <img src="./Public/star.svg" alt=""></p>`
    elemento += '<h2>Disponível para:</h2>'
    for (
      let plataforma = 0;
      plataforma <= dados.results[item].parent_platforms.length;
      plataforma++
    ) {
      if (
        dados.results[item].parent_platforms[plataforma]?.platform?.name !=
        undefined
      ) {
        elemento += `<p id="plataformas_jogo">${dados.results[item].parent_platforms[plataforma]?.platform?.name}</p>`
      }
    }
    elemento += `<a href="#" id="link_baixar">COMPRAR</a>`
    elemento += '</div>'
    minhaDiv.innerHTML += elemento
  }
}
getAvaliacoes()
