import gql from 'graphql-tag';
const  SEARCH_QUERY = gql`
query($search: String, $limit: Int, $skip: Int) {
    results: allMovies(filter: { search: $search }, limit: $limit, skip: $skip, orderBy:{released:-1}) {
      id
      title
      year
      covertImage
    }
  }
`;

export default SEARCH_QUERY;