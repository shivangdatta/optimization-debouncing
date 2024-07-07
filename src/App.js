import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import List from './components/List';
import useDebounce from './hooks/useDebounce';

function App() {
  const [searchVal, setSearchVal] = useState('')
  const debouncedSearchValue = useDebounce(searchVal, 650)

  return (
    <div className='p-8  min-h-screen bg-black text-white'>
      <SearchBar searchVal={searchVal} setSearchVal={setSearchVal} />
      <div>
        <List searchTerm={debouncedSearchValue} />
      </div>
    </div>
  );
}

export default App;
