export const linkMobileNames = [{
    id:1,
    link: 'Products ',
    icon: 'bi bi-basket',
    route: 'product'
},{
    id:2,
    link: 'Cart ',
    icon: 'bi bi-cart',
    route: 'cart'
},{
    id:3,
    link: 'Wishlist ',
    icon: 'bi bi-heart',
    route: 'wishlist'
}];

export const linkNames = [{
    id:1,
    link: 'Products ',
    icon: 'bi bi-basket',
    badgePresent: false,
    route: 'product'
},
{
    id:2,
    link: 'Cart ',
    icon: 'bi bi-cart',
    badgePresent: true,
    route: 'cart'
},{
    id:3,
    link: 'Wishlist ',
    icon: 'bi bi-heart',
    badgePresent: true,
    route: 'wishlist'
}];

export const validPromoCode = [
    { 
        couponName:'COUPON20', 
        price: 20 
    },{ 
        couponName:'NEW100' , 
        price: 100 
}];

export const taxPercent = 5;
export const deliveryCost = 20;

export const itemsPerPageCart = 3;
export const itemsPerPageProduct = 8;
export const itemsPerPageWishlist = 10;
