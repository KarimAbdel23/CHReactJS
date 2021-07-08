export function getItems(categoryId) {   
        let dataPromise = new Promise((resolve, reject) => {

            setTimeout ( () => { 
               let dataProcessors = [
                    {
                        id:1,
                        title:'Procesador Intel Core i5-10400F',
                        description: 'Procesador Intel Core i5-10400F, S-1200, 2.90GHz, Six-Core, 12MB Cache (10ma. Generación - Comet Lake) ― Requiere Gráficos Discretos',
                        price: 3359.99,            
                        pictureUrl: 'https://www.cyberpuerta.mx/img/product/M/CP-INTEL-BX8070110400F-1.png',
                        pictureBigUrl: 'https://www.cyberpuerta.mx/img/product/XL/CP-INTEL-BX8070110400F-1.png',
                        SKU: 'BX8070110400F',
                        stock: 255,
                        cores: 6,
                        socket: 'LGA 1200',
                        brand: 'Intel',
                        frequency: '2.90 GHz',
                        model: 'i5-10400F',
                        family: 'Core i5-10xxx'
                    },
                    {
                        id:2,
                        title:'Procesador AMD Ryzen 5 5600X',
                        description: 'Procesador AMD Ryzen 5 5600X, S-AM4, 3.70GHz, 32MB L3 Cache - incluye Disipador Wraith Stealth',
                        price: 6379,
                        pictureUrl: 'https://www.cyberpuerta.mx/img/product/S/CP-AMD-100-100000065BOX-1.jpg',
                        pictureBigUrl: 'https://www.cyberpuerta.mx/img/product/XL/CP-AMD-100-100000065BOX-1.jpg',
                        SKU : '100-100000065BOX',
                        stock: 20,
                        cores: 6,
                        socket: 'AM4',
                        brand: 'AMD',
                        frequency: '3.70 GHz',
                        model: '5600X',
                        family: 'Ryzen 5'
                    },
                    {
                        id:3,
                        title:'Procesador Intel Core i3-10100',
                        description: 'Procesador Intel Core i3-10100, S-1200, 3,60GHz, Quad-Core, 6MB Smart Caché (10ma. Generación - Comet Lake)',
                        price: 3129,
                        pictureUrl: 'https://www.cyberpuerta.mx/img/product/S/CP-INTEL-BX8070110100-1.jpg',
                        pictureBigUrl: 'https://www.cyberpuerta.mx/img/product/XL/CP-INTEL-BX8070110100-1.jpg',
                        SKU: 'BX8070110100',
                        stock: 0,
                        cores: 4,
                        socket: 'LGA 1200',
                        brand: 'Intel',
                        frequency: '3.60 GHz',
                        model: 'i3-10100',
                        family: 'Core i3-10xxx'
                    },
                    {
                        id:4,
                        title:'Procesador Intel Core i9-9900K',
                        description: 'Procesador Intel Core i9-9900K, S-1151, 3.60GHz, 8-Core, 16MB Smart Cache (9na. Generación Coffee Lake)',
                        price: 9469,
                        pictureUrl: 'https://www.cyberpuerta.mx/img/product/M/CP-INTEL-BX80684I99900K-1.jpg',
                        pictureBigUrl: 'https://www.cyberpuerta.mx/img/product/XL/CP-INTEL-BX80684I99900K-1.jpg',
                        SKU : 'BX80684I99900K',
                        stock: 95,
                        cores: 8,
                        socket: 'LGA 1151',
                        brand: 'Intel',
                        frequency: '3.60 GHz',
                        model: 'i9-9900K',
                        family: 'Core i9-9xxx'
                    },
                    {
                        id:5,
                        title:'Procesador Intel Core i7-10700KA',
                        description: 'Procesador Intel Core i7-10700KA Avengers Edition, S-1200, 3.80GHz, Octa-Core, 16MB Caché (10ma Generación Comet Lake)',
                        price: 7749,            
                        pictureUrl: 'https://www.cyberpuerta.mx/img/product/M/CP-INTEL-BX8070110700KA-1.png',
                        pictureBigUrl: 'https://www.cyberpuerta.mx/img/product/XL/CP-INTEL-BX8070110700KA-1.png',
                        SKU : 'BX8070110700KA',
                        stock: 157,
                        cores: 8,
                        socket: 'LGA 1200',
                        brand: 'Intel',
                        frequency: '3.80 GHz',
                        model: 'i7-10700K',
                        family: 'Core i7-10xxx'
                    },
                    {
                        id:6,
                        title:'Procesador AMD Ryzen 9 3900X',
                        description: 'Procesador AMD Ryzen 9 3900X, S-AM4, 3.80GHz, 12-Core, 64MB L3, con Disipador Wraith Prism RGB',
                        price: 10649,
                        pictureUrl: 'https://www.cyberpuerta.mx/img/product/M/CP-AMD-100-100000023BOX-1.jpg',
                        pictureBigUrl: 'https://www.cyberpuerta.mx/img/product/XL/CP-AMD-100-100000023BOX-1.jpg',
                        SKU : '100-100000023BOX',
                        stock: 9,
                        cores: 12,
                        socket: 'AM4',
                        brand: 'AMD',
                        frequency: '3.80 GHz',
                        model: '3900X',
                        family: 'Ryzen 9'
                    },
                    {
                        id:7,
                        title:'Procesador AMD Ryzen 7 5800X',
                        description: 'Procesador AMD Ryzen 7 5800X, S-AM4, 3.80GHz, 8-Core, 32MB L3 Cache - no incluye Disipador',
                        price: 8909,
                        pictureUrl: 'https://www.cyberpuerta.mx/img/product/M/CP-AMD-100-100000063WOF-1.jpg',
                        pictureBigUrl: 'https://www.cyberpuerta.mx/img/product/XL/CP-AMD-100-100000063WOF-1.jpg',
                        SKU : '100-100000063WOF',
                        stock: 485,
                        cores: 8,
                        socket: 'AM4',
                        brand: 'AMD',
                        frequency: '3.80 GHz',
                        model: '5800X',
                        family: 'Ryzen 7'
                    },
                    {
                        id:8,
                        title:'Procesador AMD Ryzen 3 2200G',
                        description: 'Procesador AMD Ryzen 3 2200G con Gráficos Radeon Vega 8, S-AM4, 3.50GHz, Quad-Core, 2MB L2 Cache, con Disipador Wraith Stealth ― Verifica que tú tarjeta madre esté preparada para Ryzen serie 2000',
                        price: formatterPesoMX.format(2879.55) ,
                        pictureUrl: 'https://www.cyberpuerta.mx/img/product/M/CP-AMD-YD2200C5FBBOX-1.jpg',
                        pictureBigUrl: 'https://www.cyberpuerta.mx/img/product/XL/CP-AMD-YD2200C5FBBOX-1.jpg',
                        SKU : 'YD2200C5FBBOX',
                        stock: 39,
                        cores: 4,
                        socket: 'AM4',
                        brand: 'AMD',
                        frequency: '3.5 GHz',
                        model: '2200G',
                        family: 'Ryzen 3'
                    }
                ];

                let dataMemory = [
                    {
                        id:1,
                        title:'Memoria RAM',
                        description: 'Memoria RAM HyperX FURY Black DDR4, 3200MHz, 16GB, Non-ECC, CL16, XMP',
                        price: 1819,            
                        pictureUrl: 'https://www.cyberpuerta.mx/img/product/M/CP-KINGSTON-HX432C16FB416-1.jpg',
                        pictureBigUrl: 'https://www.cyberpuerta.mx/img/product/XL/CP-KINGSTON-HX432C16FB416-1.jpg',
                        SKU: 'HX432C16FB4/16',
                        stock: 81,
                        brand: 'KINGSTON',
                        frequency: '',
                        model: ''
                    },
                    {
                        id:2,
                        title:'Memoria RAM',
                        description: 'Memoria RAM XPG SPECTRIX D60G DDR4, 3200MHz, 8GB, Non-ECC, CL16, XMP',
                        price: 1129,
                        pictureUrl: 'https://www.cyberpuerta.mx/img/product/M/CP-XPG-AX4U320038G16A-ST60-1.jpg',
                        pictureBigUrl: 'https://www.cyberpuerta.mx/img/product/XL/CP-XPG-AX4U320038G16A-ST60-1.jpg',
                        SKU : 'AX4U320038G16A-ST60',
                        stock: 11,
                        brand: 'XPG',
                        frequency: '',
                        model: ''
                    }];
                if (categoryId == "procesadores")
                    resolve(dataProcessors);
                if (categoryId == "memoriaram")
                    resolve(dataMemory);
            }, 2000)
        });
        return dataPromise;      
}

const formatterPesoMX = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 0
  })