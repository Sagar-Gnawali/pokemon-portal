export type PokemonResult = {
  name: string;
  url: string;
};
export type PokemonResponse = {
  count: number;
  next: string;
  previous: string | null;
  results: PokemonResult[];
};

export interface PokemonStats {
  stats: {
    base_stat: number;
    effort: number;
    stat: PokemonResult;
  }[];
}
export interface SpritesTypes {
  sprites: {
    other: {
      dream_world: {
        front_default: string;
        front_female: string | null;
      };
    };
  };
}
export interface PokemonDetails extends PokemonStats, SpritesTypes {
  name: string;
  height: number;
  weight: number;
  id: number;
  species: PokemonResult;
}
export type SearchProps = {
  value: string;
  handleChange: (val: string) => void;
};
