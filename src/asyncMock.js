const productos = [
    {
        id: "1",
        name: "REMERA RANGLAN",
        price: "2.799",
        category: "remeras",
        img:"https://d2r9epyceweg5n.cloudfront.net/stores/399/451/products/20200730_2146151-eb307a7a8aa844bd4815961666075488-1024-1024.jpg",
        stock:"29",
        description1:"Remeras Manga Ranglan para sublimar.",
        description2:"Fondo blanco o gris con mangas negras.",
        description3:"Talles del S al XXL.",
        description4:"Consultar disponibilidad de stock por otros colores."
    },
    {
        id: "2",
        name: "REMERA DE ALGODÓN ORGÁNICO DISNEY RENÉ",
        price: "4.499",
        category: "remeras",
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/77c3f7d4ae374e27a7aeacb100b9e67c_9366/Remera_de_Algodon_Organico_Disney_Rene_Blanco_GN4185_01_laydown.jpg",
        stock: "18",
        description1:"Corte clásico",
        description2:"Cierres con botones a presión en el hombro",
        description3:"Tejido de punto jersey 100 % algodón orgánico",
        description4:"Color del artículo: Non Dyed"
    },
    {
        id: "3",
        name: "Remera Nike Sportswear Hybrid",
        price: "5.599",
        category: "remeras",
        img: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwe17d8a0b/products/NI_CK2379-010/NI_CK2379-010-1.JPG",
        stock: "23",
        description1:"Material: Algodón",
        description2:"Origen: Importado",
        description3:"Cuello: Redondo",
        description4:"Marca: Nike"
    },
    {
        id: "4",
        name: "PANTALÓN AJUSTADO AEROREADY SERENO ADIDAS",
        price: "4.999",
        category: "pantalones",
        img: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/932e94639ed442499731ad1e006cff5e_9366/pantalon-ajustado-aeroready-sereno-3-tiras-pierna-conica.jpg",
        stock: "13",
        description1:"Corte cónico ajustado",
        description2:"Cintura elástica con cordón de ajuste",
        description3:"Tejido de punto doble 100 % poliéster reciclado",
        description4:"Bolsillos frontales con cierre"
    },
    {
        id: "5",
        name: "PANTALÓN DEPORTIVO SST PRIMEBLUE",
        price: "19.999",
        category: "pantalones",
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ee6cef87546a46af8ac0ae1a00d92c29_9366/Pantalon_Deportivo_SST_Primeblue_Rosa_HF1994_21_model.jpg",
        stock: "13",
        description1:"Corte ajustado",
        description2:"Cintura elástica con cordón de ajuste",
        description3:"Tejido entrelazado 50 % algodón, 45 % poliéster reciclado, 5 % elastano",
        description4:"Bolsillos laterales con cierre"
    },
    {
        id: "6",
        name: "PANTALÓN ESSENTIALS 3 TIRAS FELPA FRANCESA",
        price: "13.999",
        category: "pantalones",
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/243fc3a3954741f09b93ac78010c5715_9366/Pantalon_Essentials_3_Tiras_Felpa_Francesa_Negro_GM8733_01_laydown.jpg",
        stock: "6",
        description1:"Corte ajustado",
        description2:"Puños ajustados",
        description3:"Cintura elástica con cordón de ajuste",
        description4:"Felpa francesa 53 % algodón, 36 % poliéster reciclado, 11 % viscosa"
    },
    {
        id: "7",
        name: "ZAPATILLAS GALAXY 6",
        price: "16.999",
        category: "zapatillas",
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/06e1ca4eed5d45a48730aeae0116436c_9366/Zapatillas_Galaxy_6_Gris_GW4135_01_standard.jpg",
        stock: "27",
        description1:"Ajuste clásico",
        description2:"Exterior de malla transpirable",
        description3:"Plantilla OrthoLite®",
        description4:"Suela de caucho"  
    },
    {
        id: "8",
        name: "ZAPATILLAS NMD_R1",
        price: "41.999",
        category: "zapatillas",
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/50c01d050bea46b88e85acbc0115cef2_9366/Zapatillas_NMD_R1_Blanco_GZ7925_01_standard.jpg",
        stock: "26",
        description1:"Sistema de atado de cordones",
        description2:"Exterior de tejido elástico",
        description3:"Ajuste ceñido, tipo media",
        description4:"Mediasuela BOOST"  
    },
    {
        id: "9",
        name: "ZAPATILLAS ULTRABOOST 5 DNA RUNNING LIFESTYLE",
        price: "55.999",
        category: "zapatillas",
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6b2815cc6c9443f4ac40ae370134408f_9366/Zapatillas_Ultraboost_5_DNA_Running_Lifestyle_Negro_GV8745_01_standard.jpg",
        stock: "9",
        description1:"Horma clásica",
        description2:"Sistema de atado de cordones",
        description3:"Exterior de tejido adidas PRIMEKNIT",
        description4:"Soporte y retorno de energía"    
    }

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === id))
        }, 500)
    })  
}

export const getProductByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.category === category))
        }, 500)
    })
}