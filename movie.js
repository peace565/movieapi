import* as readline from 'readline';
class Movie {
    constructor(title, genre, releaseDate, availability = true) {
      this.title = title;
      this.genre = genre;
      this.releaseDate = releaseDate;
      this.availability = availability;
    }
  }
  
  class MovieRentalStore {
    constructor() {
      this.movies = [];
    }
  
    addMovie(title, genre, releaseDate) {
      const movie = new Movie(title, genre, releaseDate);
      this.movies.push(movie);
      console.log(`${title} has been added to our movie collection.`);
    }
  
    displayMovies() {
      console.log('Available Movies:');
      this.movies.forEach((movie, index) => {
        console.log(`${index + 1}. ${movie.title} - ${movie.genre} - Released: ${movie.releaseDate}`);
      });
    }
  
    rentMovie(index) {
      const movie = this.movies[index];
      if (movie && movie.availability) {
        movie.availability = false;
        console.log(`You have successfully rented ${movie.title}! Enjoy your movie night.`);
      } else {
        console.log('Invalid selection or the movie is not available for rent.');
      }
    }
  }
  
  const rentalStore = new MovieRentalStore();
  
  rentalStore.addMovie('Tribe called Judah', 'Drama', '2024');
  rentalStore.addMovie('Breath of Life', 'Drama', '2024');
  rentalStore.addMovie('The Dark Knight', 'Action', '2008');
  rentalStore.addMovie('Wedding party', 'Romcom', '2010');
  
  function promptUser() {
    console.log('\nWhat would you like to do?');
    console.log('1. View available movies');
    console.log('2. Rent a movie');
    console.log('3. Exit');
  
    
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    rl.question('Enter your choice (1-3): ', (choice) => {
      switch (choice) {
        case '1':
          rentalStore.displayMovies();
          break;
        case '2':
          rentalStore.displayMovies();
          rl.question('Enter the number of the movie you want to rent: ', (index) => {
            rentalStore.rentMovie(parseInt(index) - 1);
          });
          break;
        case '3':
          console.log('Thank you for using our movie rental service. Goodbye!');
          rl.close();
          process.exit(0);
        default:
          console.log('Invalid choice. Please try again.');
          break;
      }
  
      rl.close();
      promptUser(); // Repeat the prompt after completing the selected action
    });
  }
  
  promptUser();
  
  