// export const selectCategoriesReducer = (state) => state.categories.categories;

export const selectCategoriesMap = (state) => {
  return state.categories.categoriesMap.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
};
