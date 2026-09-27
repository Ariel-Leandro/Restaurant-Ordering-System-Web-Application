const storeHours = {

segunda:{
open:18,
close:23
},

terca:{
open:18,
close:23
},

quarta:{
open:18,
close:23
},

quinta:{
open:18,
close:23
},

sexta:{
open:18,
close:0
},

sabado:{
open:18,
close:0
},

domingo:{
open:18,
close:23

}

};

let cart = [];

const whatsappNumber =
"553598244473";

let activeCategory =
"Todos";
const productImages = {

"Caixa Especial com 4 Lanches + Mantiqueira 2L":
"imagens/menu fotos/mais pedidos/caixa especial com 4 lanches + mantiqueiras.jfif",

"Combo 2 X-Tudo + Fritas Média":
"imagens/menu fotos/mais pedidos/combo 2 x tudo + fritas media.png",

"Caixa Especial com 3 lanches + Mantiqueira 2L":
"imagens/menu fotos/mais pedidos/caixa especial com 3 lanches + mantiqueira.jfif",

"Caixa Especial com 5 Lanches + Mantiqueira 2L":
"imagens/menu fotos/mais pedidos/caixa especial com 5 lanches + mantiqueira.png",

"Caixa Especial com 2 lanches + Mantiqueira 500ML":
"imagens/menu fotos/mais pedidos/caixa especial com 2 lanches + mantiqueira.jfif",

"Caixa Especial com 1 lanche + Mantiqueira 500ml":
"imagens/menu fotos/combos na caixa/caixa especial com 1 lanche + mantiqueira 500ml.jfif",

"Caixa Premium com 2 lanches + Mantiqueira 2L":
"imagens/menu fotos/combos na caixa/caixa premium com 2 lanches +  mantiqueira 2L.jfif",

"Caixa Vip com 2 lanches + Mantiqueira 2L":
"imagens/menu fotos/combos na caixa/caixa vip com 2 lanches + mantiqueira 2L.jfif",

"X-Tudo":
"imagens/menu fotos/linha tradicional/x-tudo.jfif",

"X-Salada":
"imagens/menu fotos/linha tradicional/x-salada.jfif",

"X-Rango":
"imagens/menu fotos/linha tradicional/x-rango.png",

"X-Egg":
"imagens/menu fotos/linha tradicional/x-egg.jfif",

"X-Burguer":
"imagens/menu fotos/linha tradicional/x-burger.jfif",

"X-Bacon":
"imagens/menu fotos/linha tradicional/x-bacon.jfif",

"X-Bacon Salada":
"imagens/menu fotos/linha tradicional/x-bacon salada.jfif",

"Misto Quente":
"imagens/menu fotos/linha tradicional/misto quente.jfif",

"Bauru":
"imagens/menu fotos/linha tradicional/bauru.jfif",

"Americano":
"imagens/menu fotos/linha tradicional/americano.jfif",

"Na Hora Bacon":
"imagens/menu fotos/artesanal 90g/na hora bacon.png",

"Na Hora Especial Tudo":
"imagens/menu fotos/hamburger artesanal 180g/na hora especial tudo.png",

"Coca lata 350ml":
"imagens/menu fotos/bebidas/coca 350ml.jfif",

"Coca 600ML":
"imagens/menu fotos/bebidas/coca 600ml.jfif",

"Coca 2L":
"imagens/menu fotos/bebidas/coca 2L.jfif",

"Mantiqueira 2L":
"imagens/menu fotos/bebidas/mantiqueira 2L.jfif",

"Guaraná 500ml":
"imagens/menu fotos/bebidas/gurana antartica 500ml.jfif",

"Panqueca Simples":
"imagens/menu fotos/panquecas/panqueca simples.jfif",

"Panqueca de Pizza":
"imagens/menu fotos/panquecas/penqueca de pizza.jfif",

"Panqueca de Frango":
"imagens/menu fotos/panquecas/frango simples.webp",

"Panqueca de Frango Especial":
"imagens/menu fotos/panquecas/frango especial.jfif",

"Panqueca de Carne Moída Especial":
"imagens/menu fotos/panquecas/carne moida especial.jfif",

"Fritas Simples":
"imagens/menu fotos/porçoes/frita simples.jfif",

"Fritas com queijo":
"imagens/menu fotos/porçoes/fritas com queijo.jfif",

"Fritas com queijo e bacon":
"imagens/menu fotos/porçoes/fritas com queijo e bacon.jfif",

"Porção de Cebola Onion":
"imagens/menu fotos/porçoes/porçao de cebola onion.jfif",

"Caixa de porções 1":
"imagens/menu fotos/porçoes/caixa de porçoes 1.jfif",

"Porção de Calabresa Acebolada":
"imagens/menu fotos/porçoes/calabresa acebolada.jfif",

"Nuggets":
"imagens/menu fotos/porçoes/nuggets.jfif",

"Frango frito":
"imagens/menu fotos/porçoes/frango frito.jfif"

};



