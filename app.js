// Load CSV data and set up event listeners
d3.csv("Book2.csv").then(function (data) {
    var movies = data;
    var button = d3.select("#button");

    button.on("click", runEnter);

    function runEnter() {
        // Clear previous results
        d3.select("tbody").html("");

        // Prevent page reload
        d3.event.preventDefault();

        // Get the user input
        var inputValue = d3.select("#user-input").property("value");

        // Get the selected value from the dropdown
        //var selectedValue = document.getElementById('dropdownMenuButton').getAttribute('data-selected-value');

        // Get the selected value from the dropdown button's data attribute
        var selectedColumn = document.getElementById("dropdownMenuButton").getAttribute("data-selected");

        // Filter movies by actor name
        //var filteredMovies = movies.filter(movies => movies.description.includes(inputValue));
        //var filteredMovies = movies.filter(movies => movies["Language"].includes(inputValue));

        // Filter movies by selected column name
        var filteredMovies = movies.filter(m => m[selectedColumn] && m[selectedColumn].includes(inputValue));

        // Sort the results by rating in descending order
        var output = _.sortBy(filteredMovies, 'Year written').reverse();

        // Display the results in the table
        for (var i = 0; i < output.length; i++) {
            d3.select("tbody").insert("tr").html(
                "<td>" + [i + 1] + "</td>" +
                "<td>" + output[i]['Title of play'] + "</td>" +
                "<td>" + output[i]['Author'] + "</td>" +
                "<td>" + output[i]['Language'] + "</td>" +
                "<td>" + output[i]['Year written'] + "</td>" +
                "<td>" + output[i]['Year published'] + "</td>" +
                "<td>" + output[i]['Title of translation GR'] + "</td>" +
                "<td>" + output[i]['Title of translation EN'] + "</td>" +
                "<td>" + output[i]['Translator'] + "</td>" +
                "<td>" + output[i]['Year of translation'] + "</td>" +
                "<td>" + output[i]['City'] + "</td>" +
                "<td>" + output[i]['Theatre'] + "</td>" +
                "<td>" + output[i]['Date of first performance'] + "</td>" +
                "<td>" + output[i]['Troupe name'] + "</td>" +
                "<td>" + output[i]['Review'] + "</td>" +
                "<td>" + output[i]['Actor'] + "</td>" +
                "<td>" + output[i]['Character played'] + "</td>"
            );
        }
    }
});