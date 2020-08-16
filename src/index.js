const categorias = (() => {
    const contenido = document.getElementById("Contenido")
    const aparecer = (() => contenido.style.opacity = "1")
    const bgColor = (color) => {
        let estiloBody = document.body.style
        estiloBody.backgroundColor = color
        estiloBody.color = "#003049"
    }

    
    return {
        musica: (color) => {
            let texto = 'Jaime Altozano analizando el disco "El mal querer" de Rosalía, una obra de arte. Si no lo conoces el bro te explica por qué es una obra de arte'
            let url = '<br /><iframe width="100%" height="315" src="https://www.youtube.com/embed/NgHXFTgaVT0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br />'
            return contenido.innerHTML = texto + url,
            bgColor(color),
            aparecer()
        },
        cine: (color) => {
            let texto = 'Para ver: Un clásico de Quentin Tarantino'
            let url = '<br /><iframe width="100%" height="315" src="https://www.youtube.com/embed/s7EdQ4FqbhY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br />'
            return contenido.innerHTML = texto + url,
            bgColor(color),
            aparecer()
        },
        comida: (color) => {
            let texto = 'Esto era más fácil de hacer de lo que creía'
            let url = '<br /><iframe width="100%" height="315" src="https://www.youtube.com/embed/xurmz6BAUw8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br />'
            return contenido.innerHTML = texto + url,
            bgColor(color),
            aparecer()
        }
    }
})()

const botonMusica = document.getElementById("Musica")
const botonCine = document.getElementById("Cine")
const botonComida = document.getElementById("Comida")

botonMusica.addEventListener("click", () => {
    categorias.musica('#ef476f')
})
botonCine.addEventListener("click", () => {
    categorias.cine("#f77f00")
})
botonComida.addEventListener("click", () => {
    categorias.comida('#fcbf49')
})