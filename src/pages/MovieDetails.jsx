// Para enlazar nuestra api a la pagina "MovieDetails"
import { useParams } from "react-router-dom"
import { get } from "../data/httpClient"
import { useEffect, useState } from "react"
import { getMovieImg } from "../utils/getMovieImg"
import "../pages/MovieDetails.css"

export function MovieDetails() {
    const {movieId} = useParams();
    //Para actualizar las peliculas y los generos
    const [movie,setMovie] = useState([]);
    const [generos,setGeneros] = useState([]);
    
    useEffect(()=>{
        get("/movie/" + movieId).then((data)=>{
            setMovie(data);
            setGeneros(data.genres[0])
            console.log(data)
        });
    },[movieId]);

    const imageUrl = getMovieImg(movie.poster_path,500);

    return(
    <div className="detailsContainer">
        <img className="col movieImage" src={imageUrl} alt={movie.title}/>
        <div className="col movieDetails">
            <p className="title"><strong>Titulo: </strong>{movie.title}</p>
            <p><strong>Genero: </strong>{generos.name}</p>
            <p><strong>Descripccion: </strong>{movie.overview}</p>
        </div>
    </div>)
}
