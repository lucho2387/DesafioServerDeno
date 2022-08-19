import { bgBlack, red, yellow, blue } from "https://deno.land/std@0.152.0/fmt/colors.ts";


interface Color {
    nombreColor: string
}

let colores: Array<Color> = [
    {
        nombreColor: "azul"
    },
    {   
        nombreColor: "rojo"
    },
    {
        nombreColor: "amarillo"
    },

]

const colorAzul = colores[0]
const colorRojo = colores[1]
const colorAmarillo = colores[2]

console.log(bgBlack(blue(colorAzul.nombreColor)));
console.log(bgBlack(red(colorRojo.nombreColor)));
console.log(bgBlack(yellow(colorAmarillo.nombreColor)));

export const  getColores  = ({ response }: { response:  any}) => {
   
    response.body = {colores}
}


export const addColor = async ({
    request,
    response
}:  {
    request: any
    response: any
}) => {
    const body =  request.body()
    const color: Color = await body.value
    colores.push(color)

    response.body = { mensaje: 'Se pudo crear el color' }
    response.status = 200
}
