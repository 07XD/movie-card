// Base de datos de películas
const movies = [
    {
        title: "The Joker",
        rating: 8.5,
        year: 2019,
        image: "https://i1.wp.com/img.gostream.mobi/300/450/thumbs/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        download: {
            quality: "Full HD",
            resolution: "1080p",
            duration: "2h 2min",
            minutes: "122min",
            extension: "MP4",
            format: "WEB/DL"
        },
        director: "Todd Phillips",
        cast: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
        genre: ["Crime", "Drama", "Thriller"],
        plot: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
        language: "English",
        country: "United States"
    },
    {
        title: "The Matrix",
        rating: 8.7,
        year: 1999,
        image: "https://i1.wp.com/img.gostream.mobi/300/450/thumbs/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        download: {
            quality: "Full HD",
            resolution: "1080p",
            duration: "2h 16min",
            minutes: "136min",
            extension: "MP4",
            format: "BDRip"
        },
        director: "Lana Wachowski, Lilly Wachowski",
        cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
        genre: ["Action", "Sci-Fi"],
        plot: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        language: "English",
        country: "United States"
    },
    {
        title: "Forrest Gump",
        rating: 8.8,
        year: 1994,
        image: "https://i1.wp.com/img.gostream.mobi/300/450/thumbs/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
        download: {
            quality: "Full HD",
            resolution: "1080p",
            duration: "2h 22min",
            minutes: "142min",
            extension: "MP4",
            format: "WEBrip"
        },
        director: "Robert Zemeckis",
        cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
        genre: ["Drama", "Romance"],
        plot: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
        language: "English",
        country: "United States"
    },
    {
        title: "Pulp Fiction",
        rating: 8.9,
        year: 1994,
        image: "https://i1.wp.com/img.gostream.mobi/300/450/thumbs/fIE3lAGcZDV1G6XM5KmuWnNsPp1.jpg",
        download: {
            quality: "Full HD",
            resolution: "1080p",
            duration: "2h 34min",
            minutes: "154min",
            extension: "MP4",
            format: "HDrip"
        },
        director: "Quentin Tarantino",
        cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
        genre: ["Crime", "Drama"],
        plot: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        language: "English",
        country: "United States"
    },
    {
        title: "The Silence of the Lambs",
        rating: 8.6,
        year: 1991,
        image: "https://i1.wp.com/img.gostream.mobi/300/450/thumbs/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg",
        download: {
            quality: "Full HD",
            resolution: "1080p",
            duration: "1h 58min",
            minutes: "118min",
            extension: "MP4",
            format: "DVDRip"
        },
        director: "Jonathan Demme",
        cast: ["Jodie Foster", "Anthony Hopkins", "Lawrence A. Bonney"],
        genre: ["Crime", "Drama", "Thriller"],
        plot: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
        language: "English",
        country: "United States"
    },
    // Add more movies here
];

// Array de favoritos
const favorites = [];

// Array de películas vistas
const watched = [];

// Crear tarjetas de películas
movies.forEach(movie => {
    const movieCard = document.createElement("div");
    movieCard.className = "movie-card";

    const movieImage = document.createElement("div");
    movieImage.className = "movie-image";

    const img = document.createElement("img");
    img.src = movie.image;
    img.alt = movie.title;

    movieImage.appendChild(img);
    movieCard.appendChild(movieImage);

    const favorite = document.createElement("div");
    favorite.className = "favorite";
    const favoriteIcon = document.createElement("i");
    favoriteIcon.className = "bx bx-heart";
    favorite.appendChild(favoriteIcon);
    movieCard.appendChild(favorite);

    const watchedButton = document.createElement("div");
    watchedButton.className = "watched";
    const watchedIcon = document.createElement("i");
    watchedIcon.className = "bx bx-show";
    watchedButton.appendChild(watchedIcon);
    movieCard.appendChild(watchedButton);

    const rating = document.createElement("div");
    rating.className = "rating";
    const ratingIcon = document.createElement("i");
    ratingIcon.className = "bx bx-star";
    const ratingText = document.createElement("span");
    ratingText.textContent = movie.rating;
    rating.appendChild(ratingIcon);
    rating.appendChild(ratingText);
    movieCard.appendChild(rating);

    const year = document.createElement("div");
    year.className = "year";
    const yearText = document.createElement("span");
    yearText.textContent = movie.year;
    year.appendChild(yearText);
    movieCard.appendChild(year);

    const overlay = document.createElement("div");
    overlay.className = "overlay";
    movieCard.appendChild(overlay);

    const movieDetails = document.createElement("div");
    movieDetails.className = "movie-details";

    const title = document.createElement("div");
    title.className = "title";
    const titleText = document.createElement("h2");
    titleText.textContent = movie.title;
    title.appendChild(titleText);

    const quality = document.createElement("div");
    quality.textContent = movie.download.quality;
    quality.className = "quality";

    const resolution = document.createElement("div");
    resolution.textContent = movie.download.resolution;
    resolution.className = "resolution";

    const minutes = document.createElement("div");
    minutes.textContent = movie.download.minutes;
    minutes.className = "minutes";

    const downloadLink = document.createElement("div");
    downloadLink.className = "download";
    const downloadIcon = document.createElement("i");
    downloadIcon.className = "bx bxs-magnet";
    const downloadText = document.createElement("a");
    downloadLink.appendChild(downloadIcon);
    downloadLink.appendChild(downloadText);

    const format = document.createElement("div");
    format.textContent = movie.download.format;
    format.className = "format";

    movieDetails.appendChild(title);
    movieDetails.appendChild(quality);
    movieDetails.appendChild(resolution);
    movieDetails.appendChild(minutes);
    movieDetails.appendChild(downloadLink);
    movieDetails.appendChild(format);
    movieCard.appendChild(movieDetails);

    document.querySelector(".container-movies").appendChild(movieCard);
});

// Añadir evento de clic para favoritos
document.querySelectorAll(".favorite").forEach(favorite => {
    favorite.addEventListener("click", event => {
        const icon = event.currentTarget.querySelector("i");
        const movieCard = event.currentTarget.closest(".movie-card");
        const index = favorites.indexOf(movieCard);
        if (index === -1) {
            favorites.push(movieCard);
            icon.classList.remove("bx-heart");
            icon.classList.add("bxs-heart");
            icon.style.color = "red";
        } else {
            favorites.splice(index, 1);
            icon.classList.remove("bxs-heart");
            icon.classList.add("bx-heart");
            icon.style.color = "";
        }
    });
});

// Añadir evento de clic para películas vistas
document.querySelectorAll(".watched").forEach(watchedButton => {
    watchedButton.addEventListener("click", event => {
        const icon = event.currentTarget.querySelector("i");
        const movieCard = event.currentTarget.closest(".movie-card");
        const index = watched.indexOf(movieCard);
        if (index === -1) {
            watched.push(movieCard);
            icon.classList.remove("bx-show");
            icon.classList.add("bxs-show");
            icon.style.color = "#0974f1";
        } else {
            watched.splice(index, 1);
            icon.classList.remove("bxs-show");
            icon.classList.add("bx-show");
            icon.style.color = "";
        }
    });
});