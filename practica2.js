const a=true && true;
const b=true && false;
const c=false && true;
const d=false &&(3==4);
const e="Cat" && "Dog";
const f=false && "Cat";
const g="Cat" && false;

const a1=!true;
const b1=!false;
const c1=!"Cat";

const tiempo=14;
let saludo;
if (tiempo<12) {
    saludo="Buenos dias";
} else if (tiempo >=12 && tiempo <=19){
    let saludo="Buenas tardes";
    
} else if(tiempo >19 && tiempo <24){
    saludo="Buenas noches";
} else if(tiempo >24){
saludo="esta hora no existe";
}
console.log(saludo);

//Switch
const día = 5;
let texto;
switch(dia){
    case 0:
        texto="Domingo";
        break;
        case 1:
        texto="Lunes";
        break;
        case 2:
            texto="Martes";
        break;
        case 3:
            texto="Miercoles";
        break;
        case 4:
            texto="Jueves";
        break;
        case 5:
            texto="Viernes";
        break;
        case 6:
            texto="Sabado";
        break;
        default:
            texto="Dia no valido";
}
console.log(texto);

        












