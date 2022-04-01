fetch("./json/preguntas.json")
.then(response => response.json())
.then(data => {
    let centerText = document.querySelectorAll(".center_text");

    centerText.forEach(center => {
        center.addEventListener("click", event => {

            event.currentTarget.style.backgroundColor = "rgba(255, 255, 255, .8)";
            event.currentTarget.style.color = "black";

            let modal = document.getElementById("myModal");
            modal.style.display = "block";

            let modalBodyP = document.querySelector(".modal-body p");

            modalBodyP.textContent = data[event.currentTarget.innerHTML - 1];

            let span = document.getElementsByClassName("close")[0];
            span.onclick = function() {
                modal.style.display = "none";
            }

        });
    });

})

