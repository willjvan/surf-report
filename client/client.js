const form = document.getElementsByClassName('search')[0]

form.addEventListener('submit', (event) => {
    event.preventDefault(); // dont reload
    const formData = new FormData(form);
    const surfSpot = formData.get('searchSpot')
    const mew = {
        surfSpot
    }
    console.log(mew);
});

document.getElementsByClassName('search')[0].style.display = "none";

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