import { ChangeEvent } from "react";
import { SearchProps } from "./types";
const Search = ({ value, handleChange }: SearchProps) => {
  return (
    <div className="align-center">
      <input
        type="text"
        value={value}
        placeholder="Enter pokemon name"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          handleChange(e.target.value.trim().toLocaleLowerCase());
        }}
      />
    </div>
  );
};

export default Search;
