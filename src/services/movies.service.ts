import http, {URL} from './utils';

const API = {
    SEARCH_BY_NAME: (name: string) => `${URL}&s=${name}`,
    SEARCH_BY_ID: (id: string) => `${URL}&i=${id}`,
  };

  interface IMovieSearchResponseMovie {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
  }
  
  interface IMovieResposeProps {
    Error?: string;
    Response: string;
  }
  
   export interface IMovieSearchResponse extends IMovieResposeProps {
    totalResults: string;
    Search: IMovieSearchResponseMovie[];
  }
  
  interface IMovieBasicProps {
    poster: string;
    title: string;
    type: string;
    year: string;
    id: string;
  }
  
  export interface IMoviesProps {
    movies: IMovieBasicProps[];
    totalResults: number;
  }

  interface IRatingsInterface {
    Source: string,
    Value: string,
  }
  

  export interface IMovieByIdResponse {
    Title: string,
    Year: string,
    Rated: string,
    Relased: string,
    Runtime: string,
    Genre: string,
    Director: string,
    Writer: string,
    Actors: string,
    Plot: string,
    Language: string,
    Country: string,
    Awards: string,
    Poster: string,
    Ratings: IRatingsInterface[],
    Metascore: string,
    imdbRating: string,
    imdbVotes: string,
    imdbID: string,
    Type: string,
    DVD: string,
    BoxOffice: string,
    Production: string,
    Website: string,
    Response: string,
  }
 
  

  
  
  const movieService = {
    searchByName: async (name: string) => {
      try {
        const searchResult: IMovieSearchResponse = await http.get(API.SEARCH_BY_NAME(name));
        if (searchResult?.Error) {
          console.log(searchResult.Error);
          return null;
        } else {
          const result: IMoviesProps = {
            totalResults: parseInt(searchResult.totalResults, 10),
            movies: searchResult.Search.map((movie) => ({
              id: movie.imdbID,
              poster: movie.Poster,
              title: movie.Title,
              type: movie.Type,
              year: movie.Year
            })),

          };
          return result;
        }
      } catch (e) {
        console.log(e);
      }
  
    },
    searchById: async (id: string) => {
      try {
        const searchResult: IMovieByIdResponse = await http.get(API.SEARCH_BY_ID(id));
        return searchResult
      } catch (e) {
        console.log(e);
      }

    },
    
  };
  
  export default movieService;