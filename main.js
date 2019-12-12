const Persona1 = {
  nombre: 'Imanolss',
  edad: 18,
  sexo: 'Hombre',
  altura: 1.7,
  peso: 85
}

Persona1.NSS = generateNSS()
Persona1.IMC = calcularIMC()

function esMayorDeEdad() {
  if (this.edad >= 18) {
    console.log('Es mayor de edad')
  } else {
    console.log('Es menor de edad')
  }
}

//Persona.NSS = generador
function generateNSS() {
  let result = ''
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var charactersLength = characters.length
  for (let i = 0; i < 8; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

function comprobarSexo() {
  if (this.sexo === 'Hombre') {
    console.log('Es hombre ' + true)
  } else {
    console.log('Es hombre ' + false)
  }
}

function calcularIMC() {
  let calcularIMC = Persona1.peso / Math.pow(Persona1.altura, 2)
  if (Persona1.sexo === 'Hombre') {
    if (calcularIMC < 20) {
      return -1
    } else if (20 >= calcularIMC && calcularIMC <= 25) {
      return 0
    } else if (calcularIMC > 25) {
      return 1
    } else {
      return 'no data'
    }
  } else {
    if (calcularIMC < 19) {
      return -1
    } else if (19 >= calcularIMC && calcularIMC <= 24) {
      return 0
    } else if (calcularIMC2 > 24) {
      return 1
    } else {
      return 'no data'
    }
  }
}

// add functions to object

Persona1.esMayorDeEdad = esMayorDeEdad
Persona1.comprobarSexo = comprobarSexo
Persona1.calcularIMC = calcularIMC
Persona1.calcularIMC()
Persona1.comprobarSexo()
Persona1.esMayorDeEdad()

let myJSON = JSON.stringify(Persona1)
console.log(myJSON)

//------------
//------------ Persona 2
//------------
//------------

const Persona2 = {
  nombre: 'Gabriela',
  edad: 15,
  sexo: 'Mujer',
  altura: '',
  peso: ''
}

Persona2.NSS = generateNSS2()
Persona2.IMC = calcularIMC2()

function esMayorDeEdad2() {
  if (this.edad >= 18) {
    console.log('Es mayor de edad')
  } else {
    console.log('Es menor de edad')
  }
}

//Persona.NSS = generador
function generateNSS2() {
  let result = ''
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var charactersLength = characters.length
  for (let i = 0; i < 8; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

function comprobarSexo2() {
  if (this.sexo === 'Hombre') {
    console.log('Es hombre ' + true)
  } else {
    console.log('Es hombre ' + false)
  }
}

function calcularIMC2() {
  let calcularIMC2 = Persona2.peso / Math.pow(Persona2.altura, 2)
  if (Persona2.sexo === 'Hombre') {
    if (calcularIMC2 < 20) {
      return -1
    } else if (20 >= calcularIMC2 && calcularIMC2 <= 25) {
      return 0
    } else if (calcularIMC2 > 25) {
      return 1
    } else {
      return 'no data'
    }
  } else {
    if (calcularIMC2 < 19) {
      return -1
    } else if (19 >= calcularIMC2 && calcularIMC2 <= 24) {
      return 0
    } else if (calcularIMC2 > 24) {
      return 1
    } else {
      return 'no data'
    }
  }
}

// add functions to object

Persona2.esMayorDeEdad2 = esMayorDeEdad2
Persona2.comprobarSexo2 = comprobarSexo2
Persona2.calcularIMC2 = calcularIMC2
Persona2.calcularIMC2()
Persona2.comprobarSexo2()
Persona2.esMayorDeEdad2()

let myJSON2 = JSON.stringify(Persona2)
console.log(myJSON2)

//------------
//------------ Persona 3
//------------
//------------

const Persona3 = {
  nombre: 'Juan',
  edad: 33,
  sexo: 'Hombre',
  altura: 1.75,
  peso: 68
}

Persona3.NSS = generateNSS3()
Persona3.IMC = calcularIMC3()

function esMayorDeEdad3() {
  if (this.edad >= 18) {
    console.log('Es mayor de edad')
  } else {
    console.log('Es menor de edad')
  }
}

//Persona.NSS = generador
function generateNSS3() {
  let result = ''
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var charactersLength = characters.length
  for (let i = 0; i < 8; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

function comprobarSexo3() {
  if (this.sexo === 'Hombre') {
    console.log('Es hombre ' + true)
  } else {
    console.log('Es hombre ' + false)
  }
}

function calcularIMC3() {
  let calcularIMC3 = Persona3.peso / Math.pow(Persona3.altura, 2)
  if (Persona3.sexo === 'Hombre') {
    if (calcularIMC3 < 20) {
      return -1
    } else if (calcularIMC3 >= 20 && calcularIMC3 <= 25) {
      return 0
    } else if (calcularIMC3 > 25) {
      return 1
    } else {
      return 'no data'
    }
  } else {
    if (calcularIMC3 < 19) {
      return -1
    } else if (19 >= calcularIMC3 && calcularIMC3 <= 24) {
      return 0
    } else if (calcularIMC3 > 24) {
      return 1
    } else {
      return 'no data'
    }
  }
}

// add functions to object

Persona3.esMayorDeEdad3 = esMayorDeEdad3
Persona3.comprobarSexo3 = comprobarSexo3
Persona3.calcularIMC3 = calcularIMC3
Persona3.calcularIMC3()
Persona3.comprobarSexo3()
Persona3.esMayorDeEdad3()

let myJSON3 = JSON.stringify(Persona3)
console.log(myJSON3)
