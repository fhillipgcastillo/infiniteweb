import React, { Component } from "react";
import gql from "graphql-tag";
import graphql from "react-apollo";
import SEARCH_QUERY from "../../queries/search";

class SearchContainer extends Component {
  render() {
    return (
      <div className="row">
        <span>Search</span>
        <div className="row">
          {
            this.props.data 
            ? <span>Loading</span>
            : <span>Has Data</span>
          }
        </div>
      </div>
    );
  }
};
console.log(SEARCH_QUERY);
// export default graphql(SEARCH_QUERY)(SearchContainer);
export default SearchContainer;

// export default graphql(SEARCH_QUERY, {
//   options: { variables: { search: "", limit: 20, skip: 0 } }
// })(SearchContainer);