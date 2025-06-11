
function validateForm() {
    
    const nameInput = document.getElementById("name-input");
    
    if (nameInput.value.trim() === "") {
        alert("Name cannot be empty");
        } else {
            alert ('Hai ' + nameInput.value);
        }
    
}

let indexBanner = 0;

showBanner();

function nextBanner() {
    indexBanner += 1;
    showBanner();
}


function showBanner() {
    const listImage = document.getElementsByClassName("banner-img");
    
    if (indexBanner > listImage.length - 1) {
        indexBanner = 0;
    }
        

    for (let i = 0; i < listImage.length; i++) {
        listImage[i].style.display = "none";
    }
    
    listImage[indexBanner].style.display = "block";

    console.log(listImage);
}

setInterval(nextBanner, 3000);

  
