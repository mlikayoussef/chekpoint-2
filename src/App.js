
import React, { Component } from "react";
import './App.css';
import Addmodal from './components/Addmodel';
import { Card, } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import MovieList from "./components/MovieList";
import Rating from "./components/rating"
class App extends Component {
  state = {
    movies: [
      {
        id: uuidv4(),
        name: "WandaVision",
        image: "https://www.themoviedb.org/tv/85271-wandavision?language=fr# ",
        description: "WandaVision combine des éléments de sitcom traditionnelle à ceux de l’Univers Cinématographique Marvel. Wanda Maximoff alias Scarlet Witch et Vision sont des super-héros, vivant dans une banlieue idéalisée mais commençant à soupçonner que tout n’est peut-être pas ce qu'il paraît être...",
        rating: 8.5

      },
      {
        id: uuidv4(),
        name: "Batwoman",
        image: "https://www.themoviedb.org/tv/89247-batwoman?language=fr#",
        description: "Kate Kane alias Batwoman arpente les rues de Gotham City, armée de son franc-parler et de son sens de la justice. Mais avant d'assumer pleinement son rôle, elle doit vaincre ses propres démons...",
        rating: 7.5

      },
      {
        id: uuidv4(),
        name: "Good Doctor ",
        image: "https://www.themoviedb.org/tv/85271-wandavision?language=fr#",
        description: "Atteint du syndrome d'Asperger, le chirurgien Shaun Murphy rejoint un prestigieux hôpital de San Jose, en Californie.Isolé, il éprouve des difficultés à s'intégrer à l'équipe.Mais en mettant son incroyable don au service de ses patients, ce jeune prodige finit par susciter l'admiration de ses collègues, même les plus sceptiques.",
        rating: 8.5,

      },
    ],
    searchTerm: "",
    rating: 1,
    inputData: ''

  }


  add = (newMovie) => {
    this.setState({
      movies: this.state.movies.concat(newMovie),
    });
  };

  getRating = (ValueRating) => {
    this.setState({
      rating: ValueRating,
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Movie app</h1>
        <input type="text" onChange={(e) => this.setState({ inputData: e.target.value })} />*
        <button onClick={() => { this.setState({ movies: this.state.movies.filter(item => item.name == this.state.inputData) }) }}>Search</button>
        <Rating rating={(R) => this.getRating(R)} />
        <MovieList
          search={this.state.searchTerm}
          movies={this.state.movies} />
        <Addmodal addMovie={(newMovie) => this.add(newMovie)} />

      </div>
    );

  }

}

export default App;
