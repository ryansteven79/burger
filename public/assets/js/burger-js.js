$("#place-order").on("click", function () {
    var newBurgerName = $("#enter-burger").val().trim();
    //Grabs current URL of website
    var currentURL = window.location.origin;

    $.post(currentURL + "/api/burgers", {
        burger_name: newBurgerName,
        devoured: 0
    }, function (data) {
        console.log(data);
    })
})