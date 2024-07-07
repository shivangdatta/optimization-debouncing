import React from 'react';
import useSWR from 'swr';
import { getSearchResult } from '../api/wikiApi';
import ListItem from './ListItem';
import Spinner from './Spinner';

const List = ({ searchTerm }) => {
  const { data, error } = useSWR(searchTerm, () => getSearchResult(searchTerm));
  console.log(data)
  // console.log(error)

  let content;
  if (!data) {
    content = <Spinner/>;
  } else if (error) {
    content = <p className='text-white'>{error.message}</p>;
  } else if (data?.data.query && data?.data?.query.pages) {
    const results = Object.values(data?.data?.query.pages);
    // console.log(results)
    content = (
      <ul className='p-4'>
        {results.map(result => (
          <ListItem key={result.pageid} result={result} />
        ))}
      </ul>
    );
  }

  return <>{content}</>;
};

export default List;
