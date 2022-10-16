export interface IMovieTypes {
  id: number;
  title: string;
  params: string;
}

export interface IDataMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const MovieTypes = [
  {
    id: 1,
    title: 'Now Playing',
    params: 'now_playing',
  },
  {
    id: 2,
    title: 'Popular',
    params: 'popular',
  },
  {
    id: 3,
    title: 'Top Rated',
    params: 'top_rated',
  },
  {
    id: 4,
    title: 'Upcoming',
    params: 'upcoming',
  },
];
