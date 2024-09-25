import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

/**
 * Component for displaying the details of a specific person based on their ID.
 *
 * This component retrieves the ID from the URL query parameters and fetches
 * the corresponding person's details from a local `data.json` file.
 *
 * @component
 * @returns {JSX.Element} The rendered person details or a loading message if the data is not yet available.
 */
const PersonDetails = () => {
  // State to store the details of the person
  const [person, setPerson] = useState(null);
  // Router instance to extract the ID from the URL
  const router = useRouter();
  // Extract the ID from the URL query parameters
  const { id } = router.query;

  /**
   * Fetch data from the local `data.json` file and find the person by ID.
   * If the person is found, store their details in the `person` state.
   * If there's an error, log it in the console.
   *
   * @async
   * @function
   */
  const fetchData = async () => {
    try {
      // Fetch data from local JSON file
      const response = await axios.get('/data.json');
      // Find the person by ID in the list of people
      const personData = response.data.people.find(p => p.id === parseInt(id));
      // Update the state with the found person or null if not found
      setPerson(personData || null);
    } catch (error) {
      console.error("Erreur lors du chargement des données :", error);
    }
  };

  /**
   * useEffect hook to fetch data whenever the `id` parameter changes.
   * Ensures data is fetched when the component is mounted or when the `id` changes.
   */
  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  // If person data is not yet available, display a loading message
  if (!person) {
    return <div>Chargement des données...</div>;
  }

  return (
    <div>
      <h1>Détails de la personne</h1>
      <p>Nom : {person.firstName} {person.lastName}</p>
      <p>Email : {person.email}</p>
      <p>Téléphone : {person.phoneNumber}</p>
    </div>
  );
};

export default PersonDetails;