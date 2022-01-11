export default class Product {

    constructor(id,imgUrl,category, title, description, price,dimensions,weight,shippingPrice, reviews){
        this.id = id;
        this.imgUrl = imgUrl;
        this.title = title;
        this.description = description;
        this.price = price;
        this.dimensions = dimensions;
        this.weight = weight;
        this.shippingPrice = shippingPrice;
        this.reviews = reviews;
    }

}