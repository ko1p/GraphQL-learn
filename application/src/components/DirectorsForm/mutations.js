import {gql} from 'apollo-boost';

export const addDirectorMutatuion = gql`
    mutation addDirector($name: String!, $age: Int!) {
        addDirector(name: $name, age: $age) {
            name
        }
    }
`;

export const updateDirectorMutatuion = gql`
    mutation updateDirector($id: ID, $name: String!, $age: Int!) {
        updateDirector(id: $id, name: $name, age: $age) {
            name
        }
    }
`;