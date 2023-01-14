import axios from "axios";
import { useQuery } from "react-query";
import Loading from "./Loading";

const api_key = import.meta.env.VITE_APP_GIF_API_KEY;

const Random = () => {
  const fetchGif = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`;
    const res = axios.get(url);
    return res;
  };
  const { data, isError, isFetching, isLoading, error, refetch } = useQuery("gif", fetchGif, {
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
    <div className="md:w-1/2 w-auto px-2 md:mb-0 mb-4 bg-white/10 mr-2">
      <div className="mb-4 flex flex-col items-center">
        <h1>Random Gif</h1>
        <img src={gif?.images?.downsized_large?.url} alt={gif?.title} className="w-72 h-72 border border-white/10 rounded-md" />
        <button onClick={handleSubmit} className="px-3 py-2 mt-4 bg-black/10 hover:bg-white/20">
          Get Gif
        </button>
      </div>
    </div>
  );
};

export default Random;
