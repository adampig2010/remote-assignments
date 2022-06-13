var welcomeBlock = document.querySelector(".welcome");

welcomeBlock.addEventListener('click', () => {
    welcomeBlock.innerHTML = "<h2>Have a Good Time!</h2>";
    document.querySelector(".welcome").style.cursor = "default";
});

function showTheCourse() {
    document.querySelector(".row4").style.display = "flex";
}



