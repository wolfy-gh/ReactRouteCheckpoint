import React, { useState } from 'react';
import './App.css';
import List from './components/list/Movielist'
import Filter from './components/filter/Filter'
import { Container } from 'react-bootstrap';
import Add from './components/add/Add'
import MovieData from './data'
import Movie from './components/trailer/Trailer'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'


function App() {

  const [movies, setMovies] = useState(MovieData)
  function AddMovie(newMovie) {
    setMovies(prevMovies => {
      return [...prevMovies, newMovie]
    })
  }
  const [search, setSearch] = useState("")
  const [rateSearch, setRateSearch] = useState("")
  
  var newId = movies.length +1

  return (
    <Router>
      <div className="App">
        <div className="header">
          <Link to="/" style={{color:'black', textDecoration:"none"}} ><h3>Movie App</h3></Link>
          <div className="add">
            <Add onAdd={AddMovie} newId={newId} />
          </div>
          <Filter setSearch={setSearch} setRateSearch={setRateSearch} rateSearch={rateSearch} />
          <span></span>
        </div>
        <Container  className="container" >
          <Switch>
            <Route path="/" exact render={() => <List movies={movies} rateSearch={rateSearch} search={search} />} />
            <Route path="/:id" render={(props) => <Movie movies={movies}{...props}/>} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
