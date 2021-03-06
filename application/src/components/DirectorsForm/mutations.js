import {gql} from 'apollo-boost';

export const addDirectorMutatuion = gql`
    mutation addDirector($name: String!, $age: Int!) {
        addDirector(name: $name, age: $age) {
            name
        }
    }
`;