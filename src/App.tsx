import "./App.css";
import { Random, Tag, Footer } from "./components";

function App() {
  return (
    <div className="w-full py-6 px-2 bg-gradient-to-br from-violet-500 via-sky-500 text-white to-indigo-500 h-full md:h-screen">
      <h3 className="text-center mb-1">Simple Website With Fetching Data From API Random Gif XD</h3>
      <div className="flex flex-col md:flex-row w-auto">
        <Random />
        <Tag />
      </div>
      <Footer />
    </div>
  );
}

export default App;
