export function getData(filter) {   
        let data = new Promise((resolve, reject) => {

            setTimeout ( () => { 
                data = [
                    {
                        id:1,
                        title:'Procesador Intel Core i5-10400F',
                        description: 'Procesador Intel Core i5-10400F, S-1200, 2.90GHz, Six-Core, 12MB Cache (10ma. Generación - Comet Lake) ― Requiere Gráficos Discretos',
                        price: 3359.99,            
                        pictureUrl: 'https://www.cyberpuerta.mx/img/product/M/CP-INTEL-BX8070110400F-1.png'
                    },
                    {
                        id:2,
                        title:'Procesador AMD Ryzen 5 5600X',
                        description: 'Procesador AMD Ryzen 5 5600X, S-AM4, 3.70GHz, 32MB L3 Cache - incluye Disipador Wraith Stealth',
                        price: 6379,
                        pictureUrl: 'https://www.cyberpuerta.mx/img/product/S/CP-AMD-100-100000065BOX-1.jpg'
                    },
                    {
                        id:3,
                        title:'Procesador Intel Core i3-10100',
                        description: 'Procesador Intel Core i3-10100, S-1200, 3,60GHz, Quad-Core, 6MB Smart Caché (10ma. Generación - Comet Lake)',
                        price: 3129,
                        pictureUrl: 'https://www.cyberpuerta.mx/img/product/S/CP-INTEL-BX8070110100-1.jpg'
                    },
                    {
                        id:4,
                        title:'Procesador Intel Core i9-9900K',
                        description: 'Procesador Intel Core i9-9900K, S-1151, 3.60GHz, 8-Core, 16MB Smart Cache (9na. Generación Coffee Lake)',
                        price: 9469,
                        pictureUrl: 'https://www.cyberpuerta.mx/img/product/M/CP-INTEL-BX80684I99900K-1.jpg'
                    },
                    {
                        id:5,
                        title:'Procesador Intel Core i7-10700KA',
                        description: 'Procesador Intel Core i7-10700KA Avengers Edition, S-1200, 3.80GHz, Octa-Core, 16MB Caché (10ma Generación Comet Lake)',
                        price: 7749,            
                        pictureUrl: 'https://www.cyberpuerta.mx/img/product/M/CP-INTEL-BX8070110700KA-1.png'
                    },
                    {
                        id:6,
                        title:'Procesador AMD Ryzen 9 3900X',
                        description: 'Procesador AMD Ryzen 9 3900X, S-AM4, 3.80GHz, 12-Core, 64MB L3, con Disipador Wraith Prism RGB',
                        price: 10649,
                        pictureUrl: 'https://www.cyberpuerta.mx/img/product/M/CP-AMD-100-100000023BOX-1.jpg'
                    },
                    {
                        id:7,
                        title:'Procesador AMD Ryzen 7 5800X',
                        description: 'Procesador AMD Ryzen 7 5800X, S-AM4, 3.80GHz, 8-Core, 32MB L3 Cache - no incluye Disipador',
                        price: 8909,
                        pictureUrl: 'https://www.cyberpuerta.mx/img/product/M/CP-AMD-100-100000063WOF-1.jpg'
                    },
                    {
                        id:8,
                        title:'Procesador AMD Ryzen 3 2200G',
                        description: 'Procesador AMD Ryzen 3 2200G con Gráficos Radeon Vega 8, S-AM4, 3.50GHz, Quad-Core, 2MB L2 Cache, con Disipador Wraith Stealth ― Verifica que tú tarjeta madre esté preparada para Ryzen serie 2000',
                        price: formatterPesoMX.format(2879.55) ,
                        pictureUrl: 'https://www.cyberpuerta.mx/img/product/M/CP-AMD-YD2200C5FBBOX-1.jpg'
                    }
                ];
                resolve(data)
                 }, 2000)
        });
        return data;      
}


const formatterPesoMX = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 0
  })