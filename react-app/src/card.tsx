import React from "react";

type CardProps = {
  number: number;
  color?: string;
  colortxt?: string;
  halal: string;
  category: string;
  name: string;
  picture: string;
  origin: string;
  description: string;
  approval: string;
};

const Card: React.FC<CardProps> = ({ number, color, colortxt, halal, category, name, picture, origin, description, approval }) => {
  return (
    <div className="bg-gradient-to-br from-white to-slate-100 border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 max-w-md w-full">
      <div className="flex items-center justify-between mb-4">
      <span className={`text-3xl px-3 py-1 rounded-full font-semibold shadow-sm ${color ?? "bg-gray-800 text-gray-100"}`}>
          E{number}
        </span>
        <h2 className={`text-3xl font-bold ${colortxt ?? "text-gray-800"}`}>{halal}</h2>
      </div>
      <p className="text-m text-gray-500">{category}</p><br/>
      <h2 className="text-m font-bold text-gray-800">{name}</h2><br/>
      <div className="flex items-center justify-center mb-4"> <p className="text-4xl text-gray-500 italic">{picture}</p>
      <p className="text-m text-gray-500 italic">{origin}</p><br/>
      </div>
      <p className="text-sm text-gray-700 mb-3">{description}</p><br/>
      <p className="text-sm text-gray-700 mb-3">{approval}</p>
    </div>
  );
};

export default Card;
