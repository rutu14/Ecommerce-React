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
    badgeValue: 0,
    route: 'product'
},
{
    id:2,
    link: 'Cart ',
    icon: 'bi bi-cart',
    badgePresent: true,
    badgeValue: 0,
    route: 'cart'
},{
    id:3,
    link: 'Wishlist ',
    icon: 'bi bi-heart',
    badgePresent: true,
    badgeValue: 0,
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