/* =========================
CARDÁPIO
========================= */

const menuData = [

{
categoria:"🔥 Os mais pedidos",
itens:[
["Caixa Especial com 4 Lanches + Mantiqueira 2L",109.99],
["Combo 2 X-Tudo + Fritas Média",39.99],
["Caixa Especial com 3 lanches + Mantiqueira 2L",97.99],
["Caixa Especial com 5 Lanches + Mantiqueira 2L",129.99],
["Caixa Premium com 2 lanches + Mantiqueira 2L",104.99],
["Caixa Especial com 2 lanches + Mantiqueira 500ML",89.99]
]
},

{
categoria:"Combos na caixa",
itens:[
["Caixa Especial com 1 lanche + Mantiqueira 500ml",69.99],
["Caixa Premium com 2 lanches + Mantiqueira 2L",104.99],
["Caixa Vip com 2 lanches + Mantiqueira 2L",104.99],
["Caixa Especial com 2 lanches + Mantiqueira 500ML",89.99],
["Caixa Especial com 3 lanches + Mantiqueira 2L",97.99],
["Caixa Especial com 4 Lanches + Mantiqueira 2L",109.99],
["Caixa Especial com 5 Lanches + Mantiqueira 2L",129.99]
]
},

{
categoria:"Combos X-Tudo",
itens:[
["Combo 5 X-Tudo + Fritas média",74.99],
["Combo 4x Tudo + Fritas Média",69.99],
["Combo 3 X-Tudo + Fritas",59.99],
["Combo 2 X-Tudo + Fritas Média",39.99]
]
},

{
categoria:"Linha Tradicional",
itens:[
["X-Tudo",20],
["X-Salada",16],
["X-Rango",15],
["X-Egg",14],
["X-Burguer",10],
["X-Bacon Salada",18],
["X-Bacon",16],
["Misto Quente",9],
["Bauru",12],
["Americano",11]
]
},

{
categoria:"Hambúrguer Artesanal 90g",
itens:[
["Na Hora Bacon",20],
["Na Hora Box",20],
["Na Hora Burguer",20],
["Na Hora Salada",20],
["Na Hora Egg",20],
["Lanche Thales",26],
["Lanche da Caixa",20]
]
},

{
categoria:"Hambúrguer Artesanal 180g",
itens:[
["Na Hora Especial Tudo",30]
]
},

{
categoria:"Panquecas",
itens:[
["Panqueca Simples",20],
["Panqueca de Pizza",22],
["Panqueca de Frango Especial",25],
["Panqueca de Frango",22],
["Panqueca de Carne Moída Especial",25],
["Panqueca de Carne Moída 2",20],
["Panqueca de Carne Moída 1",22]
]
},

{
categoria:"Bebidas",
itens:[
["Coca lata 350ml",5],
["Mantiqueira 2L",10],
["Coca 2L",14],
["Coca 600ML",8],
["Guaraná 500ml",7]
]
},

{
categoria:"Porções",
itens:[
["Fritas Simples",15],
["Fritas com queijo",16],
["Fritas com queijo e bacon",19.99],
["Porção de Cebola Onion",19.99],
["Caixa de porções 1",69.99],
["Porção de Calabresa Acebolada",19.99],
["Nuggets",19.99],
["Frango frito",24.99]
]
},

{
categoria:" Lanches de Calabresa",
itens:[
["X-Calabresa",22],
["X-Calabresa Egg",16],
["X-Calabresa Salada",18],
["X-Calabresa Tudo",22]
]
},

{
categoria:"Lanches de Frango",
itens:[
["X-Frango Tudo",22],
["X-Frango Salada",18],
["X-Frango Egg",16],
["X-Frango Bacon",18],
["X-Frango",15]
]
}

];

for (const categoria of menuData) {
    for (const item of categoria.itens) {
        const nomeProduto = item[0];

        if (!productImages[nomeProduto]) {
            productImages[nomeProduto] = `imagens/place holder/${nomeProduto}.jfif`;
        }
    }
}


function renderFilters(){

const box =
document.getElementById("filters");

box.innerHTML = "";

const cats =
["Todos", ...menuData.map(c => c.categoria)];

cats.forEach(cat => {

const btn =
document.createElement("button");

btn.className =
"btn btn-warning filtro-btn";

btn.textContent =
cat;

btn.onclick = () => {

activeCategory = cat;

renderMenu();

};

box.appendChild(btn);

});

}



/* =========================
MENU
========================= */

