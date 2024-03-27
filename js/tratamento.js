function tratarData(data) {
    // Remover parte da string após o caractere 'T'
    const dataSemTempo = data.split('T')[0]

    // Separar a data em ano, mês e dia
    const [ano, mes, dia] = dataSemTempo.split('-')

    // Obter o nome do mês
    const nomeMes = obterNomeMes(mes)

    // Formatar a data
    const dataFormatada = `${dia} de ${nomeMes} de ${ano}`

    return dataFormatada
}

// Função para obter o nome do mês
function obterNomeMes(numeroMes) {
    const meses = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ]

    // Obter o nome do mês com base no número do mês
    const nomeMes = meses[parseInt(numeroMes) - 1]

    return nomeMes
}

function tratarDuracao(tempo) {
    // Remover parte da string antes do caractere 'T' e depois do último caractere 'Z'
    const tempoSemData = tempo.split('T')[1].split('.')[0]

    // Separar as horas e os minutos
    const [horas, minutos] = tempoSemData.split(':')

    // Formatar a duração
    const duracaoFormatada = `${horas} horas e ${minutos} minutos`

    return duracaoFormatada
}

export { tratarData, tratarDuracao }
