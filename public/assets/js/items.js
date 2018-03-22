$(document).ready(function () {

    //on click function for creating an event
    $("#create-item-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var id = $(this).data("id");

        // Getting jQuery references of new event
        var item_name = $("#item-name").val().trim();

        // Constructing a event object to hand to the database
        var newItem = {
            item_name: item_name,
            guestId: id
        };

        // Send the POST request.
        $.ajax("/api/items", {
            type: "POST",
            data: newItem
        }).then(
            function () {
                window.location.href = "/events/" + id;
            });
    });




    //on click function for updating an event
    $("#update-item").on("click", function (event) {
        var id = $(this).data("id");

        event.preventDefault();

        // Getting jQuery references of new event
        var item_name = $("#item-name").val().trim();

        // Constructing a event object to hand to the database
        var updatedItem = {
            item_name: item_name,
            guestId: id
        };

        // Send the PUT request.
        $.ajax("/api/items/" + id, {
            type: "PUT",
            data: updatedItem
        }).then(
            function () {
                console.log("updated item");
                // Reload the page to get the updated list
                window.location.reload();

            })
    });

});