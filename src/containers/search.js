import React from "react";
import axios from "axios";
import { useRecoilState, useSetRecoilState } from "recoil";

import { titleState, resultState } from "../utils/state";

const Search = props => {
  const [title, setTitle] = useRecoilState(titleState);
  const setResult = useSetRecoilState(resultState);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${title}`
      );
      setResult([...data.filter(ele => ele.show.image)]);
      setTitle('')
      props.history.push("/result");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form_container">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search for a tv show"
          value={title}
          type={"text"}
          onChange={e => setTitle(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
