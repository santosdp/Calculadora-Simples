/*Função que faz as operações nos valores selecionados na calculadora*/
function displaynum(n1){
    Calculadora.text1.value = Calculadora.text1.value + n1;
}
/*Função que limpa o display da calculadora ao apertar o botão C*/
function limpardisplay(){
    Calculadora.text1.value = "";
}