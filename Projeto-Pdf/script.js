function generatepdf() {
    const name = document.getElementById("name").value;
    const product = document.getElementById("product").value;
    const value = document.getElementById("value").value;
    const number = document.getElementById("number").value;

    const doc = new jsPDF();

    doc.text('Nome:${name}', 10, 10);
    doc.text('ID do Produto: ${product}' , 10 ,20);
    doc.text('Valor: ${value}' ,10 ,40);
    doc.text('number>: ${number}',10 ,40);

    doc.save('Meu-Produto.pdf');
}