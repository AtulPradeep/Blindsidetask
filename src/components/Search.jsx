import React, { useState}  from "react";

const Search = ({onFormSubmit})=> {
  const [term,setTerm] = useState('');

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const onSearchFormSubmit = (event) => {
    event.preventDefault();
    //callback from parent
    onFormSubmit(term);
  };
    return (
      <>
        <form onSubmit={onSearchFormSubmit}>
          <div className="form-group">
            <input
              type="search"
              className="form-control"
              placeholder="Search"
              value={term}
              onChange={onInputChange}
            />
          </div>
        </form>
      </>
    );
  }


export default Search;
