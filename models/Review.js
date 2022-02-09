// This class represents a review
export default class Review {

    constructor(fiveStars, fourStars, threeStars, twoStars, oneStar) {
        this.review = [fiveStars, fourStars, threeStars, twoStars, oneStar]

    }

    // will calc the Review of the product
    calcGrade(){
        let sum = 0;
        for (let index = 0; index < this.review.length; index++) {
            sum += this.review[index] * index+1;
        }
        let numOfReviews = this.review.reduce((a,b)=> a+b,0);
        return ((sum/numOfReviews).toFixed(2));
    }

}
