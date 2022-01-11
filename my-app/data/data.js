import Categories from '../models/Categories'
import Product from '../models/Product'
import Review from '../models/Review'



export const CATEGORIES = [
    new Categories('c1','Air conditioners','https://cdn4.vectorstock.com/i/1000x1000/75/23/line-icon-air-conditioner-icon-vector-14377523.jpg' ),
    new Categories("c2",'Refrigerators', 'https://cdn11.bigcommerce.com/s-pacto3wrn2/images/stencil/1280x1280/products/2822/190676/Dispatcher_RequestType_Image&Name_162434__08513.1602448501.jpg?c=2'),
    new Categories("c3",'Baking ovens','../assets/icons/oven.png'),
    new Categories("c4",'Stoves','https://cdn-icons-png.flaticon.com/512/2771/2771597.png'),
    new Categories("c5",'Computer','../assets/icons/computer.png'),
    new Categories("c6",'Phones','../assets/icons/phone.png'),
]

export const PRODUCTS = [
    // Air conditioners
    new Product(
        "p1",
        'c1',
        'https://m.media-amazon.com/images/I/61+SiAVxfWL._AC_UY327_FMwebp_QL65_.jpg',
        'TOSOT 10,000 BTU',
        'Powerful Cooling: Cool spaces up to 400 square feet with an ASHRAE-rated 10,000 BTUs of cool air (6,000 BTU 2017 DOE Standard) perfect for your home office, bedroom, or living room.',
        359.99,
        '11.8 x 15.4 x 30.4 inches',
        '65 Pounds',
        260.05,
        new Review(22,53,22,1,2)
    ),
    new Product(
        "p2",
        'c1',
        'https://m.media-amazon.com/images/I/81v0ZJ--h3L._AC_SL1500_.jpg',
        'Cools 150 Square Feet',
        'Energy efficient air conditioning unit cools rooms up to 150 square feet with standard 9 foot ceilings,Ideal for small spaces such as dorm rooms and RVs Features include: 7 temperature settings, dual cooling and fan settings as well as adjustable air direction',
        379.00,
        '15.98 x 13.19 x 12.05 inches',
        '35.27 Pound',
        112.00,
        new Review(30,2,5,6,2)
    ),
    new Product(
        'p3',
        'c1',
        'https://i5.walmartimages.com/asr/55b01cbd-0251-4ff3-b98f-2791eb753332.d79758cdae1e3c40f66b41d7b6d8d241.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
        'Tuttokool Wifi Ready Wall',
        'ENERGY EFFICIENT (INVERTER): 12000 BTU/h, 20 SEER, 115V, High Efficent Ductless Mini Split Inverter Plus System with Heat Pump and Dehumidification, AHRI Certified (16 FT Line Set Included)',
        724.39,
        '150.98 x 23.19 x 12.05 inches',
        '70.05 Pound',
        250.00,
        new Review(8,10,25,23,0)
    ),
    new Product(
        'p4',
        'c1',
        'https://m.media-amazon.com/images/I/71C25leyelS._AC_SL1500_.jpg',
        'Portable Air Conditioner',
        'The Air cooler is equipped with motion sensor, which simply activated by click of button, When it detects that there is no motion for five minutes, it will automatically turn off the fan to save power and water.',
        39.99,
        '7.24 x 5.51 x 9.33 inches',
        '3.3 Pound',
        21.88,
        new Review(52,21,5,1,2)
    ),

    // Refrigerators
    new Product(
        'p5',
        'c2',
        'https://m.media-amazon.com/images/I/71t6xOQlvPL._AC_SL1500_.jpg',
        'Galanz GLR10TBKEFR',
        'Retro Compact Refrigerator uses R600a high-efficiency and low-energy consumption compressor, it can cool food quickly with lower energy. Leveling legs can adjust feet and keep level placement anywhere',
        499.99,
        '23.74 x 27.48 x 61.81 inches',
        '125.7 Pound',
        250.00,
        new Review(85,24,98,12,4)
    ),
    new Product(
        'p6',
        'c2',
        'https://m.media-amazon.com/images/I/612R+csw4SL._AC_SL1500_.jpg',
        'Wine Cooler Smad 19 Bottles',
        '🥂Accurate Temperature Control: Precise temperature can be set between 39.2℉~64.4℉(4~18 °C) according to your needs. Smad wine coolers’ compressor technology ensures the temperature is stable. That is the suitable present for your own use or a gift to boyfriend/husband/ father and so on.',
        359.00,
        '204 x 216 x 300 inches',
        '48.5 Pound',
        '242.51',
        new Review(3,5,0,0,1)
    ),
    new Product(
        'p7',
        'c2',
        'https://i5.walmartimages.com/asr/66eb4769-f8a8-47b6-a29c-2be38d4ae0ad.6c130beaaf7d5adc0bda61b3ae6be2dd.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
        'Galanz 4.6. Cu ft Two Door Mini Fridge',
        'Enjoy the convenience of having your favorite chilled food, drinks or snacks whenever you want with the Galanz 4.6 cu ft 2 door mini fridge with stainless-steel look and top freezer. The Galanz 4.6 cu ft fridge will enrich your kitchen, rec room or home office with different styles. The Galanz 4.6 cu ft 2 door mini fridge features an adjustable thermostat, separate freezer compartment, bright interior lighting, removable glass shelves and handy can dispensers. The convenient reversible doors allow you to choose to open from the left or right side making the Galanz 4.6 cu ft 2 door fridge suitable for any layout.',
        229.00,
        '21.61 x 19.13 x 48.09 Inches',
        '70.55 Pound',
        'Free shipping',
        new Review(5,5,6,2,1)
    ),

    new Product(
        'p8',
        'c2',
        'https://i5.walmartimages.com/asr/f7afdf0c-a489-4a41-accb-131f95589892_1.757d28366d56f583049a0ad42699f467.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
        'Frigidaire 3.2 Cu ft Retro Dry Erase',
        'The Frigidaire Retro Eraser Board Refrigerator will give you the extra storage you need for all of your food and beverage needs. This 3.2 cu ft refrigerators black finish is sure to complement the room and fit any decor perfectly. It will fit nicely in a variety of spaces from dorm rooms to garages. It can make a helpful addition to most homes with its storage capacity. It has a unique composition that allows you to write and erase messages on the front, letting you personalize it in a fun way. The inside includes two adjustable shelves, a 2L bottle storage area, a door can rack and more. The reversible door in this compact refrigerator allows either left- or right-hand opening. It has adjustable food shelves that allow you to keep your groceries organized. The door rack offers additional storage space as well. This Frigidaire Eraser Board Refrigerator is designed to last for a long time to come.',
        159.00,
        '18.50 x 18.50 x 32.80 Inches',
        '48 Pound',
        'Free shipping',
        new Review(58,6,7,5,12)
    ),

    // Baking ovens
    new Product(
        'p9',
        'c3',
        'https://m.media-amazon.com/images/I/81xXh6P2RDL._AC_SL1500_.jpg',
        'LUBY Large Toaster Oven Countertop',
        'Large countertop oven - Enough for baking a 14-inch pizza, roasting a 20-lb turkey, a family cake or a nice tenderloin and comfortably fit 24 cup muffin trays. Four rack positions. More at a time. Usable interior dimensions are 16-3/8 W x 15-7/8 D x 8-1/2 H (upper element to rack at lowest position ).',
        139.99,
        '22.04 x 16.14 x 14.37 inches',
        '24.9 pounds',
        197.14,
        new Review(85,85,62,1,6)
    ),
    new Product(
        'p10',
        'c3',
        'https://m.media-amazon.com/images/I/81kYzmHfb+L._AC_SL1500_.jpg',
        'Oster French Convection Countertop and Toaster Oven',
        'Single door pull opens both doors with 1 hand ease and convenience. Digital controls provide precise cooking time and temperature to take the guesswork out of cooking ',
        269.99,
        '23.8 x 20.15 x 15.1 inches',
        '18.1 pounds',
        218.09,
        new Review(12,126,12,14,3)
    ),
    new Product(
        'p11',
        'c3',
        'https://m.media-amazon.com/images/I/81y6nH-Ho+L._AC_SL1500_.jpg',
        'GE Convection Toaster Oven',
        'QUARTZ HEATING ELEMENT - Toast, bake or broil foods quickly thanks to the rapid quartz heating elements that combine with the halogen heating elements to deliver a faster preheat',
        128.00,
        '15 x 18 x 11 inches',
        '22 pounds',
        155.09,
        new Review(45,2,3,65,1)
    ),
    new Product(
        'p12',
        'c3',
        'https://m.media-amazon.com/images/I/510hUnzprVL._AC_SL1000_.jpg',
        'Sengoku SET-G16A',
        'REVOLUTIONARY: Graphite heating technology. INSTANT HEAT: Reaches maximum output in 0.2 seconds. COST EFFECTIVE: No need to pre-heat as graphite technology provides more heat from less wattage. SPACE SAVER: Perfect countertop size toaster oven will fit four bread slices or 9" pizza. HEAT & TIMER SETTINGS: Set timer from 1 minute to 15 minutes and your heat from 200F to 550F.',
        189.99,
        '13.75 x 13.5 x 9.75 inches',
        '10 pounds',
        116.04,
        new Review(26,256,564,12,3)
    ),
    // Stoves
    new Product(
        "p13", // id
        'c4', // category
        'https://m.media-amazon.com/images/I/81KhJlxexoL._AC_SL1500_.jpg', // img
        'Techwood 1800W Electric Hot Plate', // title
        'Countertop Stove Double Burner for Cooking, Infrared Ceramic Hot Plates Double Cooktop, Red, Brushed Stainless Steel Easy To Clean Upgraded Version', // description 
         87.98, // price
        '23.1 x 9.3 x 3.1 inches', // dimensions
        '5 Pounds', // weight
         45.95, // shipping price
        new Review(30,25,10,14,6) // review
    ),
    new Product(
        "p14", // id
        'c4', // category
        'https://m.media-amazon.com/images/I/71ipRWJYyAL._AC_SL1500_.jpg', // img
        'CUSIMAX Electric Burner Hot Plate', // title
        'for Cooking Cast Iron hot plates, Adjustable Temperature Control, Non-Slip Rubber Feet Stainless Steel Easy to Clean, Your Kitchen Assistant', // description 
         41.99, // price
        '13.46 x 10.51 x 4.21 inches', // dimensions
        '5.68 Pounds', // weight
         21.91, // shipping price
        new Review(44,33,12,10,4) // review
    ),
    new Product(
        "p15", // id
        'c4', // category
        'https://m.media-amazon.com/images/I/617F53acu5L._AC_SL1500_.jpg', // img
        'Elite Gourmet Countertop Coiled', // title
        'Electric Hot Burner, Temperature Controls, Power Indicator Lights, Easy to Clean, Single, Black', // description 
        20.99, // price
        '10.65 x 9.15 x 3.65 inches', // dimensions
        '5.60 Pounds', // weight
         17.38, // shipping price
        new Review(50,33,20,11,6) // review
    ),
    new Product(
        "p16", // id
        'c4', // category
        'https://m.media-amazon.com/images/I/616YBgkszSL._AC_SL1500_.jpg', // img
        'Ovente Electric Double Infrared Burner', // title
        'Ovente Electric Double Infrared Burner 7.75 & 6.75 Inch Ceramic Glass Hot Plates Cooktop, 5 Level Temperature Control & Easy Clean Stainless Steel Base, Portable Stove Dorm & Office, Silver BGI102S', // description 
        32.99, // price
        '18 x 9.5 x 2.75 inches', // dimensions
        '5 Pounds', // weight
         24.37, // shipping price
        new Review(24,44,20,15,3) // review
    ),

    // Computer
    new Product(
        "p17", // id
        'c5', // category
        'https://m.media-amazon.com/images/I/61pskHRSN2L._AC_SL1500_.jpg', // img
        'Dell OptiPlex 9020-SFF', // title
        'Dell OptiPlex 9020-SFF, Intel Core i5-4570 3.2GHZ, 16GB RAM, 512GB SSD Solid State, DVDRW, Windows 10 Pro 64bit (Renewed)', // description 
        250.00, // price
        '11.4 x 12.3 x 3.7 inches', // dimensions
        '13.07 Pounds', // weight
        107.17, // shipping price
        new Review(33,34,20,10,4) // review
    ),
    new Product(
        "p18", // id
        'c5', // category
        'https://m.media-amazon.com/images/I/71dYHi8v0KL._AC_SL1500_.jpg', // img
        'Dell Inspiron 3891 Compact Desktop Computer Tower', // title
        'Intel Core i5-10400, 16GB DDR4 RAM, 256GB SSD + 1TB SATA HDD, Intel UHD Graphics 630 with Shared Graphics Memory, Windows 10H - Black (Latest Model)', // description 
        674.00, // price
        '11.54 x 6.06 x 12.77 inches', // dimensions
        '10.88 Pounds', // weight
        229.30, // shipping price
        new Review(30,44,16,2,5) // review
    ),
    new Product(
        "p19", // id
        'c5', // category
        'https://m.media-amazon.com/images/I/61glPHSupyL._AC_SL1500_.jpg', // img
        'Dell Optiplex 7020 Desktop Computer', // title
        'Dell Optiplex 7020 Desktop Computer, Intel Quad-Core i7-4770-3.4GHz, 32 GB RAM, 512GB SSD, DVD, USB 3.0, WiFi, HDMI, Windows 10 Pro (Renewed)', // description 
        324.00, // price
        '12.28 x 3.66 x 11.42 inches', // dimensions
        '13.22 Pounds', // weight
         121.84, // shipping price
        new Review(24,25,16,3,7) // review
    ),
    new Product(
        "p20", // id
        'c5', // category
        'https://m.media-amazon.com/images/I/81sAobIexYL._AC_SL1500_.jpg', // img
        'ASUS ExpertCenter D500SC', // title
        'Small Form Factor Desktop PC, Intel Core i5-11400, 16GB DDR4 RAM, 256GB PCIe SSD + 1TB HDD, TPM, Windows 10 Home, Black, D500SC-AB504', // description 
        642.85, // price
        '3.72 x 12.58 x 12.62 inches', // dimensions
        '12.13 Pounds', // weight
        197.53, // shipping price
        new Review(43,56,23,17,3) // review
    ),

    // Phones
    new Product(
        "p21", // id
        'c6', // category
        'https://m.media-amazon.com/images/I/61kLsk8RslL._AC_SL1500_.jpg', // img
        'Samsung Galaxy S21 FE 5G', // title
        'Cell Phone, Factory Unlocked Android Smartphone, 128GB, 120Hz Display, Pro Grade Camera, All Day Intelligent Battery, US Version, White', // description 
        699.99, // price
        '6.7 x 3.4 x 2.44 inches', // dimensions
        '6.7 ounces', // weight
        158.36, // shipping price
        new Review(44,53,22,4,6) // review
    ),
    new Product(
        "p22", // id
        'c6', // category
        'https://m.media-amazon.com/images/I/81afsli5ctL._AC_SL1500_.jpg', // img
        'Samsung Galaxy A52 (5G)', // title
        'Samsung Galaxy A52 (5G) 128GB A526U (T-Mobile/Sprint Unlocked) 6.5" Display Quad Camera Smartphone - Black (Renewed)', // description 
         389.99, // price
        '0.33 x 6.3 x 2.96 inches', // dimensions
        '12.3 ounces', // weight
         88.26, // shipping price
        new Review(44,54,20,16,8) // review
    ),
    new Product(
        "p23", // id
        'c6', // category
        'https://m.media-amazon.com/images/I/71ELx8TJfEL._AC_SL1500_.jpg', // img
        'SAMSUNG Galaxy S20 FE 5G', // title
        'Factory Unlocked Android Cell Phone 128GB US Version Smartphone Pro-Grade Camera 30X Space Zoom Night Mode, Cloud Navy (Renewed)', // description 
        435.00, // price
        '7 x 5 x 4 inches', // dimensions
        '6.7 ounces', // weight
        98.33, // shipping price
        new Review(34,33,13,7,1) // review
    ),
    new Product(
        "p24", // id
        'c6', // category
        'https://m.media-amazon.com/images/I/61Kdfg4hZPL._AC_SL1500_.jpg', // img
        'Samsung Galaxy S10', // title
        'Samsung Galaxy S10, 128GB, Prism White - Unlocked (Renewed)', // description 
         267.00, // price
        '5.94 x 2.78 x 0.31 inches', // dimensions
        '1.06 ounces', // weight
        60.68, // shipping price
        new Review(14,23,11,2,1) // review
    )
]