import { useEffect, useState} from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [memes, setMemes] = useState([]);
  const [showShimmer, setShowShimmer] = useState(true);


  useEffect(() => {
    fetchMemes();
  }, [])

  const fetchMemes = async () => {
    const data = await fetch("https://meme-api.com/gimme/20");
    const json = await data.json();
    setMemes(json.memes);
    setShowShimmer(false);
  }
  return (
    <div className="flex flex-wrap justify-center">
      {showShimmer ? (
        <Shimmer />
      ) : (
        memes.map((meme, i) => (
          <MemeCard key={i} data={meme}/>
        ))
      )}
    </div>
  )
}

export default Body