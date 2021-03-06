import React from "react";
import useEntries from "../libs/useEntries";
import Entry from "./Entry";
import { cStyles } from "../styles/styles";

const Series = () => {
  const { isLoading, error, data } = useEntries();

  if (isLoading)
    return (
      <div className={cStyles.entryContainer}>
        <p className={cStyles.loading}>Loading ...</p>
      </div>
    );
  if (error)
    return (
      <div className={cStyles.entryContainer}>
        <p className={cStyles.loading}>Oops, something went wrong...</p>
      </div>
    );

  return (
    <div className={cStyles.entryContainer}>
      {data &&
        data
          .filter((serie) => serie.releaseYear >= 2010)
          .filter((serie) => serie.programType === "series")
          .sort((serieA, serieB) => serieA.title > serieB.title)
          .slice(0, 21)
          .map((serie) => (
            <Entry
              key={serie.title}
              title={serie.title}
              url={serie.images["Poster Art"].url}
              data-testid="entry"
            />
          ))}
    </div>
  );
};

export default Series;
