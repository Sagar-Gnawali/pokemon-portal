import { useQuery } from "@tanstack/react-query";
import { PokemonResult } from "./types";
import { useNavigate } from "react-router-dom";
import fallbackImg from "./assets/fallback.png";
import { fetchPokemonDetails } from "./services";

export const Card = ({ pokemon }: { pokemon: PokemonResult }) => {
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["pokemon", pokemon.name],
    queryFn: () => fetchPokemonDetails(pokemon.name),
  });

  if (!data || isLoading) {
    //showing the shadow box/card for better UI experience
    return (
      <div className="card_shadow">
        <b className="card_shadow-id"></b>
        <img
          className="pokemon_shadow-image"
          src={fallbackImg}
          alt={`Pokemon`}
        />
        <p className="pokemon_shadow-name"></p>
      </div>
    );
  }
  const handleClick = () => {
    navigate(`details/${data.id}`, { state: { data } });
  };
  return (
    <>
      <div onClick={handleClick}>
        <b className="card_wrapper_id">{`#${data.id}`}</b>
        <img
          src={data.sprites.other.dream_world.front_default ?? fallbackImg}
          alt={`${data.name} Pokemon`}
        />
        <p>{data.name}</p>
      </div>
    </>
  );
};
