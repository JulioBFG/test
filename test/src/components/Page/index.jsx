import Box from "@mui/material/Box";
import { useState } from "react";
import SearchBar from "../SearchBar";
import Pagination from '@mui/material/Pagination';


import { GiphyFetch } from "@giphy/js-fetch-api";

const Page = () => {
  const [query, setQuery] = useState("");
  const [incomingData, setIncomingData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1)

  const giphy = new GiphyFetch("pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa");

  function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  async function onSubmit() {
    const { data } = await giphy.search(query, {
      sort: "relevant",
      lang: "en",
      limit: "5",
      offset: pageNumber

    });
    setIncomingData(data)
    console.log(incomingData)
    return data;
  }

  const onInput = (e) => {
    setQuery(e.target.value);
    debounce(onSubmit(), 500);
  };

  const onPageChange = (e, p) =>{
    setPageNumber(5 * p)
    debounce(onSubmit(), 500);
  }

  
  return (
    <Box>
      <SearchBar onChange={onInput} />
      <div>
        {incomingData.map((singleData) => {
          const preview = singleData.images.fixed_width.url
          return (
            <img key={singleData.key} src={preview}/>
          )
        })}
        
      </div>
      <Pagination count={10} onChange={onPageChange}/>
    </Box>
  )
};

export default Page;
