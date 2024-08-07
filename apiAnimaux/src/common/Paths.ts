/**
 * Express router paths go here.
 */


export default {

    Base: '/animal',
    Get: '/nom/:nom',
    GetFavoris: '/fav',
    Add: '/add',
    Delete: '/delete/:id',
    Update: '/favoris'

} as const;
