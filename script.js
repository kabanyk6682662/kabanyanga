document.addEventListener("DOMContentLoaded", function () {
    alert("Welcome to External Gyatt!");

    const changeColorButton = document.createElement("button");
    changeColorButton.textContent = "Change Text Color";
    changeColorButton.style.display = "block";
    changeColorButton.style.margin = "20px auto";
    changeColorButton.style.padding = "15px 30px";
    changeColorButton.style.border = "2px solid #000";
    changeColorButton.style.borderRadius = "10px";
    changeColorButton.style.backgroundColor = "#f0f0f0";
    changeColorButton.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    changeColorButton.style.transition = "all 0.3s ease";
    
    changeColorButton.addEventListener("mouseover", function () {
        changeColorButton.style.backgroundColor = "#dcdcdc";
        changeColorButton.style.transform = "scale(1.05)";
    });

    changeColorButton.addEventListener("mouseout", function () {
        changeColorButton.style.backgroundColor = "#f0f0f0";
        changeColorButton.style.transform = "scale(1)";
    });
    changeColorButton.style.cursor = "pointer";
    document.body.insertBefore(changeColorButton, document.body.firstChild);

    changeColorButton.addEventListener("click", function () {
        document.querySelector(".EXTERNALGYATT h2").style.color = "blue";
        document.querySelector(".EXTERNALGYATT p").style.color = "green";
    });

    const surpriseButton = document.createElement("button");
    surpriseButton.textContent = "Surprise Me!";
    surpriseButton.style.display = "block";
    surpriseButton.style.margin = "20px auto";
    surpriseButton.style.padding = "10px";
    surpriseButton.style.cursor = "pointer";
    document.body.insertBefore(surpriseButton, document.body.firstChild);

    surpriseButton.addEventListener("click", function () {
        const colors = ["red", "green", "blue", "purple", "orange", "pink"];
        document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        alert("Background color changed!");
    });

    const funnyText = document.createElement("p");
    funnyText.textContent = "Why did the web developer go broke? Because he used up all his cache!";
    funnyText.style.fontSize = "20px";
    funnyText.style.color = "brown";
    funnyText.style.fontWeight = "bold";
    document.body.appendChild(funnyText);
});
