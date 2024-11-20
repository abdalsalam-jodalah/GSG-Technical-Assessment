export const calculateSumAndAverage = (numbers) => {
    const total = numbers.reduce((sum, num) =>
        sum + num, 0
    );
    const average = total / numbers.length;
    return { total, average };
};