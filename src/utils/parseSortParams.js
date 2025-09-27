import { SORT_ORDER } from '../constants/index.js';

function parseSortOrder(sortOrder) {
  if (typeof sortOrder === 'undefined') {
    return SORT_ORDER.ASC;
  }

  if (sortOrder !== SORT_ORDER.ASC && sortOrder !== SORT_ORDER.DESC) {
    return SORT_ORDER.ASC;
  }

  return sortOrder;
}

const parseSortBy = (sortBy) => {
  const keysOfStudent = ['_id', 'name'];

  if (keysOfStudent.includes(sortBy)) {
    return sortBy;
  }

  return 'name';
};

export const parseSortParams = (query) => {
  const { sortBy, sortOrder } = query;

  console.log(sortOrder, sortBy);

  const parsedSortBy = parseSortBy(sortBy);
  const parsedSortOrder = parseSortOrder(sortOrder);

  return {
    sortBy: parsedSortBy,
    sortOrder: parsedSortOrder,
  };
};
