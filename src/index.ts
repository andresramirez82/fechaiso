import zfill from "zfill";


/**
 * 
 * @param {number} Anio 
 * @param {number} Mes 
 * @param {number} Dia 
 * @description Pasa fecha dividida a fecha ISO
 */
function PasarISO(Anio: number, Mes: number, Dia: number): number {
    if (Anio > 9999 || Anio < 1990) {
        throw new Error('Año inválido'); 
    }
    if (Mes > 12 || Mes < 1) {
        throw new Error('Mes inválido'); 
    }
    if (Dia > 31 || Dia < 1) {
        throw new Error('Día inválido'); 
    }
    return zfill(Anio, 4) + zfill(Mes, 2) + zfill(Dia, 2);
}

export const FechaISO = {
    PasarISO
};