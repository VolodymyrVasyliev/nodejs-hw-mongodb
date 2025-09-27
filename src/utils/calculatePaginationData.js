export const calculatePaginationData = (count, perPage, page) => {
  const totalPages = Math.ceil(count / perPage);
  const hasNextPage = Boolean(totalPages - page);
  const hasPreviousPage = page !== 1;

  return {
    page,
    perPage,
    totalItems: count,
    totalPages,
    hasNextPage,
    hasPreviousPage,
  };
};

// {
//     "status": 200,
//     "message": "Successfully found contacts!",
//     "data": {
//         "data": [/* contacts */],
//         "page": 2,
//         "perPage": 4,
//         "totalItems": 6,
//         "totalPages": 2,
//         "hasPreviousPage": true,
//         "hasNextPage": false
//     }
// }
