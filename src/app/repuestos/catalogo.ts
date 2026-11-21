// Catalogo de repuestos por vehiculo (viene de Base_Datos_Repuestos_10x16_FIGMA).
// Cada uno se pide con POST /repuestos; el backend guarda la solicitud.
export type Repuesto = {
    id: string;
    categoria: string;
    nombre: string;
    precio: number; // USD
    imagen: string; // /images/repuestos/<nombre>.jpg
    respaldo: string; // enlace original (por si falta el archivo local)
};

export const REPUESTOS_POR_VEHICULO: Record<string, Repuesto[]> = {
    "Ferrari SF90 Stradale": [
        {
            "id": "ferrari-sf90-stradale-01",
            "categoria": "Motor",
            "nombre": "Filtro aceite",
            "precio": 179,
            "imagen": "/images/repuestos/filtro-aceite.jpg",
            "respaldo": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQkKwRarocZqLRhztwN743EtVuCcMo9SawVOI2EBsU1TWGoL5_e90t4QPQzp3ZlSZosrLd9QakZfkQCgOzvrHFn9QVUq15W"
        },
        {
            "id": "ferrari-sf90-stradale-02",
            "categoria": "Motor",
            "nombre": "Filtro aire",
            "precio": 250,
            "imagen": "/images/repuestos/filtro-aire.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSP2TjNmWdhhylEY8ACAk_G41pgM6NN1Xe31gklkl-ZfoyP97Cvy5gV9CyJlejbArSSG3ntvQroksQkFHQW3RBt0vtW7TKfbOmQW3B4TlOj3jCDA6JT9JMm-A"
        },
        {
            "id": "ferrari-sf90-stradale-03",
            "categoria": "Encendido",
            "nombre": "Bujías",
            "precio": 381,
            "imagen": "/images/repuestos/bujias.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQQczfTEPE-sf7mp-DgcY8YEJ3zjCTAumyOlno-sKg_V8HnagVvwaZZC_QFW7AELpWDprpw5Fn6yK9uwlYwsQmo1qE7dMW4DlYvlkaC03ZJ5pb05k2ektJ_mA"
        },
        {
            "id": "ferrari-sf90-stradale-04",
            "categoria": "Eléctrico",
            "nombre": "Batería",
            "precio": 1197,
            "imagen": "/images/repuestos/bateria.jpg",
            "respaldo": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQcygXOTU3DdOXjls9O1PjeykjtgG40ibn2HLntzq6FwoEr3ktNX6ztn7P05-zpC_AbJcnDj_3ue_OWEH83vk2s_VkVcBFZ"
        },
        {
            "id": "ferrari-sf90-stradale-05",
            "categoria": "Eléctrico",
            "nombre": "Alternador",
            "precio": 2794,
            "imagen": "/images/repuestos/alternador.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTH5hWHGbMTMeBiZjBMhBev64-f9H4AD_CHxJO4DWMhM99-W6w0zb5oT6T7Za-jTiHbt9T_MsaSMkiUmGowWoUtNuZSFCJFL2vTuaSyrjptiw3AmhOqEyTZ"
        },
        {
            "id": "ferrari-sf90-stradale-06",
            "categoria": "Refrigeración",
            "nombre": "Radiador",
            "precio": 3194,
            "imagen": "/images/repuestos/radiador.jpg",
            "respaldo": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQmk6otyyvQE6w5U5w_gMHQ_EsPoOv-jNqZWGy9JnDg9sfBwMjoe4cqhLhiGQyxRS_JFKmtzv9kGuE-ux399wqwZWsvcYEvRn3LUwudPj0ZDHAbqmtBYvXHcQ"
        },
        {
            "id": "ferrari-sf90-stradale-07",
            "categoria": "Frenos",
            "nombre": "Pastillas freno",
            "precio": 1446,
            "imagen": "/images/repuestos/pastillas-freno.jpg",
            "respaldo": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQhA-ODRTXVA9Iwv587jzZpjqiyQUK87mrAv-YpGbF985cb3eufEAWJYiDG78ZGObSze9BLhad4MjR6z98r5lkVUVMfArqB"
        },
        {
            "id": "ferrari-sf90-stradale-08",
            "categoria": "Frenos",
            "nombre": "Discos freno",
            "precio": 3594,
            "imagen": "/images/repuestos/discos-freno.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR5q4OptWA7SgileTBAQlwgo5U4TzPI1yW3KtbOloWbnHrSSxYql39nCyFZ0zF5tLbmIBvyeRxTEj3hjQxjUf1Aty2s8skJDzuofO1rf5rodmftxNtW4tNK5w"
        },
        {
            "id": "ferrari-sf90-stradale-09",
            "categoria": "Suspensión",
            "nombre": "Amortiguador",
            "precio": 4192,
            "imagen": "/images/repuestos/amortiguador.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBo26izntTaq-ZHvK214tacguEsNf9jyhfspUuFeVWmQ&s=10"
        },
        {
            "id": "ferrari-sf90-stradale-10",
            "categoria": "Llantas",
            "nombre": "Neumáticos",
            "precio": 8483,
            "imagen": "/images/repuestos/neumaticos.jpg",
            "respaldo": "https://interllantas.com/wp-content/uploads/images2/Llanta-COSMO-RC-17-185-65-R15-88H_1.jpg"
        }
    ],
    "Porsche 911 Turbo S": [
        {
            "id": "porsche-911-turbo-s-01",
            "categoria": "Motor",
            "nombre": "Filtro aceite",
            "precio": 123,
            "imagen": "/images/repuestos/filtro-aceite.jpg",
            "respaldo": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQkKwRarocZqLRhztwN743EtVuCcMo9SawVOI2EBsU1TWGoL5_e90t4QPQzp3ZlSZosrLd9QakZfkQCgOzvrHFn9QVUq15W"
        },
        {
            "id": "porsche-911-turbo-s-02",
            "categoria": "Motor",
            "nombre": "Filtro aire",
            "precio": 172,
            "imagen": "/images/repuestos/filtro-aire.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSP2TjNmWdhhylEY8ACAk_G41pgM6NN1Xe31gklkl-ZfoyP97Cvy5gV9CyJlejbArSSG3ntvQroksQkFHQW3RBt0vtW7TKfbOmQW3B4TlOj3jCDA6JT9JMm-A"
        },
        {
            "id": "porsche-911-turbo-s-03",
            "categoria": "Encendido",
            "nombre": "Bujías",
            "precio": 262,
            "imagen": "/images/repuestos/bujias.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQQczfTEPE-sf7mp-DgcY8YEJ3zjCTAumyOlno-sKg_V8HnagVvwaZZC_QFW7AELpWDprpw5Fn6yK9uwlYwsQmo1qE7dMW4DlYvlkaC03ZJ5pb05k2ektJ_mA"
        },
        {
            "id": "porsche-911-turbo-s-04",
            "categoria": "Eléctrico",
            "nombre": "Batería",
            "precio": 823,
            "imagen": "/images/repuestos/bateria.jpg",
            "respaldo": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQcygXOTU3DdOXjls9O1PjeykjtgG40ibn2HLntzq6FwoEr3ktNX6ztn7P05-zpC_AbJcnDj_3ue_OWEH83vk2s_VkVcBFZ"
        },
        {
            "id": "porsche-911-turbo-s-05",
            "categoria": "Eléctrico",
            "nombre": "Alternador",
            "precio": 1921,
            "imagen": "/images/repuestos/alternador.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTH5hWHGbMTMeBiZjBMhBev64-f9H4AD_CHxJO4DWMhM99-W6w0zb5oT6T7Za-jTiHbt9T_MsaSMkiUmGowWoUtNuZSFCJFL2vTuaSyrjptiw3AmhOqEyTZ"
        },
        {
            "id": "porsche-911-turbo-s-06",
            "categoria": "Refrigeración",
            "nombre": "Radiador",
            "precio": 2196,
            "imagen": "/images/repuestos/radiador.jpg",
            "respaldo": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQmk6otyyvQE6w5U5w_gMHQ_EsPoOv-jNqZWGy9JnDg9sfBwMjoe4cqhLhiGQyxRS_JFKmtzv9kGuE-ux399wqwZWsvcYEvRn3LUwudPj0ZDHAbqmtBYvXHcQ"
        },
        {
            "id": "porsche-911-turbo-s-07",
            "categoria": "Frenos",
            "nombre": "Pastillas freno",
            "precio": 994,
            "imagen": "/images/repuestos/pastillas-freno.jpg",
            "respaldo": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQhA-ODRTXVA9Iwv587jzZpjqiyQUK87mrAv-YpGbF985cb3eufEAWJYiDG78ZGObSze9BLhad4MjR6z98r5lkVUVMfArqB"
        },
        {
            "id": "porsche-911-turbo-s-08",
            "categoria": "Frenos",
            "nombre": "Discos freno",
            "precio": 2471,
            "imagen": "/images/repuestos/discos-freno.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR5q4OptWA7SgileTBAQlwgo5U4TzPI1yW3KtbOloWbnHrSSxYql39nCyFZ0zF5tLbmIBvyeRxTEj3hjQxjUf1Aty2s8skJDzuofO1rf5rodmftxNtW4tNK5w"
        },
        {
            "id": "porsche-911-turbo-s-09",
            "categoria": "Suspensión",
            "nombre": "Amortiguador",
            "precio": 2882,
            "imagen": "/images/repuestos/amortiguador.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBo26izntTaq-ZHvK214tacguEsNf9jyhfspUuFeVWmQ&s=10"
        },
        {
            "id": "porsche-911-turbo-s-10",
            "categoria": "Llantas",
            "nombre": "Neumáticos",
            "precio": 5832,
            "imagen": "/images/repuestos/neumaticos.jpg",
            "respaldo": "https://interllantas.com/wp-content/uploads/images2/Llanta-COSMO-RC-17-185-65-R15-88H_1.jpg"
        }
    ],
    "Lamborghini Revuelto": [
        {
            "id": "lamborghini-revuelto-01",
            "categoria": "Motor",
            "nombre": "Filtro aceite",
            "precio": 190,
            "imagen": "/images/repuestos/filtro-aceite.jpg",
            "respaldo": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQkKwRarocZqLRhztwN743EtVuCcMo9SawVOI2EBsU1TWGoL5_e90t4QPQzp3ZlSZosrLd9QakZfkQCgOzvrHFn9QVUq15W"
        },
        {
            "id": "lamborghini-revuelto-02",
            "categoria": "Motor",
            "nombre": "Filtro aire",
            "precio": 265,
            "imagen": "/images/repuestos/filtro-aire.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSP2TjNmWdhhylEY8ACAk_G41pgM6NN1Xe31gklkl-ZfoyP97Cvy5gV9CyJlejbArSSG3ntvQroksQkFHQW3RBt0vtW7TKfbOmQW3B4TlOj3jCDA6JT9JMm-A"
        },
        {
            "id": "lamborghini-revuelto-03",
            "categoria": "Encendido",
            "nombre": "Bujías",
            "precio": 405,
            "imagen": "/images/repuestos/bujias.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQQczfTEPE-sf7mp-DgcY8YEJ3zjCTAumyOlno-sKg_V8HnagVvwaZZC_QFW7AELpWDprpw5Fn6yK9uwlYwsQmo1qE7dMW4DlYvlkaC03ZJ5pb05k2ektJ_mA"
        },
        {
            "id": "lamborghini-revuelto-04",
            "categoria": "Eléctrico",
            "nombre": "Batería",
            "precio": 1272,
            "imagen": "/images/repuestos/bateria.jpg",
            "respaldo": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQcygXOTU3DdOXjls9O1PjeykjtgG40ibn2HLntzq6FwoEr3ktNX6ztn7P05-zpC_AbJcnDj_3ue_OWEH83vk2s_VkVcBFZ"
        },
        {
            "id": "lamborghini-revuelto-05",
            "categoria": "Eléctrico",
            "nombre": "Alternador",
            "precio": 2968,
            "imagen": "/images/repuestos/alternador.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTH5hWHGbMTMeBiZjBMhBev64-f9H4AD_CHxJO4DWMhM99-W6w0zb5oT6T7Za-jTiHbt9T_MsaSMkiUmGowWoUtNuZSFCJFL2vTuaSyrjptiw3AmhOqEyTZ"
        },
        {
            "id": "lamborghini-revuelto-06",
            "categoria": "Refrigeración",
            "nombre": "Radiador",
            "precio": 3393,
            "imagen": "/images/repuestos/radiador.jpg",
            "respaldo": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQmk6otyyvQE6w5U5w_gMHQ_EsPoOv-jNqZWGy9JnDg9sfBwMjoe4cqhLhiGQyxRS_JFKmtzv9kGuE-ux399wqwZWsvcYEvRn3LUwudPj0ZDHAbqmtBYvXHcQ"
        },
        {
            "id": "lamborghini-revuelto-07",
            "categoria": "Frenos",
            "nombre": "Pastillas freno",
            "precio": 1537,
            "imagen": "/images/repuestos/pastillas-freno.jpg",
            "respaldo": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQhA-ODRTXVA9Iwv587jzZpjqiyQUK87mrAv-YpGbF985cb3eufEAWJYiDG78ZGObSze9BLhad4MjR6z98r5lkVUVMfArqB"
        },
        {
            "id": "lamborghini-revuelto-08",
            "categoria": "Frenos",
            "nombre": "Discos freno",
            "precio": 3818,
            "imagen": "/images/repuestos/discos-freno.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR5q4OptWA7SgileTBAQlwgo5U4TzPI1yW3KtbOloWbnHrSSxYql39nCyFZ0zF5tLbmIBvyeRxTEj3hjQxjUf1Aty2s8skJDzuofO1rf5rodmftxNtW4tNK5w"
        },
        {
            "id": "lamborghini-revuelto-09",
            "categoria": "Suspensión",
            "nombre": "Amortiguador",
            "precio": 4454,
            "imagen": "/images/repuestos/amortiguador.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBo26izntTaq-ZHvK214tacguEsNf9jyhfspUuFeVWmQ&s=10"
        },
        {
            "id": "lamborghini-revuelto-10",
            "categoria": "Llantas",
            "nombre": "Neumáticos",
            "precio": 9013,
            "imagen": "/images/repuestos/neumaticos.jpg",
            "respaldo": "https://interllantas.com/wp-content/uploads/images2/Llanta-COSMO-RC-17-185-65-R15-88H_1.jpg"
        }
    ],
    "Aston Martin DB12": [
        {
            "id": "aston-martin-db12-01",
            "categoria": "Motor",
            "nombre": "Filtro aceite",
            "precio": 146,
            "imagen": "/images/repuestos/filtro-aceite.jpg",
            "respaldo": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQkKwRarocZqLRhztwN743EtVuCcMo9SawVOI2EBsU1TWGoL5_e90t4QPQzp3ZlSZosrLd9QakZfkQCgOzvrHFn9QVUq15W"
        },
        {
            "id": "aston-martin-db12-02",
            "categoria": "Motor",
            "nombre": "Filtro aire",
            "precio": 203,
            "imagen": "/images/repuestos/filtro-aire.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSP2TjNmWdhhylEY8ACAk_G41pgM6NN1Xe31gklkl-ZfoyP97Cvy5gV9CyJlejbArSSG3ntvQroksQkFHQW3RBt0vtW7TKfbOmQW3B4TlOj3jCDA6JT9JMm-A"
        },
        {
            "id": "aston-martin-db12-03",
            "categoria": "Encendido",
            "nombre": "Bujías",
            "precio": 309,
            "imagen": "/images/repuestos/bujias.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQQczfTEPE-sf7mp-DgcY8YEJ3zjCTAumyOlno-sKg_V8HnagVvwaZZC_QFW7AELpWDprpw5Fn6yK9uwlYwsQmo1qE7dMW4DlYvlkaC03ZJ5pb05k2ektJ_mA"
        },
        {
            "id": "aston-martin-db12-04",
            "categoria": "Eléctrico",
            "nombre": "Batería",
            "precio": 972,
            "imagen": "/images/repuestos/bateria.jpg",
            "respaldo": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQcygXOTU3DdOXjls9O1PjeykjtgG40ibn2HLntzq6FwoEr3ktNX6ztn7P05-zpC_AbJcnDj_3ue_OWEH83vk2s_VkVcBFZ"
        },
        {
            "id": "aston-martin-db12-05",
            "categoria": "Eléctrico",
            "nombre": "Alternador",
            "precio": 2270,
            "imagen": "/images/repuestos/alternador.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTH5hWHGbMTMeBiZjBMhBev64-f9H4AD_CHxJO4DWMhM99-W6w0zb5oT6T7Za-jTiHbt9T_MsaSMkiUmGowWoUtNuZSFCJFL2vTuaSyrjptiw3AmhOqEyTZ"
        },
        {
            "id": "aston-martin-db12-06",
            "categoria": "Refrigeración",
            "nombre": "Radiador",
            "precio": 2595,
            "imagen": "/images/repuestos/radiador.jpg",
            "respaldo": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQmk6otyyvQE6w5U5w_gMHQ_EsPoOv-jNqZWGy9JnDg9sfBwMjoe4cqhLhiGQyxRS_JFKmtzv9kGuE-ux399wqwZWsvcYEvRn3LUwudPj0ZDHAbqmtBYvXHcQ"
        },
        {
            "id": "aston-martin-db12-07",
            "categoria": "Frenos",
            "nombre": "Pastillas freno",
            "precio": 1175,
            "imagen": "/images/repuestos/pastillas-freno.jpg",
            "respaldo": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQhA-ODRTXVA9Iwv587jzZpjqiyQUK87mrAv-YpGbF985cb3eufEAWJYiDG78ZGObSze9BLhad4MjR6z98r5lkVUVMfArqB"
        },
        {
            "id": "aston-martin-db12-08",
            "categoria": "Frenos",
            "nombre": "Discos freno",
            "precio": 2920,
            "imagen": "/images/repuestos/discos-freno.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR5q4OptWA7SgileTBAQlwgo5U4TzPI1yW3KtbOloWbnHrSSxYql39nCyFZ0zF5tLbmIBvyeRxTEj3hjQxjUf1Aty2s8skJDzuofO1rf5rodmftxNtW4tNK5w"
        },
        {
            "id": "aston-martin-db12-09",
            "categoria": "Suspensión",
            "nombre": "Amortiguador",
            "precio": 3406,
            "imagen": "/images/repuestos/amortiguador.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBo26izntTaq-ZHvK214tacguEsNf9jyhfspUuFeVWmQ&s=10"
        },
        {
            "id": "aston-martin-db12-10",
            "categoria": "Llantas",
            "nombre": "Neumáticos",
            "precio": 6893,
            "imagen": "/images/repuestos/neumaticos.jpg",
            "respaldo": "https://interllantas.com/wp-content/uploads/images2/Llanta-COSMO-RC-17-185-65-R15-88H_1.jpg"
        }
    ],
    "Cadillac OPTIQ": [
        {
            "id": "cadillac-optiq-01",
            "categoria": "Motor",
            "nombre": "Filtro aceite",
            "precio": 50,
            "imagen": "/images/repuestos/filtro-aceite.jpg",
            "respaldo": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQkKwRarocZqLRhztwN743EtVuCcMo9SawVOI2EBsU1TWGoL5_e90t4QPQzp3ZlSZosrLd9QakZfkQCgOzvrHFn9QVUq15W"
        },
        {
            "id": "cadillac-optiq-02",
            "categoria": "Motor",
            "nombre": "Filtro aire",
            "precio": 70,
            "imagen": "/images/repuestos/filtro-aire.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSP2TjNmWdhhylEY8ACAk_G41pgM6NN1Xe31gklkl-ZfoyP97Cvy5gV9CyJlejbArSSG3ntvQroksQkFHQW3RBt0vtW7TKfbOmQW3B4TlOj3jCDA6JT9JMm-A"
        },
        {
            "id": "cadillac-optiq-03",
            "categoria": "Encendido",
            "nombre": "Bujías",
            "precio": 107,
            "imagen": "/images/repuestos/bujias.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQQczfTEPE-sf7mp-DgcY8YEJ3zjCTAumyOlno-sKg_V8HnagVvwaZZC_QFW7AELpWDprpw5Fn6yK9uwlYwsQmo1qE7dMW4DlYvlkaC03ZJ5pb05k2ektJ_mA"
        },
        {
            "id": "cadillac-optiq-04",
            "categoria": "Eléctrico",
            "nombre": "Batería",
            "precio": 337,
            "imagen": "/images/repuestos/bateria.jpg",
            "respaldo": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQcygXOTU3DdOXjls9O1PjeykjtgG40ibn2HLntzq6FwoEr3ktNX6ztn7P05-zpC_AbJcnDj_3ue_OWEH83vk2s_VkVcBFZ"
        },
        {
            "id": "cadillac-optiq-05",
            "categoria": "Eléctrico",
            "nombre": "Alternador",
            "precio": 786,
            "imagen": "/images/repuestos/alternador.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTH5hWHGbMTMeBiZjBMhBev64-f9H4AD_CHxJO4DWMhM99-W6w0zb5oT6T7Za-jTiHbt9T_MsaSMkiUmGowWoUtNuZSFCJFL2vTuaSyrjptiw3AmhOqEyTZ"
        },
        {
            "id": "cadillac-optiq-06",
            "categoria": "Refrigeración",
            "nombre": "Radiador",
            "precio": 898,
            "imagen": "/images/repuestos/radiador.jpg",
            "respaldo": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQmk6otyyvQE6w5U5w_gMHQ_EsPoOv-jNqZWGy9JnDg9sfBwMjoe4cqhLhiGQyxRS_JFKmtzv9kGuE-ux399wqwZWsvcYEvRn3LUwudPj0ZDHAbqmtBYvXHcQ"
        },
        {
            "id": "cadillac-optiq-07",
            "categoria": "Frenos",
            "nombre": "Pastillas freno",
            "precio": 407,
            "imagen": "/images/repuestos/pastillas-freno.jpg",
            "respaldo": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQhA-ODRTXVA9Iwv587jzZpjqiyQUK87mrAv-YpGbF985cb3eufEAWJYiDG78ZGObSze9BLhad4MjR6z98r5lkVUVMfArqB"
        },
        {
            "id": "cadillac-optiq-08",
            "categoria": "Frenos",
            "nombre": "Discos freno",
            "precio": 1011,
            "imagen": "/images/repuestos/discos-freno.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR5q4OptWA7SgileTBAQlwgo5U4TzPI1yW3KtbOloWbnHrSSxYql39nCyFZ0zF5tLbmIBvyeRxTEj3hjQxjUf1Aty2s8skJDzuofO1rf5rodmftxNtW4tNK5w"
        },
        {
            "id": "cadillac-optiq-09",
            "categoria": "Suspensión",
            "nombre": "Amortiguador",
            "precio": 1179,
            "imagen": "/images/repuestos/amortiguador.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBo26izntTaq-ZHvK214tacguEsNf9jyhfspUuFeVWmQ&s=10"
        },
        {
            "id": "cadillac-optiq-10",
            "categoria": "Llantas",
            "nombre": "Neumáticos",
            "precio": 2386,
            "imagen": "/images/repuestos/neumaticos.jpg",
            "respaldo": "https://interllantas.com/wp-content/uploads/images2/Llanta-COSMO-RC-17-185-65-R15-88H_1.jpg"
        }
    ],
    "Lamborghini Urus AWD": [
        {
            "id": "lamborghini-urus-awd-01",
            "categoria": "Motor",
            "nombre": "Filtro aceite",
            "precio": 134,
            "imagen": "/images/repuestos/filtro-aceite.jpg",
            "respaldo": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQkKwRarocZqLRhztwN743EtVuCcMo9SawVOI2EBsU1TWGoL5_e90t4QPQzp3ZlSZosrLd9QakZfkQCgOzvrHFn9QVUq15W"
        },
        {
            "id": "lamborghini-urus-awd-02",
            "categoria": "Motor",
            "nombre": "Filtro aire",
            "precio": 187,
            "imagen": "/images/repuestos/filtro-aire.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSP2TjNmWdhhylEY8ACAk_G41pgM6NN1Xe31gklkl-ZfoyP97Cvy5gV9CyJlejbArSSG3ntvQroksQkFHQW3RBt0vtW7TKfbOmQW3B4TlOj3jCDA6JT9JMm-A"
        },
        {
            "id": "lamborghini-urus-awd-03",
            "categoria": "Encendido",
            "nombre": "Bujías",
            "precio": 286,
            "imagen": "/images/repuestos/bujias.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQQczfTEPE-sf7mp-DgcY8YEJ3zjCTAumyOlno-sKg_V8HnagVvwaZZC_QFW7AELpWDprpw5Fn6yK9uwlYwsQmo1qE7dMW4DlYvlkaC03ZJ5pb05k2ektJ_mA"
        },
        {
            "id": "lamborghini-urus-awd-04",
            "categoria": "Eléctrico",
            "nombre": "Batería",
            "precio": 898,
            "imagen": "/images/repuestos/bateria.jpg",
            "respaldo": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQcygXOTU3DdOXjls9O1PjeykjtgG40ibn2HLntzq6FwoEr3ktNX6ztn7P05-zpC_AbJcnDj_3ue_OWEH83vk2s_VkVcBFZ"
        },
        {
            "id": "lamborghini-urus-awd-05",
            "categoria": "Eléctrico",
            "nombre": "Alternador",
            "precio": 2095,
            "imagen": "/images/repuestos/alternador.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTH5hWHGbMTMeBiZjBMhBev64-f9H4AD_CHxJO4DWMhM99-W6w0zb5oT6T7Za-jTiHbt9T_MsaSMkiUmGowWoUtNuZSFCJFL2vTuaSyrjptiw3AmhOqEyTZ"
        },
        {
            "id": "lamborghini-urus-awd-06",
            "categoria": "Refrigeración",
            "nombre": "Radiador",
            "precio": 2395,
            "imagen": "/images/repuestos/radiador.jpg",
            "respaldo": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQmk6otyyvQE6w5U5w_gMHQ_EsPoOv-jNqZWGy9JnDg9sfBwMjoe4cqhLhiGQyxRS_JFKmtzv9kGuE-ux399wqwZWsvcYEvRn3LUwudPj0ZDHAbqmtBYvXHcQ"
        },
        {
            "id": "lamborghini-urus-awd-07",
            "categoria": "Frenos",
            "nombre": "Pastillas freno",
            "precio": 1085,
            "imagen": "/images/repuestos/pastillas-freno.jpg",
            "respaldo": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQhA-ODRTXVA9Iwv587jzZpjqiyQUK87mrAv-YpGbF985cb3eufEAWJYiDG78ZGObSze9BLhad4MjR6z98r5lkVUVMfArqB"
        },
        {
            "id": "lamborghini-urus-awd-08",
            "categoria": "Frenos",
            "nombre": "Discos freno",
            "precio": 2695,
            "imagen": "/images/repuestos/discos-freno.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR5q4OptWA7SgileTBAQlwgo5U4TzPI1yW3KtbOloWbnHrSSxYql39nCyFZ0zF5tLbmIBvyeRxTEj3hjQxjUf1Aty2s8skJDzuofO1rf5rodmftxNtW4tNK5w"
        },
        {
            "id": "lamborghini-urus-awd-09",
            "categoria": "Suspensión",
            "nombre": "Amortiguador",
            "precio": 3144,
            "imagen": "/images/repuestos/amortiguador.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBo26izntTaq-ZHvK214tacguEsNf9jyhfspUuFeVWmQ&s=10"
        },
        {
            "id": "lamborghini-urus-awd-10",
            "categoria": "Llantas",
            "nombre": "Neumáticos",
            "precio": 6362,
            "imagen": "/images/repuestos/neumaticos.jpg",
            "respaldo": "https://interllantas.com/wp-content/uploads/images2/Llanta-COSMO-RC-17-185-65-R15-88H_1.jpg"
        }
    ],
    "Cadillac LYRIQ-V": [
        {
            "id": "cadillac-lyriq-v-01",
            "categoria": "Motor",
            "nombre": "Filtro aceite",
            "precio": 62,
            "imagen": "/images/repuestos/filtro-aceite.jpg",
            "respaldo": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQkKwRarocZqLRhztwN743EtVuCcMo9SawVOI2EBsU1TWGoL5_e90t4QPQzp3ZlSZosrLd9QakZfkQCgOzvrHFn9QVUq15W"
        },
        {
            "id": "cadillac-lyriq-v-02",
            "categoria": "Motor",
            "nombre": "Filtro aire",
            "precio": 86,
            "imagen": "/images/repuestos/filtro-aire.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSP2TjNmWdhhylEY8ACAk_G41pgM6NN1Xe31gklkl-ZfoyP97Cvy5gV9CyJlejbArSSG3ntvQroksQkFHQW3RBt0vtW7TKfbOmQW3B4TlOj3jCDA6JT9JMm-A"
        },
        {
            "id": "cadillac-lyriq-v-03",
            "categoria": "Encendido",
            "nombre": "Bujías",
            "precio": 131,
            "imagen": "/images/repuestos/bujias.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQQczfTEPE-sf7mp-DgcY8YEJ3zjCTAumyOlno-sKg_V8HnagVvwaZZC_QFW7AELpWDprpw5Fn6yK9uwlYwsQmo1qE7dMW4DlYvlkaC03ZJ5pb05k2ektJ_mA"
        },
        {
            "id": "cadillac-lyriq-v-04",
            "categoria": "Eléctrico",
            "nombre": "Batería",
            "precio": 411,
            "imagen": "/images/repuestos/bateria.jpg",
            "respaldo": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQcygXOTU3DdOXjls9O1PjeykjtgG40ibn2HLntzq6FwoEr3ktNX6ztn7P05-zpC_AbJcnDj_3ue_OWEH83vk2s_VkVcBFZ"
        },
        {
            "id": "cadillac-lyriq-v-05",
            "categoria": "Eléctrico",
            "nombre": "Alternador",
            "precio": 960,
            "imagen": "/images/repuestos/alternador.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTH5hWHGbMTMeBiZjBMhBev64-f9H4AD_CHxJO4DWMhM99-W6w0zb5oT6T7Za-jTiHbt9T_MsaSMkiUmGowWoUtNuZSFCJFL2vTuaSyrjptiw3AmhOqEyTZ"
        },
        {
            "id": "cadillac-lyriq-v-06",
            "categoria": "Refrigeración",
            "nombre": "Radiador",
            "precio": 1098,
            "imagen": "/images/repuestos/radiador.jpg",
            "respaldo": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQmk6otyyvQE6w5U5w_gMHQ_EsPoOv-jNqZWGy9JnDg9sfBwMjoe4cqhLhiGQyxRS_JFKmtzv9kGuE-ux399wqwZWsvcYEvRn3LUwudPj0ZDHAbqmtBYvXHcQ"
        },
        {
            "id": "cadillac-lyriq-v-07",
            "categoria": "Frenos",
            "nombre": "Pastillas freno",
            "precio": 497,
            "imagen": "/images/repuestos/pastillas-freno.jpg",
            "respaldo": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQhA-ODRTXVA9Iwv587jzZpjqiyQUK87mrAv-YpGbF985cb3eufEAWJYiDG78ZGObSze9BLhad4MjR6z98r5lkVUVMfArqB"
        },
        {
            "id": "cadillac-lyriq-v-08",
            "categoria": "Frenos",
            "nombre": "Discos freno",
            "precio": 1235,
            "imagen": "/images/repuestos/discos-freno.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR5q4OptWA7SgileTBAQlwgo5U4TzPI1yW3KtbOloWbnHrSSxYql39nCyFZ0zF5tLbmIBvyeRxTEj3hjQxjUf1Aty2s8skJDzuofO1rf5rodmftxNtW4tNK5w"
        },
        {
            "id": "cadillac-lyriq-v-09",
            "categoria": "Suspensión",
            "nombre": "Amortiguador",
            "precio": 1441,
            "imagen": "/images/repuestos/amortiguador.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBo26izntTaq-ZHvK214tacguEsNf9jyhfspUuFeVWmQ&s=10"
        },
        {
            "id": "cadillac-lyriq-v-10",
            "categoria": "Llantas",
            "nombre": "Neumáticos",
            "precio": 2916,
            "imagen": "/images/repuestos/neumaticos.jpg",
            "respaldo": "https://interllantas.com/wp-content/uploads/images2/Llanta-COSMO-RC-17-185-65-R15-88H_1.jpg"
        }
    ],
    "Rolls Royce Dawn": [
        {
            "id": "rolls-royce-dawn-01",
            "categoria": "Motor",
            "nombre": "Filtro aceite",
            "precio": 168,
            "imagen": "/images/repuestos/filtro-aceite.jpg",
            "respaldo": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQkKwRarocZqLRhztwN743EtVuCcMo9SawVOI2EBsU1TWGoL5_e90t4QPQzp3ZlSZosrLd9QakZfkQCgOzvrHFn9QVUq15W"
        },
        {
            "id": "rolls-royce-dawn-02",
            "categoria": "Motor",
            "nombre": "Filtro aire",
            "precio": 234,
            "imagen": "/images/repuestos/filtro-aire.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSP2TjNmWdhhylEY8ACAk_G41pgM6NN1Xe31gklkl-ZfoyP97Cvy5gV9CyJlejbArSSG3ntvQroksQkFHQW3RBt0vtW7TKfbOmQW3B4TlOj3jCDA6JT9JMm-A"
        },
        {
            "id": "rolls-royce-dawn-03",
            "categoria": "Encendido",
            "nombre": "Bujías",
            "precio": 357,
            "imagen": "/images/repuestos/bujias.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQQczfTEPE-sf7mp-DgcY8YEJ3zjCTAumyOlno-sKg_V8HnagVvwaZZC_QFW7AELpWDprpw5Fn6yK9uwlYwsQmo1qE7dMW4DlYvlkaC03ZJ5pb05k2ektJ_mA"
        },
        {
            "id": "rolls-royce-dawn-04",
            "categoria": "Eléctrico",
            "nombre": "Batería",
            "precio": 1122,
            "imagen": "/images/repuestos/bateria.jpg",
            "respaldo": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQcygXOTU3DdOXjls9O1PjeykjtgG40ibn2HLntzq6FwoEr3ktNX6ztn7P05-zpC_AbJcnDj_3ue_OWEH83vk2s_VkVcBFZ"
        },
        {
            "id": "rolls-royce-dawn-05",
            "categoria": "Eléctrico",
            "nombre": "Alternador",
            "precio": 2619,
            "imagen": "/images/repuestos/alternador.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTH5hWHGbMTMeBiZjBMhBev64-f9H4AD_CHxJO4DWMhM99-W6w0zb5oT6T7Za-jTiHbt9T_MsaSMkiUmGowWoUtNuZSFCJFL2vTuaSyrjptiw3AmhOqEyTZ"
        },
        {
            "id": "rolls-royce-dawn-06",
            "categoria": "Refrigeración",
            "nombre": "Radiador",
            "precio": 2994,
            "imagen": "/images/repuestos/radiador.jpg",
            "respaldo": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQmk6otyyvQE6w5U5w_gMHQ_EsPoOv-jNqZWGy9JnDg9sfBwMjoe4cqhLhiGQyxRS_JFKmtzv9kGuE-ux399wqwZWsvcYEvRn3LUwudPj0ZDHAbqmtBYvXHcQ"
        },
        {
            "id": "rolls-royce-dawn-07",
            "categoria": "Frenos",
            "nombre": "Pastillas freno",
            "precio": 1356,
            "imagen": "/images/repuestos/pastillas-freno.jpg",
            "respaldo": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQhA-ODRTXVA9Iwv587jzZpjqiyQUK87mrAv-YpGbF985cb3eufEAWJYiDG78ZGObSze9BLhad4MjR6z98r5lkVUVMfArqB"
        },
        {
            "id": "rolls-royce-dawn-08",
            "categoria": "Frenos",
            "nombre": "Discos freno",
            "precio": 3369,
            "imagen": "/images/repuestos/discos-freno.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR5q4OptWA7SgileTBAQlwgo5U4TzPI1yW3KtbOloWbnHrSSxYql39nCyFZ0zF5tLbmIBvyeRxTEj3hjQxjUf1Aty2s8skJDzuofO1rf5rodmftxNtW4tNK5w"
        },
        {
            "id": "rolls-royce-dawn-09",
            "categoria": "Suspensión",
            "nombre": "Amortiguador",
            "precio": 3930,
            "imagen": "/images/repuestos/amortiguador.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBo26izntTaq-ZHvK214tacguEsNf9jyhfspUuFeVWmQ&s=10"
        },
        {
            "id": "rolls-royce-dawn-10",
            "categoria": "Llantas",
            "nombre": "Neumáticos",
            "precio": 7953,
            "imagen": "/images/repuestos/neumaticos.jpg",
            "respaldo": "https://interllantas.com/wp-content/uploads/images2/Llanta-COSMO-RC-17-185-65-R15-88H_1.jpg"
        }
    ],
    "McLaren 720S": [
        {
            "id": "mclaren-720s-01",
            "categoria": "Motor",
            "nombre": "Filtro aceite",
            "precio": 157,
            "imagen": "/images/repuestos/filtro-aceite.jpg",
            "respaldo": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQkKwRarocZqLRhztwN743EtVuCcMo9SawVOI2EBsU1TWGoL5_e90t4QPQzp3ZlSZosrLd9QakZfkQCgOzvrHFn9QVUq15W"
        },
        {
            "id": "mclaren-720s-02",
            "categoria": "Motor",
            "nombre": "Filtro aire",
            "precio": 218,
            "imagen": "/images/repuestos/filtro-aire.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSP2TjNmWdhhylEY8ACAk_G41pgM6NN1Xe31gklkl-ZfoyP97Cvy5gV9CyJlejbArSSG3ntvQroksQkFHQW3RBt0vtW7TKfbOmQW3B4TlOj3jCDA6JT9JMm-A"
        },
        {
            "id": "mclaren-720s-03",
            "categoria": "Encendido",
            "nombre": "Bujías",
            "precio": 333,
            "imagen": "/images/repuestos/bujias.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQQczfTEPE-sf7mp-DgcY8YEJ3zjCTAumyOlno-sKg_V8HnagVvwaZZC_QFW7AELpWDprpw5Fn6yK9uwlYwsQmo1qE7dMW4DlYvlkaC03ZJ5pb05k2ektJ_mA"
        },
        {
            "id": "mclaren-720s-04",
            "categoria": "Eléctrico",
            "nombre": "Batería",
            "precio": 1047,
            "imagen": "/images/repuestos/bateria.jpg",
            "respaldo": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQcygXOTU3DdOXjls9O1PjeykjtgG40ibn2HLntzq6FwoEr3ktNX6ztn7P05-zpC_AbJcnDj_3ue_OWEH83vk2s_VkVcBFZ"
        },
        {
            "id": "mclaren-720s-05",
            "categoria": "Eléctrico",
            "nombre": "Alternador",
            "precio": 2444,
            "imagen": "/images/repuestos/alternador.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTH5hWHGbMTMeBiZjBMhBev64-f9H4AD_CHxJO4DWMhM99-W6w0zb5oT6T7Za-jTiHbt9T_MsaSMkiUmGowWoUtNuZSFCJFL2vTuaSyrjptiw3AmhOqEyTZ"
        },
        {
            "id": "mclaren-720s-06",
            "categoria": "Refrigeración",
            "nombre": "Radiador",
            "precio": 2794,
            "imagen": "/images/repuestos/radiador.jpg",
            "respaldo": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQmk6otyyvQE6w5U5w_gMHQ_EsPoOv-jNqZWGy9JnDg9sfBwMjoe4cqhLhiGQyxRS_JFKmtzv9kGuE-ux399wqwZWsvcYEvRn3LUwudPj0ZDHAbqmtBYvXHcQ"
        },
        {
            "id": "mclaren-720s-07",
            "categoria": "Frenos",
            "nombre": "Pastillas freno",
            "precio": 1266,
            "imagen": "/images/repuestos/pastillas-freno.jpg",
            "respaldo": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQhA-ODRTXVA9Iwv587jzZpjqiyQUK87mrAv-YpGbF985cb3eufEAWJYiDG78ZGObSze9BLhad4MjR6z98r5lkVUVMfArqB"
        },
        {
            "id": "mclaren-720s-08",
            "categoria": "Frenos",
            "nombre": "Discos freno",
            "precio": 3144,
            "imagen": "/images/repuestos/discos-freno.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR5q4OptWA7SgileTBAQlwgo5U4TzPI1yW3KtbOloWbnHrSSxYql39nCyFZ0zF5tLbmIBvyeRxTEj3hjQxjUf1Aty2s8skJDzuofO1rf5rodmftxNtW4tNK5w"
        },
        {
            "id": "mclaren-720s-09",
            "categoria": "Suspensión",
            "nombre": "Amortiguador",
            "precio": 3668,
            "imagen": "/images/repuestos/amortiguador.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBo26izntTaq-ZHvK214tacguEsNf9jyhfspUuFeVWmQ&s=10"
        },
        {
            "id": "mclaren-720s-10",
            "categoria": "Llantas",
            "nombre": "Neumáticos",
            "precio": 7423,
            "imagen": "/images/repuestos/neumaticos.jpg",
            "respaldo": "https://interllantas.com/wp-content/uploads/images2/Llanta-COSMO-RC-17-185-65-R15-88H_1.jpg"
        }
    ],
    "Mercedes-AMG G63": [
        {
            "id": "mercedes-amg-g63-01",
            "categoria": "Motor",
            "nombre": "Filtro aceite",
            "precio": 112,
            "imagen": "/images/repuestos/filtro-aceite.jpg",
            "respaldo": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQkKwRarocZqLRhztwN743EtVuCcMo9SawVOI2EBsU1TWGoL5_e90t4QPQzp3ZlSZosrLd9QakZfkQCgOzvrHFn9QVUq15W"
        },
        {
            "id": "mercedes-amg-g63-02",
            "categoria": "Motor",
            "nombre": "Filtro aire",
            "precio": 156,
            "imagen": "/images/repuestos/filtro-aire.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSP2TjNmWdhhylEY8ACAk_G41pgM6NN1Xe31gklkl-ZfoyP97Cvy5gV9CyJlejbArSSG3ntvQroksQkFHQW3RBt0vtW7TKfbOmQW3B4TlOj3jCDA6JT9JMm-A"
        },
        {
            "id": "mercedes-amg-g63-03",
            "categoria": "Encendido",
            "nombre": "Bujías",
            "precio": 238,
            "imagen": "/images/repuestos/bujias.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQQczfTEPE-sf7mp-DgcY8YEJ3zjCTAumyOlno-sKg_V8HnagVvwaZZC_QFW7AELpWDprpw5Fn6yK9uwlYwsQmo1qE7dMW4DlYvlkaC03ZJ5pb05k2ektJ_mA"
        },
        {
            "id": "mercedes-amg-g63-04",
            "categoria": "Eléctrico",
            "nombre": "Batería",
            "precio": 748,
            "imagen": "/images/repuestos/bateria.jpg",
            "respaldo": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQcygXOTU3DdOXjls9O1PjeykjtgG40ibn2HLntzq6FwoEr3ktNX6ztn7P05-zpC_AbJcnDj_3ue_OWEH83vk2s_VkVcBFZ"
        },
        {
            "id": "mercedes-amg-g63-05",
            "categoria": "Eléctrico",
            "nombre": "Alternador",
            "precio": 1746,
            "imagen": "/images/repuestos/alternador.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTH5hWHGbMTMeBiZjBMhBev64-f9H4AD_CHxJO4DWMhM99-W6w0zb5oT6T7Za-jTiHbt9T_MsaSMkiUmGowWoUtNuZSFCJFL2vTuaSyrjptiw3AmhOqEyTZ"
        },
        {
            "id": "mercedes-amg-g63-06",
            "categoria": "Refrigeración",
            "nombre": "Radiador",
            "precio": 1996,
            "imagen": "/images/repuestos/radiador.jpg",
            "respaldo": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQmk6otyyvQE6w5U5w_gMHQ_EsPoOv-jNqZWGy9JnDg9sfBwMjoe4cqhLhiGQyxRS_JFKmtzv9kGuE-ux399wqwZWsvcYEvRn3LUwudPj0ZDHAbqmtBYvXHcQ"
        },
        {
            "id": "mercedes-amg-g63-07",
            "categoria": "Frenos",
            "nombre": "Pastillas freno",
            "precio": 904,
            "imagen": "/images/repuestos/pastillas-freno.jpg",
            "respaldo": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQhA-ODRTXVA9Iwv587jzZpjqiyQUK87mrAv-YpGbF985cb3eufEAWJYiDG78ZGObSze9BLhad4MjR6z98r5lkVUVMfArqB"
        },
        {
            "id": "mercedes-amg-g63-08",
            "categoria": "Frenos",
            "nombre": "Discos freno",
            "precio": 2246,
            "imagen": "/images/repuestos/discos-freno.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR5q4OptWA7SgileTBAQlwgo5U4TzPI1yW3KtbOloWbnHrSSxYql39nCyFZ0zF5tLbmIBvyeRxTEj3hjQxjUf1Aty2s8skJDzuofO1rf5rodmftxNtW4tNK5w"
        },
        {
            "id": "mercedes-amg-g63-09",
            "categoria": "Suspensión",
            "nombre": "Amortiguador",
            "precio": 2620,
            "imagen": "/images/repuestos/amortiguador.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBo26izntTaq-ZHvK214tacguEsNf9jyhfspUuFeVWmQ&s=10"
        },
        {
            "id": "mercedes-amg-g63-10",
            "categoria": "Llantas",
            "nombre": "Neumáticos",
            "precio": 5302,
            "imagen": "/images/repuestos/neumaticos.jpg",
            "respaldo": "https://interllantas.com/wp-content/uploads/images2/Llanta-COSMO-RC-17-185-65-R15-88H_1.jpg"
        }
    ],
    "Bentley Continental GT": [
        {
            "id": "bentley-continental-gt-01",
            "categoria": "Motor",
            "nombre": "Filtro aceite",
            "precio": 140,
            "imagen": "/images/repuestos/filtro-aceite.jpg",
            "respaldo": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQkKwRarocZqLRhztwN743EtVuCcMo9SawVOI2EBsU1TWGoL5_e90t4QPQzp3ZlSZosrLd9QakZfkQCgOzvrHFn9QVUq15W"
        },
        {
            "id": "bentley-continental-gt-02",
            "categoria": "Motor",
            "nombre": "Filtro aire",
            "precio": 195,
            "imagen": "/images/repuestos/filtro-aire.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSP2TjNmWdhhylEY8ACAk_G41pgM6NN1Xe31gklkl-ZfoyP97Cvy5gV9CyJlejbArSSG3ntvQroksQkFHQW3RBt0vtW7TKfbOmQW3B4TlOj3jCDA6JT9JMm-A"
        },
        {
            "id": "bentley-continental-gt-03",
            "categoria": "Encendido",
            "nombre": "Bujías",
            "precio": 298,
            "imagen": "/images/repuestos/bujias.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQQczfTEPE-sf7mp-DgcY8YEJ3zjCTAumyOlno-sKg_V8HnagVvwaZZC_QFW7AELpWDprpw5Fn6yK9uwlYwsQmo1qE7dMW4DlYvlkaC03ZJ5pb05k2ektJ_mA"
        },
        {
            "id": "bentley-continental-gt-04",
            "categoria": "Eléctrico",
            "nombre": "Batería",
            "precio": 935,
            "imagen": "/images/repuestos/bateria.jpg",
            "respaldo": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQcygXOTU3DdOXjls9O1PjeykjtgG40ibn2HLntzq6FwoEr3ktNX6ztn7P05-zpC_AbJcnDj_3ue_OWEH83vk2s_VkVcBFZ"
        },
        {
            "id": "bentley-continental-gt-05",
            "categoria": "Eléctrico",
            "nombre": "Alternador",
            "precio": 2182,
            "imagen": "/images/repuestos/alternador.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTH5hWHGbMTMeBiZjBMhBev64-f9H4AD_CHxJO4DWMhM99-W6w0zb5oT6T7Za-jTiHbt9T_MsaSMkiUmGowWoUtNuZSFCJFL2vTuaSyrjptiw3AmhOqEyTZ"
        },
        {
            "id": "bentley-continental-gt-06",
            "categoria": "Refrigeración",
            "nombre": "Radiador",
            "precio": 2495,
            "imagen": "/images/repuestos/radiador.jpg",
            "respaldo": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQmk6otyyvQE6w5U5w_gMHQ_EsPoOv-jNqZWGy9JnDg9sfBwMjoe4cqhLhiGQyxRS_JFKmtzv9kGuE-ux399wqwZWsvcYEvRn3LUwudPj0ZDHAbqmtBYvXHcQ"
        },
        {
            "id": "bentley-continental-gt-07",
            "categoria": "Frenos",
            "nombre": "Pastillas freno",
            "precio": 1130,
            "imagen": "/images/repuestos/pastillas-freno.jpg",
            "respaldo": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQhA-ODRTXVA9Iwv587jzZpjqiyQUK87mrAv-YpGbF985cb3eufEAWJYiDG78ZGObSze9BLhad4MjR6z98r5lkVUVMfArqB"
        },
        {
            "id": "bentley-continental-gt-08",
            "categoria": "Frenos",
            "nombre": "Discos freno",
            "precio": 2808,
            "imagen": "/images/repuestos/discos-freno.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR5q4OptWA7SgileTBAQlwgo5U4TzPI1yW3KtbOloWbnHrSSxYql39nCyFZ0zF5tLbmIBvyeRxTEj3hjQxjUf1Aty2s8skJDzuofO1rf5rodmftxNtW4tNK5w"
        },
        {
            "id": "bentley-continental-gt-09",
            "categoria": "Suspensión",
            "nombre": "Amortiguador",
            "precio": 3275,
            "imagen": "/images/repuestos/amortiguador.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBo26izntTaq-ZHvK214tacguEsNf9jyhfspUuFeVWmQ&s=10"
        },
        {
            "id": "bentley-continental-gt-10",
            "categoria": "Llantas",
            "nombre": "Neumáticos",
            "precio": 6628,
            "imagen": "/images/repuestos/neumaticos.jpg",
            "respaldo": "https://interllantas.com/wp-content/uploads/images2/Llanta-COSMO-RC-17-185-65-R15-88H_1.jpg"
        }
    ],
    "Audi RS V10 Performance": [
        {
            "id": "audi-rs-v10-performance-01",
            "categoria": "Motor",
            "nombre": "Filtro aceite",
            "precio": 106,
            "imagen": "/images/repuestos/filtro-aceite.jpg",
            "respaldo": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQkKwRarocZqLRhztwN743EtVuCcMo9SawVOI2EBsU1TWGoL5_e90t4QPQzp3ZlSZosrLd9QakZfkQCgOzvrHFn9QVUq15W"
        },
        {
            "id": "audi-rs-v10-performance-02",
            "categoria": "Motor",
            "nombre": "Filtro aire",
            "precio": 148,
            "imagen": "/images/repuestos/filtro-aire.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSP2TjNmWdhhylEY8ACAk_G41pgM6NN1Xe31gklkl-ZfoyP97Cvy5gV9CyJlejbArSSG3ntvQroksQkFHQW3RBt0vtW7TKfbOmQW3B4TlOj3jCDA6JT9JMm-A"
        },
        {
            "id": "audi-rs-v10-performance-03",
            "categoria": "Encendido",
            "nombre": "Bujías",
            "precio": 226,
            "imagen": "/images/repuestos/bujias.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQQczfTEPE-sf7mp-DgcY8YEJ3zjCTAumyOlno-sKg_V8HnagVvwaZZC_QFW7AELpWDprpw5Fn6yK9uwlYwsQmo1qE7dMW4DlYvlkaC03ZJ5pb05k2ektJ_mA"
        },
        {
            "id": "audi-rs-v10-performance-04",
            "categoria": "Eléctrico",
            "nombre": "Batería",
            "precio": 711,
            "imagen": "/images/repuestos/bateria.jpg",
            "respaldo": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQcygXOTU3DdOXjls9O1PjeykjtgG40ibn2HLntzq6FwoEr3ktNX6ztn7P05-zpC_AbJcnDj_3ue_OWEH83vk2s_VkVcBFZ"
        },
        {
            "id": "audi-rs-v10-performance-05",
            "categoria": "Eléctrico",
            "nombre": "Alternador",
            "precio": 1659,
            "imagen": "/images/repuestos/alternador.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTH5hWHGbMTMeBiZjBMhBev64-f9H4AD_CHxJO4DWMhM99-W6w0zb5oT6T7Za-jTiHbt9T_MsaSMkiUmGowWoUtNuZSFCJFL2vTuaSyrjptiw3AmhOqEyTZ"
        },
        {
            "id": "audi-rs-v10-performance-06",
            "categoria": "Refrigeración",
            "nombre": "Radiador",
            "precio": 1896,
            "imagen": "/images/repuestos/radiador.jpg",
            "respaldo": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQmk6otyyvQE6w5U5w_gMHQ_EsPoOv-jNqZWGy9JnDg9sfBwMjoe4cqhLhiGQyxRS_JFKmtzv9kGuE-ux399wqwZWsvcYEvRn3LUwudPj0ZDHAbqmtBYvXHcQ"
        },
        {
            "id": "audi-rs-v10-performance-07",
            "categoria": "Frenos",
            "nombre": "Pastillas freno",
            "precio": 859,
            "imagen": "/images/repuestos/pastillas-freno.jpg",
            "respaldo": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQhA-ODRTXVA9Iwv587jzZpjqiyQUK87mrAv-YpGbF985cb3eufEAWJYiDG78ZGObSze9BLhad4MjR6z98r5lkVUVMfArqB"
        },
        {
            "id": "audi-rs-v10-performance-08",
            "categoria": "Frenos",
            "nombre": "Discos freno",
            "precio": 2134,
            "imagen": "/images/repuestos/discos-freno.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR5q4OptWA7SgileTBAQlwgo5U4TzPI1yW3KtbOloWbnHrSSxYql39nCyFZ0zF5tLbmIBvyeRxTEj3hjQxjUf1Aty2s8skJDzuofO1rf5rodmftxNtW4tNK5w"
        },
        {
            "id": "audi-rs-v10-performance-09",
            "categoria": "Suspensión",
            "nombre": "Amortiguador",
            "precio": 2489,
            "imagen": "/images/repuestos/amortiguador.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBo26izntTaq-ZHvK214tacguEsNf9jyhfspUuFeVWmQ&s=10"
        },
        {
            "id": "audi-rs-v10-performance-10",
            "categoria": "Llantas",
            "nombre": "Neumáticos",
            "precio": 5037,
            "imagen": "/images/repuestos/neumaticos.jpg",
            "respaldo": "https://interllantas.com/wp-content/uploads/images2/Llanta-COSMO-RC-17-185-65-R15-88H_1.jpg"
        }
    ],
    "Maserati MC20": [
        {
            "id": "maserati-mc20-01",
            "categoria": "Motor",
            "nombre": "Filtro aceite",
            "precio": 129,
            "imagen": "/images/repuestos/filtro-aceite.jpg",
            "respaldo": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQkKwRarocZqLRhztwN743EtVuCcMo9SawVOI2EBsU1TWGoL5_e90t4QPQzp3ZlSZosrLd9QakZfkQCgOzvrHFn9QVUq15W"
        },
        {
            "id": "maserati-mc20-02",
            "categoria": "Motor",
            "nombre": "Filtro aire",
            "precio": 179,
            "imagen": "/images/repuestos/filtro-aire.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSP2TjNmWdhhylEY8ACAk_G41pgM6NN1Xe31gklkl-ZfoyP97Cvy5gV9CyJlejbArSSG3ntvQroksQkFHQW3RBt0vtW7TKfbOmQW3B4TlOj3jCDA6JT9JMm-A"
        },
        {
            "id": "maserati-mc20-03",
            "categoria": "Encendido",
            "nombre": "Bujías",
            "precio": 274,
            "imagen": "/images/repuestos/bujias.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQQczfTEPE-sf7mp-DgcY8YEJ3zjCTAumyOlno-sKg_V8HnagVvwaZZC_QFW7AELpWDprpw5Fn6yK9uwlYwsQmo1qE7dMW4DlYvlkaC03ZJ5pb05k2ektJ_mA"
        },
        {
            "id": "maserati-mc20-04",
            "categoria": "Eléctrico",
            "nombre": "Batería",
            "precio": 860,
            "imagen": "/images/repuestos/bateria.jpg",
            "respaldo": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQcygXOTU3DdOXjls9O1PjeykjtgG40ibn2HLntzq6FwoEr3ktNX6ztn7P05-zpC_AbJcnDj_3ue_OWEH83vk2s_VkVcBFZ"
        },
        {
            "id": "maserati-mc20-05",
            "categoria": "Eléctrico",
            "nombre": "Alternador",
            "precio": 2008,
            "imagen": "/images/repuestos/alternador.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTH5hWHGbMTMeBiZjBMhBev64-f9H4AD_CHxJO4DWMhM99-W6w0zb5oT6T7Za-jTiHbt9T_MsaSMkiUmGowWoUtNuZSFCJFL2vTuaSyrjptiw3AmhOqEyTZ"
        },
        {
            "id": "maserati-mc20-06",
            "categoria": "Refrigeración",
            "nombre": "Radiador",
            "precio": 2295,
            "imagen": "/images/repuestos/radiador.jpg",
            "respaldo": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQmk6otyyvQE6w5U5w_gMHQ_EsPoOv-jNqZWGy9JnDg9sfBwMjoe4cqhLhiGQyxRS_JFKmtzv9kGuE-ux399wqwZWsvcYEvRn3LUwudPj0ZDHAbqmtBYvXHcQ"
        },
        {
            "id": "maserati-mc20-07",
            "categoria": "Frenos",
            "nombre": "Pastillas freno",
            "precio": 1040,
            "imagen": "/images/repuestos/pastillas-freno.jpg",
            "respaldo": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQhA-ODRTXVA9Iwv587jzZpjqiyQUK87mrAv-YpGbF985cb3eufEAWJYiDG78ZGObSze9BLhad4MjR6z98r5lkVUVMfArqB"
        },
        {
            "id": "maserati-mc20-08",
            "categoria": "Frenos",
            "nombre": "Discos freno",
            "precio": 2583,
            "imagen": "/images/repuestos/discos-freno.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR5q4OptWA7SgileTBAQlwgo5U4TzPI1yW3KtbOloWbnHrSSxYql39nCyFZ0zF5tLbmIBvyeRxTEj3hjQxjUf1Aty2s8skJDzuofO1rf5rodmftxNtW4tNK5w"
        },
        {
            "id": "maserati-mc20-09",
            "categoria": "Suspensión",
            "nombre": "Amortiguador",
            "precio": 3013,
            "imagen": "/images/repuestos/amortiguador.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBo26izntTaq-ZHvK214tacguEsNf9jyhfspUuFeVWmQ&s=10"
        },
        {
            "id": "maserati-mc20-10",
            "categoria": "Llantas",
            "nombre": "Neumáticos",
            "precio": 6097,
            "imagen": "/images/repuestos/neumaticos.jpg",
            "respaldo": "https://interllantas.com/wp-content/uploads/images2/Llanta-COSMO-RC-17-185-65-R15-88H_1.jpg"
        }
    ],
    "Bugatti Chiron": [
        {
            "id": "bugatti-chiron-01",
            "categoria": "Motor",
            "nombre": "Filtro aceite",
            "precio": 364,
            "imagen": "/images/repuestos/filtro-aceite.jpg",
            "respaldo": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQkKwRarocZqLRhztwN743EtVuCcMo9SawVOI2EBsU1TWGoL5_e90t4QPQzp3ZlSZosrLd9QakZfkQCgOzvrHFn9QVUq15W"
        },
        {
            "id": "bugatti-chiron-02",
            "categoria": "Motor",
            "nombre": "Filtro aire",
            "precio": 507,
            "imagen": "/images/repuestos/filtro-aire.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSP2TjNmWdhhylEY8ACAk_G41pgM6NN1Xe31gklkl-ZfoyP97Cvy5gV9CyJlejbArSSG3ntvQroksQkFHQW3RBt0vtW7TKfbOmQW3B4TlOj3jCDA6JT9JMm-A"
        },
        {
            "id": "bugatti-chiron-03",
            "categoria": "Encendido",
            "nombre": "Bujías",
            "precio": 774,
            "imagen": "/images/repuestos/bujias.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQQczfTEPE-sf7mp-DgcY8YEJ3zjCTAumyOlno-sKg_V8HnagVvwaZZC_QFW7AELpWDprpw5Fn6yK9uwlYwsQmo1qE7dMW4DlYvlkaC03ZJ5pb05k2ektJ_mA"
        },
        {
            "id": "bugatti-chiron-04",
            "categoria": "Eléctrico",
            "nombre": "Batería",
            "precio": 2431,
            "imagen": "/images/repuestos/bateria.jpg",
            "respaldo": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQcygXOTU3DdOXjls9O1PjeykjtgG40ibn2HLntzq6FwoEr3ktNX6ztn7P05-zpC_AbJcnDj_3ue_OWEH83vk2s_VkVcBFZ"
        },
        {
            "id": "bugatti-chiron-05",
            "categoria": "Eléctrico",
            "nombre": "Alternador",
            "precio": 5674,
            "imagen": "/images/repuestos/alternador.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTH5hWHGbMTMeBiZjBMhBev64-f9H4AD_CHxJO4DWMhM99-W6w0zb5oT6T7Za-jTiHbt9T_MsaSMkiUmGowWoUtNuZSFCJFL2vTuaSyrjptiw3AmhOqEyTZ"
        },
        {
            "id": "bugatti-chiron-06",
            "categoria": "Refrigeración",
            "nombre": "Radiador",
            "precio": 6487,
            "imagen": "/images/repuestos/radiador.jpg",
            "respaldo": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQmk6otyyvQE6w5U5w_gMHQ_EsPoOv-jNqZWGy9JnDg9sfBwMjoe4cqhLhiGQyxRS_JFKmtzv9kGuE-ux399wqwZWsvcYEvRn3LUwudPj0ZDHAbqmtBYvXHcQ"
        },
        {
            "id": "bugatti-chiron-07",
            "categoria": "Frenos",
            "nombre": "Pastillas freno",
            "precio": 2938,
            "imagen": "/images/repuestos/pastillas-freno.jpg",
            "respaldo": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQhA-ODRTXVA9Iwv587jzZpjqiyQUK87mrAv-YpGbF985cb3eufEAWJYiDG78ZGObSze9BLhad4MjR6z98r5lkVUVMfArqB"
        },
        {
            "id": "bugatti-chiron-08",
            "categoria": "Frenos",
            "nombre": "Discos freno",
            "precio": 7300,
            "imagen": "/images/repuestos/discos-freno.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR5q4OptWA7SgileTBAQlwgo5U4TzPI1yW3KtbOloWbnHrSSxYql39nCyFZ0zF5tLbmIBvyeRxTEj3hjQxjUf1Aty2s8skJDzuofO1rf5rodmftxNtW4tNK5w"
        },
        {
            "id": "bugatti-chiron-09",
            "categoria": "Suspensión",
            "nombre": "Amortiguador",
            "precio": 8515,
            "imagen": "/images/repuestos/amortiguador.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBo26izntTaq-ZHvK214tacguEsNf9jyhfspUuFeVWmQ&s=10"
        },
        {
            "id": "bugatti-chiron-10",
            "categoria": "Llantas",
            "nombre": "Neumáticos",
            "precio": 17232,
            "imagen": "/images/repuestos/neumaticos.jpg",
            "respaldo": "https://interllantas.com/wp-content/uploads/images2/Llanta-COSMO-RC-17-185-65-R15-88H_1.jpg"
        }
    ],
    "Range Rover Autobiography": [
        {
            "id": "range-rover-autobiography-01",
            "categoria": "Motor",
            "nombre": "Filtro aceite",
            "precio": 90,
            "imagen": "/images/repuestos/filtro-aceite.jpg",
            "respaldo": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQkKwRarocZqLRhztwN743EtVuCcMo9SawVOI2EBsU1TWGoL5_e90t4QPQzp3ZlSZosrLd9QakZfkQCgOzvrHFn9QVUq15W"
        },
        {
            "id": "range-rover-autobiography-02",
            "categoria": "Motor",
            "nombre": "Filtro aire",
            "precio": 125,
            "imagen": "/images/repuestos/filtro-aire.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSP2TjNmWdhhylEY8ACAk_G41pgM6NN1Xe31gklkl-ZfoyP97Cvy5gV9CyJlejbArSSG3ntvQroksQkFHQW3RBt0vtW7TKfbOmQW3B4TlOj3jCDA6JT9JMm-A"
        },
        {
            "id": "range-rover-autobiography-03",
            "categoria": "Encendido",
            "nombre": "Bujías",
            "precio": 190,
            "imagen": "/images/repuestos/bujias.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQQczfTEPE-sf7mp-DgcY8YEJ3zjCTAumyOlno-sKg_V8HnagVvwaZZC_QFW7AELpWDprpw5Fn6yK9uwlYwsQmo1qE7dMW4DlYvlkaC03ZJ5pb05k2ektJ_mA"
        },
        {
            "id": "range-rover-autobiography-04",
            "categoria": "Eléctrico",
            "nombre": "Batería",
            "precio": 598,
            "imagen": "/images/repuestos/bateria.jpg",
            "respaldo": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQcygXOTU3DdOXjls9O1PjeykjtgG40ibn2HLntzq6FwoEr3ktNX6ztn7P05-zpC_AbJcnDj_3ue_OWEH83vk2s_VkVcBFZ"
        },
        {
            "id": "range-rover-autobiography-05",
            "categoria": "Eléctrico",
            "nombre": "Alternador",
            "precio": 1397,
            "imagen": "/images/repuestos/alternador.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTH5hWHGbMTMeBiZjBMhBev64-f9H4AD_CHxJO4DWMhM99-W6w0zb5oT6T7Za-jTiHbt9T_MsaSMkiUmGowWoUtNuZSFCJFL2vTuaSyrjptiw3AmhOqEyTZ"
        },
        {
            "id": "range-rover-autobiography-06",
            "categoria": "Refrigeración",
            "nombre": "Radiador",
            "precio": 1597,
            "imagen": "/images/repuestos/radiador.jpg",
            "respaldo": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQmk6otyyvQE6w5U5w_gMHQ_EsPoOv-jNqZWGy9JnDg9sfBwMjoe4cqhLhiGQyxRS_JFKmtzv9kGuE-ux399wqwZWsvcYEvRn3LUwudPj0ZDHAbqmtBYvXHcQ"
        },
        {
            "id": "range-rover-autobiography-07",
            "categoria": "Frenos",
            "nombre": "Pastillas freno",
            "precio": 723,
            "imagen": "/images/repuestos/pastillas-freno.jpg",
            "respaldo": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQhA-ODRTXVA9Iwv587jzZpjqiyQUK87mrAv-YpGbF985cb3eufEAWJYiDG78ZGObSze9BLhad4MjR6z98r5lkVUVMfArqB"
        },
        {
            "id": "range-rover-autobiography-08",
            "categoria": "Frenos",
            "nombre": "Discos freno",
            "precio": 1797,
            "imagen": "/images/repuestos/discos-freno.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR5q4OptWA7SgileTBAQlwgo5U4TzPI1yW3KtbOloWbnHrSSxYql39nCyFZ0zF5tLbmIBvyeRxTEj3hjQxjUf1Aty2s8skJDzuofO1rf5rodmftxNtW4tNK5w"
        },
        {
            "id": "range-rover-autobiography-09",
            "categoria": "Suspensión",
            "nombre": "Amortiguador",
            "precio": 2096,
            "imagen": "/images/repuestos/amortiguador.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBo26izntTaq-ZHvK214tacguEsNf9jyhfspUuFeVWmQ&s=10"
        },
        {
            "id": "range-rover-autobiography-10",
            "categoria": "Llantas",
            "nombre": "Neumáticos",
            "precio": 4242,
            "imagen": "/images/repuestos/neumaticos.jpg",
            "respaldo": "https://interllantas.com/wp-content/uploads/images2/Llanta-COSMO-RC-17-185-65-R15-88H_1.jpg"
        }
    ],
    "Koenigsegg Jesko": [
        {
            "id": "koenigsegg-jesko-01",
            "categoria": "Motor",
            "nombre": "Filtro aceite",
            "precio": 392,
            "imagen": "/images/repuestos/filtro-aceite.jpg",
            "respaldo": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQkKwRarocZqLRhztwN743EtVuCcMo9SawVOI2EBsU1TWGoL5_e90t4QPQzp3ZlSZosrLd9QakZfkQCgOzvrHFn9QVUq15W"
        },
        {
            "id": "koenigsegg-jesko-02",
            "categoria": "Motor",
            "nombre": "Filtro aire",
            "precio": 546,
            "imagen": "/images/repuestos/filtro-aire.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSP2TjNmWdhhylEY8ACAk_G41pgM6NN1Xe31gklkl-ZfoyP97Cvy5gV9CyJlejbArSSG3ntvQroksQkFHQW3RBt0vtW7TKfbOmQW3B4TlOj3jCDA6JT9JMm-A"
        },
        {
            "id": "koenigsegg-jesko-03",
            "categoria": "Encendido",
            "nombre": "Bujías",
            "precio": 833,
            "imagen": "/images/repuestos/bujias.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQQczfTEPE-sf7mp-DgcY8YEJ3zjCTAumyOlno-sKg_V8HnagVvwaZZC_QFW7AELpWDprpw5Fn6yK9uwlYwsQmo1qE7dMW4DlYvlkaC03ZJ5pb05k2ektJ_mA"
        },
        {
            "id": "koenigsegg-jesko-04",
            "categoria": "Eléctrico",
            "nombre": "Batería",
            "precio": 2618,
            "imagen": "/images/repuestos/bateria.jpg",
            "respaldo": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQcygXOTU3DdOXjls9O1PjeykjtgG40ibn2HLntzq6FwoEr3ktNX6ztn7P05-zpC_AbJcnDj_3ue_OWEH83vk2s_VkVcBFZ"
        },
        {
            "id": "koenigsegg-jesko-05",
            "categoria": "Eléctrico",
            "nombre": "Alternador",
            "precio": 6111,
            "imagen": "/images/repuestos/alternador.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTH5hWHGbMTMeBiZjBMhBev64-f9H4AD_CHxJO4DWMhM99-W6w0zb5oT6T7Za-jTiHbt9T_MsaSMkiUmGowWoUtNuZSFCJFL2vTuaSyrjptiw3AmhOqEyTZ"
        },
        {
            "id": "koenigsegg-jesko-06",
            "categoria": "Refrigeración",
            "nombre": "Radiador",
            "precio": 6986,
            "imagen": "/images/repuestos/radiador.jpg",
            "respaldo": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQmk6otyyvQE6w5U5w_gMHQ_EsPoOv-jNqZWGy9JnDg9sfBwMjoe4cqhLhiGQyxRS_JFKmtzv9kGuE-ux399wqwZWsvcYEvRn3LUwudPj0ZDHAbqmtBYvXHcQ"
        },
        {
            "id": "koenigsegg-jesko-07",
            "categoria": "Frenos",
            "nombre": "Pastillas freno",
            "precio": 3164,
            "imagen": "/images/repuestos/pastillas-freno.jpg",
            "respaldo": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQhA-ODRTXVA9Iwv587jzZpjqiyQUK87mrAv-YpGbF985cb3eufEAWJYiDG78ZGObSze9BLhad4MjR6z98r5lkVUVMfArqB"
        },
        {
            "id": "koenigsegg-jesko-08",
            "categoria": "Frenos",
            "nombre": "Discos freno",
            "precio": 7861,
            "imagen": "/images/repuestos/discos-freno.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR5q4OptWA7SgileTBAQlwgo5U4TzPI1yW3KtbOloWbnHrSSxYql39nCyFZ0zF5tLbmIBvyeRxTEj3hjQxjUf1Aty2s8skJDzuofO1rf5rodmftxNtW4tNK5w"
        },
        {
            "id": "koenigsegg-jesko-09",
            "categoria": "Suspensión",
            "nombre": "Amortiguador",
            "precio": 9170,
            "imagen": "/images/repuestos/amortiguador.jpg",
            "respaldo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBo26izntTaq-ZHvK214tacguEsNf9jyhfspUuFeVWmQ&s=10"
        },
        {
            "id": "koenigsegg-jesko-10",
            "categoria": "Llantas",
            "nombre": "Neumáticos",
            "precio": 18557,
            "imagen": "/images/repuestos/neumaticos.jpg",
            "respaldo": "https://interllantas.com/wp-content/uploads/images2/Llanta-COSMO-RC-17-185-65-R15-88H_1.jpg"
        }
    ]
};

const quitar = (t: string) =>
    t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, " ").trim();

// Repuestos de un vehiculo (ignora el ano). Si no esta en la lista, devuelve los del primero.
export function repuestosDe(vehiculo: string | null): Repuesto[] {
    const todos = Object.entries(REPUESTOS_POR_VEHICULO);
    if (vehiculo) {
        const q = quitar(vehiculo);
        const hit = todos.find(([n]) => q.includes(quitar(n)) || quitar(n).includes(q));
        if (hit) return hit[1];
    }
    return todos[0][1];
}
