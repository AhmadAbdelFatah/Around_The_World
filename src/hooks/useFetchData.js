import { useState, useEffect } from "react";

export const useFetchData = (country) => {
    const [result, setResult] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if(country){
            getDataFromApi();
        }else{
            getDataFromLocalStorage();
        }
        }

            
    , []);

    const getDataFromApi = ()=>{
        let url = "https://restcountries.com/v3.1/all";
        setIsLoading(true);
        if(country){
            url = `https://restcountries.com/v3.1/name/${country}`
        }
            fetch(url)
            .then((response) => response.json())
            .then((data) => {
                if(country){
                    setResult(data[0]);
                }else{
                setResult(data);
                setFilteredList(data);
                localStorage.setItem('countries', JSON.stringify(data))

                }
            }).catch(()=>setIsError(true))
            .finally(()=>setIsLoading(false))
    }
    const getDataFromLocalStorage = ()=>{
        let data = JSON.parse(localStorage.getItem('countries'));
        if(data){
            setResult(data);
            setFilteredList(data);
        }else{
            getDataFromApi();
        }
    }

    return { result, setFilteredList, filteredList, isError, isLoading };
};
