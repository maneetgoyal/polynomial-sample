function calculateInterpolatingPolynomial(input: number[]): (input: number) => number {
    let polynomial: (x: number) => number = () => NaN;
    if (input.length === 1) {
        polynomial = () => input[0];
    } else if (input.length > 1) {
        polynomial = (x: number) => {
            let term = 0;
            for (let i = 0; i < input.length; i += 1) {
                let numerator = 1;
                let denominator = 1;
                for (let j = 0; j < input.length; j += 1) {
                    if (i !== j) {
                        numerator = numerator * (x - j);
                        denominator = denominator * (i - j)
                    }
                }
                term = term + (numerator / denominator) * input[i];
            }
            return term;
        }
    }
    return polynomial;
}

export function predict(input: number[]): number[] {
    let output = [...input];
    const polynomial = calculateInterpolatingPolynomial(input);
    for (let i = 0; i < 10; i += 1) {
        output.push(polynomial(input.length + i));
    }
    return output;
}