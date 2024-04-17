
document.addEventListener("DOMContentLoaded", function () {
    var chartFullContainer = document.getElementById("chartFullContainer");
    if (chartFullContainer) {
        chartFullContainer.addEventListener("click", function () {

            window.location.href = "workout_schedule.html";
        });
    }
});

