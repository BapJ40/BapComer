// class producto = {
//      id: "identificador, int"
//      nombre: "nombre del producto, seria un string",
//      marca: "marca del producto, seria un string",
//      img_Principal: "Imagen principal o de presentacion, URL",
//      img_Secudaria: "Imagen secudaria de presentacion, URL",
//      img_ExtraI: "Imagen extra de presentacion, URL",
//      categoria: "puede ser dependiendo del producto, TRUE O FALSE",
//      categoria_cantidad: "seria la cantidad de cada tipo del producto, int",
//      cantidad: "seria la suma de cantidad tipos, int",
//      valor: "seria el precio del producto, int",
// };

//ESTRUCTURA BASE DE UN PRODUCTO ////////////////////////////////
// class producto {
//     constructor(nombre, marca, img_Principal, img_Secudaria, img_ExtraI, categoria, categoria_cantidad, cantidad, valor) {
//         this.nombre =  nombre;
//         this.marca =  marca;
//         this.img_Principal =  img_Principal;
//         this.img_Secudaria =  img_Secudaria;
//         this.img_ExtraI =  img_ExtraI;
//         this.categoria =  categoria;
//         this.categoria_cantidad =  categoria_cantidad;
//         this.cantidad =  cantidad;
//         this.valor =  valor;
//     };
// };
////////////////////////////////////////////////////////////////

// ARRARY VACIO ////
const closet = [];
////////////////////

