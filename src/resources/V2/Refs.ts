/**
 * A reference to a Stripe object. Holds the object's id and type.
 */
export interface Ref {
  /** String representing the type of the referenced object. */
  type: string;

  /** Unique identifier for the referenced object. */
  id: string;
}
