import { Link } from "react-router-dom";
const CountryCard = (props) => {
  const { country, population, flag, alt, region, capital } = props;
  return (
    <Link to={country} className="">
      <div className="h-full rounded bg-gray-50 p-3 pb-9 shadow-md dark:bg-gray-800 lg:w-[264px]">
        <img
          className="mb-4 h-40 w-full rounded-md"
          src={flag}
          alt={alt}
          loading="lazy"
        />
        <h2 className="mb-4 ml-3 text-lg font-extrabold">{country}</h2>
        <div className="ml-3 flex flex-col gap-2">
          <p>
            <span className="font-semibold">Population: </span>
            <span className="font-light">{population}</span>
          </p>
          <p>
            <span className="font-semibold">Region: </span>
            <span className="font-light">{region}</span>
          </p>
          <p>
            <span className="font-semibold">Capital: </span>
            <span className="font-light">{capital}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};
export default CountryCard;
