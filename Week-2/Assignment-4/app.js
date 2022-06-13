var welcomeBlock = document.querySelector(".welcome");

welcomeBlock.addEventListener('click', () => {
    welcomeBlock.innerHTML = `<h2 style="padding: 3em 0; margin: 0px;">Have a Good Time!</h2>`;
    document.querySelector(".welcome").style.cursor = "default";
});

function showTheCourse() {
    document.querySelector(".course-content").style.display = "flex";
};