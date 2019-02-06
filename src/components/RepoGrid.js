import React from "react";
import Repo from "./Repos";
//import DropDown from './Components/DropDown';
import SortRadioButton from "./SortRadioButton";
import SearchBar from "./SearchBar";
import ContrastButton from './ContrastButton';
import axios from "axios";
import '../App.css';

class RepoGrid extends React.Component {
  constructor() {
    super();
    this.state = {
      repos: [],
      sort: "no",
      searchText: "",
      contrastMode: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // Get data for 50 repos
    axios
      .get(`https://api.github.com/users/ellamcmorrow/repos`)
      .then(res => {
        const repos = res.data;
        console.log(repos);
        this.setState({ repos });
      })

      .catch(err => {
        // GET failed, log the error
        console.log(err);
      });
  }
  handleChange(event) {
    // handle both of the <select> UI elements
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleClick(event) {
    // handle the toggle <button>
    const name = event.target.name;
    this.setState(prevState => ({
      [name]: !prevState[name]
    }));
  }

  render() {
    // if results are to be sorted, create a copy of the repo data and sort it,
    // otherwise just use the original data from the state
    const data =
      this.state.sort === "no"
        ? this.state.repos
        : [].concat(this.state.repos).sort((a, b) => {
            if (a.created_at < b.created_at) return 1;
            if (a.created_at > b.created_at) return -1;
            return 0;
          });

    // Generate unique repo cards for each repo
    // Each card needs a unique key, for our purposes we're using
    // name + image URL (not guaranteed to be unique, but sufficient for this)
    // Check the state of the inputs and skip cards not matching the
    // required nationality & gender & search text
    let repoList = data.map(repo => {
      const nameMatch = repo.name.startsWith(this.state.searchText);
      return nameMatch ? (
        <Repo name={repo.name} timeStamp={repo.created_at} description={repo.description} url={repo.html_url} key={repo.id} />
      ) : null;
    });

    return (
      <section className="section" style={{color:'white', backgroundColor:'#2b2b2b'}}>
          <h1 className="title" style={{color:'grey', marginLeft:'200px'}}>Github Repositories</h1>

        <div className="space" style={{color:'white'}}>
          <SortRadioButton
            handleChange={this.handleChange}
            checked={this.state.sort}
          />

          <SearchBar
            name="searchText"
            label="Search by name"
            value={this.state.searchText}
            handleChange={this.handleChange}
            placeholder={"Name of repository.."}
          />
          <div className="columns is-multiline" style={{color:'grey', marginLeft:'200px'}}>{repoList}</div>
        </div>
      </section>
    );
  }
}

export default RepoGrid;
