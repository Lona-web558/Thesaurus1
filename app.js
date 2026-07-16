const history=[];

async function searchWord(){

const word=document.getElementById("word").value.trim();

if(word==="") return;

const response=await fetch(`/api/search/${word}`);

const results=document.getElementById("results");

if(!response.ok){

results.innerHTML=`
<div class="alert alert-danger">
Word not found.
</div>
`;

return;

}

const data=await response.json();

results.innerHTML=`

<div class="card">

<div class="card-body">

<h2>${data.word}</h2>

<hr>

<h4>Synonyms</h4>

${data.synonyms.map(s=>`
<span class="badge synonym">${s}</span>
`).join("")}

<hr>

<h4>Antonyms</h4>

${data.antonyms.map(a=>`
<span class="badge antonym">${a}</span>
`).join("")}

</div>

</div>

`;

if(!history.includes(data.word)){

history.unshift(data.word);

}

renderHistory();

}

function renderHistory(){

const list=document.getElementById("history");

list.innerHTML="";

history.forEach(item=>{

list.innerHTML+=`

<li
class="list-group-item"
onclick="searchHistory('${item}')">

${item}

</li>

`;

});

}

function searchHistory(word){

document.getElementById("word").value=word;

searchWord();

}