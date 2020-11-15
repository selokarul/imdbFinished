import { useContext } from "react";
import { MovieContext } from "../../App";

import { Card } from "../Card";
import { StyledCardList } from "./CardList.style";

export const CardList = () => {
  const { movieList, baseImageUrl } = useContext(MovieContext);

  return (
    <StyledCardList>
      {movieList?.map((movie, index) => (
        <Card
          key={index}
          title={movie.title}
          avg={movie.vote_average}
          poster_path={movie.poster_path}
          baseImageUrl={baseImageUrl}
        />
      ))}
    </StyledCardList>
  );
};
