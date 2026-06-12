import { useEffect, useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  const [data, setData] = useState([]);
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    const fetchMemes = async () => {
      const response = await fetch("https://meme-api.com/gimme/20");
      const json = await response.json();
      setData(json.memes ?? []);
    };

    fetchMemes();
  }, []);

  return (
    <div className="m-auto mt-5 w-[50%]">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          body={item.postLink || item.url}
          isOpen={index === openIndex}
          setIsOpen={() => {
            index === openIndex ? setOpenIndex(null) : setOpenIndex(index);
          }}
        />
      ))}
    </div>
  );
};

export default Accordion;