const request = new XMLHttpRequest;

let quote = document.getElementById("quote");
let author = document.getElementById("author");
let img = document.getElementById("images")

request.open('Get', 'https://thatsthespir.it/api', true);

request.onload = function() {
    if(this.status === 200) {
        let quotation = JSON.parse(this.responseText);
        quote.innerHTML = quotation.quote;
        author.innerHTML = quotation.author;
        img.src = quotation.photo;
    }
}

request.send();