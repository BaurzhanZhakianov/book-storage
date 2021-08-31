import { Select } from '../select';
import { FC } from 'react';
type BookSearchSettingsProps = {
  filters: string[];
  sorts: string[];
  filterType: string;
  sortType: string;
  changeFilter(type: string): void;
  changeSort(type: string): void;
};
const BookSearchSettings: FC<BookSearchSettingsProps> = ({
  filters,
  changeFilter,
  sorts,
  changeSort,
  filterType,
  sortType,
}) => {
  return (
    <div className="accordion accordion-flush mb-4" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button fs-5 bg-secondary text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Настройки поиска
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse text-white "
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <div className="form-group">
              <div className="form-control border-0">
                <Select
                  label="Filter by"
                  options={filters}
                  changeOption={changeFilter}
                  value={filterType}
                />
              </div>
              <div className="form-control border-0">
                <Select
                  label="Sort by"
                  options={sorts}
                  changeOption={changeSort}
                  value={sortType}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSearchSettings;
