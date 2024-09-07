import { lazy, Suspense } from "react";
import ShowMessages from "./ShowMessages";
import CountryCard from "./CountryCard";
const EmptySearch = lazy(() => import("../components/EmptySearch"));

const CountryList = ({ data }) => {
  return (
    <div className="mt-8 grid grid-cols-1 justify-between gap-y-12 md:mt-12 md:grid-cols-[repeat(2,minmax(0,_auto))] md:gap-x-[70px] lg:grid-cols-[repeat(3,minmax(0,_auto))] lg:gap-y-[70px] xl:grid-cols-[repeat(4,minmax(0,_auto))]">
      {data && data.length ? (
        data.map((info) => (
          <CountryCard
            key={info.name.official}
            country={info.name.common}
            population={info.population}
            flag={info.flags.svg}
            alt={info.flags.alt}
            region={info.region}
            capital={info.capital}
          />
        ))
      ) : (
        <Suspense fallback={<ShowMessages message="Loading..." />}>
          <EmptySearch />
        </Suspense>
      )}
    </div>
  );
};
export default CountryList;
