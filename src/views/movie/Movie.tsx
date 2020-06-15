import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import movieService, {IMovieByIdResponse} from '../../services/movies.service';
import { Card, makeStyles, CardMedia, CardContent, Typography } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        minWidth: '250px',
        alignItems: 'top',
        marginRight: 'auto',
        marginLeft: 'auto',
        maxWidth: 1500,
        marginBottom: 50,
        marginTop: 20,
        backgroundColor: "#424242",
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
    },
    media: {
        width: 500,
        padding: 10, 
    },
    ratings: {
      paddingLeft: 50,
    }


})

const Movie = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState<IMovieByIdResponse>();
    const classes = useStyles();
    useEffect(() => {
        movieService.searchById(id).then(resp => {
            setMovie(resp)
        })
    }, [id])
    const splitstr = movie?.Actors.split(",")

    return(
      <Card className={classes.root} raised>
          <CardMedia
            className={classes.media}
            component="img"
            image={movie?.Poster}
            title={movie?.Title}
          />
          <CardContent >
          <Typography component="h2" variant="h2">
            {movie?.Title}
          </Typography>
          <Typography >
            Released: {movie?.Released}
          </Typography>
          <Typography>
            Genre: {movie?.Genre}
          </Typography>
          <Typography>
            Plot: {movie?.Plot}
          </Typography>
          <Typography>
            Actors: {splitstr?.map(actor =>(
              <Typography className={classes.ratings}>
                {actor}
              </Typography>
            ))}
          </Typography>
          <Typography>
            Ratings: {movie?.Ratings.map(rate =>(
              <Typography className={classes.ratings}>
                {rate.Source} {rate.Value}
              </Typography>
            ))}
          </Typography>
        </CardContent>
      </Card>
    );
};


export default Movie