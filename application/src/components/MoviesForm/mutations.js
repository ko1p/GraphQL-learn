import {gql} from 'apollo-boost';

export const addMovieMutatuion = gql`
    mutation addMovie($name: String!, $genre: String!, $watched: Boolean!, $rate: Int, $directorId: ID) {
        addMovie(name: $name, genre: $genre, watched: $watched, rate: $rate, directorId: $directorId) {
            name
        }
    }
`;