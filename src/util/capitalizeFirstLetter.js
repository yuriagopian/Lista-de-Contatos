// Função para transformar a primeira letra de uma String em uma letra maiuscula
//EX: exemplo -> Exemplo
const capitalizeFirstLetter = string => {
	return string[0].toUpperCase() + string.slice(1)
}


export default capitalizeFirstLetter;