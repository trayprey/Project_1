let quoteBox = document.getElementById("quoteBox");

var getQuote = function(title) {
    //var for title?
    //var title
    //temp var for title
    var tempTitle = "attack on titan"
    var info; //var for data gathered from the api (anime, character, quote)
    //var for the api link + adding the title of selected anime to the 
    var searchQ = "https://animechan.vercel.app/api/random/anime?title=" + tempTitle
    console.log(searchQ) //checking if searchQ working 

    //beginning of fetch for data from api
    fetch(searchQ)
          .then((response) => response.json())
          .then((quote) => {
            info = quote
            //console.log(quote)
            console.log(info)

            //get div where the quote is going
            var quoteBox = document.getElementById("quoteBox")
            //set html to the quote
            quoteBox.innerHTML = ` 
                <p>Anime: ${info.anime}</p>
                <p>Character: ${info.character}</p>
                <p>Quote: ${info.quote}</p>
                `
          });       
}


//add other api function here? I think it goes here or after what is below




window.onload = function() {
    var quoteButton = document.getElementById("quoteButton");
  
    quoteButton.addEventListener("click", function() {
      getQuote("attack on titan");
    });
  };

//getQuote(" ") //needs input term. This should come from the other api function (as a return? maybe idk? need more work to be done in other areas to be able to determine how to proceed)