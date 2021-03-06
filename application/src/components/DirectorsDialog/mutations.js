import {gql} from 'apollo-boost';

export const deleteDirectorMutatuion = gql`
    mutation deleteDirector($id: ID) {
        deleteDirector(id: $id) {
            id
        }
    }
`;