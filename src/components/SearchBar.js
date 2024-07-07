import React from 'react'
import { FaSearch } from 'react-icons/fa'
const SearchBar = ({searchVal , setSearchVal}) => {

  return (
    <div>
        <label htmlFor='searchbar' className='text-gray-200 font-light flex'>
            <input
                id='searchbar'
                className='p-3 border border-white bg-black w-full text-white'
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                placeholder='Search'
            />
            <button className='text-white p-3'>
                <FaSearch/>
            </button>
        </label>
    </div>
  )
}

export default SearchBar