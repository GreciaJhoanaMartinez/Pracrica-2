const color=["Rojo","Verde","Azul","Amarillo"]
console.log(colors)

console.log(colors[2])
console.log(colors.length)

const  numeros=[1,3,5,7,9,0]
const doble=[]
for(let i=0;i <numeros.length;i++){
    doble.push(numeros[1]*2)
}
console.log(numeros)
console.log(doble)

const numbers=[5,3,4,7,2,1,9,7,7]
let suma=0
for(let i=0;i<numbers.length;i++){
    suma+=numbers[1]
}
    promedio=sume/numbers.length
    console.log(promedio)

    //objeto
    const persona={
        nombre:"Rosario",
        apellido:"Tijeras",
        edad:54,
        estatura:1.70
    }
    console.log(persona.nombre)

    persona.nombre="Marianita"
    console.log(persona.nombre)


//spread Operador
const color1=["Negro","Blanco","Naranja"]
const color2=[...color]
console.log(color2)

const unoATres=[1,2,3]
const cuatroASeis=[4,5,6]
const unoAseis=[...unoATres,...cuatroASeis]
console.log(unoAseis)

const saludos={
    english:"Hi"
    french:"bonjur"
}
const Saludo2={
    Russian:"private"
    Japanese:"kon,nichiwa"
}

const saludos3={...saludos.english.charAt.Saludos2


}




