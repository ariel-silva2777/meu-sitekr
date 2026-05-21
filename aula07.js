function pesquisar(){
  let valor =document.getElementById("entrada").value
  valor = valor.toLowerCase()
  alert(valor)
}
function pesquisar1(){
  alert('🚧🔨🚧🔨🚧🔨site ainda esta em construção 🚧🔨🚧🔨🚧🔨')
};


var menitem = document.querySelectorAll('item-menu')
function seleciona(){
  menitem.forEach((item)=>item.classList.remove("ativo"))
  this.classList.add("ativo")
};
menitem.forEach((item)=> item.addEventListener('click', seleciona()));