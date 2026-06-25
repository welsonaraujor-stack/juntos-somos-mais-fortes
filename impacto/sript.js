document.querySelectorAll("nav button").forEach(btn => {

    btn.addEventListener("click", () => {

        document
            .querySelectorAll("nav button")
            .forEach(b => b.classList.remove("active"));

        btn.classList.add("active");
    });

});