import './style.scss';
import FilterPanel from '../../components/Home/FilterPanel'
import List from '../../components/Home/List'
import SearchBar from '../../components/Home/SearchBar'
import { dataList } from '../../constants';
import { filterItemsData, filterPriceRangeData, filterRatingsData } from '../../constants';
import { useEffect, useState } from 'react';

const Home = () => {

  const [list, setList] = useState(dataList);
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState('');

  const [filterItems, setFilterItems] = useState(filterItemsData)
  const [filterPriceRange, setFilterPriceRange] = useState(filterPriceRangeData)
  const [filterRatings, setFilterRatings] = useState(filterRatingsData)

  const handleChangeItemsChecked = (id: number) => {
    const filterListState = filterItems;
    const changeCheckedCuisines = filterListState.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setFilterItems(changeCheckedCuisines);
  };
  const handleChangePriceChecked = (id: number) => {
    const filterListState = filterPriceRange;
    const changeCheckedCuisines = filterListState.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setFilterPriceRange(changeCheckedCuisines);
  };
  const handleChangeRatingsChecked = (id: number) => {
    const filterListState = filterRatings;
    const changeCheckedCuisines = filterListState.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setFilterRatings(changeCheckedCuisines);
  };

  const applyFilters = () => {
    let updatedList = dataList;

    let CheckedFilters = filterItems
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    let CheckedFiltersRating = filterRatings
      .filter((item) => item.checked)
      .map((item) => item.label);

    let CheckedFiltersPrice = filterPriceRange
      .filter((item) => item.checked)
      .map((item) => item.label);

    if (CheckedFilters.length) {
      updatedList = updatedList.filter((item) => {
        return CheckedFilters.includes(item.label.toLowerCase())
      });
    }
    if (CheckedFiltersRating.length) {
      updatedList = updatedList.filter((item) => {
        return CheckedFiltersRating.includes(item.rating)
      });
    }
    if (CheckedFiltersPrice.length) {
      const minPrice = CheckedFiltersPrice[0];

      updatedList = updatedList.filter(
        (item) => minPrice === 500 ? item.price <= 500 : (item.price >= 1000 && item.price <= 3000)
      );

      updatedList = updatedList.filter(
        (item) => minPrice >= 1000 ? (item.price >= 1000 && item.price <= 3000) : item.price <= 500
      );
    }

    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().trim().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }
    setList(updatedList);

    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  }

  const changePassword = async () => {
    console.log('first');
  };


  const handleInputChange = async (event: any) => {
    if (event.key === 'Enter') {
      await changePassword();
    }
  }

  useEffect(() => {
    applyFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterItems, filterPriceRange, filterRatings, searchInput]);


  return (
    <div className='home'>
      <div className='w-full flex justify-center'>
        <div className='mt-10 mb-5 flex justify-center text-center'>
          <SearchBar
            styles='border-gray-400'
            value={searchInput}
            changeInput={(e: any) => setSearchInput(e.target.value)}
            handleInputChange={handleInputChange}
          />
          <h1 className="absolute top-14 right-1 md:right-10 font-bold text-lg md:text-2xl tracking-widest text-gray-500">Zevi</h1>
        </div>
      </div>
      <div className='home_panelList-wrap'>
        <div className='home_panel-wrap w-[150px] p-2 md:pl-4 md:w-[280px] md:block'>
          <h1 className='text-xs sm:text-md md:text-xl font-semibold uppercase mb-2 ml-3'>Search Results</h1>
          <FilterPanel
            topLabel="Brand"
            filterItems={filterItems}
            changeChecked={handleChangeItemsChecked}
          />
          <FilterPanel
            topLabel="Price Range"
            filterItems={filterPriceRange}
            changeChecked={handleChangePriceChecked}
          />
          <FilterPanel
            topLabel="Ratings"
            filterItems={filterRatings}
            changeChecked={handleChangeRatingsChecked}
          />
        </div>
        <div className='home_list-wrap'>
          <List list={list} resultsFound={resultsFound} />
        </div>
      </div>
    </div>
  )
}

export default Home