import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {
    searchInput,
    categoryOptions,
    changeCategory,
    activeCategoryId,
    ratingsList,
    changeRating,
    activeRatingId,
  } = props

  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const {clearFilterButton} = props

  return (
    <div className="filters-group-container">
      {/* Replace this element with your code */}
      <div className="search-input-container">
        <input
          type="search"
          placeholder="Search"
          className="search-input"
          value={searchInput}
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>

      <h1 className="category-heading">Category</h1>

      <ul className="categories-list">
        {categoryOptions.map(eachData => (
          <li
            className="category-item"
            onClick={() => changeCategory(eachData.categoryId)}
            key={eachData.categoryId}
          >
            <p
              className={
                eachData.categoryId === activeCategoryId
                  ? 'category-name active-category-name'
                  : 'category-name'
              }
            >
              {eachData.name}
            </p>
          </li>
        ))}
      </ul>

      <h1 className="rating-heading">Rating</h1>
      <ul className="ratings-list ">
        {ratingsList.map(eachRating => (
          <li
            className="rating-item"
            key={eachRating.ratingId}
            onClick={() => changeRating(eachRating.ratingId)}
          >
            <img
              src={eachRating.imageUrl}
              alt={`rating ${eachRating.ratingId}`}
              className="rating-img"
            />
            <p
              className={
                eachRating.ratingId === activeRatingId
                  ? 'rating-img and-up '
                  : 'and-up'
              }
            >
              & up
            </p>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="clear-filters-btn "
        onClick={clearFilterButton}
      >
        Clear Filters
      </button>
    </div>
  )
}
export default FiltersGroup
