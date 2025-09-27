const parseContactType = (contactType) => {
  if (typeof contactType !== 'string') {
    return ;
  }

  const allTypes = ['work', 'home', 'personal'];
  const isContactType = allTypes.includes(contactType);

  if (isContactType) {
    return contactType;
  }
};

const parseIsFavourite = (isFavourite) => {
  if (typeof isFavourite !== 'string') return;

  if (isFavourite === 'true') return true;
  if (isFavourite === 'false') return false;
};

export const parseFilterParams = (query) => {
  const { type, isFavourite } = query;

  const parsedContactType = parseContactType(type);
  const parsedIsFavourite = parseIsFavourite(isFavourite);
  return {
    type: parsedContactType,
    isFavourite: parsedIsFavourite,
  };
};
