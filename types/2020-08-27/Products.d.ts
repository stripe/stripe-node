// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * The Product object.
     */
    interface Product {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'product';

      /**
       * Whether the product is currently available for purchase.
       */
      active: boolean;

      /**
       * A list of up to 5 attributes that each SKU can provide values for (e.g., `["color", "size"]`).
       */
      attributes: Array<string> | null;

      /**
       * A short one-line description of the product, meant to be displayable to the customer. Only applicable to products of `type=good`.
       */
      caption: string | null;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * An array of connect application identifiers that cannot purchase this product. Only applicable to products of `type=good`.
       */
      deactivate_on?: Array<string>;

      /**
       * The ID of the [Price](https://stripe.com/docs/api/prices) object that is the default price for this product.
       */
      default_price?: string | Stripe.Price | null;

      deleted?: void;

      /**
       * The product's description, meant to be displayable to the customer. Use this field to optionally store a long form explanation of the product being sold for your own rendering purposes.
       */
      description: string | null;

      /**
       * A list of up to 8 URLs of images for this product, meant to be displayable to the customer.
       */
      images: Array<string>;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata;

      /**
       * The product's name, meant to be displayable to the customer.
       */
      name: string;

      /**
       * The dimensions of this product for shipping purposes.
       */
      package_dimensions: Product.PackageDimensions | null;

      /**
       * Whether this product is shipped (i.e., physical goods).
       */
      shippable: boolean | null;

      /**
       * Extra information about a product which will appear on your customer's credit card statement. In the case that multiple products are billed at once, the first statement descriptor will be used.
       */
      statement_descriptor: string | null;

      /**
       * A [tax code](https://stripe.com/docs/tax/tax-categories) ID.
       */
      tax_code: string | Stripe.TaxCode | null;

      /**
       * The type of the product. The product is either of type `good`, which is eligible for use with Orders and SKUs, or `service`, which is eligible for use with Subscriptions and Plans.
       */
      type: Product.Type;

      /**
       * A label that represents units of this product in Stripe and on customers' receipts and invoices. When set, this will be included in associated invoice line item descriptions.
       */
      unit_label: string | null;

      /**
       * Time at which the object was last updated. Measured in seconds since the Unix epoch.
       */
      updated: number;

      /**
       * A URL of a publicly-accessible webpage for this product.
       */
      url: string | null;
    }

    namespace Product {
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

      type Type = 'good' | 'service';
    }

    /**
     * The DeletedProduct object.
     */
    interface DeletedProduct {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'product';

      /**
       * Always true for a deleted object
       */
      deleted: true;
    }

    interface ProductCreateParams {
      /**
       * The product's name, meant to be displayable to the customer.
       */
      name: string;

      /**
       * Whether the product is currently available for purchase. Defaults to `true`.
       */
      active?: boolean;

      /**
       * A list of up to 5 alphanumeric attributes. Should only be set if type=`good`.
       */
      attributes?: Array<string>;

      /**
       * A short one-line description of the product, meant to be displayable to the customer. May only be set if type=`good`.
       */
      caption?: string;

      /**
       * An array of Connect application names or identifiers that should not be able to order the SKUs for this product. May only be set if type=`good`.
       */
      deactivate_on?: Array<string>;

      /**
       * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object. This Price will be set as the default price for this product.
       */
      default_price_data?: ProductCreateParams.DefaultPriceData;

      /**
       * The product's description, meant to be displayable to the customer. Use this field to optionally store a long form explanation of the product being sold for your own rendering purposes.
       */
      description?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * An identifier will be randomly generated by Stripe. You can optionally override this ID, but the ID must be unique across all products in your Stripe account.
       */
      id?: string;

      /**
       * A list of up to 8 URLs of images for this product, meant to be displayable to the customer.
       */
      images?: Array<string>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.MetadataParam;

      /**
       * The dimensions of this product for shipping purposes.
       */
      package_dimensions?: ProductCreateParams.PackageDimensions;

      /**
       * Whether this product is shipped (i.e., physical goods).
       */
      shippable?: boolean;

      /**
       * An arbitrary string to be displayed on your customer's credit card or bank statement. While most banks display this information consistently, some may display it incorrectly or not at all.
       *
       * This may be up to 22 characters. The statement description may not include `<`, `>`, `\`, `"`, `'` characters, and will appear on your customer's statement in capital letters. Non-ASCII characters are automatically stripped.
       *  It must contain at least one letter.
       */
      statement_descriptor?: string;

      /**
       * A [tax code](https://stripe.com/docs/tax/tax-categories) ID.
       */
      tax_code?: string;

      /**
       * The type of the product. Defaults to `service` if not explicitly specified, enabling use of this product with Subscriptions and Plans. Set this parameter to `good` to use this product with Orders and SKUs. On API versions before `2018-02-05`, this field defaults to `good` for compatibility reasons.
       */
      type?: ProductCreateParams.Type;

      /**
       * A label that represents units of this product in Stripe and on customers' receipts and invoices. When set, this will be included in associated invoice line item descriptions.
       */
      unit_label?: string;

      /**
       * A URL of a publicly-accessible webpage for this product.
       */
      url?: string;
    }

    namespace ProductCreateParams {
      interface DefaultPriceData {
        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * Prices defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
         */
        currency_options?: DefaultPriceData.CurrencyOptions;

        /**
         * The recurring components of a price such as `interval` and `interval_count`.
         */
        recurring?: DefaultPriceData.Recurring;

        /**
         * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
         */
        tax_behavior?: DefaultPriceData.TaxBehavior;

        /**
         * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge. One of `unit_amount` or `unit_amount_decimal` is required.
         */
        unit_amount?: number;

        /**
         * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
         */
        unit_amount_decimal?: string;
      }

      namespace DefaultPriceData {
        interface CurrencyOptions {
          /**
           * The price defined in AED.
           */
          aed?: CurrencyOptions.Aed;

          /**
           * The price defined in AFN.
           */
          afn?: CurrencyOptions.Afn;

          /**
           * The price defined in ALL.
           */
          all?: CurrencyOptions.All;

          /**
           * The price defined in AMD.
           */
          amd?: CurrencyOptions.Amd;

          /**
           * The price defined in ANG.
           */
          ang?: CurrencyOptions.Ang;

          /**
           * The price defined in AOA.
           */
          aoa?: CurrencyOptions.Aoa;

          /**
           * The price defined in ARS.
           */
          ars?: CurrencyOptions.Ars;

          /**
           * The price defined in AUD.
           */
          aud?: CurrencyOptions.Aud;

          /**
           * The price defined in AWG.
           */
          awg?: CurrencyOptions.Awg;

          /**
           * The price defined in AZN.
           */
          azn?: CurrencyOptions.Azn;

          /**
           * The price defined in BAM.
           */
          bam?: CurrencyOptions.Bam;

          /**
           * The price defined in BBD.
           */
          bbd?: CurrencyOptions.Bbd;

          /**
           * The price defined in BDT.
           */
          bdt?: CurrencyOptions.Bdt;

          /**
           * The price defined in BGN.
           */
          bgn?: CurrencyOptions.Bgn;

          /**
           * The price defined in BHD.
           */
          bhd?: CurrencyOptions.Bhd;

          /**
           * The price defined in BIF.
           */
          bif?: CurrencyOptions.Bif;

          /**
           * The price defined in BMD.
           */
          bmd?: CurrencyOptions.Bmd;

          /**
           * The price defined in BND.
           */
          bnd?: CurrencyOptions.Bnd;

          /**
           * The price defined in BOB.
           */
          bob?: CurrencyOptions.Bob;

          /**
           * The price defined in BRL.
           */
          brl?: CurrencyOptions.Brl;

          /**
           * The price defined in BSD.
           */
          bsd?: CurrencyOptions.Bsd;

          /**
           * The price defined in BTN.
           */
          btn?: CurrencyOptions.Btn;

          /**
           * The price defined in BWP.
           */
          bwp?: CurrencyOptions.Bwp;

          /**
           * The price defined in BYN.
           */
          byn?: CurrencyOptions.Byn;

          /**
           * The price defined in BZD.
           */
          bzd?: CurrencyOptions.Bzd;

          /**
           * The price defined in CAD.
           */
          cad?: CurrencyOptions.Cad;

          /**
           * The price defined in CDF.
           */
          cdf?: CurrencyOptions.Cdf;

          /**
           * The price defined in CHF.
           */
          chf?: CurrencyOptions.Chf;

          /**
           * The price defined in CLP.
           */
          clp?: CurrencyOptions.Clp;

          /**
           * The price defined in CNY.
           */
          cny?: CurrencyOptions.Cny;

          /**
           * The price defined in COP.
           */
          cop?: CurrencyOptions.Cop;

          /**
           * The price defined in CRC.
           */
          crc?: CurrencyOptions.Crc;

          /**
           * The price defined in CVE.
           */
          cve?: CurrencyOptions.Cve;

          /**
           * The price defined in CZK.
           */
          czk?: CurrencyOptions.Czk;

          /**
           * The price defined in DJF.
           */
          djf?: CurrencyOptions.Djf;

          /**
           * The price defined in DKK.
           */
          dkk?: CurrencyOptions.Dkk;

          /**
           * The price defined in DOP.
           */
          dop?: CurrencyOptions.Dop;

          /**
           * The price defined in DZD.
           */
          dzd?: CurrencyOptions.Dzd;

          /**
           * The price defined in EGP.
           */
          egp?: CurrencyOptions.Egp;

          /**
           * The price defined in ETB.
           */
          etb?: CurrencyOptions.Etb;

          /**
           * The price defined in EUR.
           */
          eur?: CurrencyOptions.Eur;

          /**
           * The price defined in FJD.
           */
          fjd?: CurrencyOptions.Fjd;

          /**
           * The price defined in FKP.
           */
          fkp?: CurrencyOptions.Fkp;

          /**
           * The price defined in GBP.
           */
          gbp?: CurrencyOptions.Gbp;

          /**
           * The price defined in GEL.
           */
          gel?: CurrencyOptions.Gel;

          /**
           * The price defined in GHS.
           */
          ghs?: CurrencyOptions.Ghs;

          /**
           * The price defined in GIP.
           */
          gip?: CurrencyOptions.Gip;

          /**
           * The price defined in GMD.
           */
          gmd?: CurrencyOptions.Gmd;

          /**
           * The price defined in GNF.
           */
          gnf?: CurrencyOptions.Gnf;

          /**
           * The price defined in GTQ.
           */
          gtq?: CurrencyOptions.Gtq;

          /**
           * The price defined in GYD.
           */
          gyd?: CurrencyOptions.Gyd;

          /**
           * The price defined in HKD.
           */
          hkd?: CurrencyOptions.Hkd;

          /**
           * The price defined in HNL.
           */
          hnl?: CurrencyOptions.Hnl;

          /**
           * The price defined in HRK.
           */
          hrk?: CurrencyOptions.Hrk;

          /**
           * The price defined in HTG.
           */
          htg?: CurrencyOptions.Htg;

          /**
           * The price defined in HUF.
           */
          huf?: CurrencyOptions.Huf;

          /**
           * The price defined in IDR.
           */
          idr?: CurrencyOptions.Idr;

          /**
           * The price defined in ILS.
           */
          ils?: CurrencyOptions.Ils;

          /**
           * The price defined in INR.
           */
          inr?: CurrencyOptions.Inr;

          /**
           * The price defined in ISK.
           */
          isk?: CurrencyOptions.Isk;

          /**
           * The price defined in JMD.
           */
          jmd?: CurrencyOptions.Jmd;

          /**
           * The price defined in JOD.
           */
          jod?: CurrencyOptions.Jod;

          /**
           * The price defined in JPY.
           */
          jpy?: CurrencyOptions.Jpy;

          /**
           * The price defined in KES.
           */
          kes?: CurrencyOptions.Kes;

          /**
           * The price defined in KGS.
           */
          kgs?: CurrencyOptions.Kgs;

          /**
           * The price defined in KHR.
           */
          khr?: CurrencyOptions.Khr;

          /**
           * The price defined in KMF.
           */
          kmf?: CurrencyOptions.Kmf;

          /**
           * The price defined in KRW.
           */
          krw?: CurrencyOptions.Krw;

          /**
           * The price defined in KWD.
           */
          kwd?: CurrencyOptions.Kwd;

          /**
           * The price defined in KYD.
           */
          kyd?: CurrencyOptions.Kyd;

          /**
           * The price defined in KZT.
           */
          kzt?: CurrencyOptions.Kzt;

          /**
           * The price defined in LAK.
           */
          lak?: CurrencyOptions.Lak;

          /**
           * The price defined in LBP.
           */
          lbp?: CurrencyOptions.Lbp;

          /**
           * The price defined in LKR.
           */
          lkr?: CurrencyOptions.Lkr;

          /**
           * The price defined in LRD.
           */
          lrd?: CurrencyOptions.Lrd;

          /**
           * The price defined in LSL.
           */
          lsl?: CurrencyOptions.Lsl;

          /**
           * The price defined in MAD.
           */
          mad?: CurrencyOptions.Mad;

          /**
           * The price defined in MDL.
           */
          mdl?: CurrencyOptions.Mdl;

          /**
           * The price defined in MGA.
           */
          mga?: CurrencyOptions.Mga;

          /**
           * The price defined in MKD.
           */
          mkd?: CurrencyOptions.Mkd;

          /**
           * The price defined in MMK.
           */
          mmk?: CurrencyOptions.Mmk;

          /**
           * The price defined in MNT.
           */
          mnt?: CurrencyOptions.Mnt;

          /**
           * The price defined in MOP.
           */
          mop?: CurrencyOptions.Mop;

          /**
           * The price defined in MRO.
           */
          mro?: CurrencyOptions.Mro;

          /**
           * The price defined in MUR.
           */
          mur?: CurrencyOptions.Mur;

          /**
           * The price defined in MVR.
           */
          mvr?: CurrencyOptions.Mvr;

          /**
           * The price defined in MWK.
           */
          mwk?: CurrencyOptions.Mwk;

          /**
           * The price defined in MXN.
           */
          mxn?: CurrencyOptions.Mxn;

          /**
           * The price defined in MYR.
           */
          myr?: CurrencyOptions.Myr;

          /**
           * The price defined in MZN.
           */
          mzn?: CurrencyOptions.Mzn;

          /**
           * The price defined in NAD.
           */
          nad?: CurrencyOptions.Nad;

          /**
           * The price defined in NGN.
           */
          ngn?: CurrencyOptions.Ngn;

          /**
           * The price defined in NIO.
           */
          nio?: CurrencyOptions.Nio;

          /**
           * The price defined in NOK.
           */
          nok?: CurrencyOptions.Nok;

          /**
           * The price defined in NPR.
           */
          npr?: CurrencyOptions.Npr;

          /**
           * The price defined in NZD.
           */
          nzd?: CurrencyOptions.Nzd;

          /**
           * The price defined in OMR.
           */
          omr?: CurrencyOptions.Omr;

          /**
           * The price defined in PAB.
           */
          pab?: CurrencyOptions.Pab;

          /**
           * The price defined in PEN.
           */
          pen?: CurrencyOptions.Pen;

          /**
           * The price defined in PGK.
           */
          pgk?: CurrencyOptions.Pgk;

          /**
           * The price defined in PHP.
           */
          php?: CurrencyOptions.Php;

          /**
           * The price defined in PKR.
           */
          pkr?: CurrencyOptions.Pkr;

          /**
           * The price defined in PLN.
           */
          pln?: CurrencyOptions.Pln;

          /**
           * The price defined in PYG.
           */
          pyg?: CurrencyOptions.Pyg;

          /**
           * The price defined in QAR.
           */
          qar?: CurrencyOptions.Qar;

          /**
           * The price defined in RON.
           */
          ron?: CurrencyOptions.Ron;

          /**
           * The price defined in RSD.
           */
          rsd?: CurrencyOptions.Rsd;

          /**
           * The price defined in RUB.
           */
          rub?: CurrencyOptions.Rub;

          /**
           * The price defined in RWF.
           */
          rwf?: CurrencyOptions.Rwf;

          /**
           * The price defined in SAR.
           */
          sar?: CurrencyOptions.Sar;

          /**
           * The price defined in SBD.
           */
          sbd?: CurrencyOptions.Sbd;

          /**
           * The price defined in SCR.
           */
          scr?: CurrencyOptions.Scr;

          /**
           * The price defined in SEK.
           */
          sek?: CurrencyOptions.Sek;

          /**
           * The price defined in SGD.
           */
          sgd?: CurrencyOptions.Sgd;

          /**
           * The price defined in SHP.
           */
          shp?: CurrencyOptions.Shp;

          /**
           * The price defined in SLL.
           */
          sll?: CurrencyOptions.Sll;

          /**
           * The price defined in SOS.
           */
          sos?: CurrencyOptions.Sos;

          /**
           * The price defined in SRD.
           */
          srd?: CurrencyOptions.Srd;

          /**
           * The price defined in STD.
           */
          std?: CurrencyOptions.Std;

          /**
           * The price defined in SZL.
           */
          szl?: CurrencyOptions.Szl;

          /**
           * The price defined in THB.
           */
          thb?: CurrencyOptions.Thb;

          /**
           * The price defined in TJS.
           */
          tjs?: CurrencyOptions.Tjs;

          /**
           * The price defined in TND.
           */
          tnd?: CurrencyOptions.Tnd;

          /**
           * The price defined in TOP.
           */
          top?: CurrencyOptions.Top;

          /**
           * The price defined in TRY.
           */
          try?: CurrencyOptions.Try;

          /**
           * The price defined in TTD.
           */
          ttd?: CurrencyOptions.Ttd;

          /**
           * The price defined in TWD.
           */
          twd?: CurrencyOptions.Twd;

          /**
           * The price defined in TZS.
           */
          tzs?: CurrencyOptions.Tzs;

          /**
           * The price defined in UAH.
           */
          uah?: CurrencyOptions.Uah;

          /**
           * The price defined in UGX.
           */
          ugx?: CurrencyOptions.Ugx;

          /**
           * The price defined in USD.
           */
          usd?: CurrencyOptions.Usd;

          /**
           * The price defined in USDC.
           */
          usdc?: CurrencyOptions.Usdc;

          /**
           * The price defined in UYU.
           */
          uyu?: CurrencyOptions.Uyu;

          /**
           * The price defined in UZS.
           */
          uzs?: CurrencyOptions.Uzs;

          /**
           * The price defined in VND.
           */
          vnd?: CurrencyOptions.Vnd;

          /**
           * The price defined in VUV.
           */
          vuv?: CurrencyOptions.Vuv;

          /**
           * The price defined in WST.
           */
          wst?: CurrencyOptions.Wst;

          /**
           * The price defined in XAF.
           */
          xaf?: CurrencyOptions.Xaf;

          /**
           * The price defined in XCD.
           */
          xcd?: CurrencyOptions.Xcd;

          /**
           * The price defined in XOF.
           */
          xof?: CurrencyOptions.Xof;

          /**
           * The price defined in XPF.
           */
          xpf?: CurrencyOptions.Xpf;

          /**
           * The price defined in YER.
           */
          yer?: CurrencyOptions.Yer;

          /**
           * The price defined in ZAR.
           */
          zar?: CurrencyOptions.Zar;

          /**
           * The price defined in ZMW.
           */
          zmw?: CurrencyOptions.Zmw;
        }

        namespace CurrencyOptions {
          interface Aed {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Aed.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Aed.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Aed.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Aed {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Afn {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Afn.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Afn.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Afn.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Afn {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface All {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: All.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: All.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<All.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace All {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Amd {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Amd.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Amd.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Amd.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Amd {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Ang {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Ang.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Ang.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Ang.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Ang {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Aoa {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Aoa.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Aoa.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Aoa.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Aoa {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Ars {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Ars.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Ars.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Ars.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Ars {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Aud {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Aud.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Aud.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Aud.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Aud {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Awg {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Awg.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Awg.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Awg.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Awg {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Azn {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Azn.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Azn.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Azn.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Azn {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Bam {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Bam.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Bam.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Bam.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Bam {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Bbd {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Bbd.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Bbd.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Bbd.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Bbd {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Bdt {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Bdt.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Bdt.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Bdt.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Bdt {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Bgn {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Bgn.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Bgn.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Bgn.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Bgn {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Bhd {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Bhd.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Bhd.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Bhd.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Bhd {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Bif {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Bif.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Bif.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Bif.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Bif {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Bmd {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Bmd.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Bmd.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Bmd.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Bmd {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Bnd {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Bnd.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Bnd.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Bnd.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Bnd {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Bob {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Bob.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Bob.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Bob.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Bob {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Brl {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Brl.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Brl.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Brl.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Brl {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Bsd {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Bsd.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Bsd.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Bsd.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Bsd {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Btn {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Btn.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Btn.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Btn.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Btn {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Bwp {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Bwp.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Bwp.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Bwp.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Bwp {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Byn {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Byn.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Byn.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Byn.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Byn {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Bzd {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Bzd.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Bzd.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Bzd.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Bzd {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Cad {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Cad.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Cad.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Cad.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Cad {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Cdf {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Cdf.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Cdf.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Cdf.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Cdf {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Chf {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Chf.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Chf.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Chf.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Chf {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Clp {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Clp.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Clp.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Clp.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Clp {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Cny {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Cny.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Cny.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Cny.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Cny {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Cop {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Cop.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Cop.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Cop.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Cop {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Crc {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Crc.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Crc.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Crc.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Crc {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Cve {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Cve.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Cve.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Cve.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Cve {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Czk {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Czk.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Czk.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Czk.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Czk {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Djf {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Djf.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Djf.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Djf.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Djf {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Dkk {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Dkk.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Dkk.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Dkk.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Dkk {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Dop {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Dop.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Dop.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Dop.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Dop {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Dzd {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Dzd.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Dzd.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Dzd.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Dzd {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Egp {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Egp.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Egp.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Egp.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Egp {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Etb {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Etb.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Etb.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Etb.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Etb {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Eur {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Eur.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Eur.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Eur.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Eur {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Fjd {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Fjd.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Fjd.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Fjd.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Fjd {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Fkp {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Fkp.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Fkp.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Fkp.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Fkp {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Gbp {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Gbp.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Gbp.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Gbp.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Gbp {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Gel {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Gel.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Gel.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Gel.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Gel {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Ghs {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Ghs.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Ghs.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Ghs.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Ghs {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Gip {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Gip.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Gip.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Gip.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Gip {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Gmd {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Gmd.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Gmd.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Gmd.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Gmd {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Gnf {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Gnf.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Gnf.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Gnf.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Gnf {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Gtq {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Gtq.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Gtq.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Gtq.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Gtq {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Gyd {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Gyd.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Gyd.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Gyd.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Gyd {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Hkd {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Hkd.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Hkd.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Hkd.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Hkd {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Hnl {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Hnl.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Hnl.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Hnl.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Hnl {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Hrk {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Hrk.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Hrk.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Hrk.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Hrk {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Htg {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Htg.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Htg.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Htg.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Htg {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Huf {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Huf.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Huf.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Huf.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Huf {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Idr {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Idr.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Idr.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Idr.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Idr {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Ils {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Ils.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Ils.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Ils.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Ils {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Inr {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Inr.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Inr.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Inr.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Inr {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Isk {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Isk.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Isk.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Isk.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Isk {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Jmd {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Jmd.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Jmd.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Jmd.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Jmd {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Jod {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Jod.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Jod.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Jod.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Jod {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Jpy {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Jpy.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Jpy.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Jpy.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Jpy {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Kes {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Kes.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Kes.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Kes.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Kes {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Kgs {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Kgs.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Kgs.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Kgs.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Kgs {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Khr {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Khr.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Khr.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Khr.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Khr {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Kmf {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Kmf.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Kmf.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Kmf.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Kmf {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Krw {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Krw.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Krw.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Krw.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Krw {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Kwd {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Kwd.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Kwd.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Kwd.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Kwd {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Kyd {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Kyd.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Kyd.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Kyd.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Kyd {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Kzt {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Kzt.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Kzt.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Kzt.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Kzt {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Lak {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Lak.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Lak.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Lak.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Lak {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Lbp {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Lbp.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Lbp.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Lbp.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Lbp {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Lkr {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Lkr.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Lkr.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Lkr.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Lkr {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Lrd {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Lrd.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Lrd.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Lrd.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Lrd {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Lsl {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Lsl.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Lsl.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Lsl.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Lsl {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Mad {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Mad.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Mad.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Mad.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Mad {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Mdl {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Mdl.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Mdl.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Mdl.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Mdl {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Mga {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Mga.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Mga.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Mga.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Mga {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Mkd {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Mkd.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Mkd.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Mkd.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Mkd {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Mmk {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Mmk.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Mmk.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Mmk.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Mmk {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Mnt {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Mnt.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Mnt.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Mnt.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Mnt {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Mop {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Mop.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Mop.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Mop.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Mop {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Mro {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Mro.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Mro.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Mro.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Mro {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Mur {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Mur.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Mur.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Mur.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Mur {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Mvr {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Mvr.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Mvr.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Mvr.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Mvr {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Mwk {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Mwk.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Mwk.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Mwk.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Mwk {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Mxn {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Mxn.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Mxn.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Mxn.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Mxn {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Myr {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Myr.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Myr.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Myr.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Myr {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Mzn {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Mzn.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Mzn.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Mzn.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Mzn {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Nad {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Nad.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Nad.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Nad.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Nad {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Ngn {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Ngn.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Ngn.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Ngn.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Ngn {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Nio {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Nio.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Nio.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Nio.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Nio {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Nok {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Nok.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Nok.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Nok.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Nok {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Npr {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Npr.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Npr.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Npr.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Npr {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Nzd {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Nzd.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Nzd.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Nzd.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Nzd {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Omr {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Omr.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Omr.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Omr.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Omr {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Pab {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Pab.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Pab.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Pab.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Pab {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Pen {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Pen.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Pen.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Pen.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Pen {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Pgk {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Pgk.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Pgk.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Pgk.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Pgk {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Php {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Php.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Php.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Php.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Php {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Pkr {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Pkr.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Pkr.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Pkr.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Pkr {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Pln {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Pln.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Pln.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Pln.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Pln {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Pyg {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Pyg.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Pyg.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Pyg.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Pyg {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Qar {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Qar.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Qar.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Qar.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Qar {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Ron {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Ron.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Ron.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Ron.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Ron {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Rsd {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Rsd.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Rsd.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Rsd.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Rsd {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Rub {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Rub.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Rub.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Rub.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Rub {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Rwf {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Rwf.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Rwf.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Rwf.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Rwf {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Sar {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Sar.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Sar.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Sar.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Sar {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Sbd {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Sbd.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Sbd.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Sbd.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Sbd {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Scr {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Scr.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Scr.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Scr.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Scr {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Sek {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Sek.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Sek.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Sek.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Sek {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Sgd {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Sgd.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Sgd.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Sgd.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Sgd {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Shp {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Shp.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Shp.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Shp.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Shp {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Sll {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Sll.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Sll.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Sll.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Sll {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Sos {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Sos.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Sos.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Sos.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Sos {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Srd {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Srd.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Srd.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Srd.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Srd {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Std {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Std.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Std.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Std.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Std {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Szl {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Szl.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Szl.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Szl.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Szl {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Thb {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Thb.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Thb.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Thb.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Thb {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Tjs {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Tjs.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Tjs.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Tjs.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Tjs {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Tnd {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Tnd.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Tnd.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Tnd.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Tnd {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Top {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Top.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Top.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Top.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Top {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Try {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Try.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Try.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Try.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Try {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Ttd {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Ttd.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Ttd.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Ttd.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Ttd {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Twd {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Twd.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Twd.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Twd.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Twd {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Tzs {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Tzs.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Tzs.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Tzs.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Tzs {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Uah {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Uah.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Uah.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Uah.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Uah {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Ugx {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Ugx.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Ugx.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Ugx.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Ugx {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Usd {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Usd.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Usd.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Usd.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Usd {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Usdc {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Usdc.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Usdc.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Usdc.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Usdc {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Uyu {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Uyu.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Uyu.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Uyu.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Uyu {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Uzs {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Uzs.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Uzs.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Uzs.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Uzs {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Vnd {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Vnd.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Vnd.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Vnd.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Vnd {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Vuv {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Vuv.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Vuv.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Vuv.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Vuv {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Wst {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Wst.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Wst.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Wst.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Wst {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Xaf {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Xaf.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Xaf.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Xaf.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Xaf {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Xcd {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Xcd.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Xcd.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Xcd.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Xcd {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Xof {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Xof.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Xof.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Xof.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Xof {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Xpf {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Xpf.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Xpf.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Xpf.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Xpf {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Yer {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Yer.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Yer.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Yer.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Yer {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Zar {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Zar.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Zar.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Zar.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Zar {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }

          interface Zmw {
            /**
             * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
             */
            custom_unit_amount?: Zmw.CustomUnitAmount;

            /**
             * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: Zmw.TaxBehavior;

            /**
             * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
             */
            tiers?: Array<Zmw.Tier>;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
             */
            unit_amount?: number;

            /**
             * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
             */
            unit_amount_decimal?: string;
          }

          namespace Zmw {
            interface CustomUnitAmount {
              /**
               * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
               */
              enabled: boolean;

              /**
               * The maximum unit amount the customer can specify for this item.
               */
              maximum?: number;

              /**
               * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
               */
              minimum?: number;

              /**
               * The starting unit amount which can be updated by the customer.
               */
              preset?: number;
            }

            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

            interface Tier {
              /**
               * The flat billing amount for an entire tier, regardless of the number of units in the tier.
               */
              flat_amount?: number;

              /**
               * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
               */
              flat_amount_decimal?: string;

              /**
               * The per unit billing amount for each individual unit for which this tier applies.
               */
              unit_amount?: number;

              /**
               * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
               */
              unit_amount_decimal?: string;

              /**
               * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
               */
              up_to: 'inf' | number;
            }
          }
        }

        interface Recurring {
          /**
           * Specifies billing frequency. Either `day`, `week`, `month` or `year`.
           */
          interval: Recurring.Interval;

          /**
           * The number of intervals between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks).
           */
          interval_count?: number;
        }

        namespace Recurring {
          type Interval = 'day' | 'month' | 'week' | 'year';
        }

        type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
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

      type Type = 'good' | 'service';
    }

    interface ProductRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface ProductUpdateParams {
      /**
       * Whether the product is available for purchase.
       */
      active?: boolean;

      /**
       * A list of up to 5 alphanumeric attributes that each SKU can provide values for (e.g., `["color", "size"]`). If a value for `attributes` is specified, the list specified will replace the existing attributes list on this product. Any attributes not present after the update will be deleted from the SKUs for this product.
       */
      attributes?: Stripe.Emptyable<Array<string>>;

      /**
       * A short one-line description of the product, meant to be displayable to the customer. May only be set if `type=good`.
       */
      caption?: string;

      /**
       * An array of Connect application names or identifiers that should not be able to order the SKUs for this product. May only be set if `type=good`.
       */
      deactivate_on?: Array<string>;

      /**
       * The ID of the [Price](https://stripe.com/docs/api/prices) object that is the default price for this product.
       */
      default_price?: string;

      /**
       * The product's description, meant to be displayable to the customer. Use this field to optionally store a long form explanation of the product being sold for your own rendering purposes.
       */
      description?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * A list of up to 8 URLs of images for this product, meant to be displayable to the customer.
       */
      images?: Stripe.Emptyable<Array<string>>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * The product's name, meant to be displayable to the customer.
       */
      name?: string;

      /**
       * The dimensions of this product for shipping purposes.
       */
      package_dimensions?: Stripe.Emptyable<
        ProductUpdateParams.PackageDimensions
      >;

      /**
       * Whether this product is shipped (i.e., physical goods).
       */
      shippable?: boolean;

      /**
       * An arbitrary string to be displayed on your customer's credit card or bank statement. While most banks display this information consistently, some may display it incorrectly or not at all.
       *
       * This may be up to 22 characters. The statement description may not include `<`, `>`, `\`, `"`, `'` characters, and will appear on your customer's statement in capital letters. Non-ASCII characters are automatically stripped.
       *  It must contain at least one letter. May only be set if `type=service`.
       */
      statement_descriptor?: string;

      /**
       * A [tax code](https://stripe.com/docs/tax/tax-categories) ID.
       */
      tax_code?: Stripe.Emptyable<string>;

      /**
       * A label that represents units of this product in Stripe and on customers' receipts and invoices. When set, this will be included in associated invoice line item descriptions. May only be set if `type=service`.
       */
      unit_label?: string;

      /**
       * A URL of a publicly-accessible webpage for this product.
       */
      url?: Stripe.Emptyable<string>;
    }

    namespace ProductUpdateParams {
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

    interface ProductListParams extends PaginationParams {
      /**
       * Only return products that are active or inactive (e.g., pass `false` to list all inactive products).
       */
      active?: boolean;

      /**
       * Only return products that were created during the given date interval.
       */
      created?: Stripe.RangeQueryParam | number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Only return products with the given IDs.
       */
      ids?: Array<string>;

      /**
       * Only return products that can be shipped (i.e., physical, not digital products).
       */
      shippable?: boolean;

      /**
       * Only return products of this type.
       */
      type?: ProductListParams.Type;

      /**
       * Only return products with the given url.
       */
      url?: string;
    }

    namespace ProductListParams {
      type Type = 'good' | 'service';
    }

    interface ProductDeleteParams {}

    interface ProductSearchParams {
      /**
       * The search query string. See [search query language](https://stripe.com/docs/search#search-query-language) and the list of supported [query fields for products](https://stripe.com/docs/search#query-fields-for-products).
       */
      query: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
       */
      limit?: number;

      /**
       * A cursor for pagination across multiple pages of results. Don't include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results.
       */
      page?: string;
    }

    class ProductsResource {
      /**
       * Creates a new product object.
       */
      create(
        params: ProductCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Product>>;

      /**
       * Retrieves the details of an existing product. Supply the unique product ID from either a product creation request or the product list, and Stripe will return the corresponding product information.
       */
      retrieve(
        id: string,
        params?: ProductRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Product>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Product>>;

      /**
       * Updates the specific product by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
       */
      update(
        id: string,
        params?: ProductUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Product>>;

      /**
       * Returns a list of your products. The products are returned sorted by creation date, with the most recently created products appearing first.
       */
      list(
        params?: ProductListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.Product>;
      list(options?: RequestOptions): ApiListPromise<Stripe.Product>;

      /**
       * Delete a product. Deleting a product is only possible if it has no prices associated with it. Additionally, deleting a product with type=good is only possible if it has no SKUs associated with it.
       */
      del(
        id: string,
        params?: ProductDeleteParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.DeletedProduct>>;
      del(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.DeletedProduct>>;

      /**
       * Search for products you've previously created using Stripe's [Search Query Language](https://stripe.com/docs/search#search-query-language).
       * Don't use search in read-after-write flows where strict consistency is necessary. Under normal operating
       * conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
       * to an hour behind during outages. Search functionality is not available to merchants in India.
       */
      search(
        params: ProductSearchParams,
        options?: RequestOptions
      ): ApiSearchResultPromise<Stripe.Product>;
    }
  }
}
