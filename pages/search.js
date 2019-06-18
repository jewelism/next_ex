import { PureComponent } from 'react';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import TopNav from '../components/Nav/TopNav';
import Icon from '../components/Icon';

import '../styles/search.scss';
import TopNavBack from '../components/Nav/TopNavBack';

class Search extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: '',
      searchResultList: [],
      popularList: [],
      recentList: [],
    };
    this.$search = new Subject();
  }

  onChangeSearchInput = e => {
    const searchInput = e.target.value;
    this.setState({ searchInput });
    this.$search.next(searchInput);
  }

  handleSearchInput = () => this.$search
    .pipe(debounceTime(400))
    .subscribe(searchInput => {
      console.log('search:', searchInput);
      //call api
    });

  getRecentSearchList = () => {
    const storageRecentList = localStorage.getItem('recentSearchList') || [];
    this.setState({ recentList: storageRecentList });
  };

  componentDidMount() {
    this.getRecentSearchList();
    this.handleSearchInput();
  }

  render() {
    const {onChangeSearchInput} = this;
    const {searchInput, searchResultList, popularList, recentList} = this.state;
    const noSearchResult = searchInput && !searchResultList.length;
    return (
      <div>
        <TopNav left={<TopNavBack path="/"/>} center="Search" right=" " />
        <div>
          <Icon>btn-search</Icon>
          <input value={searchInput} onChange={onChangeSearchInput} placeholder="Search..." />
          {noSearchResult ? 
          <div className="search-no-result">no result</div>
          :
          searchResultList.map(result => <div key={result}>{result}</div>)}
        </div>
        <div>Popular</div>
        <div>
          {popularList.map(po => <span key={po}>{po}</span>)}
        </div>
        <div>Recent Search</div>
        <div>
          {recentList.map(re => <span key={re}>{re}</span>)}
        </div>
      </div>
    );
  }
}

export default Search;