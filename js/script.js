$(document).ready(function () {
    // Importing results div
    var results = $("<div class='results'></div>");
    $(".input_zone").append(results);

    // Creating redo array
    var deleted = [];

    // Add button
    $("#add").click(function () {
        if ($("#entry").val() != "") {
            var city = $("<div class='city'></div>");
            var name = $("<p class='name'></p>").text($("#entry").val());
            var icon = $("<i class='fa fa-times' id='delete'></i>");
            $(city).append(name);
            $(city).append(icon);
            $(results).append(city);
        }
        $("#entry").val("");
    });

    // Delete button
    $(document).on("click", ".results .city #delete", function () {
        $(this).parent().remove();
    });

    // Undo button
    $("#undo").click(function () {
        deleted.push($(".results .city:last-child"));
        $(".results .city:last-child").remove();
    });

    // Redo button
    $("#redo").click(function () {
        $(results).append(deleted[deleted.length - 1]);
        deleted.pop();
    });

    // Remove all button
    $("#clear").click(function () {
        $(".city").remove();
    });

});