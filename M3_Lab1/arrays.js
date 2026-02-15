// 1. 
var movies = ["How to Train Y0ur Dragon", "Inception", "The Dark Knight", "Pulp Fiction", "Interstellar"];
console.log(movies[1]); 

// 2. 
var movies = new Array(5);
movies[0] = "How to Train Your Dragon";
movies[1] = "Inception";
movies[2] = "The Dark Knight";
movies[3] = "Pulp Fiction";
movies[4] = "Interstellar";
console.log(movies[0]); 

// 3. 
var movies = new Array(5);
movies[0] = "How to Train Your Dragon";
movies[1] = "Inception";
movies[2] = "The Dark Knight";
movies[3] = "Pulp Fiction";
movies[4] = "Interstellar";
movies[2] = "The Matrix"; 
console.log(movies.length); 

// 4. 
var movies = ["How to Train Your Dragon", "Inception", "The Dark Knight", "Pulp Fiction", "Interstellar"];
delete movies[0];
console.log(movies); 

// 5. 
var movies = ["How to Train Your Dragon", "Inception", "The Dark Knight", "Pulp Fiction", "Interstellar", "The Matrix", "Forrest Gump"];
for (var index in movies) {
    console.log(movies[index]);
}

// 6.
var movies = ["How to Train Your Dragon", "Inception", "The Dark Knight", "Pulp Fiction", "Interstellar", "The Matrix", "Forrest Gump"];
for (var movie of movies) {
    console.log(movie);
}

// 7.
var movies = ["How to Train Your Dragon", "Inception", "The Dark Knight", "Pulp Fiction", "Interstellar", "The Matrix", "Forrest Gump"];
for (var movie of movies.sort()) {
    console.log(movie);
}

// 8. 
var movies = ["How to Train Your Dragon", "Inception", "The Dark Knight", "Pulp Fiction", "Interstellar", "The Matrix", "Forrest Gump"];
var leastFavMovies = ["Cats", "The Room", "Battlefield Earth"];

console.log("Movies I like:\n");
for (var movie of movies) {
    console.log(movie);
}

console.log("\nMovies I regret watching:\n");
for (var movie of leastFavMovies) {
    console.log(movie);
}

// 9. 
var movies = ["How to Train Your Dragon", "Inception", "The Dark Knight", "Pulp Fiction", "Interstellar", "The Matrix", "Forrest Gump"];
var leastFavMovies = ["Cats", "The Room", "Battlefield Earth"];

console.log("Movies I like:\n");
for (var movie of movies) {
    console.log(movie);
}

console.log("\nMovies I regret watching:\n");
for (var movie of leastFavMovies) {
    console.log(movie);
}

var allMovies = movies.concat(leastFavMovies);
console.log(allMovies.sort().reverse());

// 10.
var movies = ["How to Train Your Dragon", "Inception", "The Dark Knight", "Pulp Fiction", "Interstellar", "The Matrix", "Forrest Gump"];
var leastFavMovies = ["Cats", "The Room", "Battlefield Earth"];
var allMovies = movies.concat(leastFavMovies);
allMovies.sort().reverse();
console.log(allMovies.pop());

// 11. 
var movies = ["How to Train Your Dragon", "Inception", "The Dark Knight", "Pulp Fiction", "Interstellar", "The Matrix", "Forrest Gump"];
var leastFavMovies = ["Cats", "The Room", "Battlefield Earth"];
var allMovies = movies.concat(leastFavMovies);
allMovies.sort().reverse();
console.log(allMovies.shift());

// 12. 
var movies = ["How to Train Your Dragon", "Inception", "Cats", "Pulp Fiction", "The Room", "The Matrix", "Battlefield Earth"];
var dislikedMovies = ["Cats", "The Room", "Battlefield Earth"];
var replacements = ["Forrest Gump", "Gladiator", "The Godfather"];

for (var i = 0; i < dislikedMovies.length; i++) {
    var index = movies.indexOf(dislikedMovies[i]);
    if (index !== -1) {
        movies[index] = replacements[i];
    }
}
console.log(movies);

// 13. 
var movies = [["How to Train Your Dragon", 1], ["Inception", 2], ["The Dark Knight", 3], ["Pulp Fiction", 4], ["Interstellar", 5]];

var movieNames = movies.filter(function(item) {
    return typeof item === "string";
});

var flatMovies = movies.flat();
var movieNames = flatMovies.filter(function(item) {
    return typeof item === "string";
});
console.log(movieNames);

// 14.
var employees = ["Zak", "Jessica", "Mark", "Fred", "Sally"];

var showEmployee = function(empArray) {
    console.log("Employees:\n");
    for (var emp of empArray) {
        console.log(emp.toUpperCase());
    }
};

showEmployee(employees);

// 15. 
function filterValues(arr) {
    return arr.filter(function(item) {
        return Boolean(item);
    });
}
console.log(filterValues([58, '', 'abcd', true, null, false, 0]));

// 16.
function getRandomItem(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getRandomItem(numbers));

// 17. 
function getLargestNumber(arr) {
    var largest = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

var numbers = [45, 12, 98, 23, 67, 34, 89];
console.log(getLargestNumber(numbers)); 