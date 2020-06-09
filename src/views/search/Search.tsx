import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import movieService, { IMoviesProps } from '../../services/movies.service';
import {Typography, CardActionArea, TextField} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import useDebounce from '../../hooks/debounce/Debounce'
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    card: {
        minWidth: '250px',
        display: 'block',
        alignItems: 'center',
        marginRight: 'auto',
        marginLeft: 'auto',
        justifyContent: 'center',
        maxWidth: 500,
        marginBottom: 50,
        backgroundColor: "#424242",
        color: 'white'
    },
    centered: {
        display: 'block',
        alignItems: 'center',
        marginRight: 'auto',
        marginLeft: 'auto',
        minWidth: '250px',
        maxWidth: 400,
        marginBottom: 50,
        marginTop: 20,
    }
})
  
const Search = () => {
    const classes = useStyles();
    const [movies, setMovies] = React.useState<IMoviesProps | null>(null);
    const [movieToSearch, setMovieToSearch] = React.useState('');
    const [isSearching, setIsSearching] = useState(false);
    const debouncedSearchTerm = useDebounce(movieToSearch, 500);

    React.useEffect(() => {
        if (debouncedSearchTerm) {

            movieService.searchByName(movieToSearch).then(resp => {
                if (resp) {
                    setIsSearching(false);
                    setMovies(resp);
                }
                else{
                    setIsSearching(true);
                    setMovies(null);
                }
              });
        }
        setIsSearching(false);
    },
     
    [debouncedSearchTerm, movieToSearch]
    );
    const history = useHistory();
    return (
      <div >
          <div className={classes.centered}>
            <TextField
                placeholder="Enter movie name"
                onChange={event => setMovieToSearch(event.target.value)}
            />
          </div>
          
          {isSearching && <div className={classes.centered}>Searching ...</div>}
            {!!movies?.movies.length &&
              movies?.movies.map(movie => (
                <Card variant='outlined' className={classes.card}>  
                    <CardActionArea onClick={() => history.push(`/movie/${movie.id}`)}>
                        <CardMedia 
                        component="img" 
                        image={movie.poster} 
                        title ={movie.title} 
                        />
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {movie.title}
                            </Typography>
                            <Typography>
                                {movie.year}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
              ))
              }       
      </div>
    );
};

export default Search;