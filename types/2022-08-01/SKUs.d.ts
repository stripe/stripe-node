// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * The Sku object.
     */
    interface Sku {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'sku';

      /**
       * Whether the SKU is available for purchase.
       */
      active: boolean;

      /**
       * A dictionary of attributes and values for the attributes defined by the product. If, for example, a product's attributes are `["size", "gender"]`, a valid SKU has the following dictionary of attributes: `{"size": "Medium", "gender": "Unisex"}`.
       */
      attributes: {
        [key: string]: string;
      };

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      deleted?: void;

      /**
       * The URL of an image for this SKU, meant to be displayable to the customer.
       */
      image: string | null;

      inventory: Sku.Inventory;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata;

      /**
       * The dimensions of this SKU for shipping purposes.
       */
      package_dimensions: Sku.PackageDimensions | null;

      /**
       * The cost of the item as a positive integer in the smallest currency unit (that is, 100 cents to charge $1.00, or 100 to charge ¥100, Japanese Yen being a zero-decimal currency).
       */
      price: number;

      /**
       * The ID of the product this SKU is associated with. The product must be currently active.
       */
      product: string | Stripe.Product;

      /**
       * Time at which the object was last updated. Measured in seconds since the Unix epoch.
       */
      updated: number;
    }

    namespace Sku {
      interface Inventory {
        /**
         * The count of inventory available. Will be present if and only if `type` is `finite`.
         */
        quantity: number | null;

        /**
         * Inventory type. Possible values are `finite`, `bucket` (not quantified), and `infinite`.
         */
        type: string;

        /**
         * An indicator of the inventory available. Possible values are `in_stock`, `limited`, and `out_of_stock`. Will be present if and only if `type` is `bucket`.
         */
        value: string | null;
      }

      interface PackageDimensions {
        /**
         * Height, in inches.
         */
        height: number;

        /**
         * Length, in inches.
         */
        length: number;

        /**
         * Weight, in ounces.
         */
        weight: number;

        /**
         * Width, in inches.
         */
        width: number;
      }
    }

    /**
     * The DeletedSku object.
     */
    interface DeletedSku {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'sku';

      /**
       * Always true for a deleted object
       */
      deleted: true;
    }

    interface SkuCreateParams {
      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * Description of the SKU's inventory.
       */
      inventory: SkuCreateParams.Inventory;

      /**
       * The cost of the item as a nonnegative integer in the smallest currency unit (that is, 100 cents to charge $1.00, or 100 to charge ¥100, Japanese Yen being a zero-decimal currency).
       */
      price: number;

      /**
       * The ID of the product this SKU is associated with. Must be a product with type `good`.
       */
      product: string;

      /**
       * Whether the SKU is available for purchase. Default to `true`.
       */
      active?: boolean;

      /**
       * A dictionary of attributes and values for the attributes defined by the product. If, for example, a product's attributes are `["size", "gender"]`, a valid SKU has the following dictionary of attributes: `{"size": "Medium", "gender": "Unisex"}`.
       */
      attributes?: {
        [key: string]: string;
      };

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * The identifier for the SKU. Must be unique. If not provided, an identifier will be randomly generated.
       */
      id?: string;

      /**
       * The URL of an image for this SKU, meant to be displayable to the customer.
       */
      image?: string;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.MetadataParam;

      /**
       * The dimensions of this SKU for shipping purposes.
       */
      package_dimensions?: SkuCreateParams.PackageDimensions;
    }

    namespace SkuCreateParams {
      interface Inventory {
        /**
         * The count of inventory available. Required if `type` is `finite`.
         */
        quantity?: number;

        /**
         * Inventory type. Possible values are `finite`, `bucket` (not quantified), and `infinite`.
         */
        type: Inventory.Type;

        /**
         * An indicator of the inventory available. Possible values are `in_stock`, `limited`, and `out_of_stock`. Will be present if and only if `type` is `bucket`.
         */
        value?: Stripe.Emptyable<Inventory.Value>;
      }

      namespace Inventory {
        type Type = 'bucket' | 'finite' | 'infinite';

        type Value = 'in_stock' | 'limited' | 'out_of_stock';
      }

      interface PackageDimensions {
        /**
         * Height, in inches. Maximum precision is 2 decimal places.
         */
        height: number;

        /**
         * Length, in inches. Maximum precision is 2 decimal places.
         */
        length: number;

        /**
         * Weight, in ounces. Maximum precision is 2 decimal places.
         */
        weight: number;

        /**
         * Width, in inches. Maximum precision is 2 decimal places.
         */
        width: number;
      }
    }

    interface SkuRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface SkuUpdateParams {
      /**
       * Whether this SKU is available for purchase.
       */
      active?: boolean;

      /**
       * A dictionary of attributes and values for the attributes defined by the product. When specified, `attributes` will partially update the existing attributes dictionary on the product, with the postcondition that a value must be present for each attribute key on the product.
       */
      attributes?: {
        [key: string]: string;
      };

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * The URL of an image for this SKU, meant to be displayable to the customer.
       */
      image?: string;

      /**
       * Description of the SKU's inventory.
       */
      inventory?: SkuUpdateParams.Inventory;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * The dimensions of this SKU for shipping purposes.
       */
      package_dimensions?: Stripe.Emptyable<SkuUpdateParams.PackageDimensions>;

      /**
       * The cost of the item as a positive integer in the smallest currency unit (that is, 100 cents to charge $1.00, or 100 to charge ¥100, Japanese Yen being a zero-decimal currency).
       */
      price?: number;

      /**
       * The ID of the product that this SKU should belong to. The product must exist, have the same set of attribute names as the SKU's current product, and be of type `good`.
       */
      product?: string;
    }

    namespace SkuUpdateParams {
      interface Inventory {
        /**
         * The count of inventory available. Required if `type` is `finite`.
         */
        quantity?: number;

        /**
         * Inventory type. Possible values are `finite`, `bucket` (not quantified), and `infinite`.
         */
        type?: Inventory.Type;

        /**
         * An indicator of the inventory available. Possible values are `in_stock`, `limited`, and `out_of_stock`. Will be present if and only if `type` is `bucket`.
         */
        value?: Stripe.Emptyable<Inventory.Value>;
      }

      namespace Inventory {
        type Type = 'bucket' | 'finite' | 'infinite';

        type Value = 'in_stock' | 'limited' | 'out_of_stock';
      }

      interface PackageDimensions {
        /**
         * Height, in inches. Maximum precision is 2 decimal places.
         */
        height: number;

        /**
         * Length, in inches. Maximum precision is 2 decimal places.
         */
        length: number;

        /**
         * Weight, in ounces. Maximum precision is 2 decimal places.
         */
        weight: number;

        /**
         * Width, in inches. Maximum precision is 2 decimal places.
         */
        width: number;
      }
    }

    interface SkuListParams extends PaginationParams {
      /**
       * Only return SKUs that are active or inactive (e.g., pass `false` to list all inactive products).
       */
      active?: boolean;

      /**
       * Only return SKUs that have the specified key-value pairs in this partially constructed dictionary. Can be specified only if `product` is also supplied. For instance, if the associated product has attributes `["color", "size"]`, passing in `attributes[color]=red` returns all the SKUs for this product that have `color` set to `red`.
       */
      attributes?: {
        [key: string]: string;
      };

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Only return SKUs with the given IDs.
       */
      ids?: Array<string>;

      /**
       * Only return SKUs that are either in stock or out of stock (e.g., pass `false` to list all SKUs that are out of stock). If no value is provided, all SKUs are returned.
       */
      in_stock?: boolean;

      /**
       * The ID of the product whose SKUs will be retrieved. Must be a product with type `good`.
       */
      product?: string;
    }

    interface SkuDeleteParams {}

    class SkusResource {
      /**
       * Creates a new SKU associated with a product.
       */
      create(
        params: SkuCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Sku>>;

      /**
       * Retrieves the details of an existing SKU. Supply the unique SKU identifier from either a SKU creation request or from the product, and Stripe will return the corresponding SKU information.
       */
      retrieve(
        id: string,
        params?: SkuRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Sku | Stripe.DeletedSku>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Sku | Stripe.DeletedSku>>;

      /**
       * Updates the specific SKU by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
       *
       * Note that a SKU's attributes are not editable. Instead, you would need to deactivate the existing SKU and create a new one with the new attribute values.
       */
      update(
        id: string,
        params?: SkuUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Sku>>;

      /**
       * Returns a list of your SKUs. The SKUs are returned sorted by creation date, with the most recently created SKUs appearing first.
       */
      list(
        params?: SkuListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.Sku>;
      list(options?: RequestOptions): ApiListPromise<Stripe.Sku>;

      /**
       * Delete a SKU. Deleting a SKU is only possible until it has been used in an order.
       */
      del(
        id: string,
        params?: SkuDeleteParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.DeletedSku>>;
      del(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.DeletedSku>>;
    }
  }
}
