let menu = document.getElementById("menu")

let menuBarras = document.getElementById("menuBarras")
let menuX = document.getElementById("menuX")

function Menu() {

    if (menu.classList.contains("menu-fechado")) {
        // abrir o menu

        menu.classList.remove("menu-fechado")

        // mostrar ícone X e esconder o ícone barras

        menuBarras.style.display = "none"

        menuX.style.display = "inline"
    }
    else {
        // fechar o menu
        menu.classList.add("menu-fechado")

        // mostrar o ícone barras e esconder o ícone X

        menuBarras.style.display = "inline"

        menuX.style.display = "none"
    }
}

onresize = () => {

    menu.classList.remove("menu-fechado")

    menuBarras.style.display = "none"

    menuX.style.display = "inline"
}