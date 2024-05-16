import { useLocation } from "react-router-dom";
import { PokemonDetails } from "./types";
import fallbackImg from "./assets/fallback.png";

const Details = () => {
  const {
    state: { data },
  }: { state: { data: PokemonDetails } } = useLocation();
  return (
    <div className="details_wrapper">
      <div>
        <img
          className="details_image"
          src={data.sprites?.other?.dream_world?.front_default ?? fallbackImg}
          alt={data.name}
        />
      </div>
      <div className="details_bio">
        <b>Bio</b>
        <div>
          <p>Id: #{data?.id}</p>
          <p>Genus: {data.species?.name}</p>
          <p>Height: {data.height} m</p>
          <p>Weight: {data.weight} kg</p>
        </div>
      </div>
      <div className="details_stats">
        <b>Stats</b>
        <div>
          {data?.stats?.map((it) => {
            return (
              <p key={it.stat.name}>
                {it.stat.name}: {it.base_stat}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Details;
