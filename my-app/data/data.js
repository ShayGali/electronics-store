import Categories from '../models/Categories'
import Product from '../models/Product'
import Review from '../models/Review'



export const CATEGORIES = [
    new Categories('c1','Air conditioners','../assets/icons/air_conditioner.png' ),
    new Categories("c2",'Refrigerators', '../assets/icons/refrigerator.png'),
    new Categories("c3",'Baking ovens','../assets/icons/oven.png'),
    new Categories("c4",'Stoves','../assets/icons/stove.png'),
    new Categories("c5",'Computer','../assets/icons/computer.png'),
    new Categories("c6",'Phones','../assets/icons/phone.png'),
]

export const PRODUCTS = [
    new Product(
        "p1",
        'c1',
        'https://m.media-amazon.com/images/I/61+SiAVxfWL._AC_UY327_FMwebp_QL65_.jpg',
        'TOSOT 10,000 BTU',
        'Powerful Cooling: Cool spaces up to 400 square feet with an ASHRAE-rated 10,000 BTUs of cool air (6,000 BTU 2017 DOE Standard) perfect for your home office, bedroom, or living room.',
        '359.99$',
        '11.8 x 15.4 x 30.4 inches',
        '65 Pounds',
        '260.05$',
        new Review(22,53,22,1,2)
    )
]