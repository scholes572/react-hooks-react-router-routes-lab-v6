import { useEffect, useState } from "react";
import NavBar from '../components/NavBar'

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/directors")
      .then((response) => response.json())
      .then((directorData) => setDirectors(directorData));
  }, []);

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Director info here! */}
        <h1>Directors Page</h1>
        {directors.map(director => (
          <article key={director.id}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map(movie => (
                <li key={movie}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
};

export default Directors;