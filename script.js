const inputText = document.getElementById('text-to-search'),
    paragraph = document.querySelector('p');

function search() {
    console.log('clicked');
    let searchValue = inputText.value;
    searchValue = searchValue.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");

    let pattern = new RegExp(`${searchValue}`,"gi");

    paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `<mark>${match}</mark>`)
}
