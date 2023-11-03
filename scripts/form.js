const ratingInput = document.getElementById("page_rating");
        const ratingDisplay = document.getElementById("rating_display");

        ratingInput.addEventListener("input", function () {
            ratingDisplay.textContent = ratingInput.value;
        });