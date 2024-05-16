import axios from "axios";
import { PokemonDetails, PokemonResponse } from "../types";
import { BASE_URL } from "../../utils/constants";

export const fetchPokemonDetails = async (name: string) => {
  return axios
    .get<PokemonDetails>(`${BASE_URL}/${name}`)
    .then((response) => response.data);
};
export const fetchPokemons = async (action: string) => {
  return axios.get<PokemonResponse>(action).then((response) => response.data);
};
