const base_url = 'https://api.edamam.com/search';
const api_id = '7a0cb439';
const api_key = 'ad6fb2392ec6df5b62da7ceea4ad23f8';

export const getApiUrl = query => `${ base_url }?q=${ query }&app_id=${ api_id }&app_key=${ api_key }`;

export const foodDishes = [
    { _id: 1, title: 'Eggs' },
    { _id: 2, title: 'Chicken' },
    { _id: 3, title: 'Milk' },
    { _id: 4, title: 'Coffee' },
    { _id: 5, title: 'Banana' },
    { _id: 6, title: 'Burger' },
    { _id: 7, title: 'Ramen' },
    { _id: 8, title: 'Curry' },
    { _id: 9, title: 'Sushi' },
    { _id: 10, title: 'Lasagna' }
];