function renderMenu(){

const menu =
document.getElementById("menu");

const search =
document
.getElementById("search")
.value
.toLowerCase();

menu.innerHTML="";

menuData.forEach(cat=>{

if(
activeCategory!=="Todos"
&&
cat.categoria!==activeCategory
)return;

const filtered =
cat.itens.filter(i=>
i[0]
.toLowerCase()
.includes(search)
);

if(filtered.length===0)
return;

const section =
document.createElement("section");

section.innerHTML =
`<h3 class="categoria">${cat.categoria}</h3>`;

const wrap =
document.createElement("div");

wrap.className =
"menu";

filtered.forEach(item=>{

const image =
productImages[item[0]] ||
"imagens/logo/logo.png";

const card =
document.createElement("div");

card.className =
"card mb-3 shadow-sm";

card.innerHTML = `

<div class="row g-0">

<div class="col-md-4">

<img
src="${image}"
alt="${item[0]}"
class="img-fluid rounded-start h-100 w-100 object-fit-cover"
onerror="
this.style.display='none';
this.parentElement.innerHTML='<div class=placeholder>🍔</div>';
">

</div>

<div class="col-md-8">

<div class="card-body d-flex flex-column h-100">

<h5 class="card-title">
${item[0]}
</h5>

<p class="card-text fs-5 fw-bold text-warning">
R$ ${item[1].toFixed(2)}
</p>

<div class="mt-auto">

<button
class="btn btn-dark w-100">
Adicionar
</button>

</div>

</div>

</div>

</div>
`;

card
.querySelector("button")
.onclick=
()=>addOrder(
item[0],
item[1]
);

wrap.appendChild(card);

});

section.appendChild(wrap);

menu.appendChild(section);

});

}

/* =========================
CARRINHO
========================= */

function addOrder(name,price){

const existing =
cart.find(
i=>i.name===name
);

if(existing){

existing.qty++;

}else{

cart.push({
name,
price,
qty:1
});

}

renderCart();

}

function changeQty(index,val){

cart[index].qty += val;

if(cart[index].qty<=0){

cart.splice(index,1);

}

renderCart();

}

function renderCart(){

const box =
document.getElementById("cart");

const totalBox =
document.getElementById("total");

box.innerHTML="";

let total=0;

cart.forEach((item,i)=>{

const div =
document.createElement("div");

div.className =
"cart-item";

div.innerHTML =
`
<span>
${item.name}
</span>

<div class="qty">

<button
onclick="changeQty(${i},-1)">
−
</button>

<strong>
${item.qty}
</strong>

<button
onclick="changeQty(${i},1)">
+
</button>

</div>

<strong>
R$ ${(item.price*item.qty).toFixed(2)}
</strong>
`;

box.appendChild(div);

total +=
item.price * item.qty;

});

totalBox.textContent =
total.toFixed(2);

}

/* =========================
BUSCA
========================= */

document
.getElementById("search")
.addEventListener(
"input",
renderMenu
);

/* =========================
FINALIZAR
========================= */

document
.getElementById("finishOrder")
.addEventListener("click",()=>{

const name =
document.getElementById("name")
.value
.trim();

const phone =
document.getElementById("phone")
.value
.trim();

const address =
document.getElementById("address")
.value
.trim();

const preferences =
document.getElementById("preferences")
.value
.trim();

if(!name || !phone || !address){

    alert("Preencha seus dados.");
    return;

}

if(cart.length === 0){

    alert("Escolha algum item.");
    return;

}

const total =
cart.reduce(
(a,b)=>
a + b.price * b.qty,
0
);

const itens =
cart
.map(i =>
`• ${i.name} x${i.qty} - R$ ${(i.price*i.qty).toFixed(2)}`
)
.join("\n");

const mensagem =

`🍔 *NOVO PEDIDO*

👤 ${name}

📞 ${phone}

📍 ${address}

📝 ${preferences || "Nenhuma"}

🛒 PEDIDO:
${itens}

💰 TOTAL:
R$ ${total.toFixed(2)}
`;

window.open(
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`,
"_blank"
);

});
function checkStoreStatus(){

const days = [

"domingo",
"segunda",
"terca",
"quarta",
"quinta",
"sexta",
"sabado"

];

const now =
new Date();

const day =
days[now.getDay()];

const hour =
now.getHours();

const config =
storeHours[day];

const box =
document.getElementById(
"storeStatus"
);

if(!config){

box.textContent=
"Fechado";

return;

}

let aberto=false;

if(config.close===0){

aberto =
hour>=config.open;

}else{

aberto =
hour>=config.open
&&
hour<config.close;

}

if(aberto){

box.textContent =
"🟢 Aberto agora";

box.style.background =
"#dcfce7";

}else{

box.textContent =
"🔴 Fechado agora";

box.style.background =
"#fee2e2";

}

}
document
.getElementById("btn-cart-top")
.addEventListener("click", () => {

    document
    .getElementById("carrinho")
    .scrollIntoView({
        behavior: "smooth"
    });

});
/* iniciar */

renderFilters();
renderMenu();
renderCart();
checkStoreStatus();

setInterval(
checkStoreStatus,
60000
);