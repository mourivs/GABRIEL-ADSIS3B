document.addEventListener("DOMContentLoaded", function () {
    const coverRight = document.querySelector(".cover-right");
    const showProjectsBtn = document.getElementById("showProjectsBtn");
    const popup = document.getElementById("projectsPopup");
    const closePopupBtn = document.getElementById("closePopupBtn");

    // Botão para abrir o pop-up de cursos
    const showCoursesBtn = document.querySelector(".legenda");
    const coursesPopup = document.getElementById("coursesPopup");
    const closeCoursesPopupBtn = document.getElementById("closeCoursesPopupBtn");

    coverRight.addEventListener("click", function () {
        this.classList.toggle("turn");
    });

    showProjectsBtn.addEventListener("click", function () {
        popup.classList.add("active");
    });

    closePopupBtn.addEventListener("click", function () {
        popup.classList.remove("active");
    });

    // Abrir pop-up de cursos
    showCoursesBtn.addEventListener("click", function () {
        coursesPopup.classList.add("active");
    });

    // Fechar pop-up de cursos
    closeCoursesPopupBtn.addEventListener("click", function () {
        coursesPopup.classList.remove("active");
    });
});
