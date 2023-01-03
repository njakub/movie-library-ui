import imdbLogo from "../../assets/imdb.png";
import metacriticLogo from "../../assets/metacritic.png";
import rottenTomatoesLogo from "../../assets/rotten.png";
import bigYaks from "../../assets/bigYaks-orange.png";

function RatingsComponent({ rating }) {
  return (
    <div class="flex bg-white px-2 py-2 rounded">
      {rating?.imDb && (
        <div class="flex pr-">
          <img class="h-6 w-8 " src={imdbLogo} alt="IMDB" />
          {rating?.imDb}
        </div>
      )}
      {rating?.rottenTomatoes && (
        <div class="flex px-1">
          <img class="h-6 w-8 px-1" src={rottenTomatoesLogo} alt="RT" />
          {`${rating?.rottenTomatoes}%`}
        </div>
      )}
      {rating?.metacritic && (
        <div class="flex px-1">
          <img class="h-6 w-8 px-1" src={metacriticLogo} alt="MT" />
          {rating?.metacritic}
        </div>
      )}
      <div class="flex px-1">
        <img class="h-6 w-8 px-1" src={bigYaks} alt="BigYak" />
        {rating?.bigYak ? rating?.bigYak : "N/A"}
      </div>
    </div>
  );
}

export default RatingsComponent;
