
export type Calculation = (i1: string, i2: string) => number;
export class calcLogic {
    divide(i1: string, i2: string) {
        if(parseInt(i1) === parseFloat(i1) &&  parseInt(i2) === parseFloat(i2)) return parseInt(i1) / parseInt(i2)
        else return parseFloat((parseFloat(i1) / parseFloat(i2)).toFixed(2))
    }
    add(i1: string, i2: string) {
        console.log(parseInt(i1) === parseFloat(i1) &&  parseInt(i2) === parseFloat(i2))
        if(parseInt(i1) === parseFloat(i1) &&  parseInt(i2) === parseFloat(i2)) return parseInt(i1) + parseInt(i2)
        else return parseFloat((parseFloat(i1) + parseFloat(i2)).toFixed(2))
    }
    subtract(i1: string, i2: string) {
        if(parseInt(i1) === parseFloat(i1) &&  parseInt(i2) === parseFloat(i2)) return parseInt(i1) - parseInt(i2)
        else return parseFloat((parseFloat(i1) - parseFloat(i2)).toFixed(2))
    }
    multiply(i1: string, i2: string) {
        if(parseInt(i1) === parseFloat(i1) &&  parseInt(i2) === parseFloat(i2)) return parseInt(i1) * parseInt(i2)
        else return parseFloat((parseFloat(i1) * parseFloat(i2)).toFixed(2))
    }
}