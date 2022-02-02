// This class represents a product
export default class Product {

    constructor(id,category,imgUrl, title, description, price,dimensions,weight,shippingPrice, reviews){
        this.id = id;
        this.category = category;
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