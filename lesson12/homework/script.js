function calculate() {
    const a = parseFloat(document.getElementById("inputA").value);
    const b = parseFloat(document.getElementById("inputB").value);
    const c = parseFloat(document.getElementById("inputC").value);

    const discriminant = b ** 2 - 4 * a * c;

    if (discriminant > 0) {
        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        document.getElementById("result").innerText = `Корни уравнения: x1 = ${x1}, x2 = ${x2}`;
    } else if (discriminant === 0) {
        const x = -b / (2 * a);
        document.getElementById("result").innerText = `Уравнение имеет единственный корень: x = ${x}`;
    } else {
        document.getElementById("result").innerText = "Уравнение не имеет действительных корней";
    }
}