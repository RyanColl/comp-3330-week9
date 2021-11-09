
export type Calculation = (i1: string, i2: string) => number;
export class calcLogic {
    divide(i1: string, i2: string) {
        return parseInt(i1)/ parseInt(i2);
    }
    add(i1: string, i2: string) {
        return parseInt(i1) + parseInt(i2);
    }
    subtract(i1: string, i2: string) {
        return parseInt(i1) - parseInt(i2);
    }
    multiply(i1: string, i2: string) {
        return parseInt(i1) * parseInt(i2);
    }
}