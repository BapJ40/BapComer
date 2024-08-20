import closet from "./datos.js"

const iconoBuscar = document.querySelector("#buscar")
const vistaBusqueda = document.querySelector(".vista-busqueda")
const btnCerrarVista = document.querySelector("#btnCerrarBusqueda")

btnCerrarVista.addEventListener("click", () => {
    vistaBusqueda.classList.add('ocultar')
    document.body.classList.remove('scroll-lock');    
})

iconoBuscar.addEventListener('click', () => {
    vistaBusqueda.classList.remove('ocultar')
    document.body.classList.add('scroll-lock');
})

const campoBusqueda = document.querySelector("#campoBusqueda");
const busquedaCartas = document.querySelector("#busqueda-cartas");
campoBusqueda.addEventListener('input', () => {
    const valor = campoBusqueda.value
    const filtro = closet.filter(camisa => camisa.nombreCamisa.toLowerCase().includes(valor.toLowerCase()))

    busquedaCartas.innerHTML = ""
    filtro.forEach(camisa => {
        const cartita = document.createElement("div")
        cartita.classList.add("cartaBusqueda")
        const contendorImg = document.createElement("div")
        contendorImg.classList.add("contendorImg")

        const imgCamisa = document.createElement("img")
        imgCamisa.src = camisa.imgCamisaAL
        const nombreCamisa = document.createElement("p")
        nombreCamisa.classList.add("nombreCamisaBusqueda")
        nombreCamisa.textContent = camisa.nombreCamisa
        const precioCamisa = document.createElement("p")
        precioCamisa.classList.add("precioCamisaBusqueda")
        precioCamisa.textContent = camisa.precioCamisa
        const botonBolsa = document.createElement("button")
        botonBolsa.textContent = "Agregar al carrito"
        
        contendorImg.append(imgCamisa)
        cartita.append(contendorImg, nombreCamisa, precioCamisa, botonBolsa)
        busquedaCartas.appendChild(cartita)

        cartita.addEventListener('click', () => {
            vistaBusqueda.classList.add('ocultar')
            document.body.classList.remove('scroll-lock');    
            const cartaCamisas = document.querySelector(`#${camisa.nombreCamisa}`)

            if (cartaCamisas){
                cartaCamisas.scrollIntoView({ behavior: "smooth" });
            }
        });
    })
    
})

const botonModal = document.querySelector("#botonModal")
const cantModal = document.querySelector("#cantModal")
const cantidad_valor = document.querySelector("#cantidadModal")
botonModal.addEventListener("click", () => {
    const cantidad_compra = parseInt(cantModal.value)
    const cantidad = parseInt(cantidad_valor.textContent)

    function alerta_cierra(){
        const alerta_compra = document.querySelector("#alerta")
        const alerta_contenido = document.querySelector("#alerta_contenido")
        alerta_contenido.style.animation = "alerta_animacion_cierre 0.5s forwards"

        setTimeout(alerta_ocultar, 500)
        function alerta_ocultar(){
            alerta_compra.classList.add("oculto")
        }
    }

    if (cantidad_compra < 1) {
        const alerta_compra = document.querySelector("#alerta")
        const alerta_contenido = document.querySelector("#alerta_contenido")
        const alerta_compra_texto = document.querySelector("#texto_alerta")
        const barra_tiempo = document.querySelector(".barra_tiempo")
        const barra_tiempo_animacion = document.querySelector(".barra_tiempo_animacion")
        alerta_contenido.style.backgroundColor = "#FFC5C5"
        alerta_contenido.style.color = "#FF3737"
        alerta_contenido.style.animation = "alerta-animacion 0.5s forwards"
        alerta_compra.classList.remove("oculto")
        alerta_compra_texto.style.fontSize = "1.9rem"
        alerta_compra_texto.textContent = "Error"
        barra_tiempo.style.backgroundColor = "#FF3737"
        barra_tiempo.style.top = "26px"
        barra_tiempo_animacion.style.backgroundColor = "#FFC5C5"

        setTimeout(alerta_cierra, 5000)
    } else{
        if (cantidad_compra > cantidad){
            const alerta_compra = document.querySelector("#alerta")
            const alerta_contenido = document.querySelector("#alerta_contenido")
            const alerta_compra_texto = document.querySelector("#texto_alerta")
            const barra_tiempo = document.querySelector(".barra_tiempo")
            const barra_tiempo_animacion = document.querySelector(".barra_tiempo_animacion")
            alerta_contenido.style.backgroundColor = "#FFC5C5"
            alerta_contenido.style.color = "#FF3737"
            alerta_contenido.style.animation = "alerta-animacion 0.5s forwards"
            alerta_compra.classList.remove("oculto")
            alerta_compra_texto.style.fontSize = "1.9rem"
            alerta_compra_texto.textContent = "No hay suficientes productos"
            barra_tiempo.style.backgroundColor = "#FF3737"
            barra_tiempo.style.top = "26px"
            barra_tiempo_animacion.style.backgroundColor = "#FFC5C5"

            setTimeout(alerta_cierra, 5000)
        } else {
            const alerta_compra = document.querySelector("#alerta")
            const alerta_contenido = document.querySelector("#alerta_contenido")
            const alerta_compra_texto = document.querySelector("#texto_alerta")
            const barra_tiempo = document.querySelector(".barra_tiempo")
            const barra_tiempo_animacion = document.querySelector(".barra_tiempo_animacion")
            alerta_contenido.style.backgroundColor = "#90ee90"
            alerta_contenido.style.color = "#40aa40"
            alerta_contenido.style.animation = "alerta-animacion 0.5s forwards"
            alerta_compra.classList.remove("oculto")
            alerta_compra_texto.style.fontSize = "2.2rem"
            alerta_compra_texto.textContent = "Se ha agregado al carrito"
            barra_tiempo.style.backgroundColor = "#40aa40"
            barra_tiempo.style.top = "22px"
            barra_tiempo_animacion.style.backgroundColor = "#90ee90"

            setTimeout(alerta_cierra, 5000)
        }
    }  
})

