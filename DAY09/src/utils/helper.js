export function filterData(searchTxt, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
          restaurant?.data?.name.toLowerCase().includes(searchTxt));
    return filterData;

}