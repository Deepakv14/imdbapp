console.log("Welcome!");

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

}

async function getLatestMovieDataByCode(params) {
    const response = await fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${params}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "imdb8.p.rapidapi.com",
            "x-rapidapi-key": "ccc4491721msh72938d2e18af25ap19d66bjsn37d9389edb83"
        }
    })
    var data = await response.json()
        //  .then(response => {
        //      console.log(response.json());
        //  })
        //  .catch(err => {
        //      console.error(err);
        //  });

    show(data);
}
var button = document.getElementById("btn");
button.addEventListener("click", () => {
    console.log("Clicked button !!");
    var movie = document.getElementById("text1").value;
    console.log(movie);
    // document.getElementById("demo").innerHTML = response.body;

    var response = getLatestMovieDataByCode(movie);
    console.log(response);
});

function show(data) {

    var len = data.d.length;
    let tab = "";
    /* tab =
         `<p>
           <h1>Title:</h1>
           <h2>Type</h2>
           <h3>Crew</h3>
           <h4>Poster</h4>
          </p>`;*/

    // Loop to access all rows 
    for (let r of data.d) {
        tab += `<p> 
    <h1>${r.l} </h1>
    <h5>YEAR: ${r.y} </h5>
    <h3>CAST: ${r.s}</h3>   
    <h4><img src="${r.i['imageUrl']}" style="width:300px"></h4>  
</p>`;
    }
    document.getElementById("demo").innerHTML = tab;
}