const btn_cerrar_alerta = document.querySelector("#btn_cerrar_alerta")
btn_cerrar_alerta.addEventListener("click", () => {
    const alerta = document.querySelector("#alerta")
    const alerta_contenido = document.querySelector("#alerta_contenido")
    alerta_contenido.style.animation = "alerta_animacion_cierre 0.5s forwards"
    setTimeout( alerta.classList.add("oculto"), 500)
})

document.addEventListener("DOMContentLoaded", function() {
    const btnMenos = document.querySelector("#btnMenos");
    const btnMas = document.querySelector("#btnMas");
    const cantModal = document.querySelector("#cantModal");
  
    btnMenos.addEventListener("click", function() {
      if (cantModal.value > 1) {
        cantModal.value = parseInt(cantModal.value) - 1;
      }
    });
  
    btnMas.addEventListener("click", function() {
      cantModal.value = parseInt(cantModal.value) + 1;
    });
});

closet.forEach(camisas => {
    //Creamos los elementos
    const carta_presentacion = document.createElement("div")
    const contendor_img = document.createElement("div")
    const btn_vista_previa = document.createElement("p")
    const img_presentacion = document.createElement("img")
    const nombre_presentacion = document.createElement("p")
    const marca_presentacion = document.createElement("p")
    const precio_presentacion = document.createElement("p")

    //Agregamos atributos
    img_presentacion.src = camisas.img_principal
    btn_vista_previa.textContent = "visibility"
    btn_vista_previa.setAttribute("id", "btn_vista_previa") 
    nombre_presentacion.textContent = (camisas.nombre + ' - ' + camisas.tipo)
    marca_presentacion.textContent = camisas.marca
    if (camisas.ofertas) {
        precio_presentacion.textContent = ("$" + camisas.valor_oferta)
    } else {
        precio_presentacion.textContent = ("$" + camisas.valor)
    }

    //Agregamos las clases para el diseño
    carta_presentacion.classList.add("carta_presentacion")
    contendor_img.classList.add("contendor_img")
    img_presentacion.classList.add("img_presentacion")
    btn_vista_previa.classList.add("material-symbols-outlined")
    nombre_presentacion.classList.add("nombre_presentacion")
    marca_presentacion.classList.add("marca_presentacion")
    precio_presentacion.classList.add("precio_presentacion")

    //Agregamos los elementos
    if (camisas.selecciones) {
        contendor_img.append(img_presentacion, btn_vista_previa)
        carta_presentacion.append(contendor_img, nombre_presentacion, marca_presentacion, precio_presentacion)
        const grid_selecciones = document.querySelector("#GridSelecciones")
        grid_selecciones.appendChild(carta_presentacion)
        if (camisas.ofertas) {
            // Agregar a la sección de ofertas
            const grid_oferta = document.querySelector("#GridOferta")
            const carta_presentacion_oferta = carta_presentacion.cloneNode(true); // Clonar la carta para evitar que se mueva de la sección de selecciones
            grid_oferta.appendChild(carta_presentacion_oferta);
            
            const contendor_img_oferta = carta_presentacion_oferta.querySelector(".contendor_img")
            contendor_img_oferta.addEventListener("click", () => {
                mostrarModal(camisas)
            })
        }
    } else if (camisas.clubes) {
        contendor_img.append(img_presentacion, btn_vista_previa)
        carta_presentacion.append(contendor_img, nombre_presentacion, marca_presentacion, precio_presentacion)
        const grid_clubes = document.querySelector("#GridClubes")
        grid_clubes.appendChild(carta_presentacion)
        if (camisas.ofertas) {
            // Agregar a la sección de ofertas
            const grid_oferta = document.querySelector("#GridOferta")
            const carta_presentacion_oferta = carta_presentacion.cloneNode(true); // Clonar la carta para evitar que se mueva de la sección de clubes
            grid_oferta.appendChild(carta_presentacion_oferta);
            
            const contendor_img_oferta = carta_presentacion_oferta.querySelector(".contendor_img")
            contendor_img_oferta.addEventListener("click", () => {
                mostrarModal(camisas)
            })
        }
    }

    //Eventos
    function mostrarModal(camisas) {
        const modal_vista_previa = document.querySelector("#ModalVista")
        modal_vista_previa.style.display = 'block'
    
        document.body.classList.add('scroll-lock');

        const img_modal_principal = document.querySelector("#img_modal_principal")
        img_modal_principal.src = camisas.img_principal
        const img_modal_secundaria = document.querySelector("#img_modal_secudaria")
        img_modal_secundaria.src = camisas.img_secundaria

        const nombre_modal = document.querySelector("#nombre_modal")
        nombre_modal.textContent = nombre_presentacion.textContent

        const marca_modal = document.querySelector("#marca_modal")
        marca_modal.textContent = camisas.marca

        if (camisas.ofertas) {
            const precio_modal_oferta = document.querySelector("#precio_modal_oferta")
            const precio_modal = document.querySelector("#precio_modal")
            precio_modal.textContent = ("$" + camisas.valor)
            precio_modal_oferta.textContent = ("$" + camisas.valor_oferta)
            precio_modal.classList.add("oferta")
        } else {
            const precio_modal = document.querySelector("#precio_modal")
            precio_modal.textContent = ("$" + camisas.valor)
        }

        const cantidad_modal = document.querySelector("#cantidadModal")
        cantidad_modal.textContent = camisas.cantidad

        if(camisas.xs){
            const xs = document.querySelector(".xs")
            xs.classList.remove("oculto")
            xs.addEventListener("click", () => {
                xs.classList.add("talla_activa")
                const s = document.querySelector(".s")
                const m = document.querySelector(".m")
                const l = document.querySelector(".l")
                const xl = document.querySelector(".xl")
                s.classList.remove("talla_activa")
                m.classList.remove("talla_activa")
                l.classList.remove("talla_activa")
                xl.classList.remove("talla_activa")
                cantidad_modal.textContent = camisas.cantidad_xs
                const subcontenido_camisa = document.querySelector("#subcontenido_camisa")
                subcontenido_camisa.classList.remove("deshabilitado")

            })
        }

        if(camisas.s){
            const s = document.querySelector(".s")
            s.classList.remove("oculto")
            s.addEventListener("click", () => {
                const xs = document.querySelector(".xs")
                const m = document.querySelector(".m")
                const l = document.querySelector(".l")
                const xl = document.querySelector(".xl")
                xs.classList.remove("talla_activa")
                m.classList.remove("talla_activa")
                l.classList.remove("talla_activa")
                xl.classList.remove("talla_activa")
                s.classList.add("talla_activa")
                cantidad_modal.textContent = camisas.cantidad_s
                const subcontenido_camisa = document.querySelector("#subcontenido_camisa")
                subcontenido_camisa.classList.remove("deshabilitado")
            })
        }

        if(camisas.m){
            const m = document.querySelector(".m")
            m.classList.remove("oculto")
            m.addEventListener("click", () => {
                const xs = document.querySelector(".xs")
                const s = document.querySelector(".s")
                const l = document.querySelector(".l")
                const xl = document.querySelector(".xl")
                xs.classList.remove("talla_activa")
                s.classList.remove("talla_activa")
                l.classList.remove("talla_activa")
                xl.classList.remove("talla_activa")
                m.classList.add("talla_activa")
                cantidad_modal.textContent = camisas.cantidad_m
                const subcontenido_camisa = document.querySelector("#subcontenido_camisa")
                subcontenido_camisa.classList.remove("deshabilitado")
            })
        }

        if(camisas.l){
            const l = document.querySelector(".l")
            l.classList.remove("oculto")
            l.addEventListener("click", () => {
                const xs = document.querySelector(".xs")
                const s = document.querySelector(".s")
                const m = document.querySelector(".m")
                const xl = document.querySelector(".xl")
                xs.classList.remove("talla_activa")
                s.classList.remove("talla_activa")
                m.classList.remove("talla_activa")
                xl.classList.remove("talla_activa")
                l.classList.add("talla_activa")
                cantidad_modal.textContent = camisas.cantidad_l
                const subcontenido_camisa = document.querySelector("#subcontenido_camisa")
                subcontenido_camisa.classList.remove("deshabilitado")
            })
        }   

        if(camisas.xl){
            const xl = document.querySelector(".xl")
            xl.classList.remove("oculto")
            xl.addEventListener("click", () => {
                const xs = document.querySelector(".xs")
                const s = document.querySelector(".s")
                const m = document.querySelector(".m")
                const l = document.querySelector(".l")
                xs.classList.remove("talla_activa")
                s.classList.remove("talla_activa")
                m.classList.remove("talla_activa")
                l.classList.remove("talla_activa")
                xl.classList.add("talla_activa")
                cantidad_modal.textContent = camisas.cantidad_xl
                const subcontenido_camisa = document.querySelector("#subcontenido_camisa")
                subcontenido_camisa.classList.remove("deshabilitado")
            })
        }
    }       
    contendor_img.addEventListener("click", () => {
        mostrarModal(camisas)
    })
})  

