import SearchIcon from '@material-ui/icons/Search';

const SearchBar = ({ value, changeInput, styles, handleInputChange }: any) => (
  <div className={`border-[1px] ${styles} rounded-xl px-4 py-4 flex items-center bg-white`}>
    <input
      type='text'
      placeholder='Search'
      value={value}
      onChange={changeInput}
      onKeyDown={handleInputChange}
      className='outline-none flex-1 sm:w-[300px] md:w-[700px] font-semibold text-black placeholder:text-lg placeholder:font-semibold'
    />
    <SearchIcon className='mr-4 text-gray-400 w-8 h-8' />
  </div>
);

export default SearchBar;