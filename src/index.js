const categorias = (() => {
    const contenido = document.getElementById("Contenido")
    const bgColor = (color) => document.body.style.backgroundColor = color

    
    return {
        musica: (color) => {
            let texto = '<a href="https://www.youtube.com/channel/UCa3DVlGH2_QhvwuWlPa6MDQ" target="_blank">Jaime Altozano</a> analizando el disco "El mal querer" de Rosalía, una obra de arte'
            let url = '<br /><iframe width="560" height="315" src="https://www.youtube.com/embed/NgHXFTgaVT0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br />'
            return contenido.innerHTML = texto + url,
            bgColor(color)
        },
        cine: (color) => {
            let texto = 'Un clásico de Quentin Tarantino'
            let url = '<br /><iframe width="560" height="315" src="https://www.youtube.com/embed/s7EdQ4FqbhY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br />'
            return contenido.innerHTML = texto + url,
            bgColor(color)
        },
        comida: (color) => {
            let texto = 'Esto era más fácil de hacer de lo que creía'
            let url = '<br /><iframe width="560" height="315" src="https://www.youtube.com/embed/xurmz6BAUw8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br />'
            return contenido.innerHTML = texto + url,
            bgColor(color)
        }
    }
})()

const botonMusica = document.getElementById("Musica")
const botonCine = document.getElementById("Cine")
const botonComida = document.getElementById("Comida")

botonMusica.addEventListener("click", () => {
    categorias.musica()
})
botonCine.addEventListener("click", () => {
    categorias.cine()
})
botonComida.addEventListener("click", () => {
    categorias.comida()
})