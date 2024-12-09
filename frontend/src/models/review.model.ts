export interface Review {
  /**
   * The ID of the review.
   */
  id: string
  /**
   * The ID of the user who reviewed the product.
   */
  user_id: string
  /**
   * The ID of the product.
   */
  product_id: string
  /**
   * The rating of the review.
   */
  rating: number
  /**
   * The comment of the review.
   */
  comment: string
  /**
   * The date and time when the review was created.
   */
  created_at: string
  /**
   * The date and time when the review was updated.
   */
  updated_at: string
}
