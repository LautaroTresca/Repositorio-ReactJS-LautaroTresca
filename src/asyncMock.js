const productos = [
    {
        id: "1",
        name: "Remera Ranglan",
        price: "2700",
        category: "remeras",
        img:"https://d2r9epyceweg5n.cloudfront.net/stores/399/451/products/20200730_2146151-eb307a7a8aa844bd4815961666075488-1024-1024.jpg",
        stock:"6",
        description:"100% algodon, calidad premium."
    },
    {
        id: "2",
        name: "Pantalon deportivo",
        price: "4000",
        category: "pantalones",
        img: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/932e94639ed442499731ad1e006cff5e_9366/pantalon-ajustado-aeroready-sereno-3-tiras-pierna-conica.jpg",
        stock: "10",
        description: "Algodon y poliester, calidad premium."
    },
    {
        id: "3",
        name: "Remera basica",
        price: "2500",
        category: "remeras",
        img: "https://http2.mlstatic.com/D_NQ_NP_982635-MLA48256272725_112021-O.webp",
        stock: "3",
        description: "100% Algodon premium"
    }
]

export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(productos)
        }, 2000)
    })
}