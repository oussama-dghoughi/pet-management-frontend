import { useEffect, useState } from 'react';
import Link from 'next/link';
import NavBar from '../components/NavBar'; // Ensure the path to NavBar is correct

/**
 * Home component for displaying lists of people and animals.
 *
 * This component fetches data from a local `data.json` file and displays
 * a list of people and a list of animals. Each item in the list is a link
 * that navigates to the detailed view of the respective person or animal.
 * A navigation bar is included at the top of the page.
 *
 * @component
 * @returns {JSX.Element} The rendered lists of people and animals with links.
 */
export default function Home() {
  const [people, setPeople] = useState([]); // State to store the list of people
  const [animals, setAnimals] = useState([]); // State to store the list of animals

  /**
   * Fetch data from the local `data.json` file.
   *
   * This function retrieves the people and animals data and updates
   * the state variables accordingly.
   *
   * @async
   * @function
   */
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data.json'); // Fetch data from the local JSON file
      const data = await res.json(); // Parse the JSON data
      setPeople(data.people); // Update the state with people data
      setAnimals(data.animals); // Update the state with animals data
    };

    fetchData(); // Call fetchData on component mount
  }, []);

  return (
    <div>
      {/* Adding the navigation bar */}
      <NavBar />

      <h1>Liste des personnes</h1>
      <ul>
        {people.length > 0 ? (
          people.map(person => (
            <li key={person.id}>
              <Link href={`/people/${person.id}`} legacyBehavior>
                <a>{person.firstName} {person.lastName} - {person.email} - {person.phoneNumber}</a>
              </Link>
            </li>
          ))
        ) : (
          <li>Aucune personne trouvée.</li> // Message if no people are found
        )}
      </ul>

      <h1>Liste des animaux</h1>
      <ul>
        {animals.length > 0 ? (
          animals.map(animal => (
            <li key={animal.id}>
              <Link href={`/animals/${animal.id}`} legacyBehavior>
                <a>{animal.name} - {animal.species} - {animal.breed} - {animal.color} - {animal.weight}g - {animal.dateOfBirth}</a>
              </Link>
            </li>
          ))
        ) : (
          <li>Aucun animal trouvé.</li> // Message if no animals are found
        )}
      </ul>
    </div>
  );
}