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

export const  getColores  = ({ response }: { response:  any}) => {
    response.body = colores
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