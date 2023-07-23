import { useEffect, useState } from "react";

function useFetchData(url) {
  let [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const resData = await response.json();
      setData(resData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data;
}

export default useFetchData;