const btn_cerrar_modal = document.querySelector("#btnCerrarModal")

btn_cerrar_modal.addEventListener("click", () => {
    const modal_vista_previa = document.querySelector("#ModalVista")
    modal_vista_previa.style.display = 'none'

    document.body.classList.remove('scroll-lock');

    const img_modal_principal = document.querySelector("#img_modal_principal")
    img_modal_principal.src = ''
    const img_modal_secundaria = document.querySelector("#img_modal_secudaria")
    img_modal_secundaria.src = ''

    const nombre_modal = document.querySelector("#nombre_modal")
    nombre_modal.textContent = ''

    const marca_modal = document.querySelector("#marca_modal")
    marca_modal.textContent = ''

    const precio_modal = document.querySelector("#precio_modal")
    precio_modal.textContent = ''

    precio_modal.classList.remove("oferta")

    const precio_modal_oferta = document.querySelector("#precio_modal_oferta")
    precio_modal_oferta.textContent = ''

    const cantidad_modal = document.querySelector("#cantidadModal")
    cantidad_modal.textContent = ''

    const xs = document.querySelector(".xs")
    xs.classList.remove("talla_activa")
    xs.classList.add("oculto")
    const s = document.querySelector(".s")
    s.classList.remove("talla_activa")
    s.classList.add("oculto")
    const m = document.querySelector(".m")
    m.classList.remove("talla_activa")
    m.classList.add("oculto")
    const l = document.querySelector(".l")
    l.classList.remove("talla_activa")
    l.classList.add("oculto")
    const xl = document.querySelector(".xl")
    xl.classList.remove("talla_activa")
    xl.classList.add("oculto")

    const tallas = document.querySelector("#tallas")
    tallas.classList.add("oculto")

    const cantidad = document.querySelector("#cantidad")
    cantidad.classList.add("oculto")

    const subcontenido_camisa = document.querySelector("#subcontenido_camisa")
    subcontenido_camisa.classList.add("deshabilitado")

    const cantModal = document.querySelector("#cantModal")
    cantModal.value = 1

    const img_modal_principal_carrusel = document.querySelector("#img_modal_principal_carrusel")
    const img_modal_secundaria_carrusel = document.querySelector("#img_modal_secundaria_carrusel")
    if(img_modal_secundaria_carrusel.style.display === 'block'){
        img_modal_secundaria_carrusel.style.display = 'none'
        img_modal_principal_carrusel.style.display = 'block'
    }

    const alerta_compra = document.querySelector("#alerta")
        alerta_compra.classList.add("oculto")
})

const slides = document.querySelectorAll('.carrusel-slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

document.getElementById('btnSiguiente').addEventListener('click', nextSlide);
document.getElementById('btnAnterior').addEventListener('click', prevSlide);

showSlide(currentSlide);


const felchaPaArriba = document.querySelector('#flechaPaArriba')

// Agregar un evento de scroll al documento
window.addEventListener('scroll', () => {
    // Obtener la posición actual del desplazamiento vertical
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Mostrar la flecha si el desplazamiento vertical es mayor que cierto valor
    if (scrollTop > 200) {
        felchaPaArriba.classList.add('aparecer');
    } else {
        felchaPaArriba.classList.remove('aparecer');
    }
});

felchaPaArriba.addEventListener('click', () => {
    window.scrollTo(0, 0)
})

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slides[slideIndex-1].style.display = "block";  
}