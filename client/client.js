console.log("hello");

function openSlideMenu(){
    document.getElementsByClassName('forecast-container')[0].style.display = "block";
    document.getElementsByClassName('close')[0].style.display = "block";
    document.getElementsByClassName('search')[0].style.display = "none";
}

function closeSlideMenu(){
    document.getElementsByClassName('forecast-container')[0].style.display = "none";
    document.getElementsByClassName('close')[0].style.display = "none";
    document.getElementsByClassName('search')[0].style.display = "block";
}