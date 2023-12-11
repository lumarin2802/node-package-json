const nome = process.argv[2]

const idade = Number(process.argv[3])

const idadeSete = idade + 7

//imprimir "Olá, (Nome)! Você tem (sua idade) anos."

console.log(`Olá  ${nome}! Você tem ${idade} anos.` )

//Altere o programa acima para que mostre também a sua idade daqui a sete anos.
//"Olá, (Nome)! Você tem (sua idade) anos. Em sete anos você terá (nova idade)"

console.log(`Olá  ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idadeSete} `)
