// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * The PromotionCode object.
     */
    interface PromotionCode {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'promotion_code';

      /**
       * Whether the promotion code is currently active. A promotion code is only active if the coupon is also valid.
       */
      active: boolean;

      /**
       * The customer-facing code. Regardless of case, this code must be unique across all active promotion codes for each customer.
       */
      code: string;

      /**
       * A coupon contains information about a percent-off or amount-off discount you
       * might want to apply to a customer. Coupons may be applied to [subscriptions](https://stripe.com/docs/api#subscriptions), [invoices](https://stripe.com/docs/api#invoices),
       * [checkout sessions](https://stripe.com/docs/api/checkout/sessions), [quotes](https://stripe.com/docs/api#quotes), and more. Coupons do not work with conventional one-off [charges](https://stripe.com/docs/api#create_charge) or [payment intents](https://stripe.com/docs/api/payment_intents).
       */
      coupon: Stripe.Coupon;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * The customer that this promotion code can be used by.
       */
      customer: string | Stripe.Customer | Stripe.DeletedCustomer | null;

      /**
       * Date at which the promotion code can no longer be redeemed.
       */
      expires_at: number | null;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Maximum number of times this promotion code can be redeemed.
       */
      max_redemptions: number | null;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata | null;

      restrictions: PromotionCode.Restrictions;

      /**
       * Number of times this promotion code has been used.
       */
      times_redeemed: number;
    }

    namespace PromotionCode {
      interface Restrictions {
        currency_options?: Restrictions.CurrencyOptions;

        /**
         * A Boolean indicating if the Promotion Code should only be redeemed for Customers without any successful payments or invoices
         */
        first_time_transaction: boolean;

        /**
         * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
         */
        minimum_amount: number | null;

        /**
         * Three-letter [ISO code](https://stripe.com/docs/currencies) for minimum_amount
         */
        minimum_amount_currency: string | null;
      }

      namespace Restrictions {
        interface CurrencyOptions {
          aed?: CurrencyOptions.Aed;

          afn?: CurrencyOptions.Afn;

          all?: CurrencyOptions.All;

          amd?: CurrencyOptions.Amd;

          ang?: CurrencyOptions.Ang;

          aoa?: CurrencyOptions.Aoa;

          ars?: CurrencyOptions.Ars;

          aud?: CurrencyOptions.Aud;

          awg?: CurrencyOptions.Awg;

          azn?: CurrencyOptions.Azn;

          bam?: CurrencyOptions.Bam;

          bbd?: CurrencyOptions.Bbd;

          bdt?: CurrencyOptions.Bdt;

          bgn?: CurrencyOptions.Bgn;

          bhd?: CurrencyOptions.Bhd;

          bif?: CurrencyOptions.Bif;

          bmd?: CurrencyOptions.Bmd;

          bnd?: CurrencyOptions.Bnd;

          bob?: CurrencyOptions.Bob;

          brl?: CurrencyOptions.Brl;

          bsd?: CurrencyOptions.Bsd;

          btn?: CurrencyOptions.Btn;

          bwp?: CurrencyOptions.Bwp;

          byn?: CurrencyOptions.Byn;

          bzd?: CurrencyOptions.Bzd;

          cad?: CurrencyOptions.Cad;

          cdf?: CurrencyOptions.Cdf;

          chf?: CurrencyOptions.Chf;

          clp?: CurrencyOptions.Clp;

          cny?: CurrencyOptions.Cny;

          cop?: CurrencyOptions.Cop;

          crc?: CurrencyOptions.Crc;

          cve?: CurrencyOptions.Cve;

          czk?: CurrencyOptions.Czk;

          djf?: CurrencyOptions.Djf;

          dkk?: CurrencyOptions.Dkk;

          dop?: CurrencyOptions.Dop;

          dzd?: CurrencyOptions.Dzd;

          egp?: CurrencyOptions.Egp;

          etb?: CurrencyOptions.Etb;

          eur?: CurrencyOptions.Eur;

          fjd?: CurrencyOptions.Fjd;

          fkp?: CurrencyOptions.Fkp;

          gbp?: CurrencyOptions.Gbp;

          gel?: CurrencyOptions.Gel;

          ghs?: CurrencyOptions.Ghs;

          gip?: CurrencyOptions.Gip;

          gmd?: CurrencyOptions.Gmd;

          gnf?: CurrencyOptions.Gnf;

          gtq?: CurrencyOptions.Gtq;

          gyd?: CurrencyOptions.Gyd;

          hkd?: CurrencyOptions.Hkd;

          hnl?: CurrencyOptions.Hnl;

          hrk?: CurrencyOptions.Hrk;

          htg?: CurrencyOptions.Htg;

          huf?: CurrencyOptions.Huf;

          idr?: CurrencyOptions.Idr;

          ils?: CurrencyOptions.Ils;

          inr?: CurrencyOptions.Inr;

          isk?: CurrencyOptions.Isk;

          jmd?: CurrencyOptions.Jmd;

          jod?: CurrencyOptions.Jod;

          jpy?: CurrencyOptions.Jpy;

          kes?: CurrencyOptions.Kes;

          kgs?: CurrencyOptions.Kgs;

          khr?: CurrencyOptions.Khr;

          kmf?: CurrencyOptions.Kmf;

          krw?: CurrencyOptions.Krw;

          kwd?: CurrencyOptions.Kwd;

          kyd?: CurrencyOptions.Kyd;

          kzt?: CurrencyOptions.Kzt;

          lak?: CurrencyOptions.Lak;

          lbp?: CurrencyOptions.Lbp;

          lkr?: CurrencyOptions.Lkr;

          lrd?: CurrencyOptions.Lrd;

          lsl?: CurrencyOptions.Lsl;

          mad?: CurrencyOptions.Mad;

          mdl?: CurrencyOptions.Mdl;

          mga?: CurrencyOptions.Mga;

          mkd?: CurrencyOptions.Mkd;

          mmk?: CurrencyOptions.Mmk;

          mnt?: CurrencyOptions.Mnt;

          mop?: CurrencyOptions.Mop;

          mro?: CurrencyOptions.Mro;

          mur?: CurrencyOptions.Mur;

          mvr?: CurrencyOptions.Mvr;

          mwk?: CurrencyOptions.Mwk;

          mxn?: CurrencyOptions.Mxn;

          myr?: CurrencyOptions.Myr;

          mzn?: CurrencyOptions.Mzn;

          nad?: CurrencyOptions.Nad;

          ngn?: CurrencyOptions.Ngn;

          nio?: CurrencyOptions.Nio;

          nok?: CurrencyOptions.Nok;

          npr?: CurrencyOptions.Npr;

          nzd?: CurrencyOptions.Nzd;

          omr?: CurrencyOptions.Omr;

          pab?: CurrencyOptions.Pab;

          pen?: CurrencyOptions.Pen;

          pgk?: CurrencyOptions.Pgk;

          php?: CurrencyOptions.Php;

          pkr?: CurrencyOptions.Pkr;

          pln?: CurrencyOptions.Pln;

          pyg?: CurrencyOptions.Pyg;

          qar?: CurrencyOptions.Qar;

          ron?: CurrencyOptions.Ron;

          rsd?: CurrencyOptions.Rsd;

          rub?: CurrencyOptions.Rub;

          rwf?: CurrencyOptions.Rwf;

          sar?: CurrencyOptions.Sar;

          sbd?: CurrencyOptions.Sbd;

          scr?: CurrencyOptions.Scr;

          sek?: CurrencyOptions.Sek;

          sgd?: CurrencyOptions.Sgd;

          shp?: CurrencyOptions.Shp;

          sll?: CurrencyOptions.Sll;

          sos?: CurrencyOptions.Sos;

          srd?: CurrencyOptions.Srd;

          std?: CurrencyOptions.Std;

          szl?: CurrencyOptions.Szl;

          thb?: CurrencyOptions.Thb;

          tjs?: CurrencyOptions.Tjs;

          tnd?: CurrencyOptions.Tnd;

          top?: CurrencyOptions.Top;

          try?: CurrencyOptions.Try;

          ttd?: CurrencyOptions.Ttd;

          twd?: CurrencyOptions.Twd;

          tzs?: CurrencyOptions.Tzs;

          uah?: CurrencyOptions.Uah;

          ugx?: CurrencyOptions.Ugx;

          usd?: CurrencyOptions.Usd;

          usdc?: CurrencyOptions.Usdc;

          uyu?: CurrencyOptions.Uyu;

          uzs?: CurrencyOptions.Uzs;

          vnd?: CurrencyOptions.Vnd;

          vuv?: CurrencyOptions.Vuv;

          wst?: CurrencyOptions.Wst;

          xaf?: CurrencyOptions.Xaf;

          xcd?: CurrencyOptions.Xcd;

          xof?: CurrencyOptions.Xof;

          xpf?: CurrencyOptions.Xpf;

          yer?: CurrencyOptions.Yer;

          zar?: CurrencyOptions.Zar;

          zmw?: CurrencyOptions.Zmw;
        }

        namespace CurrencyOptions {
          interface Aed {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Afn {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface All {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Amd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Ang {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Aoa {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Ars {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Aud {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Awg {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Azn {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Bam {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Bbd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Bdt {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Bgn {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Bhd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Bif {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Bmd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Bnd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Bob {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Brl {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Bsd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Btn {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Bwp {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Byn {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Bzd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Cad {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Cdf {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Chf {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Clp {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Cny {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Cop {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Crc {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Cve {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Czk {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Djf {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Dkk {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Dop {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Dzd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Egp {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Etb {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Eur {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Fjd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Fkp {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Gbp {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Gel {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Ghs {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Gip {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Gmd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Gnf {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Gtq {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Gyd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Hkd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Hnl {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Hrk {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Htg {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Huf {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Idr {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Ils {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Inr {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Isk {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Jmd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Jod {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Jpy {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Kes {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Kgs {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Khr {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Kmf {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Krw {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Kwd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Kyd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Kzt {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Lak {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Lbp {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Lkr {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Lrd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Lsl {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Mad {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Mdl {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Mga {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Mkd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Mmk {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Mnt {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Mop {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Mro {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Mur {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Mvr {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Mwk {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Mxn {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Myr {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Mzn {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Nad {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Ngn {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Nio {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Nok {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Npr {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Nzd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Omr {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Pab {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Pen {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Pgk {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Php {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Pkr {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Pln {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Pyg {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Qar {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Ron {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Rsd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Rub {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Rwf {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Sar {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Sbd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Scr {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Sek {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Sgd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Shp {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Sll {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Sos {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Srd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Std {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Szl {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Thb {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Tjs {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Tnd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Top {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Try {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Ttd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Twd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Tzs {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Uah {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Ugx {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Usd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Usdc {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Uyu {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Uzs {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Vnd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Vuv {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Wst {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Xaf {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Xcd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Xof {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Xpf {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Yer {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Zar {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }

          interface Zmw {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount: number;
          }
        }
      }
    }

    interface PromotionCodeCreateParams {
      /**
       * The coupon for this promotion code.
       */
      coupon: string;

      /**
       * Whether the promotion code is currently active.
       */
      active?: boolean;

      /**
       * The customer-facing code. Regardless of case, this code must be unique across all active promotion codes for a specific customer. If left blank, we will generate one automatically.
       */
      code?: string;

      /**
       * The customer that this promotion code can be used by. If not set, the promotion code can be used by all customers.
       */
      customer?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * The timestamp at which this promotion code will expire. If the coupon has specified a `redeems_by`, then this value cannot be after the coupon's `redeems_by`.
       */
      expires_at?: number;

      /**
       * A positive integer specifying the number of times the promotion code can be redeemed. If the coupon has specified a `max_redemptions`, then this value cannot be greater than the coupon's `max_redemptions`.
       */
      max_redemptions?: number;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.MetadataParam;

      /**
       * Settings that restrict the redemption of the promotion code.
       */
      restrictions?: PromotionCodeCreateParams.Restrictions;
    }

    namespace PromotionCodeCreateParams {
      interface Restrictions {
        /**
         * Promotion codes defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
         */
        currency_options?: Restrictions.CurrencyOptions;

        /**
         * A Boolean indicating if the Promotion Code should only be redeemed for Customers without any successful payments or invoices
         */
        first_time_transaction?: boolean;

        /**
         * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
         */
        minimum_amount?: number;

        /**
         * Three-letter [ISO code](https://stripe.com/docs/currencies) for minimum_amount
         */
        minimum_amount_currency?: string;
      }

      namespace Restrictions {
        interface CurrencyOptions {
          /**
           * Promotion code defined in AED.
           */
          aed?: CurrencyOptions.Aed;

          /**
           * Promotion code defined in AFN.
           */
          afn?: CurrencyOptions.Afn;

          /**
           * Promotion code defined in ALL.
           */
          all?: CurrencyOptions.All;

          /**
           * Promotion code defined in AMD.
           */
          amd?: CurrencyOptions.Amd;

          /**
           * Promotion code defined in ANG.
           */
          ang?: CurrencyOptions.Ang;

          /**
           * Promotion code defined in AOA.
           */
          aoa?: CurrencyOptions.Aoa;

          /**
           * Promotion code defined in ARS.
           */
          ars?: CurrencyOptions.Ars;

          /**
           * Promotion code defined in AUD.
           */
          aud?: CurrencyOptions.Aud;

          /**
           * Promotion code defined in AWG.
           */
          awg?: CurrencyOptions.Awg;

          /**
           * Promotion code defined in AZN.
           */
          azn?: CurrencyOptions.Azn;

          /**
           * Promotion code defined in BAM.
           */
          bam?: CurrencyOptions.Bam;

          /**
           * Promotion code defined in BBD.
           */
          bbd?: CurrencyOptions.Bbd;

          /**
           * Promotion code defined in BDT.
           */
          bdt?: CurrencyOptions.Bdt;

          /**
           * Promotion code defined in BGN.
           */
          bgn?: CurrencyOptions.Bgn;

          /**
           * Promotion code defined in BHD.
           */
          bhd?: CurrencyOptions.Bhd;

          /**
           * Promotion code defined in BIF.
           */
          bif?: CurrencyOptions.Bif;

          /**
           * Promotion code defined in BMD.
           */
          bmd?: CurrencyOptions.Bmd;

          /**
           * Promotion code defined in BND.
           */
          bnd?: CurrencyOptions.Bnd;

          /**
           * Promotion code defined in BOB.
           */
          bob?: CurrencyOptions.Bob;

          /**
           * Promotion code defined in BRL.
           */
          brl?: CurrencyOptions.Brl;

          /**
           * Promotion code defined in BSD.
           */
          bsd?: CurrencyOptions.Bsd;

          /**
           * Promotion code defined in BTN.
           */
          btn?: CurrencyOptions.Btn;

          /**
           * Promotion code defined in BWP.
           */
          bwp?: CurrencyOptions.Bwp;

          /**
           * Promotion code defined in BYN.
           */
          byn?: CurrencyOptions.Byn;

          /**
           * Promotion code defined in BZD.
           */
          bzd?: CurrencyOptions.Bzd;

          /**
           * Promotion code defined in CAD.
           */
          cad?: CurrencyOptions.Cad;

          /**
           * Promotion code defined in CDF.
           */
          cdf?: CurrencyOptions.Cdf;

          /**
           * Promotion code defined in CHF.
           */
          chf?: CurrencyOptions.Chf;

          /**
           * Promotion code defined in CLP.
           */
          clp?: CurrencyOptions.Clp;

          /**
           * Promotion code defined in CNY.
           */
          cny?: CurrencyOptions.Cny;

          /**
           * Promotion code defined in COP.
           */
          cop?: CurrencyOptions.Cop;

          /**
           * Promotion code defined in CRC.
           */
          crc?: CurrencyOptions.Crc;

          /**
           * Promotion code defined in CVE.
           */
          cve?: CurrencyOptions.Cve;

          /**
           * Promotion code defined in CZK.
           */
          czk?: CurrencyOptions.Czk;

          /**
           * Promotion code defined in DJF.
           */
          djf?: CurrencyOptions.Djf;

          /**
           * Promotion code defined in DKK.
           */
          dkk?: CurrencyOptions.Dkk;

          /**
           * Promotion code defined in DOP.
           */
          dop?: CurrencyOptions.Dop;

          /**
           * Promotion code defined in DZD.
           */
          dzd?: CurrencyOptions.Dzd;

          /**
           * Promotion code defined in EGP.
           */
          egp?: CurrencyOptions.Egp;

          /**
           * Promotion code defined in ETB.
           */
          etb?: CurrencyOptions.Etb;

          /**
           * Promotion code defined in EUR.
           */
          eur?: CurrencyOptions.Eur;

          /**
           * Promotion code defined in FJD.
           */
          fjd?: CurrencyOptions.Fjd;

          /**
           * Promotion code defined in FKP.
           */
          fkp?: CurrencyOptions.Fkp;

          /**
           * Promotion code defined in GBP.
           */
          gbp?: CurrencyOptions.Gbp;

          /**
           * Promotion code defined in GEL.
           */
          gel?: CurrencyOptions.Gel;

          /**
           * Promotion code defined in GHS.
           */
          ghs?: CurrencyOptions.Ghs;

          /**
           * Promotion code defined in GIP.
           */
          gip?: CurrencyOptions.Gip;

          /**
           * Promotion code defined in GMD.
           */
          gmd?: CurrencyOptions.Gmd;

          /**
           * Promotion code defined in GNF.
           */
          gnf?: CurrencyOptions.Gnf;

          /**
           * Promotion code defined in GTQ.
           */
          gtq?: CurrencyOptions.Gtq;

          /**
           * Promotion code defined in GYD.
           */
          gyd?: CurrencyOptions.Gyd;

          /**
           * Promotion code defined in HKD.
           */
          hkd?: CurrencyOptions.Hkd;

          /**
           * Promotion code defined in HNL.
           */
          hnl?: CurrencyOptions.Hnl;

          /**
           * Promotion code defined in HRK.
           */
          hrk?: CurrencyOptions.Hrk;

          /**
           * Promotion code defined in HTG.
           */
          htg?: CurrencyOptions.Htg;

          /**
           * Promotion code defined in HUF.
           */
          huf?: CurrencyOptions.Huf;

          /**
           * Promotion code defined in IDR.
           */
          idr?: CurrencyOptions.Idr;

          /**
           * Promotion code defined in ILS.
           */
          ils?: CurrencyOptions.Ils;

          /**
           * Promotion code defined in INR.
           */
          inr?: CurrencyOptions.Inr;

          /**
           * Promotion code defined in ISK.
           */
          isk?: CurrencyOptions.Isk;

          /**
           * Promotion code defined in JMD.
           */
          jmd?: CurrencyOptions.Jmd;

          /**
           * Promotion code defined in JOD.
           */
          jod?: CurrencyOptions.Jod;

          /**
           * Promotion code defined in JPY.
           */
          jpy?: CurrencyOptions.Jpy;

          /**
           * Promotion code defined in KES.
           */
          kes?: CurrencyOptions.Kes;

          /**
           * Promotion code defined in KGS.
           */
          kgs?: CurrencyOptions.Kgs;

          /**
           * Promotion code defined in KHR.
           */
          khr?: CurrencyOptions.Khr;

          /**
           * Promotion code defined in KMF.
           */
          kmf?: CurrencyOptions.Kmf;

          /**
           * Promotion code defined in KRW.
           */
          krw?: CurrencyOptions.Krw;

          /**
           * Promotion code defined in KWD.
           */
          kwd?: CurrencyOptions.Kwd;

          /**
           * Promotion code defined in KYD.
           */
          kyd?: CurrencyOptions.Kyd;

          /**
           * Promotion code defined in KZT.
           */
          kzt?: CurrencyOptions.Kzt;

          /**
           * Promotion code defined in LAK.
           */
          lak?: CurrencyOptions.Lak;

          /**
           * Promotion code defined in LBP.
           */
          lbp?: CurrencyOptions.Lbp;

          /**
           * Promotion code defined in LKR.
           */
          lkr?: CurrencyOptions.Lkr;

          /**
           * Promotion code defined in LRD.
           */
          lrd?: CurrencyOptions.Lrd;

          /**
           * Promotion code defined in LSL.
           */
          lsl?: CurrencyOptions.Lsl;

          /**
           * Promotion code defined in MAD.
           */
          mad?: CurrencyOptions.Mad;

          /**
           * Promotion code defined in MDL.
           */
          mdl?: CurrencyOptions.Mdl;

          /**
           * Promotion code defined in MGA.
           */
          mga?: CurrencyOptions.Mga;

          /**
           * Promotion code defined in MKD.
           */
          mkd?: CurrencyOptions.Mkd;

          /**
           * Promotion code defined in MMK.
           */
          mmk?: CurrencyOptions.Mmk;

          /**
           * Promotion code defined in MNT.
           */
          mnt?: CurrencyOptions.Mnt;

          /**
           * Promotion code defined in MOP.
           */
          mop?: CurrencyOptions.Mop;

          /**
           * Promotion code defined in MRO.
           */
          mro?: CurrencyOptions.Mro;

          /**
           * Promotion code defined in MUR.
           */
          mur?: CurrencyOptions.Mur;

          /**
           * Promotion code defined in MVR.
           */
          mvr?: CurrencyOptions.Mvr;

          /**
           * Promotion code defined in MWK.
           */
          mwk?: CurrencyOptions.Mwk;

          /**
           * Promotion code defined in MXN.
           */
          mxn?: CurrencyOptions.Mxn;

          /**
           * Promotion code defined in MYR.
           */
          myr?: CurrencyOptions.Myr;

          /**
           * Promotion code defined in MZN.
           */
          mzn?: CurrencyOptions.Mzn;

          /**
           * Promotion code defined in NAD.
           */
          nad?: CurrencyOptions.Nad;

          /**
           * Promotion code defined in NGN.
           */
          ngn?: CurrencyOptions.Ngn;

          /**
           * Promotion code defined in NIO.
           */
          nio?: CurrencyOptions.Nio;

          /**
           * Promotion code defined in NOK.
           */
          nok?: CurrencyOptions.Nok;

          /**
           * Promotion code defined in NPR.
           */
          npr?: CurrencyOptions.Npr;

          /**
           * Promotion code defined in NZD.
           */
          nzd?: CurrencyOptions.Nzd;

          /**
           * Promotion code defined in OMR.
           */
          omr?: CurrencyOptions.Omr;

          /**
           * Promotion code defined in PAB.
           */
          pab?: CurrencyOptions.Pab;

          /**
           * Promotion code defined in PEN.
           */
          pen?: CurrencyOptions.Pen;

          /**
           * Promotion code defined in PGK.
           */
          pgk?: CurrencyOptions.Pgk;

          /**
           * Promotion code defined in PHP.
           */
          php?: CurrencyOptions.Php;

          /**
           * Promotion code defined in PKR.
           */
          pkr?: CurrencyOptions.Pkr;

          /**
           * Promotion code defined in PLN.
           */
          pln?: CurrencyOptions.Pln;

          /**
           * Promotion code defined in PYG.
           */
          pyg?: CurrencyOptions.Pyg;

          /**
           * Promotion code defined in QAR.
           */
          qar?: CurrencyOptions.Qar;

          /**
           * Promotion code defined in RON.
           */
          ron?: CurrencyOptions.Ron;

          /**
           * Promotion code defined in RSD.
           */
          rsd?: CurrencyOptions.Rsd;

          /**
           * Promotion code defined in RUB.
           */
          rub?: CurrencyOptions.Rub;

          /**
           * Promotion code defined in RWF.
           */
          rwf?: CurrencyOptions.Rwf;

          /**
           * Promotion code defined in SAR.
           */
          sar?: CurrencyOptions.Sar;

          /**
           * Promotion code defined in SBD.
           */
          sbd?: CurrencyOptions.Sbd;

          /**
           * Promotion code defined in SCR.
           */
          scr?: CurrencyOptions.Scr;

          /**
           * Promotion code defined in SEK.
           */
          sek?: CurrencyOptions.Sek;

          /**
           * Promotion code defined in SGD.
           */
          sgd?: CurrencyOptions.Sgd;

          /**
           * Promotion code defined in SHP.
           */
          shp?: CurrencyOptions.Shp;

          /**
           * Promotion code defined in SLL.
           */
          sll?: CurrencyOptions.Sll;

          /**
           * Promotion code defined in SOS.
           */
          sos?: CurrencyOptions.Sos;

          /**
           * Promotion code defined in SRD.
           */
          srd?: CurrencyOptions.Srd;

          /**
           * Promotion code defined in STD.
           */
          std?: CurrencyOptions.Std;

          /**
           * Promotion code defined in SZL.
           */
          szl?: CurrencyOptions.Szl;

          /**
           * Promotion code defined in THB.
           */
          thb?: CurrencyOptions.Thb;

          /**
           * Promotion code defined in TJS.
           */
          tjs?: CurrencyOptions.Tjs;

          /**
           * Promotion code defined in TND.
           */
          tnd?: CurrencyOptions.Tnd;

          /**
           * Promotion code defined in TOP.
           */
          top?: CurrencyOptions.Top;

          /**
           * Promotion code defined in TRY.
           */
          try?: CurrencyOptions.Try;

          /**
           * Promotion code defined in TTD.
           */
          ttd?: CurrencyOptions.Ttd;

          /**
           * Promotion code defined in TWD.
           */
          twd?: CurrencyOptions.Twd;

          /**
           * Promotion code defined in TZS.
           */
          tzs?: CurrencyOptions.Tzs;

          /**
           * Promotion code defined in UAH.
           */
          uah?: CurrencyOptions.Uah;

          /**
           * Promotion code defined in UGX.
           */
          ugx?: CurrencyOptions.Ugx;

          /**
           * Promotion code defined in USD.
           */
          usd?: CurrencyOptions.Usd;

          /**
           * Promotion code defined in USDC.
           */
          usdc?: CurrencyOptions.Usdc;

          /**
           * Promotion code defined in UYU.
           */
          uyu?: CurrencyOptions.Uyu;

          /**
           * Promotion code defined in UZS.
           */
          uzs?: CurrencyOptions.Uzs;

          /**
           * Promotion code defined in VND.
           */
          vnd?: CurrencyOptions.Vnd;

          /**
           * Promotion code defined in VUV.
           */
          vuv?: CurrencyOptions.Vuv;

          /**
           * Promotion code defined in WST.
           */
          wst?: CurrencyOptions.Wst;

          /**
           * Promotion code defined in XAF.
           */
          xaf?: CurrencyOptions.Xaf;

          /**
           * Promotion code defined in XCD.
           */
          xcd?: CurrencyOptions.Xcd;

          /**
           * Promotion code defined in XOF.
           */
          xof?: CurrencyOptions.Xof;

          /**
           * Promotion code defined in XPF.
           */
          xpf?: CurrencyOptions.Xpf;

          /**
           * Promotion code defined in YER.
           */
          yer?: CurrencyOptions.Yer;

          /**
           * Promotion code defined in ZAR.
           */
          zar?: CurrencyOptions.Zar;

          /**
           * Promotion code defined in ZMW.
           */
          zmw?: CurrencyOptions.Zmw;
        }

        namespace CurrencyOptions {
          interface Aed {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Afn {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface All {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Amd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Ang {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Aoa {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Ars {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Aud {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Awg {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Azn {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Bam {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Bbd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Bdt {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Bgn {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Bhd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Bif {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Bmd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Bnd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Bob {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Brl {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Bsd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Btn {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Bwp {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Byn {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Bzd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Cad {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Cdf {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Chf {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Clp {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Cny {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Cop {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Crc {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Cve {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Czk {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Djf {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Dkk {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Dop {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Dzd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Egp {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Etb {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Eur {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Fjd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Fkp {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Gbp {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Gel {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Ghs {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Gip {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Gmd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Gnf {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Gtq {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Gyd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Hkd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Hnl {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Hrk {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Htg {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Huf {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Idr {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Ils {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Inr {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Isk {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Jmd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Jod {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Jpy {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Kes {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Kgs {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Khr {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Kmf {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Krw {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Kwd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Kyd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Kzt {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Lak {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Lbp {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Lkr {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Lrd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Lsl {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Mad {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Mdl {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Mga {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Mkd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Mmk {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Mnt {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Mop {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Mro {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Mur {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Mvr {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Mwk {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Mxn {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Myr {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Mzn {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Nad {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Ngn {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Nio {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Nok {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Npr {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Nzd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Omr {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Pab {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Pen {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Pgk {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Php {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Pkr {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Pln {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Pyg {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Qar {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Ron {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Rsd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Rub {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Rwf {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Sar {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Sbd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Scr {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Sek {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Sgd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Shp {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Sll {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Sos {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Srd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Std {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Szl {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Thb {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Tjs {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Tnd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Top {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Try {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Ttd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Twd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Tzs {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Uah {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Ugx {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Usd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Usdc {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Uyu {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Uzs {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Vnd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Vuv {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Wst {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Xaf {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Xcd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Xof {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Xpf {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Yer {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Zar {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Zmw {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }
        }
      }
    }

    interface PromotionCodeRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface PromotionCodeUpdateParams {
      /**
       * Whether the promotion code is currently active. A promotion code can only be reactivated when the coupon is still valid and the promotion code is otherwise redeemable.
       */
      active?: boolean;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * Settings that restrict the redemption of the promotion code.
       */
      restrictions?: PromotionCodeUpdateParams.Restrictions;
    }

    namespace PromotionCodeUpdateParams {
      interface Restrictions {
        /**
         * Promotion codes defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
         */
        currency_options?: Restrictions.CurrencyOptions;
      }

      namespace Restrictions {
        interface CurrencyOptions {
          /**
           * Promotion code defined in AED.
           */
          aed?: CurrencyOptions.Aed;

          /**
           * Promotion code defined in AFN.
           */
          afn?: CurrencyOptions.Afn;

          /**
           * Promotion code defined in ALL.
           */
          all?: CurrencyOptions.All;

          /**
           * Promotion code defined in AMD.
           */
          amd?: CurrencyOptions.Amd;

          /**
           * Promotion code defined in ANG.
           */
          ang?: CurrencyOptions.Ang;

          /**
           * Promotion code defined in AOA.
           */
          aoa?: CurrencyOptions.Aoa;

          /**
           * Promotion code defined in ARS.
           */
          ars?: CurrencyOptions.Ars;

          /**
           * Promotion code defined in AUD.
           */
          aud?: CurrencyOptions.Aud;

          /**
           * Promotion code defined in AWG.
           */
          awg?: CurrencyOptions.Awg;

          /**
           * Promotion code defined in AZN.
           */
          azn?: CurrencyOptions.Azn;

          /**
           * Promotion code defined in BAM.
           */
          bam?: CurrencyOptions.Bam;

          /**
           * Promotion code defined in BBD.
           */
          bbd?: CurrencyOptions.Bbd;

          /**
           * Promotion code defined in BDT.
           */
          bdt?: CurrencyOptions.Bdt;

          /**
           * Promotion code defined in BGN.
           */
          bgn?: CurrencyOptions.Bgn;

          /**
           * Promotion code defined in BHD.
           */
          bhd?: CurrencyOptions.Bhd;

          /**
           * Promotion code defined in BIF.
           */
          bif?: CurrencyOptions.Bif;

          /**
           * Promotion code defined in BMD.
           */
          bmd?: CurrencyOptions.Bmd;

          /**
           * Promotion code defined in BND.
           */
          bnd?: CurrencyOptions.Bnd;

          /**
           * Promotion code defined in BOB.
           */
          bob?: CurrencyOptions.Bob;

          /**
           * Promotion code defined in BRL.
           */
          brl?: CurrencyOptions.Brl;

          /**
           * Promotion code defined in BSD.
           */
          bsd?: CurrencyOptions.Bsd;

          /**
           * Promotion code defined in BTN.
           */
          btn?: CurrencyOptions.Btn;

          /**
           * Promotion code defined in BWP.
           */
          bwp?: CurrencyOptions.Bwp;

          /**
           * Promotion code defined in BYN.
           */
          byn?: CurrencyOptions.Byn;

          /**
           * Promotion code defined in BZD.
           */
          bzd?: CurrencyOptions.Bzd;

          /**
           * Promotion code defined in CAD.
           */
          cad?: CurrencyOptions.Cad;

          /**
           * Promotion code defined in CDF.
           */
          cdf?: CurrencyOptions.Cdf;

          /**
           * Promotion code defined in CHF.
           */
          chf?: CurrencyOptions.Chf;

          /**
           * Promotion code defined in CLP.
           */
          clp?: CurrencyOptions.Clp;

          /**
           * Promotion code defined in CNY.
           */
          cny?: CurrencyOptions.Cny;

          /**
           * Promotion code defined in COP.
           */
          cop?: CurrencyOptions.Cop;

          /**
           * Promotion code defined in CRC.
           */
          crc?: CurrencyOptions.Crc;

          /**
           * Promotion code defined in CVE.
           */
          cve?: CurrencyOptions.Cve;

          /**
           * Promotion code defined in CZK.
           */
          czk?: CurrencyOptions.Czk;

          /**
           * Promotion code defined in DJF.
           */
          djf?: CurrencyOptions.Djf;

          /**
           * Promotion code defined in DKK.
           */
          dkk?: CurrencyOptions.Dkk;

          /**
           * Promotion code defined in DOP.
           */
          dop?: CurrencyOptions.Dop;

          /**
           * Promotion code defined in DZD.
           */
          dzd?: CurrencyOptions.Dzd;

          /**
           * Promotion code defined in EGP.
           */
          egp?: CurrencyOptions.Egp;

          /**
           * Promotion code defined in ETB.
           */
          etb?: CurrencyOptions.Etb;

          /**
           * Promotion code defined in EUR.
           */
          eur?: CurrencyOptions.Eur;

          /**
           * Promotion code defined in FJD.
           */
          fjd?: CurrencyOptions.Fjd;

          /**
           * Promotion code defined in FKP.
           */
          fkp?: CurrencyOptions.Fkp;

          /**
           * Promotion code defined in GBP.
           */
          gbp?: CurrencyOptions.Gbp;

          /**
           * Promotion code defined in GEL.
           */
          gel?: CurrencyOptions.Gel;

          /**
           * Promotion code defined in GHS.
           */
          ghs?: CurrencyOptions.Ghs;

          /**
           * Promotion code defined in GIP.
           */
          gip?: CurrencyOptions.Gip;

          /**
           * Promotion code defined in GMD.
           */
          gmd?: CurrencyOptions.Gmd;

          /**
           * Promotion code defined in GNF.
           */
          gnf?: CurrencyOptions.Gnf;

          /**
           * Promotion code defined in GTQ.
           */
          gtq?: CurrencyOptions.Gtq;

          /**
           * Promotion code defined in GYD.
           */
          gyd?: CurrencyOptions.Gyd;

          /**
           * Promotion code defined in HKD.
           */
          hkd?: CurrencyOptions.Hkd;

          /**
           * Promotion code defined in HNL.
           */
          hnl?: CurrencyOptions.Hnl;

          /**
           * Promotion code defined in HRK.
           */
          hrk?: CurrencyOptions.Hrk;

          /**
           * Promotion code defined in HTG.
           */
          htg?: CurrencyOptions.Htg;

          /**
           * Promotion code defined in HUF.
           */
          huf?: CurrencyOptions.Huf;

          /**
           * Promotion code defined in IDR.
           */
          idr?: CurrencyOptions.Idr;

          /**
           * Promotion code defined in ILS.
           */
          ils?: CurrencyOptions.Ils;

          /**
           * Promotion code defined in INR.
           */
          inr?: CurrencyOptions.Inr;

          /**
           * Promotion code defined in ISK.
           */
          isk?: CurrencyOptions.Isk;

          /**
           * Promotion code defined in JMD.
           */
          jmd?: CurrencyOptions.Jmd;

          /**
           * Promotion code defined in JOD.
           */
          jod?: CurrencyOptions.Jod;

          /**
           * Promotion code defined in JPY.
           */
          jpy?: CurrencyOptions.Jpy;

          /**
           * Promotion code defined in KES.
           */
          kes?: CurrencyOptions.Kes;

          /**
           * Promotion code defined in KGS.
           */
          kgs?: CurrencyOptions.Kgs;

          /**
           * Promotion code defined in KHR.
           */
          khr?: CurrencyOptions.Khr;

          /**
           * Promotion code defined in KMF.
           */
          kmf?: CurrencyOptions.Kmf;

          /**
           * Promotion code defined in KRW.
           */
          krw?: CurrencyOptions.Krw;

          /**
           * Promotion code defined in KWD.
           */
          kwd?: CurrencyOptions.Kwd;

          /**
           * Promotion code defined in KYD.
           */
          kyd?: CurrencyOptions.Kyd;

          /**
           * Promotion code defined in KZT.
           */
          kzt?: CurrencyOptions.Kzt;

          /**
           * Promotion code defined in LAK.
           */
          lak?: CurrencyOptions.Lak;

          /**
           * Promotion code defined in LBP.
           */
          lbp?: CurrencyOptions.Lbp;

          /**
           * Promotion code defined in LKR.
           */
          lkr?: CurrencyOptions.Lkr;

          /**
           * Promotion code defined in LRD.
           */
          lrd?: CurrencyOptions.Lrd;

          /**
           * Promotion code defined in LSL.
           */
          lsl?: CurrencyOptions.Lsl;

          /**
           * Promotion code defined in MAD.
           */
          mad?: CurrencyOptions.Mad;

          /**
           * Promotion code defined in MDL.
           */
          mdl?: CurrencyOptions.Mdl;

          /**
           * Promotion code defined in MGA.
           */
          mga?: CurrencyOptions.Mga;

          /**
           * Promotion code defined in MKD.
           */
          mkd?: CurrencyOptions.Mkd;

          /**
           * Promotion code defined in MMK.
           */
          mmk?: CurrencyOptions.Mmk;

          /**
           * Promotion code defined in MNT.
           */
          mnt?: CurrencyOptions.Mnt;

          /**
           * Promotion code defined in MOP.
           */
          mop?: CurrencyOptions.Mop;

          /**
           * Promotion code defined in MRO.
           */
          mro?: CurrencyOptions.Mro;

          /**
           * Promotion code defined in MUR.
           */
          mur?: CurrencyOptions.Mur;

          /**
           * Promotion code defined in MVR.
           */
          mvr?: CurrencyOptions.Mvr;

          /**
           * Promotion code defined in MWK.
           */
          mwk?: CurrencyOptions.Mwk;

          /**
           * Promotion code defined in MXN.
           */
          mxn?: CurrencyOptions.Mxn;

          /**
           * Promotion code defined in MYR.
           */
          myr?: CurrencyOptions.Myr;

          /**
           * Promotion code defined in MZN.
           */
          mzn?: CurrencyOptions.Mzn;

          /**
           * Promotion code defined in NAD.
           */
          nad?: CurrencyOptions.Nad;

          /**
           * Promotion code defined in NGN.
           */
          ngn?: CurrencyOptions.Ngn;

          /**
           * Promotion code defined in NIO.
           */
          nio?: CurrencyOptions.Nio;

          /**
           * Promotion code defined in NOK.
           */
          nok?: CurrencyOptions.Nok;

          /**
           * Promotion code defined in NPR.
           */
          npr?: CurrencyOptions.Npr;

          /**
           * Promotion code defined in NZD.
           */
          nzd?: CurrencyOptions.Nzd;

          /**
           * Promotion code defined in OMR.
           */
          omr?: CurrencyOptions.Omr;

          /**
           * Promotion code defined in PAB.
           */
          pab?: CurrencyOptions.Pab;

          /**
           * Promotion code defined in PEN.
           */
          pen?: CurrencyOptions.Pen;

          /**
           * Promotion code defined in PGK.
           */
          pgk?: CurrencyOptions.Pgk;

          /**
           * Promotion code defined in PHP.
           */
          php?: CurrencyOptions.Php;

          /**
           * Promotion code defined in PKR.
           */
          pkr?: CurrencyOptions.Pkr;

          /**
           * Promotion code defined in PLN.
           */
          pln?: CurrencyOptions.Pln;

          /**
           * Promotion code defined in PYG.
           */
          pyg?: CurrencyOptions.Pyg;

          /**
           * Promotion code defined in QAR.
           */
          qar?: CurrencyOptions.Qar;

          /**
           * Promotion code defined in RON.
           */
          ron?: CurrencyOptions.Ron;

          /**
           * Promotion code defined in RSD.
           */
          rsd?: CurrencyOptions.Rsd;

          /**
           * Promotion code defined in RUB.
           */
          rub?: CurrencyOptions.Rub;

          /**
           * Promotion code defined in RWF.
           */
          rwf?: CurrencyOptions.Rwf;

          /**
           * Promotion code defined in SAR.
           */
          sar?: CurrencyOptions.Sar;

          /**
           * Promotion code defined in SBD.
           */
          sbd?: CurrencyOptions.Sbd;

          /**
           * Promotion code defined in SCR.
           */
          scr?: CurrencyOptions.Scr;

          /**
           * Promotion code defined in SEK.
           */
          sek?: CurrencyOptions.Sek;

          /**
           * Promotion code defined in SGD.
           */
          sgd?: CurrencyOptions.Sgd;

          /**
           * Promotion code defined in SHP.
           */
          shp?: CurrencyOptions.Shp;

          /**
           * Promotion code defined in SLL.
           */
          sll?: CurrencyOptions.Sll;

          /**
           * Promotion code defined in SOS.
           */
          sos?: CurrencyOptions.Sos;

          /**
           * Promotion code defined in SRD.
           */
          srd?: CurrencyOptions.Srd;

          /**
           * Promotion code defined in STD.
           */
          std?: CurrencyOptions.Std;

          /**
           * Promotion code defined in SZL.
           */
          szl?: CurrencyOptions.Szl;

          /**
           * Promotion code defined in THB.
           */
          thb?: CurrencyOptions.Thb;

          /**
           * Promotion code defined in TJS.
           */
          tjs?: CurrencyOptions.Tjs;

          /**
           * Promotion code defined in TND.
           */
          tnd?: CurrencyOptions.Tnd;

          /**
           * Promotion code defined in TOP.
           */
          top?: CurrencyOptions.Top;

          /**
           * Promotion code defined in TRY.
           */
          try?: CurrencyOptions.Try;

          /**
           * Promotion code defined in TTD.
           */
          ttd?: CurrencyOptions.Ttd;

          /**
           * Promotion code defined in TWD.
           */
          twd?: CurrencyOptions.Twd;

          /**
           * Promotion code defined in TZS.
           */
          tzs?: CurrencyOptions.Tzs;

          /**
           * Promotion code defined in UAH.
           */
          uah?: CurrencyOptions.Uah;

          /**
           * Promotion code defined in UGX.
           */
          ugx?: CurrencyOptions.Ugx;

          /**
           * Promotion code defined in USD.
           */
          usd?: CurrencyOptions.Usd;

          /**
           * Promotion code defined in USDC.
           */
          usdc?: CurrencyOptions.Usdc;

          /**
           * Promotion code defined in UYU.
           */
          uyu?: CurrencyOptions.Uyu;

          /**
           * Promotion code defined in UZS.
           */
          uzs?: CurrencyOptions.Uzs;

          /**
           * Promotion code defined in VND.
           */
          vnd?: CurrencyOptions.Vnd;

          /**
           * Promotion code defined in VUV.
           */
          vuv?: CurrencyOptions.Vuv;

          /**
           * Promotion code defined in WST.
           */
          wst?: CurrencyOptions.Wst;

          /**
           * Promotion code defined in XAF.
           */
          xaf?: CurrencyOptions.Xaf;

          /**
           * Promotion code defined in XCD.
           */
          xcd?: CurrencyOptions.Xcd;

          /**
           * Promotion code defined in XOF.
           */
          xof?: CurrencyOptions.Xof;

          /**
           * Promotion code defined in XPF.
           */
          xpf?: CurrencyOptions.Xpf;

          /**
           * Promotion code defined in YER.
           */
          yer?: CurrencyOptions.Yer;

          /**
           * Promotion code defined in ZAR.
           */
          zar?: CurrencyOptions.Zar;

          /**
           * Promotion code defined in ZMW.
           */
          zmw?: CurrencyOptions.Zmw;
        }

        namespace CurrencyOptions {
          interface Aed {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Afn {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface All {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Amd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Ang {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Aoa {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Ars {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Aud {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Awg {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Azn {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Bam {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Bbd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Bdt {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Bgn {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Bhd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Bif {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Bmd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Bnd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Bob {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Brl {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Bsd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Btn {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Bwp {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Byn {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Bzd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Cad {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Cdf {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Chf {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Clp {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Cny {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Cop {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Crc {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Cve {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Czk {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Djf {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Dkk {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Dop {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Dzd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Egp {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Etb {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Eur {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Fjd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Fkp {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Gbp {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Gel {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Ghs {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Gip {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Gmd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Gnf {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Gtq {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Gyd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Hkd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Hnl {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Hrk {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Htg {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Huf {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Idr {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Ils {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Inr {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Isk {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Jmd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Jod {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Jpy {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Kes {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Kgs {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Khr {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Kmf {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Krw {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Kwd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Kyd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Kzt {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Lak {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Lbp {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Lkr {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Lrd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Lsl {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Mad {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Mdl {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Mga {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Mkd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Mmk {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Mnt {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Mop {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Mro {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Mur {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Mvr {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Mwk {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Mxn {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Myr {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Mzn {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Nad {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Ngn {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Nio {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Nok {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Npr {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Nzd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Omr {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Pab {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Pen {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Pgk {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Php {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Pkr {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Pln {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Pyg {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Qar {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Ron {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Rsd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Rub {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Rwf {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Sar {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Sbd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Scr {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Sek {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Sgd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Shp {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Sll {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Sos {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Srd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Std {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Szl {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Thb {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Tjs {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Tnd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Top {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Try {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Ttd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Twd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Tzs {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Uah {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Ugx {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Usd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Usdc {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Uyu {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Uzs {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Vnd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Vuv {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Wst {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Xaf {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Xcd {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Xof {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Xpf {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Yer {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Zar {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }

          interface Zmw {
            /**
             * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
             */
            minimum_amount?: number;
          }
        }
      }
    }

    interface PromotionCodeListParams extends PaginationParams {
      /**
       * Filter promotion codes by whether they are active.
       */
      active?: boolean;

      /**
       * Only return promotion codes that have this case-insensitive code.
       */
      code?: string;

      /**
       * Only return promotion codes for this coupon.
       */
      coupon?: string;

      /**
       * A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
       */
      created?: Stripe.RangeQueryParam | number;

      /**
       * Only return promotion codes that are restricted to this customer.
       */
      customer?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    class PromotionCodesResource {
      /**
       * A promotion code points to a coupon. You can optionally restrict the code to a specific customer, redemption limit, and expiration date.
       */
      create(
        params: PromotionCodeCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PromotionCode>>;

      /**
       * Retrieves the promotion code with the given ID. In order to retrieve a promotion code by the customer-facing code use [list](https://stripe.com/docs/api/promotion_codes/list) with the desired code.
       */
      retrieve(
        id: string,
        params?: PromotionCodeRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PromotionCode>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PromotionCode>>;

      /**
       * Updates the specified promotion code by setting the values of the parameters passed. Most fields are, by design, not editable.
       */
      update(
        id: string,
        params?: PromotionCodeUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PromotionCode>>;

      /**
       * Returns a list of your promotion codes.
       */
      list(
        params?: PromotionCodeListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.PromotionCode>;
      list(options?: RequestOptions): ApiListPromise<Stripe.PromotionCode>;
    }
  }
}
