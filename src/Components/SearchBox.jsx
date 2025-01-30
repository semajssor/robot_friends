import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
   return (
      <div className="pa2">
         <input
            className="pa3 br3 ba b--gold bg-washed-red shadow-5"
            type="search"
            placeholder="search robots"
            onChange={searchChange}
         />
      </div>
         
      
   );
}

export default SearchBox;