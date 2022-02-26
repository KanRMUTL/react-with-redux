import React, { useEffect, useState } from 'react';
import MovieHook from 'utils/hooks/MovieHook';
import MovieDatabase from 'utils/services/MovieDatabase';
import { useParams, useLocation } from 'react-router-dom';

type UrlParams = {
  id: string;
};

function MovieDetail() {
  const { id } = useParams<UrlParams>();
  const movieDatabase = new MovieDatabase();
  const path = useLocation().pathname;
  const { movie, fetchMovieDetail } = MovieHook({ movieDatabase, path });
  useEffect(() => {
    fetchMovieDetail();
  }, [id]);
  return <div>moviedetail</div>;
}

export default MovieDetail;