//vinotinto - local
//MODIFICACION DEL CLASS PRODUCTO BASE A LA DE VENTA DE CAMISAS ////////////////////////////////////
class producto {
    constructor(id, nombre, tipo, marca, img_principal, img_secundaria, img_extraI, selecciones, clubes, ofertas, xs, cantidad_xs, s, cantidad_s, m, cantidad_m, l,
        cantidad_l, xl, cantidad_xl, cantidad, valor, valor_oferta, valor_total) {
        this.id = id;
        this.nombre =  nombre;
        this.tipo = tipo;
        this.marca =  marca;
        this.img_principal =  img_principal;
        this.img_secundaria =  img_secundaria;
        this.img_extraI =  img_extraI;
        //CATEGORIA ///////////////
        this.selecciones = selecciones;
        this.clubes =  clubes;
        this.ofertas = ofertas;
        //TALLAS SUB CATEGORIA*********
        this.xs = xs;
        this.cantidad_xs = cantidad_xs;
        this.s = s;
        this.cantidad_s = cantidad_s;
        this.m = m;
        this.cantidad_m = cantidad_m;
        this.l = l;
        this.cantidad_l = cantidad_l;
        this.xl = xl; 
        this.cantidad_xl = cantidad_xl;
        //*****************************
        ////////////////////////////
        this.cantidad = (cantidad_xs + cantidad_s + cantidad_m + cantidad_l + cantidad_xl);
        this.valor =  valor;
        this.valor_oferta =  valor_oferta;
        this.valor_total =  valor_total;
    };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////


//PARA CREAR UN PRODUCTO NUEVO USA ESTA BASE////////////////////////////////////////////////////////

// const  = new producto(
//     , // id
//     "", // nombre
//     "", // tipo
//     "", // marca
//     "", // img_principal
//     "", // img_secudaria
//     , // img_extraI
//     , // selecciones
//     , // clubes
//     , //ofertas
//     , // xs
//     , // cantidad_xs
//     , // s
//     , // cantidad_s
//     , // m
//     , // cantidad_m
//     , // l
//     , // cantidad_l
//     , // xl
//     , // cantidad_xl
//     , // cantidad
//     , // valor
//     , // valor_oferta
//     , // valor_total
// );
// closet.push()

///////////////////////////////////////////////////////////////////////////////////////////////////////


const camisa1 = new producto(
    1, // id
    "Vinotinto", // nombre
    "Local", //tipo
    "Adidas", // marca
    "https://i.ibb.co/Xb9sFmt/Vinotinto-Local-AL.jpg", // img_principal
    "https://i.ibb.co/Hp0GKbw/Vinotinto-Local-AT.jpg", // img_secudaria
    null, // img_extraI
    true, // selecciones
    false, // clubes
    true, //ofertas
    false, // xs
    null, // cantidad_xs
    false, // s
    null, // cantidad_s
    true, // m
    10, // cantidad_m
    true, // l
    4, // cantidad_l
    true, // xl
    3, // cantidad_xl
    0, // cantidad
    25, // valor
    20, // valor_oferta
    0, // valor_total
);
closet.push(camisa1)

const camisa2 = new producto(
    2, // id
    "Manchester City", // nombre
    "Local", // tipo
    "Pumas", // marca
    "https://i.ibb.co/9vWYGqy/City-Local-AL.jpg", // img_principal
    "https://i.ibb.co/mBGGXX6/City-Local-AT.jpg", // img_secudaria
    null, // img_extraI
    false, // selecciones
    true, // clubes
    false, //ofertas
    false, // xs
    null, // cantidad_xs
    false, // s
    null, // cantidad_s
    true, // m
    10, // cantidad_m
    true, // l
    4, // cantidad_l
    true, // xl
    3, // cantidad_xl
    0, // cantidad
    25, // valor
    null, // valor_oferta
    0, // valor_total
);
closet.push(camisa2)

const camisa3 = new producto(
    3, // id
    "Paris", // nombre
    "Local", // tipo
    "Nike", // marca
    "https://i.ibb.co/pyWPJLF/Paris-Local-AL.webp", // img_principal
    "https://i.ibb.co/3Brm6Fg/Paris-Local-Atras.webp", // img_secudaria
    null, // img_extraI
    false, // selecciones
    true, // clubes
    false, //ofertas
    false, // xs
    null, // cantidad_xs
    false, // s
    null, // cantidad_s
    true, // m
    20, // cantidad_m
    true, // l
    8, // cantidad_l
    true, // xl
    5, // cantidad_xl
    0, // cantidad
    25, // valor
    null, // valor_oferta
    0, // valor_total
);
closet.push(camisa3)

const camisa4 = new producto(
    4, // id
    "Italia", // nombre
    "Local", // tipo
    "Adidas", // marca
    "https://i.ibb.co/nL3c6t5/Italia-Local-AL.jpg", // img_principal
    "https://i.ibb.co/bXsy791/Italia-Local-AT.jpg", // img_secudaria
    null, // img_extraI
    true, // selecciones
    false, // clubes
    false, //ofertas
    false, // xs
    null, // cantidad_xs
    true, // s
    2, // cantidad_s
    false, // m
    null, // cantidad_m
    true, // l
    2, // cantidad_l
    false, // xl
    null, // cantidad_xl
    0, // cantidad
    25, // valor
    null, // valor_oferta
    0, // valor_total
);
closet.push(camisa4)

const camisa5 = new producto(
    5, // id
    "Inter de Miami", // nombre
    "Local", // tipo
    "Adidas", // marca
    "https://i.ibb.co/1ZkpF0B/Inter-Miami-Local-AL.jpg", // img_principal
    "https://i.ibb.co/WsbTkMP/Inter-Miami-Local-AT.jpg", // img_secudaria
    null, // img_extraI
    false, // selecciones
    true, // clubes
    false, //ofertas
    false, // xs
    null, // cantidad_xs
    true, // s
    2, // cantidad_s
    false, // m
    null, // cantidad_m
    true, // l
    2, // cantidad_l
    false, // xl
    null, // cantidad_xl
    0, // cantidad
    25, // valor
    null, // valor_oferta
    0, // valor_total
);
closet.push(camisa5)

const camisa6 = new producto(
    6, // id
    "Brasil", // nombre
    "Local", // tipo
    "Nike", // marca
    "https://i.ibb.co/9WqFWbh/Brasil-Local-Atras.webp", // img_principal
    "https://i.ibb.co/k5ZhrbS/Brasil-Local-Alante.webp", // img_secudaria
    null, // img_extraI
    true, // selecciones
    false, // clubes
    false, //ofertas
    false, // xs
    null, // cantidad_xs
    true, // s
    2, // cantidad_s
    false, // m
    null, // cantidad_m
    true, // l
    2, // cantidad_l
    false, // xl
    null, // cantidad_xl
    0, // cantidad
    25, // valor
    null, // valor_oferta
    0, // valor_total
);
closet.push(camisa6)

const camisa7 = new producto(
    7, // id
    "Argentina", // nombre
    "Local", // tipo
    "Adidas", // marca
    "https://i.ibb.co/PWmdFy8/Argentina-Local-AL.jpg", // img_principal
    "https://i.ibb.co/zht2nnk/Argentina-Local-AT.jpg", // img_secudaria
    null, // img_extraI
    true, // selecciones
    false, // clubes
    false, //ofertas
    false, // xs
    null, // cantidad_xs
    true, // s
    2, // cantidad_s
    true, // m
    10, // cantidad_m
    true, // l
    2, // cantidad_l
    false, // xl
    null, // cantidad_xl
    0, // cantidad
    25, // valor
    null, // valor_oferta
    0, // valor_total
);
closet.push(camisa7)

const camisa8 = new producto(
    8, // id
    "Colombia", // nombre
    "Local", // tipo
    "Adidas", // marca
    "https://i.ibb.co/DbtrQw7/Colombia-Visitante-Alante.webp", // img_principal
    "https://i.ibb.co/WBXQ4DC/Colombia-Visitante-AT.webp", // img_secudaria
    null, // img_extraI
    true, // selecciones
    false, // clubes
    false, //ofertas
    false, // xs
    null, // cantidad_xs
    true, // s
    2, // cantidad_s
    false, // m
    null, // cantidad_m
    true, // l
    2, // cantidad_l
    true, // xl
    5, // cantidad_xl
    0, // cantidad
    25, // valor
    null, // valor_oferta
    0, // valor_total
);
closet.push(camisa8)

const camisa9 = new producto(
    9, // id
    "Arsenal", // nombre
    "Visitante", // tipo
    "Adidas", // marca
    "https://i.ibb.co/QFKbmpV/Aresenal-Visitante-AL.jpg", // img_principal
    "https://i.ibb.co/mCmWk5x/Aresenal-Visitante-AT.jpg", // img_secudaria
    null, // img_extraI
    false, // selecciones
    true, // clubes
    true, //ofertas
    false, // xs
    null, // cantidad_xs
    true, // s
    6, // cantidad_s
    true, // m
    10, // cantidad_m
    true, // l
    5, // cantidad_l
    true, // xl
    5, // cantidad_xl
    0, // cantidad
    25, // valor
    20, // valor_oferta
    0, // valor_total
);
closet.push(camisa9)

export default closet;