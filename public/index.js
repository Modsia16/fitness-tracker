init();

async function init() {
    if (location.search.split("=") [1] === undefined) {
        //AudioParam for changing values
        const workout = await API.getLastWorkout();
        if (workout) {
            location.search = "?id" + workout.id;
        } else {
            document.querySelector("#continue-button").classList.add("d-none");
        }
    }
}