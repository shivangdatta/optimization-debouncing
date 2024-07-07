import React from 'react';

const Item = ({ result }) => {
  const itemTextCol = (
    <div className="p-4 bg-black text-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <h2 className="text-xl font-semibold">
        <a href={`https://en.wikipedia.org/?curid=${result.pageid}`} target="_blank" rel="noopener noreferrer" className="hover:underline text-teal-400">
          {result.title}
        </a>
      </h2>
      <p className="mt-2 text-gray-400">{result.extract}</p>
    </div>
  );

  const content = result.thumbnail && result.thumbnail.source ? (
    <article className="flex items-center p-4 bg-black text-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out my-4">
      <img
        src={result.thumbnail.source}
        width={result.thumbnail.width}
        height={result.thumbnail.height}
        alt={result.title}
        className="w-16 h-16 rounded-lg mr-4 object-cover"
      />
      {itemTextCol}
    </article>
  ) : (
    <article className="p-4 bg-black text-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out my-4">
      {itemTextCol}
    </article>
  );

  return content;
};

export default Item;
