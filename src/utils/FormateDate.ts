export function DateFormate(date: string) {
    const updatedAt: Date = new Date(date);
    const hoje: Date = new Date();
    const diferencaEmMilissegundos: number = hoje.getTime() - updatedAt.getTime();
    const diferencaEmDias: number = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const anos: number = Math.floor(diferencaEmDias / 365);
    const diasRestantes: number = diferencaEmDias % 365;
    if(diasRestantes === 0){
        return  `Atualizado hoje`
    } else if (diasRestantes === 1){
        return `Atualizado há ${diasRestantes} dia`
    } else {
        return `Atualizado há ${diasRestantes} dias`
    }
}