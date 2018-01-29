var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Array filters items based on search criteria (query)
 */

const filterItems = (query) => {
    return fruits.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) > -1);
  }

console.log(filterItems('z')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']