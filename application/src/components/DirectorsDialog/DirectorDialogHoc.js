import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { deleteDirectorMutatuion } from './mutations';
import { directorsQuery } from '../DirectorsTable/queries';

const withGraphqlDelete = graphql(deleteDirectorMutatuion, {
    props: ({ mutate }) => ({
        deleteDirector: id => mutate({
            variables: id,
            refetchQueries: [{ query: directorsQuery }]
        })
    })
})

export default compose(withGraphqlDelete);