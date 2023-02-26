// Using Fetch API

async function searchWord(word){
    const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    const res = await fetch(URL);
    if(!res.ok){
        return false;
    }
    const data = await res.json();
    return data;
}

const error = document.querySelector(".error")
const input = document.querySelector("#word")
const dictionaryForm = document.querySelector('.dictionary-form');
const ans = document.querySelector(".ans")
const ansHeadingParagrph = document.querySelector(".ans-heading-paragrph")
const ansDefinitionParagrph = document.querySelector(".ans-definition-paragrph")


let word;
input.addEventListener('change',(e)=>{
    console.log(e.target.value);
    word = e.target.value;
})



dictionaryForm.addEventListener('submit',async (e)=>{
    e.preventDefault();
    const res = await searchWord(word);
    if(res){
        ans.style.display = "inline-block"
        error.style.display = "none"
        ansHeadingParagrph.textContent = res[0].word;
        ansDefinitionParagrph.textContent = res[0].meanings[0].definitions[0].definition;
    }else{
        error.style.display = "inline-block"
        ans.style.display = "none"
    }
    console.log(res);
    input.value = "";
})



