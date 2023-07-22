import ReviewItem from 'src/components/review-item/review-item.tsx';
import {Review} from 'src/types';

interface ReviewsListProps {
  reviews: Review[];
}

function ReviewsList(props: ReviewsListProps) {

  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.map((review) => <ReviewItem key={review.id} review={review}/>)}
    </ul>
  );
}


export default ReviewsList;
