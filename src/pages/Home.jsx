import SearchInput from "../components/SearchInput";
import RegionMenu from "../components/RegionMenu";
import CountryList from "../components/CountryList";
import ShowMessages from "../components/ShowMessages";
import { useFetchData } from "../hooks/useFetchData";
const Home = () => {
  const { result, setFilteredList, filteredList, isError, isLoading } =
    useFetchData();

  return (
    <div className="container mx-auto px-5 md:px-0">
      {isError && <ShowMessages message="Something Went Wrong!" />}
      {isLoading && <ShowMessages message="The data is loading!" />}
      {!isError && !isLoading && (
        <div>
          <div className="flex flex-col md:flex-row">
            <SearchInput
              countriesList={result}
              setFilteredList={setFilteredList}
            />
            <RegionMenu
              countriesList={result}
              setFilteredList={setFilteredList}
            />
          </div>
          <CountryList data={filteredList} />
        </div>
      )}
    </div>
  );
};
export default Home;
