//declare
let input= document.getElementById('input');
let space= document.getElementById('space');
let noSpace= document.getElementById('nospace');
let withSpace= document.getElementById('withspace');
let withoutSpace= document.getElementById('withoutspace');


//functions

const countSpace=()=>{
    let store= input.value;
    withSpace.innerHTML= 'Including whitespace there are '+ store.length + ' letters';
}

const countWithoutSpace=()=>{
    let store= input.value;
    withoutSpace.innerText= 'Without whitespace there are '+ store.replace(/\s+/g, '').length + ' letters';
}
//eventlistner

space.addEventListener('click', countSpace);
noSpace.addEventListener('click', countWithoutSpace);



