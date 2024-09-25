import Link from 'next/link';
import NavBar from '../../components/NavBar';
import { useEffect, useState } from 'react';

/**
 * Component for displaying a list of animals fetched from a local `data.json` file.
 *
 * This component renders a navigation bar at the top and displays a list of animals.
 * Each animal's details (name, species, breed, color, weight, and birth date) are shown
 * with a link to their respective detail page.
 *
 * @component
 * @returns {JSX.Element} The rendered list of animals or a message indicating no animals found.
 */
const Animals = () => {
  // State to store the list of animals
  const [animals, setAnimals] = useState([]);

  /**
   * Fetch data from the local `data.json` file and store the animals in the state.
   *
   * @async
   * @function
   */
  useEffect(() => {
    const fetchData = async () => {
      // Fetch data from the local JSON file
      const res = await fetch('/data.json');
      const data = await res.json();
      // Update the state with the list of animals
      setAnimals(data.animals);
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Render the navigation bar */}
      <NavBar />

      <h1>Liste des animaux</h1>
      <ul>
        {/* If there are animals, render their details; otherwise, show a fallback message */}
        {animals.length > 0 ? (
          animals.map(animal => (
            <li key={animal.id}>
              {/* Link to the individual animal's details page */}
              <Link href={`/animals/${animal.id}`}>
                <a>
                  {animal.name} - {animal.species} - {animal.breed} - {animal.color} - {animal.weight}g - Né le {animal.dateOfBirth}
                </a>
              </Link>
            </li>
          ))
        ) : (
          <li>Aucun animal trouvé.</li>
        )}
      </ul>
    </div>
  );
};

export default Animals;