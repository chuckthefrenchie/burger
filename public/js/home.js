$(document).on("click", ".eatButton", function () {
    console.log("clicked")
    var burgerId = $(this).data("id");
    var eaten = $(this).data("eaten");
    console.log(eaten)

    var newEaten = {
        devoured: eaten
    };

    $.ajax("/api/burgers/" + burgerId, {
        method: "PUT",
        data: newEaten
    }).then(function () {
        location.reload();
    })
})

$(document).on("click", "#addNewBurger", function(event) {
    event.preventDefault();
    var newBurgerName = $("#burger_name").val().trim();

    if (newBurgerName) {
        var newBurger = {
            burger_name: newBurgerName
        }

        $.post("/api/burgers", newBurger, function() {
            location.reload();
        })
    } else {
        $("#error").text("Please enter a burger name.");
    }
})
