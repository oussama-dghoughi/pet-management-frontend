import Link from 'next/link';
import NavBar from '../../components/NavBar';
import { useEffect, useState } from 'react';

/**
 * Component for displaying a list of people fetched from a local `data.json` file.
 *
 * This component renders a navigation bar at the top and displays a list of people.
 * Each person's details (first name, last name, email, and phone number) are shown
 * with a link to their respective detail page.
 *
 * @component
 * @returns {JSX.Element} The rendered list of people or a message indicating no people found.
 */
const People = () => {
  // State to store the list of people
  const [people, setPeople] = useState([]);

  /**
   * Fetch data from the local `data.json` file and store the people in the state.
   *
   * @async
   * @function
   */
  useEffect(() => {
    const fetchData = async () => {
      // Fetch data from the local JSON file
      const res = await fetch('/data.json');
      const data = await res.json();
      // Update the state with the list of people
      setPeople(data.people);
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Render the navigation bar */}
      <NavBar />

      <h1>Liste des personnes</h1>
      <ul>
        {/* If there are people, render their details; otherwise, show a fallback message */}
        {people.length > 0 ? (
          people.map(person => (
            <li key={person.id}>
              {/* Link to the individual person's details page */}
              <Link href={`/people/${person.id}`}>
                <a>
                  {person.firstName} {person.lastName} - {person.email} - {person.phoneNumber}
                </a>
              </Link>
            </li>
          ))
        ) : (
          <li>Aucune personne trouvée.</li>
        )}
      </ul>
    </div>
  );
};

export default People;