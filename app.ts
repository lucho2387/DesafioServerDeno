import { Application,  Router } from 'https://deno.land/x/oak/mod.ts'

import { getColores, addColor } from './controllers/colores.ts'


const  env = Deno.env.toObject()
const PORT = env.PORT || 4000
const HOST = env.HOST || '127.0.0.1'

const router = new  Router()

const app =  new Application()

app.use(router.routes())
app.use(router.allowedMethods())

router
    .get('/', getColores)
    .post('/', addColor)

console.log(`Escuchando enel puerto ${PORT}`);

await app.listen(`${HOST}:${PORT}`)
