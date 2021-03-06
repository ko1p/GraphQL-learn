import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { deleteMovieMutatuion } from './mutations';
import { moviesQuery } from '../MoviesTable/queries';

const withGraphqlDelete = graphql(deleteMovieMutatuion, {
    props: ({ mutate }) => ({
        deleteMovie: id => mutate({
            variables: id,
            refetchQueries: [{ query: moviesQuery }]
        })
    })
})

export default compose(withGraphqlDelete);