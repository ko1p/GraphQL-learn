import {gql} from 'apollo-boost';

export const deleteMovieMutatuion = gql`
    mutation deleteMovie($id: ID) {
        deleteMovie(id: $id) {
            id
        }
    }
`;