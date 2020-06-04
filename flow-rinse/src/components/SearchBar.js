import React from 'react';
import {InputGroup,Button,FormControl} from 'react-bootstrap';
import LogoSearch from '../assets/img/icon-search.svg';
import styled from 'styled-components';
// import ReactAutocomplete from 'react-autocomplete';
import Autosuggest from 'react-autosuggest';

const SearchBarWrapper = styled.div`
    width: 19.375em;
`;

// const SearchBar = (props) => {
//     return(
//         <SearchBarWrapper>
//             <InputGroup className="mb-3">
//                 <FormControl
//                 placeholder="Search and Add project"
//                 aria-label="Search box"
//                 aria-describedby="basic-addon2"
//                 className="border-0"
//                 />
//                 <InputGroup.Append className="m-0">
//                     <Button variant="outline-secondary" className="border-0 btn-input-combine"><img src={LogoSearch} /></Button>
//                 </InputGroup.Append>
//             </InputGroup>
//         </SearchBarWrapper>
//     );
// }

// Imagine you have a list of languages that you'd like to autosuggest.
  const newlang = [
    {
      name: '2Dam Creative',
      id: 1
    },
    {
      name: 'OET',
      id: 2
    },
    {
        name: 'TSOT',
        id: 3
      },
      {
        name: 'TSOT 36 Carrington',
        id: 4
      }
  ];
  
  // Teach Autosuggest how to calculate suggestions for any given input value.
  const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
  
    return inputLength === 0 ? [] : newlang.filter(lang =>
      lang.name.toLowerCase().slice(0, inputLength) === inputValue
    );
  };
  
  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  const getSuggestionValue = suggestion => suggestion.name;
  
  // Use your imagination to render suggestions.
  const renderSuggestion = suggestion => (
    <div>
      {suggestion.name}
      {suggestion.id}
    </div>
  );
  
  class SearchBar extends React.Component {
    constructor() {
      super();
  
      // Autosuggest is a controlled component.
      // This means that you need to provide an input value
      // and an onChange handler that updates this value (see below).
      // Suggestions also need to be provided to the Autosuggest,
      // and they are initially empty because the Autosuggest is closed.
      this.state = {
        value: '',
        suggestions: [],
        selectedValue: {name: '',id: ''}
      };
    }
  
    // onChange = (event, { newValue }) => {
    //   this.setState({
    //     value: newValue
    //   });
    //   console.log('onchange ' + newValue)
    // };

    onChange = (evt, {newValue}) => {
        this.setState({
          value: newValue
        }, () => {
          let hasValue = newlang.find(lang => lang.name === newValue) 
          if (!!hasValue) {
            this.setState({
              selectedValue: hasValue
            })
          }
        })
    }
  
    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    onSuggestionsFetchRequested = ({ value }) => {
      this.setState({
        suggestions: getSuggestions(value)
      });
    //   console.log(getSuggestions(value))
    };
  
    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested = () => {
      this.setState({
        suggestions: []
      });
    };
  
    render() {
      const { value, suggestions } = this.state;
  
      // Autosuggest will pass through all these props to the input.
      const inputProps = {
        placeholder: 'Type a programming language',
        value,
        onChange: this.onChange
      };
  
      // Finally, render it!
      return (
          <>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
        value: {this.state.value}
        <br/>
        name: {this.state.selectedValue.name}
        <br/>
        id: {this.state.selectedValue.id}
        </>
      );
    }
  }

export default SearchBar;