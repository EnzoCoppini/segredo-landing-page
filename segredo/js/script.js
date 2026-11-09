'use strict';
// Itens: [nome, descrição, variação, preço, flags] — s=queridinho, n=novo, c=conferir (leitura incerta no original)
const MENU=[
{id:'cafes',t:'Cafés',nota:'Leite de aveia NUDE: + R$ 3,00',i:[
['espresso','','simples (35ml) / duplo (70ml)','8,90 / 10,90'],
['capuccino italiano','Tradicional italiano — leite, café e técnica!','médio / grande','13,90 / 15,90','s'],
['moccaccino','Camadas de chocolate, leite vaporizado e espresso!','','17,90'],
['latte macchiato','Uma combinação suave de café e leite!','','14,90'],
['moccaccino caramel','Caramelo c/ flor de sal, leite vaporizado e espresso!','','17,90'],
['macchiato','Espresso com espumínha de leite vaporizado','simples / duplo','11,90 / 12,90'],
['mocha da casa','Surgiu nos bastidores da cafeteria e virou a queridinha da equipe! Feita com espresso, leite cremoso e uma mistura de cacau em pó e canela.','','17,90','n']]},
{id:'filtrados',t:'Cafés filtrados',nota:'Mais claros e delicados, com notas sensoriais únicas, sem amargor — incríveis para tomar sem adoçar. Métodos: Hario V60 (copo) · French press · Aeropress.',i:[
['grão da casa','','médio / grande','12,90 / 14,90','s'],
['grão secreto','Microlotes de cafés mais diferentões, limitados!','médio / grande','15,90 / 17,90']]},
{id:'gelados',t:'Cafés gelados',i:[
['iced coffee','Café filtrado com gelo! Refrescante, saboroso, aromático, incrível!','médio / grande','14,90 / 16,90'],
['iced mocha caramel','Refrescante com um toque de caramelo c/ flor de sal','médio / grande','15,90 / 18,90','s'],
['iced latte','Leite gelado, dose de espresso e gelo!','médio / grande','14,90 / 16,90'],
['espresso tônica','Combinação refrescante de tônica, gelo e espresso!','','19,90']]},
{id:'matcha',t:'Matcha',i:[
['matcha latte','Feito a partir de folhas de chá cultivadas à sombra, com leite de aveia, ressaltando sua complexidade de sabor e notas herbais únicas!','','17,90'],
['iced matcha','Versão gelada com leite de aveia e fava de baunilha: refrescante e suavemente doce!','','19,90']]},
{id:'quente',t:'Chocolate quente e chás',i:[
['chocolate quente belga','Uma bebida suave, com sabor delicado e equilibrado.','médio / grande','16,90 / 25,90','sc'],
['chocolate quente europeu','Sim, ele é cremoso e saboroso como você nunca provou!','','16,90'],
['chá quente de hibisco & maçã','Chá natural de infusão com adição de açúcar preparado na hora!','','12,90'],
['chá gelado de hibisco & maçã','Chá gelado de infusão na hora, com produto natural, sem adição de açúcar!','','12,90']]},
{id:'choc-gelado',t:'Chocolate gelado',i:[
['chocolate gelado','Um blend de chocolates em pó, toque de canela, leite gelado, gelo e espresso!','','17,90']]},
{id:'frappes',t:'Frappés',nota:'Frappés di gelato.',i:[
['frappé chocolate belga','Gelato italiano batido com café!','','21,90'],
['frappé doce de leite','Gelato italiano batido com café!','','21,90'],
['frappé morango','Sorbet de morango base água. Pode escolher bater com água ou leite. Fica incrível :)','','21,90'],
['gelato (bola)','','','13,90']]},
{id:'doces',t:'Doces',nota:'Feitos aqui :)',i:[
['banana bread','Com pedaços de chocolate na massa!','','12,90','s'],
['bolo de cenoura','','','10,90'],
['bolo de cenoura c/ ganache','','','17,90'],
['bolo de cenoura c/ ganache belga','','','21,90'],
['bolo três leites','Macio e úmido, com leite, leite condensado e leite de coco, finalizado com uma camada crocante.','','17,90','n'],
['brownie red velvet cheesecake','Ganache de chocolate branco + R$ 6,00','','12,90'],
['brownie de chocolate','Ganache de chocolate + R$ 6,00','','10,90'],
['cookies americanos','Consulte opções do dia!','','9,90 / 11,90'],
['brigadeiro belga','Consulte disponibilidade','','4,00'],
['banana bread & gelato','Fatia do banana bread quentinha com gelato de doce de leite e amêndoas laminadas. :)','','22,90'],
['brigadeirão','Pudim de brigadeiro (receita nossa), regado com chocolate belga picado!','','15,90']]},
{id:'suco',t:'Sucos e água',i:[
['suco natural','Laranja | limão','','13,90'],
['água','','com gás / sem gás','6,90 / 5,90']]}
];
const BRUNCH={i:[
['ovos mexidos clássicos cremosos','Acompanha pãozinho de fermentação natural. Bacon artesanal (opcional): 1 tira R$ 4,00 / 2 tiras R$ 7,00','','20,90','s'],
['copa sandwich','Pão de fermentação natural, pesto de manjericão, mussarela napolitana, tomatinhos confitados, copa artesanal maturada e rúcula!','','35,90','s'],
['queijo quente de cebola caramelizada','Pão de fermentação natural dourado na chapa, blend de american cheese e cheddar e cebola caramelizada no ponto certo.','','25,90','s'],
['queijo quente irresistível','Pão de fermentação natural, blend de american cheese e cheddar e mix de pimentas.','','20,90','s'],
['croque monsieur','Brioche feito na casa, molho bechamel, presunto toscano, mussarela fior di latte e queijo gruyère gratinado.','','37,90'],
['croque madame','Adicional de ovo frito: + R$ 5,00','',''],
['torta de frango com requeijão','','','17,90'],
['american pancakes','3 disquinhos + 1 acompanhamento','','20,90','s'],
['brioche na chapa (fatia)','Brioche levinho, 100% fermentação natural, com manteiga na chapa. Dica: com doce de leite.','','13,90'],
['pão sourdough (fatia)','Fermentação natural feito aqui, com manteiga na chapa :)','','10,90'],
['pão de queijo artesanal','Receita nossa, com queijo canastra :)','','10,90','s'],
['iogurte, geleia & granola','Iogurte natural grego sem açúcar ou conservantes, geleia de morango e granolinha feita aqui!','','17,90']],
acomp:[['manteiga','3,00'],['doce de leite argentino','4,00'],['geleia artesanal','4,00'],['mel','3,00'],['caramelo c/ flor de sal','3,00'],['nutella','4,00'],['cream cheese','3,00']]};

