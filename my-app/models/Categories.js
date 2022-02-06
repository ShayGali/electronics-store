/**
 * This class represents a category of electrical products
 */
export default class Category {
  constructor(id, title, imgUrl, amount) {
    this.id = id;
    this.title = title;
    this.imgUrl = imgUrl;
    this.amount = amount;
  }
}
