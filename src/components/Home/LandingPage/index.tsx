import { useState } from "react";
import SearchBar from "../SearchBar";
import Card from "../../Common/Card.js";

const LandingPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [click, setClick] = useState(false);

  const redirect = async () => {
    window.location.href = "/search";
  };

  const handleInputChange = async (event: any) => {
    if (event.key === "Enter") {
      if (searchInput) {
        await redirect();
      }
    }
  };

  return (
    <div className="relative w-[100vw] h-[100vh]">
      <img
        onClick={() => setClick(false)}
        src="/images/landing.avif"
        className="w-[100vw] h-[100vh]"
        alt=""
      />
      <h1 className="absolute top-10 right-10 font-bold text-2xl tracking-widest text-gray-500">
        Zevi
      </h1>
      <div>
        <div
          onClick={() => setClick(!click)}
          className="absolute top-1/4 left-1/4"
        >
          <SearchBar
            styles="border-none"
            value={searchInput}
            changeInput={(e: any) => setSearchInput(e.target.value)}
            handleInputChange={handleInputChange}
          />
          {click && <Card setClick={setClick} />}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
