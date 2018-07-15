import React from 'react';
import './SearchBar.css';



export class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    };
  }
  handleSortByChange(sortByOption){
    this.setState({sortBy: sortByOption})
  }
  handleTermChange(x){
this.setState({term: x.target.value});

  }
  handleLocationChange(y){
this.setState({location: y.target.value});
  }
  handleSearch(search){
this.searchYelp(this.state.term, this.state.location, this.state.sortBy);
search.preventDefault();
  }
  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>{sortByOption}</li>;
    });
  }
  getSortByClass(sortByOption){
    return this.state.sortBy == sortByOption ? 'active' : '';
  }
  searchYelp(term, location, sortBy){
    console.log(`Searching Yelp with ${term}, ${location}, and ${sortBy}.`);
  };

  render(){
    return (
      <div className="SearchBar">
  <div className="SearchBar-sort-options">
    <ul>
      {this.renderSortByOptions()}
    </ul>
  </div>
  <div className="SearchBar-fields">
    <input onChange={this.handleTermChange} placeholder="Search Businesses" />
    <input onChange={this.handleLocationChange} placeholder="Where?" />
  </div>
  <div className="SearchBar-submit" onClick={this.handleSearch}>
    <a>lets Go</a>
  </div>
</div>
);
  }
}
export default SearchBar;
