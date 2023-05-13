
const butn = document.getElementById('button');
// var x = document.getElementById("task").value;

// // console.log(text.innerHTML);
// function clicked(){
//     console.log(textst);
// }

butn.addEventListener('click',clicked);
function clicked() {
    const textst = document.getElementById("task");
    if(textst.value == "" || !textst.value.trim()){
        alert("please write any task");
        return false;
    }
    else{
        const card = document.getElementById("card");
        const box = document.createElement("div");
        box.id = "box";
        // document.body.appendChild(box);
        card.appendChild(box);
        const out = document.getElementById("box");
        const node = document.createTextNode(textst.value);
        box.appendChild(node);
        textst.value = "";
        box.addEventListener('click',function (){
            box.style.backgroundColor = 'green';
            box.style.textDecoration = 'line-through';
        })
        box.addEventListener('dblclick',function(){
            card.removeChild(box);
        })
        
    }
}
// var list = document.querySelector('#card');
// list.addEventListener('click', function(ev) {
//   if (ev.target.className === 'box') {
//     ev.target.toggle('checked');
//   }
// }, false);
// const change = document.getElementById("box");
// change.addEventListener('click',changebg(this));
// function changebg(a){
//     a.getElementById("box").style.backgroundcolor = "blue";
// }