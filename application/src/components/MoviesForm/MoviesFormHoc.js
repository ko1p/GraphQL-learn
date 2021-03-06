import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { addMovieMutatuion, updateMovieMutatuion } from './mutations';
import { moviesQuery } from '../MoviesTable/queries';
import { directorsQuery } from './queries';

import { styles } from './styles';

const withGraphqlAdd = graphql(addMovieMutatuion, {
    props: ({ mutate }) => ({
        addMovie: movie => mutate({
            variables: movie,
            refetchQueries: [{ query: moviesQuery }]
        })
    })
})

const withGraphqlUpdate = graphql(updateMovieMutatuion, {
    props: ({ mutate }) => ({
        updateMovie: movie => mutate({
            variables: movie,
            refetchQueries: [{ query: moviesQuery }]
        })
    })
})

export default compose(withStyles(styles), withGraphqlAdd, withGraphqlUpdate, graphql(directorsQuery));
