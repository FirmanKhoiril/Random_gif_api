import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import Loading from "./Loading";

const api_key = import.meta.env.VITE_APP_GIF_API_KEY;

const Tag = () => {
  const [search, setSearch] = useState("dog");

  const fetchGif = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=${search}`;
    const res = axios.get(url);
    return res;
  };
  const { data, isError, isFetching, isLoading, error, refetch } = useQuery(["random", search], fetchGif, {
    refetchOnWindowFocus: false,
    enabled: false,
    staleTime: 1000,
  });

  const handleSubmit = () => {
    refetch();
  };

  const gif = data?.data?.data;

  if (isError || error) return <div className="bg-black h-screen">error : {`error ${error}`}</div>;

  if (isLoading && isFetching) return <Loading />;

  return (
    <div className="w-auto md:w-1/2 p-2 bg-white/10">
      <div className="mb-4 flex flex-col items-center">
        <h1>Random {search} Gif</h1>
        <img src={gif?.images?.downsized_large?.url} alt={gif?.title} className="w-72 h-72 border-white/20 mt-1 border rounded-md" />
        <input className="mt-4 outline-none border focus:border-indigo-500 placeholder:text-slate-200 p-2 rounded-lg bg-white/20 " value={search} placeholder="Search Something..." onChange={(e) => setSearch(e.target.value)} />
        <button onClick={handleSubmit} className="px-3 py-2 mt-4 bg-black/10 hover:bg-white/20">
          Get Random Gif
        </button>
      </div>
    </div>
  );
};

export default Tag;
