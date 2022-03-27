function capturar() {
	capturar = document.getElementById('valor').value;
	if (valor.value < 20) {
		alert("Valor menor que 20");
	}
}
function validar() {
	var preco = document.getElementById("valor");
	if (preco.value == "") {
		alert("Valor não informado");
		preco.focus();
	}
}