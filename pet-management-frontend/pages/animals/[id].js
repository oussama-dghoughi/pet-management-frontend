import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

/**
 * Component for displaying details of a specific animal.
 *
 * This component fetches the animal data from a local `data.json` file using
 * the ID from the URL. If the animal data is found, it displays the animal's
 * details such as name, date of birth, species, breed, color, and weight.
 * If the animal is not yet loaded, a loading message is displayed.
 *
 * @component
 * @returns {JSX.Element} The rendered details of the animal or a loading message.
 */
const AnimalDetail = () => {
  const router = useRouter();
  const { id } = router.query; // Retrieve the ID from the URL
  const [animal, setAnimal] = useState(null); // State to store the animal data

  /**
   * Fetch the animal data from the local `data.json` file based on the ID.
   *
   * @async
   * @function
   */
  useEffect(() => {
    const fetchAnimal = async () => {
      // Fetch data from the local JSON file
      const res = await fetch('/data.json');
      const data = await res.json();
      // Find the animal by ID
      const foundAnimal = data.animals.find(a => a.id === parseInt(id));
      // Update the state with the found animal
      setAnimal(foundAnimal);
    };

    if (id) fetchAnimal(); // Call fetchAnimal only if id is defined
  }, [id]);

  return (
    <div>
      {animal ? ( // Render the animal details if found
        <div>
          <h1>{animal.name}</h1>
          <p>Date de naissance: {animal.dateOfBirth}</p>
          <p>Espèce: {animal.species}</p>
          <p>Race: {animal.breed}</p>
          <p>Couleur: {animal.color}</p>
          <p>Poids: {animal.weight}g</p>
        </div>
      ) : (
        <p>Loading...</p> // Show loading message if animal data is not yet available
      )}
    </div>
  );
};

export default AnimalDetail;