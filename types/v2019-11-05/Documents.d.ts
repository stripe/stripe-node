declare namespace Stripe {
  /**
   * The Document object.
   */
  interface Document {
    /**
     * The back of a document returned by a [file upload](#create_file) with a `purpose` value of `identity_document`.
     */
    back?: string | File | null;

    /**
     * The front of a document returned by a [file upload](#create_file) with a `purpose` value of `identity_document`.
     */
    front?: string | File | null;
  }
}