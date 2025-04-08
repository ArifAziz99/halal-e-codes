import React, { useState} from "react";
import Card from "./card";

const data = [
  {
    number: 100,
    halal: "MASHBOUH",
    category: "colors",
    name: "Curcumin/Turmeric",
    picture:"🐷",
    origin: "Might be from pork origin",
    color: "bg-yellow-600",
    colortxt: "text-yellow-600",
    description: "Halal. Natural dye that is obtained from the extract of plants from the borage family Alkanna tinctoria that asr found in the south of France",
    approval: "Approved in EU, Approved in US"
  },
  {
    number: 101,
    halal: "MASHBOUH",
    category: "colors",
    name: "Riboflavin(Vitamin B2)",
    picture:"🐷",
    origin: "Might be from pork origin",
    color: "bg-yellow-600",
    colortxt: "text-yellow-600",
    description: "Mashbouh (Haram if from pork liver & kidney, Halal if 100% plant material)",
    approval: "Approved in EU, Approved in US"
   
  },
  {
    number: 102,
    halal: "MASHBOUH", 
    category: "colors",
    name: "Citric Acid",
    picture:"🐟",
    origin: "Might be from fish origin",
    color: "bg-yellow-600",
    colortxt: "text-yellow-600",
    description: "Adds a sour taste and acts as a preservative",
    approval: "Approved in US, Not approved in EU"
  },
  {
    number: 103,
    halal: "HALAL",
    category: "Colors",
    name: "Alkannin",
    picture:"🐠",
    origin: "From fish origin",
    color: "bg-green-700",
    colortxt: "text-green-700",
    description: "Halal. Natural dye that is obtained from the extract of plants from the borage family Alkanna tinctoria that asr found in the south of France",
    approval: "Not approved in EU, Not approved in US"
  },
  {
    number: 104,
    halal: "HARAM",
    category: "colors",
    name: "Citric Acid",
    picture:"🪳",
    origin: "From insect origin",
    color: "bg-red-700",
    colortxt: "text-red-700",
    description: "Adds a sour taste and acts as a preservative.",
    approval: "Approved in US, Not approved in EU",
  },
  {
    number: 105,
    halal: "HALAL",
    category: "colors",
    name: "Beet Red",
    picture:"🌿",
    origin: "From plant origin",
    color: "bg-green-700",
    colortxt: "text-green-700",
    description: "Halal. Natural dye that is obtained from the extract of plants from the borage family Alkanna tinctoria that asr found in the south of France",
    approval: "Not approved in EU, Not approved in US"
  },
  {
    number: 106,
    halal: "HALAL",
    category: "colors",
    name: "Carminic Acid",
    picture:"🍃",
    origin: "From plant origin",
    color: "bg-green-700",
    colortxt: "text-green-700",
    description: "Halal. Natural dye that is obtained from the extract of plants from the borage family Alkanna tinctoria that asr found in the south of France",
    approval: "Not approved in EU, Not approved in US"
  },
  {
    number: 107,
    halal: "HALAL",
    category: "colors",
    name: "Carminic Acid",
    picture:"🍃",
    origin: "From plant origin",
    color: "bg-green-700",
    colortxt: "text-green-700",
    description: "Halal. Natural dye that is obtained from the extract of plants from the borage family Alkanna tinctoria that asr found in the south of France",
    approval: "Not approved in EU, Not approved in US"
  },
  {
    number: 108,
    halal: "HALAL",
    category: "colors",
    name: "Carminic Acid",
    picture:"🍃",
    origin: "From plant origin",
    color: "bg-green-700",
    colortxt: "text-green-700",
    description: "Halal. Natural dye that is obtained from the extract of plants from the borage family Alkanna tinctoria that asr found in the south of France",
    approval: "Not approved in EU, Not approved in US"
  },
  {
    number: 109,
    halal: "HALAL",
    category: "colors",
    name: "Carminic Acid",
    picture:"🍃",
    origin: "From plant origin",
    color: "bg-green-700",
    colortxt: "text-green-700",
    description: "Halal. Natural dye that is obtained from the extract of plants from the borage family Alkanna tinctoria that asr found in the south of France",
    approval: "Not approved in EU, Not approved in US"
  },
  {
    number: 110,
    halal: "HALAL",
    category: "colors",
    name: "Carminic Acid",
    picture:"🍃",
    origin: "From plant origin",
    color: "bg-green-700",
    colortxt: "text-green-700",
    description: "Halal. Natural dye that is obtained from the extract of plants from the borage family Alkanna tinctoria that asr found in the south of France",
    approval: "Not approved in EU, Not approved in US"
  },

  {
    number: 111,
    halal: "HALAL",
    category: "colors",
    name: "Carminic Acid",
    picture:"💀",
    origin: "Might be unsafe",
    color: "bg-green-700",
    colortxt: "text-green-700",
    description: "Halal. Natural dye that is obtained from the extract of plants from the borage family Alkanna tinctoria that asr found in the south of France",
    approval: "Not approved in EU, Not approved in US"
  },
  {
    number: 112,
    halal: "MASHBOUH", 
    category: "colors",
    name: "Citric Acid",
    picture:"☠️",
    origin: "Unsafe",
    color: "bg-yellow-600",
    colortxt: "text-yellow-600",
    description: "Adds a sour taste and acts as a preservative",
    approval: "Approved in US, Not approved in EU"
  },
  {
    number: 113,
    halal: "HALAL",
    category: "colors",
    name: "Carminic Acid",
    picture:"🍷",
    origin: "Contain alcohal",
    color: "bg-green-700",
    colortxt: "text-green-700",
    description: "Halal. Natural dye that is obtained from the extract of plants from the borage family Alkanna tinctoria that asr found in the south of France",
    approval: "Not approved in EU, Not approved in US"
  },
  {
    number: 114,
    halal: "HALAL",
    category: "colors",
    name: "Carminic Acid",
    picture:"💀🥩",
    origin: "Might be unsafe, Might be from animal origin",
    color: "bg-green-700",
    colortxt: "text-green-700",
    description: "Halal. Natural dye that is obtained from the extract of plants from the borage family Alkanna tinctoria that asr found in the south of France",
    approval: "Not approved in EU, Not approved in US"
  },

  {
    number: 115,
    halal: "HALAL",
    category: "colors",
    name: "Carminic Acid",
    picture:"🥩",
    origin: "From plant origin",
    color: "bg-green-700",
    colortxt: "text-green-700",
    description: "Halal. Natural dye that is obtained from the extract of plants from the borage family Alkanna tinctoria that asr found in the south of France",
    approval: "Not approved in EU, Not approved in US"
  },
  {
    number: 116,
    halal: "HALAL",
    category: "colors",
    name: "Carminic Acid",
    picture:"🍺",
    origin: "May contain alcohal",
  
    description: "Halal. Natural dye that is obtained from the extract of plants from the borage family Alkanna tinctoria that asr found in the south of France",
    approval: "Not approved in EU, Not approved in US"
  },

];

const App: React.FC = () => {
  const [search, setSearch] = useState("");

  const filteredData = data.filter((item) => {
    const query = search.toLowerCase();

    return (
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.halal.toLowerCase().includes(query) ||
      item.number.toString().includes(query) //
    );
  });

  return (
    <div className="min-h-screen">
      <div className="max-w-xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Search by name, description, category, or number..."
          className="w-full p-3 text-black rounded-xl bg-gray-50 shadow-sm focus:outline-none focus:bg-gray-100 focus:ring-2 focus:ring-gray-300 hover:bg-gray-100 transition duration-200"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <Card
          key={item.number}
          number={item.number}
          halal={item.halal}
          category={item.category}
          name={item.name}
          picture={item.picture}
          origin={item.origin}
          color={item.color}
          colortxt={item.colortxt}
          description={item.description}
          approval={item.approval}
            />
          ))
        ) : (
          <p className="text-center text-xl col-span-full text-gray-500">
            No results found.
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
