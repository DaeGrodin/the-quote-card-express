"use strict"

const elements = {
    quote: document.getElementById("quote"),
    author: document.getElementById("author"),
};

async function getRandomImage() {
    const endpoint = "http://localhost:8080/api/v1/getRandomImage";
    try {
        const response = await fetch(endpoint);
        const returnedData = await response.json();
        const receivedPhotoUrl = returnedData.data;

        const imgDiv = document.querySelector(".background-img");
        imgDiv.style.backgroundImage = `url("${receivedPhotoUrl}")`;
    } catch (error) {
        console.log(error)
    }
}

getRandomImage();


/* const quotes = [
    {
        quote: "Happiness is a warm puppy",
        author: "Charles M. Schultz",
    },

    {  
        quote: "A dog is the only thing on earth that loves you more than he loves himself",
        author: "Josh Billings",
    },

    { 
        quote: "How lucky I am to have had somethings that makes saying goodbye so hard."
        author: "A. A. Milne",
    }
]

function loopThroughQuotes() {
    let quoteIndex = 0;
    setInterval(() => {
       if (quoteIndex < quotes.length) {
           elements.quote.textContent = quotes[quoteIndex].quote;
           elements.author.textContent = quotes[quoteIndex].author;
           quoteIndex++;
       } else {
           quoteIndex = 0;
       }
    }; 3000);
}

setTimeout(loopThroughQuotes), 3000); */





