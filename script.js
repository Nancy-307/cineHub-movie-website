const movies = [
  {name:"Inception",poster:"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"},
  {name:"Interstellar",poster:"https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"},
  {name:"The Dark Knight",poster:"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"},
  {name:"Batman Begins",poster:"https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"},
  {name:"The Dark Knight Rises",poster:"https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_.jpg"},
  {name:"Joker",poster:"https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"},
  {name:"Avatar",poster:"https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3YjYxNzIyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg"},
  {name:"Titanic",poster:"https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg"},
  {name:"Gladiator",poster:"https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"},
  {name:"The Matrix",poster:"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"},
  {name:"Matrix Reloaded",poster:"https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"},
  {name:"Matrix Revolutions",poster:"https://m.media-amazon.com/images/M/MV5BNjcxODQxMTI3MF5BMl5BanBnXkFtZTcwNjI4Mjg3OA@@._V1_.jpg"},
  {name:"Deadpool",poster:"https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjE1OTQ0NjA@._V1_.jpg"},
  {name:"Fast & Furious",poster:"https://m.media-amazon.com/images/M/MV5BNzY3NzQyNzY5N15BMl5BanBnXkFtZTcwMzY2ODE2OQ@@._V1_.jpg"},
  {name:"Up",poster:"https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1NzEyMTE@._V1_.jpg"},
  {name:"Iron Man",poster:"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_.jpg"},
  {name:"Iron Man 2",poster:"https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_.jpg"},
  {name:"Iron Man 3",poster:"https://m.media-amazon.com/images/M/MV5BMjIzMzAzMjQyM15BMl5BanBnXkFtZTcwNzM2NjcyOQ@@._V1_.jpg"},
  {name:"Thor",poster:"https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg"},
  {name:"Thor Ragnarok",poster:"https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg"},
  {name:"Captain America: The First Avenger",poster:"https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_.jpg"},
  {name:"Captain America: Civil War",poster:"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_.jpg"},
  {name:"Doctor Strange",poster:"https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_.jpg"},
  {name:"Spider-Man",poster:"https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_.jpg"},
  {name:"Logan",poster:"https://m.media-amazon.com/images/M/MV5BYzc5MTU4N2EtYTkyMi00NjdhLTg3NWEtMTY4OTEyMzJhZTAzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg"},
  {name:"John Wick",poster:"https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg"},
  {name:"Harry Potter and the Sorcerer's Stone",poster:"https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg"},
  {name:"Harry Potter and the Chamber of Secrets",poster:"https://m.media-amazon.com/images/M/MV5BMTY4MTk4MDQ3MF5BMl5BanBnXkFtZTgwOTcxMzMzMDE@._V1_.jpg"},
  {name:"Harry Potter and the Prisoner of Azkaban",poster:"https://m.media-amazon.com/images/M/MV5BMTk3MjgyODk0MV5BMl5BanBnXkFtZTcwNzI1MjA2Mw@@._V1_.jpg"},
  {name:"The Lion King",poster:"https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_.jpg"},
  {name:"Frozen",poster:"https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_.jpg"},
  {name:"Moana",poster:"https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_.jpg"},
  {name:"Coco",poster:"https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_.jpg"},
  {name:"Toy Story",poster:"https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_.jpg"},
  {name:"Avatar: The Way of Water",poster:"https://m.media-amazon.com/images/M/MV5BZWJmNzFjZTItM2ZkYy00N2MxLWI2MzUtOTdmZTA1YTRlZTllXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"},
  {name:"The Avengers",poster:"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"},
  {name:"Avengers: Infinity War",poster:"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg"},
  {name:"Avengers: Endgame",poster:"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"},
  {name:"Guardians of the Galaxy",poster:"https://m.media-amazon.com/images/M/MV5BMTk1NjQwMTU3NF5BMl5BanBnXkFtZTcwNzY3Njg1Nw@@._V1_.jpg"},
  {name:"Black Panther",poster:"https://m.media-amazon.com/images/M/MV5BMTc5NjY3NDU4NV5BMl5BanBnXkFtZTgwNjMzOTM0NzM@._V1_.jpg"},
  {name:"Doctor Strange in the Multiverse of Madness",poster:"https://m.media-amazon.com/images/M/MV5BMTc5MjQ2Nzc3Ml5BMl5BanBnXkFtZTgwOTU4MDgxNzM@._V1_.jpg"},
  {name:"Thor: Love and Thunder",poster:"https://m.media-amazon.com/images/M/MV5BMjM1Nzk4NzQ3OF5BMl5BanBnXkFtZTgwNTU0MzI4NzM@._V1_.jpg"},
  {name:"Shang-Chi and the Legend of the Ten Rings",poster:"https://m.media-amazon.com/images/M/MV5BMTk1ODU3MTI0MV5BMl5BanBnXkFtZTgwNjk2NTMzMzM@._V1_.jpg"},
  {name:"Eternals",poster:"https://m.media-amazon.com/images/M/MV5BMjM5MjAwNTk0OV5BMl5BanBnXkFtZTgwOTM0NzU5MzM@._V1_.jpg"},
  {name:"Black Widow",poster:"https://m.media-amazon.com/images/M/MV5BMjM0MDAyMjM4NV5BMl5BanBnXkFtZTgwNDE1MjE5NzM@._V1_.jpg"},
  {name:"Ant-Man",poster:"https://m.media-amazon.com/images/M/MV5BMTk1MjY1NzQyNV5BMl5BanBnXkFtZTgwODk0MTk1NzM@._V1_.jpg"},
  {name:"Ant-Man and the Wasp",poster:"https://m.media-amazon.com/images/M/MV5BMTY0OTU5OTQxMl5BMl5BanBnXkFtZTgwNTE4NTA0NzM@._V1_.jpg"},
  {name:"Spider-Man: Homecoming",poster:"https://m.media-amazon.com/images/M/MV5BMTk1MjcwNzE0MF5BMl5BanBnXkFtZTgwNzkxMzY0NzM@._V1_.jpg"},
  {name:"Spider-Man: Far From Home",poster:"https://m.media-amazon.com/images/M/MV5BMTg4MzA0NDg1Ml5BMl5BanBnXkFtZTgwNTc0NzUyNzM@._V1_.jpg"},
  {name:"Spider-Man: No Way Home",poster:"https://m.media-amazon.com/images/M/MV5BMTQ4Njg0MzE1OF5BMl5BanBnXkFtZTgwOTk3NzE0NzM@._V1_.jpg"},
  {name:"Guardians of the Galaxy Vol. 2",poster:"https://m.media-amazon.com/images/M/MV5BMjI1MTY4NDI0Ml5BMl5BanBnXkFtZTgwNzA5Mjg0NzM@._V1_.jpg"}
];

// DOM Elements
const container = document.getElementById("movieContainer");
const search = document.getElementById("search");

// Show movies function
function showMovies(list){
  container.innerHTML = "";
  list.forEach(m => {
    const yt = `https://www.youtube.com/results?search_query=${encodeURIComponent(m.name+" trailer")}`;
    container.innerHTML += `
      <div class="movie-card">
        <img src="${m.poster}">
        <div class="movie-name">${m.name}</div>
        <button class="watch-btn" onclick="window.open('${yt}','_blank')">Watch</button>
      </div>
    `;
  });
}

// Search filter
search.addEventListener("input", ()=>{
  const value = search.value.toLowerCase();
  showMovies(movies.filter(m => m.name.toLowerCase().includes(value)));
});

// Initial display
showMovies(movies);
