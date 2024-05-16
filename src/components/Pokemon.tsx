import { useState, useMemo } from "react";
import { LoadingIndicator } from "./LoadingIndicator";
import { Card } from "./Card";
import { useInfiniteQuery } from "@tanstack/react-query";
import { BASE_URL } from "../utils/constants";
import { createFuzzySearchPattern } from "../utils/search";
import Search from "./Search";
import { fetchPokemons } from "./services";
import { useScrollEnd } from "../utils/hooks";

const Pokemon = () => {
  const [search, setSearch] = useState("");
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["pokemons"],
    queryFn: (params) => fetchPokemons(params.pageParam),
    initialPageParam: `${BASE_URL}/?offset=0&limit=100`,
    getNextPageParam: (lastPage) => lastPage.next,
    getPreviousPageParam: (firstPage) => firstPage.previous,
  });

  const pokemons = useMemo(() => {
    const items = data?.pages?.map((page) => page.results ?? [])?.flat() ?? [];
    if (!search) return items;

    const searchPattern = createFuzzySearchPattern(search.toLowerCase());

    return items.filter((item) => searchPattern.test(item.name.toLowerCase()));
  }, [search, data]);

  const handleSearch = (query: string) => {
    setSearch(query);
  };

  useScrollEnd(() => {
    if (!isFetching && hasNextPage) {
      fetchNextPage();
    }
  });

  return (
    <div className="card">
      <Search handleChange={handleSearch} value={search} />
      {isLoading ? (
        <LoadingIndicator displayMessage="Loading..." />
      ) : (
        <div className="card_wrapper">
          {pokemons.map((dt) => (
            <Card key={dt.name} pokemon={dt} />
          ))}
        </div>
      )}
      {isFetchingNextPage && <LoadingIndicator displayMessage={"Loading..."} />}
    </div>
  );
};

export default Pokemon;
