import {ReactElement, SyntheticEvent, useState, ChangeEvent, useMemo} from 'react';

import {useAppDispatch} from 'src/hooks/redux.ts';
import {makeReview} from 'src/store/api-actions.ts';

interface FormData {
  comment: string;
  rating: number;
}
function FeedbackForm(props: {offerId: string}): ReactElement {
  const {offerId} = props;
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<FormData>({
    comment: '',
    rating: 0
  });

  const onSubmitReviewForm = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(makeReview({...formData, offerId}));
  };

  const onChangeReview = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({...formData, comment: e.target.value});
  };

  const onChangeRating = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, rating: Number(e.target.value)});
  };

  const isSubmitButtonDisabled = useMemo(
    () => {
      const {comment, rating} = formData;
      return !(comment.length >= 50 && rating > 0);
    },
    [formData]
  );


  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={onSubmitReviewForm}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={5}
          id="5-stars"
          type="radio"
          onChange={onChangeRating}
        />
        <label
          htmlFor="5-stars"
          className="reviews__rating-label form__rating-label"
          title="perfect"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={4}
          id="4-stars"
          type="radio"
          onChange={onChangeRating}
        />
        <label
          htmlFor="4-stars"
          className="reviews__rating-label form__rating-label"
          title="good"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={3}
          id="3-stars"
          type="radio"
          onChange={onChangeRating}
        />
        <label
          htmlFor="3-stars"
          className="reviews__rating-label form__rating-label"
          title="not bad"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={2}
          id="2-stars"
          type="radio"
          onChange={onChangeRating}
        />
        <label
          htmlFor="2-stars"
          className="reviews__rating-label form__rating-label"
          title="badly"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={1}
          id="1-star"
          type="radio"
          onChange={onChangeRating}
        />
        <label
          htmlFor="1-star"
          className="reviews__rating-label form__rating-label"
          title="terribly"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.comment}
        onChange={onChangeReview}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay with
          at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitButtonDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}


export default FeedbackForm;
