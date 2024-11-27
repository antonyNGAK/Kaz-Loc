import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cards from '../components/Cards';
import { useDataLocation } from './LocationContext';

const Gallery = () => {
  const { logements } = useDataLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const logementsPerPage = 9;

  // Calcul des logements à afficher
  const indexOfLastLogement = currentPage * logementsPerPage;
  const indexOfFirstLogement = indexOfLastLogement - logementsPerPage;
  const currentLogements = logements.slice(indexOfFirstLogement, indexOfLastLogement);

  // Nombre total de pages
  const totalPages = Math.ceil(logements.length / logementsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="home__gallery">
      {currentLogements.map((location) => (
        <article key={location.id}>
          <Link to={`/location/${location.id}`}>
            <Cards image={location.cover} title={location.title} price={location.price} />
          </Link>
        </article>
      ))}

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