const $=(s,r=document)=>r.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function card([n,d,v,p,f='']){
  const tags=(f.includes('s')?'<span class="tag star" title="Queridinho da galera">★</span> ':'')+(f.includes('n')?'<span class="tag new">novo</span> ':'')+(f.includes('c')?'<span class="tag chk" title="Conferir com o cardápio original">conferir</span>':'');
  return `<article class="item reveal"><div class="item-top"><h3>${esc(n)} ${tags}</h3>${p?`<span class="price">R$ ${esc(p)}</span>`:''}</div>${v?`<span class="var">${esc(v)}</span>`:''}${d?`<p>${esc(d)}</p>`:''}</article>`;
}
const tabs=$('#tabs'),panel=$('#panel');
function show(id){
  const c=MENU.find(m=>m.id===id);
  tabs.querySelectorAll('button').forEach(b=>b.setAttribute('aria-selected',b.dataset.id===id));
  panel.innerHTML=(c.nota?`<p class="cat-note">${esc(c.nota)}</p>`:'')+`<div class="grid">${c.i.map(card).join('')}</div>`;
  requestAnimationFrame(()=>panel.querySelectorAll('.reveal').forEach(e=>e.classList.add('in')));
}
tabs.innerHTML=MENU.map(m=>`<button role="tab" data-id="${m.id}" aria-selected="false">${m.t}</button>`).join('')+'<a href="#brunch">Brunch ↓</a>';
tabs.addEventListener('click',e=>{const b=e.target.closest('button');if(b)show(b.dataset.id)});
show(MENU[0].id);
$('#brunch-grid').innerHTML=BRUNCH.i.map(card).join('');
$('#acomp').innerHTML=BRUNCH.acomp.map(([n,p])=>`<li><span>${n}</span><span>R$ ${p}</span></li>`).join('');
const burger=$('#burger'),nav=$('#nav');
function toggle(o){nav.classList.toggle('open',o);burger.setAttribute('aria-expanded',o);burger.setAttribute('aria-label',o?'Fechar menu':'Abrir menu')}
burger.addEventListener('click',()=>toggle(!nav.classList.contains('open')));
nav.addEventListener('click',e=>{if(e.target.closest('a'))toggle(false)});
document.addEventListener('keydown',e=>{if(e.key==='Escape')toggle(false)});
const io='IntersectionObserver' in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12}):null;
document.querySelectorAll('.reveal').forEach(el=>io?io.observe(el):el.classList.add('in'));
$('#ano').textContent=new Date().getFullYear();
