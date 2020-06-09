import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import movieService, {IMovieByIdResponse} from '../../services/movies.service';
import { Card, makeStyles, CardMedia, CardContent, Typography } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        minWidth: '250px',
        alignItems: 'center',
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


})

const Movie = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState<IMovieByIdResponse>();
    const classes = useStyles();
    useEffect(() => {
        movieService.searchById(id).then(resp => {
            setMovie(resp)
        })
    })





    return(
      <Card className={classes.root} raised>
          <CardMedia
            className={classes.media}
            component="img"
            image={movie?.Poster}
            title={movie?.Title}
          />
          <CardContent >
          <Typography component="h5" variant="h5">
            {movie?.Title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
          </Typography>
        </CardContent>
      </Card>
    );
};


export default Movie