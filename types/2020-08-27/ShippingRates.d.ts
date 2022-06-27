// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * The ShippingRate object.
     */
    interface ShippingRate {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'shipping_rate';

      /**
       * Whether the shipping rate can be used for new purchases. Defaults to `true`.
       */
      active: boolean;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * The estimated range for how long shipping will take, meant to be displayable to the customer. This will appear on CheckoutSessions.
       */
      delivery_estimate: ShippingRate.DeliveryEstimate | null;

      /**
       * The name of the shipping rate, meant to be displayable to the customer. This will appear on CheckoutSessions.
       */
      display_name: string | null;

      fixed_amount?: ShippingRate.FixedAmount;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata;

      /**
       * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
       */
      tax_behavior: ShippingRate.TaxBehavior | null;

      /**
       * A [tax code](https://stripe.com/docs/tax/tax-categories) ID. The Shipping tax code is `txcd_92010001`.
       */
      tax_code: string | Stripe.TaxCode | null;

      /**
       * The type of calculation to use on the shipping rate. Can only be `fixed_amount` for now.
       */
      type: 'fixed_amount';
    }

    namespace ShippingRate {
      interface DeliveryEstimate {
        /**
         * The upper bound of the estimated range. If empty, represents no upper bound i.e., infinite.
         */
        maximum: DeliveryEstimate.Maximum | null;

        /**
         * The lower bound of the estimated range. If empty, represents no lower bound.
         */
        minimum: DeliveryEstimate.Minimum | null;
      }

      namespace DeliveryEstimate {
        interface Maximum {
          /**
           * A unit of time.
           */
          unit: Maximum.Unit;

          /**
           * Must be greater than 0.
           */
          value: number;
        }

        namespace Maximum {
          type Unit = 'business_day' | 'day' | 'hour' | 'month' | 'week';
        }

        interface Minimum {
          /**
           * A unit of time.
           */
          unit: Minimum.Unit;

          /**
           * Must be greater than 0.
           */
          value: number;
        }

        namespace Minimum {
          type Unit = 'business_day' | 'day' | 'hour' | 'month' | 'week';
        }
      }

      interface FixedAmount {
        /**
         * A non-negative integer in cents representing how much to charge.
         */
        amount: number;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        currency_options?: FixedAmount.CurrencyOptions;
      }

      namespace FixedAmount {
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
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Aed.TaxBehavior;
          }

          namespace Aed {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Afn {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Afn.TaxBehavior;
          }

          namespace Afn {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface All {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: All.TaxBehavior;
          }

          namespace All {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Amd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Amd.TaxBehavior;
          }

          namespace Amd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Ang {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Ang.TaxBehavior;
          }

          namespace Ang {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Aoa {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Aoa.TaxBehavior;
          }

          namespace Aoa {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Ars {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Ars.TaxBehavior;
          }

          namespace Ars {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Aud {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Aud.TaxBehavior;
          }

          namespace Aud {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Awg {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Awg.TaxBehavior;
          }

          namespace Awg {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Azn {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Azn.TaxBehavior;
          }

          namespace Azn {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Bam {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Bam.TaxBehavior;
          }

          namespace Bam {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Bbd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Bbd.TaxBehavior;
          }

          namespace Bbd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Bdt {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Bdt.TaxBehavior;
          }

          namespace Bdt {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Bgn {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Bgn.TaxBehavior;
          }

          namespace Bgn {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Bhd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Bhd.TaxBehavior;
          }

          namespace Bhd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Bif {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Bif.TaxBehavior;
          }

          namespace Bif {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Bmd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Bmd.TaxBehavior;
          }

          namespace Bmd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Bnd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Bnd.TaxBehavior;
          }

          namespace Bnd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Bob {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Bob.TaxBehavior;
          }

          namespace Bob {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Brl {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Brl.TaxBehavior;
          }

          namespace Brl {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Bsd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Bsd.TaxBehavior;
          }

          namespace Bsd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Btn {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Btn.TaxBehavior;
          }

          namespace Btn {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Bwp {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Bwp.TaxBehavior;
          }

          namespace Bwp {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Byn {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Byn.TaxBehavior;
          }

          namespace Byn {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Bzd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Bzd.TaxBehavior;
          }

          namespace Bzd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Cad {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Cad.TaxBehavior;
          }

          namespace Cad {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Cdf {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Cdf.TaxBehavior;
          }

          namespace Cdf {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Chf {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Chf.TaxBehavior;
          }

          namespace Chf {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Clp {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Clp.TaxBehavior;
          }

          namespace Clp {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Cny {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Cny.TaxBehavior;
          }

          namespace Cny {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Cop {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Cop.TaxBehavior;
          }

          namespace Cop {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Crc {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Crc.TaxBehavior;
          }

          namespace Crc {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Cve {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Cve.TaxBehavior;
          }

          namespace Cve {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Czk {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Czk.TaxBehavior;
          }

          namespace Czk {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Djf {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Djf.TaxBehavior;
          }

          namespace Djf {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Dkk {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Dkk.TaxBehavior;
          }

          namespace Dkk {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Dop {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Dop.TaxBehavior;
          }

          namespace Dop {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Dzd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Dzd.TaxBehavior;
          }

          namespace Dzd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Egp {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Egp.TaxBehavior;
          }

          namespace Egp {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Etb {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Etb.TaxBehavior;
          }

          namespace Etb {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Eur {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Eur.TaxBehavior;
          }

          namespace Eur {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Fjd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Fjd.TaxBehavior;
          }

          namespace Fjd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Fkp {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Fkp.TaxBehavior;
          }

          namespace Fkp {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Gbp {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Gbp.TaxBehavior;
          }

          namespace Gbp {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Gel {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Gel.TaxBehavior;
          }

          namespace Gel {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Ghs {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Ghs.TaxBehavior;
          }

          namespace Ghs {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Gip {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Gip.TaxBehavior;
          }

          namespace Gip {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Gmd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Gmd.TaxBehavior;
          }

          namespace Gmd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Gnf {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Gnf.TaxBehavior;
          }

          namespace Gnf {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Gtq {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Gtq.TaxBehavior;
          }

          namespace Gtq {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Gyd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Gyd.TaxBehavior;
          }

          namespace Gyd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Hkd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Hkd.TaxBehavior;
          }

          namespace Hkd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Hnl {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Hnl.TaxBehavior;
          }

          namespace Hnl {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Hrk {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Hrk.TaxBehavior;
          }

          namespace Hrk {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Htg {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Htg.TaxBehavior;
          }

          namespace Htg {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Huf {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Huf.TaxBehavior;
          }

          namespace Huf {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Idr {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Idr.TaxBehavior;
          }

          namespace Idr {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Ils {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Ils.TaxBehavior;
          }

          namespace Ils {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Inr {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Inr.TaxBehavior;
          }

          namespace Inr {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Isk {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Isk.TaxBehavior;
          }

          namespace Isk {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Jmd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Jmd.TaxBehavior;
          }

          namespace Jmd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Jod {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Jod.TaxBehavior;
          }

          namespace Jod {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Jpy {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Jpy.TaxBehavior;
          }

          namespace Jpy {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Kes {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Kes.TaxBehavior;
          }

          namespace Kes {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Kgs {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Kgs.TaxBehavior;
          }

          namespace Kgs {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Khr {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Khr.TaxBehavior;
          }

          namespace Khr {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Kmf {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Kmf.TaxBehavior;
          }

          namespace Kmf {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Krw {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Krw.TaxBehavior;
          }

          namespace Krw {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Kwd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Kwd.TaxBehavior;
          }

          namespace Kwd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Kyd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Kyd.TaxBehavior;
          }

          namespace Kyd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Kzt {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Kzt.TaxBehavior;
          }

          namespace Kzt {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Lak {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Lak.TaxBehavior;
          }

          namespace Lak {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Lbp {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Lbp.TaxBehavior;
          }

          namespace Lbp {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Lkr {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Lkr.TaxBehavior;
          }

          namespace Lkr {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Lrd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Lrd.TaxBehavior;
          }

          namespace Lrd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Lsl {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Lsl.TaxBehavior;
          }

          namespace Lsl {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Mad {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Mad.TaxBehavior;
          }

          namespace Mad {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Mdl {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Mdl.TaxBehavior;
          }

          namespace Mdl {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Mga {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Mga.TaxBehavior;
          }

          namespace Mga {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Mkd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Mkd.TaxBehavior;
          }

          namespace Mkd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Mmk {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Mmk.TaxBehavior;
          }

          namespace Mmk {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Mnt {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Mnt.TaxBehavior;
          }

          namespace Mnt {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Mop {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Mop.TaxBehavior;
          }

          namespace Mop {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Mro {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Mro.TaxBehavior;
          }

          namespace Mro {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Mur {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Mur.TaxBehavior;
          }

          namespace Mur {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Mvr {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Mvr.TaxBehavior;
          }

          namespace Mvr {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Mwk {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Mwk.TaxBehavior;
          }

          namespace Mwk {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Mxn {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Mxn.TaxBehavior;
          }

          namespace Mxn {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Myr {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Myr.TaxBehavior;
          }

          namespace Myr {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Mzn {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Mzn.TaxBehavior;
          }

          namespace Mzn {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Nad {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Nad.TaxBehavior;
          }

          namespace Nad {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Ngn {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Ngn.TaxBehavior;
          }

          namespace Ngn {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Nio {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Nio.TaxBehavior;
          }

          namespace Nio {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Nok {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Nok.TaxBehavior;
          }

          namespace Nok {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Npr {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Npr.TaxBehavior;
          }

          namespace Npr {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Nzd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Nzd.TaxBehavior;
          }

          namespace Nzd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Omr {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Omr.TaxBehavior;
          }

          namespace Omr {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Pab {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Pab.TaxBehavior;
          }

          namespace Pab {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Pen {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Pen.TaxBehavior;
          }

          namespace Pen {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Pgk {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Pgk.TaxBehavior;
          }

          namespace Pgk {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Php {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Php.TaxBehavior;
          }

          namespace Php {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Pkr {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Pkr.TaxBehavior;
          }

          namespace Pkr {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Pln {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Pln.TaxBehavior;
          }

          namespace Pln {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Pyg {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Pyg.TaxBehavior;
          }

          namespace Pyg {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Qar {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Qar.TaxBehavior;
          }

          namespace Qar {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Ron {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Ron.TaxBehavior;
          }

          namespace Ron {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Rsd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Rsd.TaxBehavior;
          }

          namespace Rsd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Rub {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Rub.TaxBehavior;
          }

          namespace Rub {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Rwf {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Rwf.TaxBehavior;
          }

          namespace Rwf {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Sar {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Sar.TaxBehavior;
          }

          namespace Sar {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Sbd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Sbd.TaxBehavior;
          }

          namespace Sbd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Scr {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Scr.TaxBehavior;
          }

          namespace Scr {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Sek {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Sek.TaxBehavior;
          }

          namespace Sek {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Sgd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Sgd.TaxBehavior;
          }

          namespace Sgd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Shp {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Shp.TaxBehavior;
          }

          namespace Shp {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Sll {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Sll.TaxBehavior;
          }

          namespace Sll {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Sos {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Sos.TaxBehavior;
          }

          namespace Sos {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Srd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Srd.TaxBehavior;
          }

          namespace Srd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Std {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Std.TaxBehavior;
          }

          namespace Std {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Szl {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Szl.TaxBehavior;
          }

          namespace Szl {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Thb {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Thb.TaxBehavior;
          }

          namespace Thb {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Tjs {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Tjs.TaxBehavior;
          }

          namespace Tjs {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Tnd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Tnd.TaxBehavior;
          }

          namespace Tnd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Top {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Top.TaxBehavior;
          }

          namespace Top {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Try {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Try.TaxBehavior;
          }

          namespace Try {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Ttd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Ttd.TaxBehavior;
          }

          namespace Ttd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Twd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Twd.TaxBehavior;
          }

          namespace Twd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Tzs {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Tzs.TaxBehavior;
          }

          namespace Tzs {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Uah {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Uah.TaxBehavior;
          }

          namespace Uah {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Ugx {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Ugx.TaxBehavior;
          }

          namespace Ugx {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Usd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Usd.TaxBehavior;
          }

          namespace Usd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Usdc {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Usdc.TaxBehavior;
          }

          namespace Usdc {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Uyu {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Uyu.TaxBehavior;
          }

          namespace Uyu {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Uzs {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Uzs.TaxBehavior;
          }

          namespace Uzs {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Vnd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Vnd.TaxBehavior;
          }

          namespace Vnd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Vuv {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Vuv.TaxBehavior;
          }

          namespace Vuv {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Wst {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Wst.TaxBehavior;
          }

          namespace Wst {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Xaf {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Xaf.TaxBehavior;
          }

          namespace Xaf {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Xcd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Xcd.TaxBehavior;
          }

          namespace Xcd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Xof {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Xof.TaxBehavior;
          }

          namespace Xof {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Xpf {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Xpf.TaxBehavior;
          }

          namespace Xpf {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Yer {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Yer.TaxBehavior;
          }

          namespace Yer {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Zar {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Zar.TaxBehavior;
          }

          namespace Zar {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Zmw {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior: Zmw.TaxBehavior;
          }

          namespace Zmw {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }
        }
      }

      type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
    }

    interface ShippingRateCreateParams {
      /**
       * The name of the shipping rate, meant to be displayable to the customer. This will appear on CheckoutSessions.
       */
      display_name: string;

      /**
       * The estimated range for how long shipping will take, meant to be displayable to the customer. This will appear on CheckoutSessions.
       */
      delivery_estimate?: ShippingRateCreateParams.DeliveryEstimate;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Describes a fixed amount to charge for shipping. Must be present if type is `fixed_amount`.
       */
      fixed_amount?: ShippingRateCreateParams.FixedAmount;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.MetadataParam;

      /**
       * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
       */
      tax_behavior?: ShippingRateCreateParams.TaxBehavior;

      /**
       * A [tax code](https://stripe.com/docs/tax/tax-categories) ID. The Shipping tax code is `txcd_92010001`.
       */
      tax_code?: string;

      /**
       * The type of calculation to use on the shipping rate. Can only be `fixed_amount` for now.
       */
      type?: 'fixed_amount';
    }

    namespace ShippingRateCreateParams {
      interface DeliveryEstimate {
        /**
         * The upper bound of the estimated range. If empty, represents no upper bound i.e., infinite.
         */
        maximum?: DeliveryEstimate.Maximum;

        /**
         * The lower bound of the estimated range. If empty, represents no lower bound.
         */
        minimum?: DeliveryEstimate.Minimum;
      }

      namespace DeliveryEstimate {
        interface Maximum {
          /**
           * A unit of time.
           */
          unit: Maximum.Unit;

          /**
           * Must be greater than 0.
           */
          value: number;
        }

        namespace Maximum {
          type Unit = 'business_day' | 'day' | 'hour' | 'month' | 'week';
        }

        interface Minimum {
          /**
           * A unit of time.
           */
          unit: Minimum.Unit;

          /**
           * Must be greater than 0.
           */
          value: number;
        }

        namespace Minimum {
          type Unit = 'business_day' | 'day' | 'hour' | 'month' | 'week';
        }
      }

      interface FixedAmount {
        /**
         * A non-negative integer in cents representing how much to charge.
         */
        amount: number;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * Shipping rates defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
         */
        currency_options?: FixedAmount.CurrencyOptions;
      }

      namespace FixedAmount {
        interface CurrencyOptions {
          /**
           * Shipping rate defined in AED.
           */
          aed?: CurrencyOptions.Aed;

          /**
           * Shipping rate defined in AFN.
           */
          afn?: CurrencyOptions.Afn;

          /**
           * Shipping rate defined in ALL.
           */
          all?: CurrencyOptions.All;

          /**
           * Shipping rate defined in AMD.
           */
          amd?: CurrencyOptions.Amd;

          /**
           * Shipping rate defined in ANG.
           */
          ang?: CurrencyOptions.Ang;

          /**
           * Shipping rate defined in AOA.
           */
          aoa?: CurrencyOptions.Aoa;

          /**
           * Shipping rate defined in ARS.
           */
          ars?: CurrencyOptions.Ars;

          /**
           * Shipping rate defined in AUD.
           */
          aud?: CurrencyOptions.Aud;

          /**
           * Shipping rate defined in AWG.
           */
          awg?: CurrencyOptions.Awg;

          /**
           * Shipping rate defined in AZN.
           */
          azn?: CurrencyOptions.Azn;

          /**
           * Shipping rate defined in BAM.
           */
          bam?: CurrencyOptions.Bam;

          /**
           * Shipping rate defined in BBD.
           */
          bbd?: CurrencyOptions.Bbd;

          /**
           * Shipping rate defined in BDT.
           */
          bdt?: CurrencyOptions.Bdt;

          /**
           * Shipping rate defined in BGN.
           */
          bgn?: CurrencyOptions.Bgn;

          /**
           * Shipping rate defined in BHD.
           */
          bhd?: CurrencyOptions.Bhd;

          /**
           * Shipping rate defined in BIF.
           */
          bif?: CurrencyOptions.Bif;

          /**
           * Shipping rate defined in BMD.
           */
          bmd?: CurrencyOptions.Bmd;

          /**
           * Shipping rate defined in BND.
           */
          bnd?: CurrencyOptions.Bnd;

          /**
           * Shipping rate defined in BOB.
           */
          bob?: CurrencyOptions.Bob;

          /**
           * Shipping rate defined in BRL.
           */
          brl?: CurrencyOptions.Brl;

          /**
           * Shipping rate defined in BSD.
           */
          bsd?: CurrencyOptions.Bsd;

          /**
           * Shipping rate defined in BTN.
           */
          btn?: CurrencyOptions.Btn;

          /**
           * Shipping rate defined in BWP.
           */
          bwp?: CurrencyOptions.Bwp;

          /**
           * Shipping rate defined in BYN.
           */
          byn?: CurrencyOptions.Byn;

          /**
           * Shipping rate defined in BZD.
           */
          bzd?: CurrencyOptions.Bzd;

          /**
           * Shipping rate defined in CAD.
           */
          cad?: CurrencyOptions.Cad;

          /**
           * Shipping rate defined in CDF.
           */
          cdf?: CurrencyOptions.Cdf;

          /**
           * Shipping rate defined in CHF.
           */
          chf?: CurrencyOptions.Chf;

          /**
           * Shipping rate defined in CLP.
           */
          clp?: CurrencyOptions.Clp;

          /**
           * Shipping rate defined in CNY.
           */
          cny?: CurrencyOptions.Cny;

          /**
           * Shipping rate defined in COP.
           */
          cop?: CurrencyOptions.Cop;

          /**
           * Shipping rate defined in CRC.
           */
          crc?: CurrencyOptions.Crc;

          /**
           * Shipping rate defined in CVE.
           */
          cve?: CurrencyOptions.Cve;

          /**
           * Shipping rate defined in CZK.
           */
          czk?: CurrencyOptions.Czk;

          /**
           * Shipping rate defined in DJF.
           */
          djf?: CurrencyOptions.Djf;

          /**
           * Shipping rate defined in DKK.
           */
          dkk?: CurrencyOptions.Dkk;

          /**
           * Shipping rate defined in DOP.
           */
          dop?: CurrencyOptions.Dop;

          /**
           * Shipping rate defined in DZD.
           */
          dzd?: CurrencyOptions.Dzd;

          /**
           * Shipping rate defined in EGP.
           */
          egp?: CurrencyOptions.Egp;

          /**
           * Shipping rate defined in ETB.
           */
          etb?: CurrencyOptions.Etb;

          /**
           * Shipping rate defined in EUR.
           */
          eur?: CurrencyOptions.Eur;

          /**
           * Shipping rate defined in FJD.
           */
          fjd?: CurrencyOptions.Fjd;

          /**
           * Shipping rate defined in FKP.
           */
          fkp?: CurrencyOptions.Fkp;

          /**
           * Shipping rate defined in GBP.
           */
          gbp?: CurrencyOptions.Gbp;

          /**
           * Shipping rate defined in GEL.
           */
          gel?: CurrencyOptions.Gel;

          /**
           * Shipping rate defined in GHS.
           */
          ghs?: CurrencyOptions.Ghs;

          /**
           * Shipping rate defined in GIP.
           */
          gip?: CurrencyOptions.Gip;

          /**
           * Shipping rate defined in GMD.
           */
          gmd?: CurrencyOptions.Gmd;

          /**
           * Shipping rate defined in GNF.
           */
          gnf?: CurrencyOptions.Gnf;

          /**
           * Shipping rate defined in GTQ.
           */
          gtq?: CurrencyOptions.Gtq;

          /**
           * Shipping rate defined in GYD.
           */
          gyd?: CurrencyOptions.Gyd;

          /**
           * Shipping rate defined in HKD.
           */
          hkd?: CurrencyOptions.Hkd;

          /**
           * Shipping rate defined in HNL.
           */
          hnl?: CurrencyOptions.Hnl;

          /**
           * Shipping rate defined in HRK.
           */
          hrk?: CurrencyOptions.Hrk;

          /**
           * Shipping rate defined in HTG.
           */
          htg?: CurrencyOptions.Htg;

          /**
           * Shipping rate defined in HUF.
           */
          huf?: CurrencyOptions.Huf;

          /**
           * Shipping rate defined in IDR.
           */
          idr?: CurrencyOptions.Idr;

          /**
           * Shipping rate defined in ILS.
           */
          ils?: CurrencyOptions.Ils;

          /**
           * Shipping rate defined in INR.
           */
          inr?: CurrencyOptions.Inr;

          /**
           * Shipping rate defined in ISK.
           */
          isk?: CurrencyOptions.Isk;

          /**
           * Shipping rate defined in JMD.
           */
          jmd?: CurrencyOptions.Jmd;

          /**
           * Shipping rate defined in JOD.
           */
          jod?: CurrencyOptions.Jod;

          /**
           * Shipping rate defined in JPY.
           */
          jpy?: CurrencyOptions.Jpy;

          /**
           * Shipping rate defined in KES.
           */
          kes?: CurrencyOptions.Kes;

          /**
           * Shipping rate defined in KGS.
           */
          kgs?: CurrencyOptions.Kgs;

          /**
           * Shipping rate defined in KHR.
           */
          khr?: CurrencyOptions.Khr;

          /**
           * Shipping rate defined in KMF.
           */
          kmf?: CurrencyOptions.Kmf;

          /**
           * Shipping rate defined in KRW.
           */
          krw?: CurrencyOptions.Krw;

          /**
           * Shipping rate defined in KWD.
           */
          kwd?: CurrencyOptions.Kwd;

          /**
           * Shipping rate defined in KYD.
           */
          kyd?: CurrencyOptions.Kyd;

          /**
           * Shipping rate defined in KZT.
           */
          kzt?: CurrencyOptions.Kzt;

          /**
           * Shipping rate defined in LAK.
           */
          lak?: CurrencyOptions.Lak;

          /**
           * Shipping rate defined in LBP.
           */
          lbp?: CurrencyOptions.Lbp;

          /**
           * Shipping rate defined in LKR.
           */
          lkr?: CurrencyOptions.Lkr;

          /**
           * Shipping rate defined in LRD.
           */
          lrd?: CurrencyOptions.Lrd;

          /**
           * Shipping rate defined in LSL.
           */
          lsl?: CurrencyOptions.Lsl;

          /**
           * Shipping rate defined in MAD.
           */
          mad?: CurrencyOptions.Mad;

          /**
           * Shipping rate defined in MDL.
           */
          mdl?: CurrencyOptions.Mdl;

          /**
           * Shipping rate defined in MGA.
           */
          mga?: CurrencyOptions.Mga;

          /**
           * Shipping rate defined in MKD.
           */
          mkd?: CurrencyOptions.Mkd;

          /**
           * Shipping rate defined in MMK.
           */
          mmk?: CurrencyOptions.Mmk;

          /**
           * Shipping rate defined in MNT.
           */
          mnt?: CurrencyOptions.Mnt;

          /**
           * Shipping rate defined in MOP.
           */
          mop?: CurrencyOptions.Mop;

          /**
           * Shipping rate defined in MRO.
           */
          mro?: CurrencyOptions.Mro;

          /**
           * Shipping rate defined in MUR.
           */
          mur?: CurrencyOptions.Mur;

          /**
           * Shipping rate defined in MVR.
           */
          mvr?: CurrencyOptions.Mvr;

          /**
           * Shipping rate defined in MWK.
           */
          mwk?: CurrencyOptions.Mwk;

          /**
           * Shipping rate defined in MXN.
           */
          mxn?: CurrencyOptions.Mxn;

          /**
           * Shipping rate defined in MYR.
           */
          myr?: CurrencyOptions.Myr;

          /**
           * Shipping rate defined in MZN.
           */
          mzn?: CurrencyOptions.Mzn;

          /**
           * Shipping rate defined in NAD.
           */
          nad?: CurrencyOptions.Nad;

          /**
           * Shipping rate defined in NGN.
           */
          ngn?: CurrencyOptions.Ngn;

          /**
           * Shipping rate defined in NIO.
           */
          nio?: CurrencyOptions.Nio;

          /**
           * Shipping rate defined in NOK.
           */
          nok?: CurrencyOptions.Nok;

          /**
           * Shipping rate defined in NPR.
           */
          npr?: CurrencyOptions.Npr;

          /**
           * Shipping rate defined in NZD.
           */
          nzd?: CurrencyOptions.Nzd;

          /**
           * Shipping rate defined in OMR.
           */
          omr?: CurrencyOptions.Omr;

          /**
           * Shipping rate defined in PAB.
           */
          pab?: CurrencyOptions.Pab;

          /**
           * Shipping rate defined in PEN.
           */
          pen?: CurrencyOptions.Pen;

          /**
           * Shipping rate defined in PGK.
           */
          pgk?: CurrencyOptions.Pgk;

          /**
           * Shipping rate defined in PHP.
           */
          php?: CurrencyOptions.Php;

          /**
           * Shipping rate defined in PKR.
           */
          pkr?: CurrencyOptions.Pkr;

          /**
           * Shipping rate defined in PLN.
           */
          pln?: CurrencyOptions.Pln;

          /**
           * Shipping rate defined in PYG.
           */
          pyg?: CurrencyOptions.Pyg;

          /**
           * Shipping rate defined in QAR.
           */
          qar?: CurrencyOptions.Qar;

          /**
           * Shipping rate defined in RON.
           */
          ron?: CurrencyOptions.Ron;

          /**
           * Shipping rate defined in RSD.
           */
          rsd?: CurrencyOptions.Rsd;

          /**
           * Shipping rate defined in RUB.
           */
          rub?: CurrencyOptions.Rub;

          /**
           * Shipping rate defined in RWF.
           */
          rwf?: CurrencyOptions.Rwf;

          /**
           * Shipping rate defined in SAR.
           */
          sar?: CurrencyOptions.Sar;

          /**
           * Shipping rate defined in SBD.
           */
          sbd?: CurrencyOptions.Sbd;

          /**
           * Shipping rate defined in SCR.
           */
          scr?: CurrencyOptions.Scr;

          /**
           * Shipping rate defined in SEK.
           */
          sek?: CurrencyOptions.Sek;

          /**
           * Shipping rate defined in SGD.
           */
          sgd?: CurrencyOptions.Sgd;

          /**
           * Shipping rate defined in SHP.
           */
          shp?: CurrencyOptions.Shp;

          /**
           * Shipping rate defined in SLL.
           */
          sll?: CurrencyOptions.Sll;

          /**
           * Shipping rate defined in SOS.
           */
          sos?: CurrencyOptions.Sos;

          /**
           * Shipping rate defined in SRD.
           */
          srd?: CurrencyOptions.Srd;

          /**
           * Shipping rate defined in STD.
           */
          std?: CurrencyOptions.Std;

          /**
           * Shipping rate defined in SZL.
           */
          szl?: CurrencyOptions.Szl;

          /**
           * Shipping rate defined in THB.
           */
          thb?: CurrencyOptions.Thb;

          /**
           * Shipping rate defined in TJS.
           */
          tjs?: CurrencyOptions.Tjs;

          /**
           * Shipping rate defined in TND.
           */
          tnd?: CurrencyOptions.Tnd;

          /**
           * Shipping rate defined in TOP.
           */
          top?: CurrencyOptions.Top;

          /**
           * Shipping rate defined in TRY.
           */
          try?: CurrencyOptions.Try;

          /**
           * Shipping rate defined in TTD.
           */
          ttd?: CurrencyOptions.Ttd;

          /**
           * Shipping rate defined in TWD.
           */
          twd?: CurrencyOptions.Twd;

          /**
           * Shipping rate defined in TZS.
           */
          tzs?: CurrencyOptions.Tzs;

          /**
           * Shipping rate defined in UAH.
           */
          uah?: CurrencyOptions.Uah;

          /**
           * Shipping rate defined in UGX.
           */
          ugx?: CurrencyOptions.Ugx;

          /**
           * Shipping rate defined in USD.
           */
          usd?: CurrencyOptions.Usd;

          /**
           * Shipping rate defined in USDC.
           */
          usdc?: CurrencyOptions.Usdc;

          /**
           * Shipping rate defined in UYU.
           */
          uyu?: CurrencyOptions.Uyu;

          /**
           * Shipping rate defined in UZS.
           */
          uzs?: CurrencyOptions.Uzs;

          /**
           * Shipping rate defined in VND.
           */
          vnd?: CurrencyOptions.Vnd;

          /**
           * Shipping rate defined in VUV.
           */
          vuv?: CurrencyOptions.Vuv;

          /**
           * Shipping rate defined in WST.
           */
          wst?: CurrencyOptions.Wst;

          /**
           * Shipping rate defined in XAF.
           */
          xaf?: CurrencyOptions.Xaf;

          /**
           * Shipping rate defined in XCD.
           */
          xcd?: CurrencyOptions.Xcd;

          /**
           * Shipping rate defined in XOF.
           */
          xof?: CurrencyOptions.Xof;

          /**
           * Shipping rate defined in XPF.
           */
          xpf?: CurrencyOptions.Xpf;

          /**
           * Shipping rate defined in YER.
           */
          yer?: CurrencyOptions.Yer;

          /**
           * Shipping rate defined in ZAR.
           */
          zar?: CurrencyOptions.Zar;

          /**
           * Shipping rate defined in ZMW.
           */
          zmw?: CurrencyOptions.Zmw;
        }

        namespace CurrencyOptions {
          interface Aed {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Aed.TaxBehavior;
          }

          namespace Aed {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Afn {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Afn.TaxBehavior;
          }

          namespace Afn {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface All {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: All.TaxBehavior;
          }

          namespace All {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Amd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Amd.TaxBehavior;
          }

          namespace Amd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Ang {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Ang.TaxBehavior;
          }

          namespace Ang {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Aoa {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Aoa.TaxBehavior;
          }

          namespace Aoa {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Ars {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Ars.TaxBehavior;
          }

          namespace Ars {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Aud {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Aud.TaxBehavior;
          }

          namespace Aud {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Awg {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Awg.TaxBehavior;
          }

          namespace Awg {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Azn {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Azn.TaxBehavior;
          }

          namespace Azn {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Bam {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Bam.TaxBehavior;
          }

          namespace Bam {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Bbd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Bbd.TaxBehavior;
          }

          namespace Bbd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Bdt {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Bdt.TaxBehavior;
          }

          namespace Bdt {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Bgn {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Bgn.TaxBehavior;
          }

          namespace Bgn {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Bhd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Bhd.TaxBehavior;
          }

          namespace Bhd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Bif {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Bif.TaxBehavior;
          }

          namespace Bif {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Bmd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Bmd.TaxBehavior;
          }

          namespace Bmd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Bnd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Bnd.TaxBehavior;
          }

          namespace Bnd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Bob {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Bob.TaxBehavior;
          }

          namespace Bob {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Brl {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Brl.TaxBehavior;
          }

          namespace Brl {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Bsd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Bsd.TaxBehavior;
          }

          namespace Bsd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Btn {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Btn.TaxBehavior;
          }

          namespace Btn {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Bwp {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Bwp.TaxBehavior;
          }

          namespace Bwp {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Byn {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Byn.TaxBehavior;
          }

          namespace Byn {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Bzd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Bzd.TaxBehavior;
          }

          namespace Bzd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Cad {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Cad.TaxBehavior;
          }

          namespace Cad {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Cdf {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Cdf.TaxBehavior;
          }

          namespace Cdf {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Chf {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Chf.TaxBehavior;
          }

          namespace Chf {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Clp {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Clp.TaxBehavior;
          }

          namespace Clp {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Cny {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Cny.TaxBehavior;
          }

          namespace Cny {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Cop {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Cop.TaxBehavior;
          }

          namespace Cop {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Crc {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Crc.TaxBehavior;
          }

          namespace Crc {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Cve {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Cve.TaxBehavior;
          }

          namespace Cve {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Czk {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Czk.TaxBehavior;
          }

          namespace Czk {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Djf {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Djf.TaxBehavior;
          }

          namespace Djf {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Dkk {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Dkk.TaxBehavior;
          }

          namespace Dkk {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Dop {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Dop.TaxBehavior;
          }

          namespace Dop {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Dzd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Dzd.TaxBehavior;
          }

          namespace Dzd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Egp {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Egp.TaxBehavior;
          }

          namespace Egp {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Etb {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Etb.TaxBehavior;
          }

          namespace Etb {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Eur {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Eur.TaxBehavior;
          }

          namespace Eur {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Fjd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Fjd.TaxBehavior;
          }

          namespace Fjd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Fkp {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Fkp.TaxBehavior;
          }

          namespace Fkp {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Gbp {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Gbp.TaxBehavior;
          }

          namespace Gbp {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Gel {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Gel.TaxBehavior;
          }

          namespace Gel {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Ghs {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Ghs.TaxBehavior;
          }

          namespace Ghs {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Gip {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Gip.TaxBehavior;
          }

          namespace Gip {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Gmd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Gmd.TaxBehavior;
          }

          namespace Gmd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Gnf {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Gnf.TaxBehavior;
          }

          namespace Gnf {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Gtq {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Gtq.TaxBehavior;
          }

          namespace Gtq {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Gyd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Gyd.TaxBehavior;
          }

          namespace Gyd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Hkd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Hkd.TaxBehavior;
          }

          namespace Hkd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Hnl {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Hnl.TaxBehavior;
          }

          namespace Hnl {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Hrk {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Hrk.TaxBehavior;
          }

          namespace Hrk {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Htg {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Htg.TaxBehavior;
          }

          namespace Htg {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Huf {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Huf.TaxBehavior;
          }

          namespace Huf {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Idr {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Idr.TaxBehavior;
          }

          namespace Idr {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Ils {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Ils.TaxBehavior;
          }

          namespace Ils {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Inr {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Inr.TaxBehavior;
          }

          namespace Inr {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Isk {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Isk.TaxBehavior;
          }

          namespace Isk {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Jmd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Jmd.TaxBehavior;
          }

          namespace Jmd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Jod {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Jod.TaxBehavior;
          }

          namespace Jod {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Jpy {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Jpy.TaxBehavior;
          }

          namespace Jpy {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Kes {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Kes.TaxBehavior;
          }

          namespace Kes {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Kgs {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Kgs.TaxBehavior;
          }

          namespace Kgs {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Khr {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Khr.TaxBehavior;
          }

          namespace Khr {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Kmf {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Kmf.TaxBehavior;
          }

          namespace Kmf {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Krw {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Krw.TaxBehavior;
          }

          namespace Krw {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Kwd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Kwd.TaxBehavior;
          }

          namespace Kwd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Kyd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Kyd.TaxBehavior;
          }

          namespace Kyd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Kzt {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Kzt.TaxBehavior;
          }

          namespace Kzt {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Lak {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Lak.TaxBehavior;
          }

          namespace Lak {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Lbp {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Lbp.TaxBehavior;
          }

          namespace Lbp {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Lkr {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Lkr.TaxBehavior;
          }

          namespace Lkr {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Lrd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Lrd.TaxBehavior;
          }

          namespace Lrd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Lsl {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Lsl.TaxBehavior;
          }

          namespace Lsl {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Mad {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Mad.TaxBehavior;
          }

          namespace Mad {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Mdl {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Mdl.TaxBehavior;
          }

          namespace Mdl {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Mga {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Mga.TaxBehavior;
          }

          namespace Mga {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Mkd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Mkd.TaxBehavior;
          }

          namespace Mkd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Mmk {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Mmk.TaxBehavior;
          }

          namespace Mmk {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Mnt {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Mnt.TaxBehavior;
          }

          namespace Mnt {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Mop {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Mop.TaxBehavior;
          }

          namespace Mop {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Mro {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Mro.TaxBehavior;
          }

          namespace Mro {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Mur {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Mur.TaxBehavior;
          }

          namespace Mur {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Mvr {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Mvr.TaxBehavior;
          }

          namespace Mvr {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Mwk {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Mwk.TaxBehavior;
          }

          namespace Mwk {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Mxn {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Mxn.TaxBehavior;
          }

          namespace Mxn {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Myr {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Myr.TaxBehavior;
          }

          namespace Myr {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Mzn {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Mzn.TaxBehavior;
          }

          namespace Mzn {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Nad {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Nad.TaxBehavior;
          }

          namespace Nad {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Ngn {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Ngn.TaxBehavior;
          }

          namespace Ngn {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Nio {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Nio.TaxBehavior;
          }

          namespace Nio {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Nok {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Nok.TaxBehavior;
          }

          namespace Nok {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Npr {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Npr.TaxBehavior;
          }

          namespace Npr {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Nzd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Nzd.TaxBehavior;
          }

          namespace Nzd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Omr {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Omr.TaxBehavior;
          }

          namespace Omr {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Pab {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Pab.TaxBehavior;
          }

          namespace Pab {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Pen {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Pen.TaxBehavior;
          }

          namespace Pen {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Pgk {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Pgk.TaxBehavior;
          }

          namespace Pgk {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Php {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Php.TaxBehavior;
          }

          namespace Php {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Pkr {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Pkr.TaxBehavior;
          }

          namespace Pkr {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Pln {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Pln.TaxBehavior;
          }

          namespace Pln {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Pyg {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Pyg.TaxBehavior;
          }

          namespace Pyg {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Qar {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Qar.TaxBehavior;
          }

          namespace Qar {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Ron {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Ron.TaxBehavior;
          }

          namespace Ron {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Rsd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Rsd.TaxBehavior;
          }

          namespace Rsd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Rub {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Rub.TaxBehavior;
          }

          namespace Rub {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Rwf {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Rwf.TaxBehavior;
          }

          namespace Rwf {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Sar {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Sar.TaxBehavior;
          }

          namespace Sar {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Sbd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Sbd.TaxBehavior;
          }

          namespace Sbd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Scr {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Scr.TaxBehavior;
          }

          namespace Scr {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Sek {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Sek.TaxBehavior;
          }

          namespace Sek {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Sgd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Sgd.TaxBehavior;
          }

          namespace Sgd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Shp {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Shp.TaxBehavior;
          }

          namespace Shp {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Sll {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Sll.TaxBehavior;
          }

          namespace Sll {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Sos {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Sos.TaxBehavior;
          }

          namespace Sos {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Srd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Srd.TaxBehavior;
          }

          namespace Srd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Std {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Std.TaxBehavior;
          }

          namespace Std {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Szl {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Szl.TaxBehavior;
          }

          namespace Szl {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Thb {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Thb.TaxBehavior;
          }

          namespace Thb {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Tjs {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Tjs.TaxBehavior;
          }

          namespace Tjs {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Tnd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Tnd.TaxBehavior;
          }

          namespace Tnd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Top {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Top.TaxBehavior;
          }

          namespace Top {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Try {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Try.TaxBehavior;
          }

          namespace Try {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Ttd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Ttd.TaxBehavior;
          }

          namespace Ttd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Twd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Twd.TaxBehavior;
          }

          namespace Twd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Tzs {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Tzs.TaxBehavior;
          }

          namespace Tzs {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Uah {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Uah.TaxBehavior;
          }

          namespace Uah {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Ugx {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Ugx.TaxBehavior;
          }

          namespace Ugx {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Usd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Usd.TaxBehavior;
          }

          namespace Usd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Usdc {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Usdc.TaxBehavior;
          }

          namespace Usdc {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Uyu {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Uyu.TaxBehavior;
          }

          namespace Uyu {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Uzs {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Uzs.TaxBehavior;
          }

          namespace Uzs {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Vnd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Vnd.TaxBehavior;
          }

          namespace Vnd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Vuv {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Vuv.TaxBehavior;
          }

          namespace Vuv {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Wst {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Wst.TaxBehavior;
          }

          namespace Wst {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Xaf {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Xaf.TaxBehavior;
          }

          namespace Xaf {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Xcd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Xcd.TaxBehavior;
          }

          namespace Xcd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Xof {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Xof.TaxBehavior;
          }

          namespace Xof {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Xpf {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Xpf.TaxBehavior;
          }

          namespace Xpf {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Yer {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Yer.TaxBehavior;
          }

          namespace Yer {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Zar {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Zar.TaxBehavior;
          }

          namespace Zar {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Zmw {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Zmw.TaxBehavior;
          }

          namespace Zmw {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }
        }
      }

      type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
    }

    interface ShippingRateRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface ShippingRateUpdateParams {
      /**
       * Whether the shipping rate can be used for new purchases. Defaults to `true`.
       */
      active?: boolean;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Describes a fixed amount to charge for shipping. Must be present if type is `fixed_amount`.
       */
      fixed_amount?: ShippingRateUpdateParams.FixedAmount;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
       */
      tax_behavior?: ShippingRateUpdateParams.TaxBehavior;
    }

    namespace ShippingRateUpdateParams {
      interface FixedAmount {
        /**
         * Shipping rates defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
         */
        currency_options?: FixedAmount.CurrencyOptions;
      }

      namespace FixedAmount {
        interface CurrencyOptions {
          /**
           * Shipping rate defined in AED.
           */
          aed?: CurrencyOptions.Aed;

          /**
           * Shipping rate defined in AFN.
           */
          afn?: CurrencyOptions.Afn;

          /**
           * Shipping rate defined in ALL.
           */
          all?: CurrencyOptions.All;

          /**
           * Shipping rate defined in AMD.
           */
          amd?: CurrencyOptions.Amd;

          /**
           * Shipping rate defined in ANG.
           */
          ang?: CurrencyOptions.Ang;

          /**
           * Shipping rate defined in AOA.
           */
          aoa?: CurrencyOptions.Aoa;

          /**
           * Shipping rate defined in ARS.
           */
          ars?: CurrencyOptions.Ars;

          /**
           * Shipping rate defined in AUD.
           */
          aud?: CurrencyOptions.Aud;

          /**
           * Shipping rate defined in AWG.
           */
          awg?: CurrencyOptions.Awg;

          /**
           * Shipping rate defined in AZN.
           */
          azn?: CurrencyOptions.Azn;

          /**
           * Shipping rate defined in BAM.
           */
          bam?: CurrencyOptions.Bam;

          /**
           * Shipping rate defined in BBD.
           */
          bbd?: CurrencyOptions.Bbd;

          /**
           * Shipping rate defined in BDT.
           */
          bdt?: CurrencyOptions.Bdt;

          /**
           * Shipping rate defined in BGN.
           */
          bgn?: CurrencyOptions.Bgn;

          /**
           * Shipping rate defined in BHD.
           */
          bhd?: CurrencyOptions.Bhd;

          /**
           * Shipping rate defined in BIF.
           */
          bif?: CurrencyOptions.Bif;

          /**
           * Shipping rate defined in BMD.
           */
          bmd?: CurrencyOptions.Bmd;

          /**
           * Shipping rate defined in BND.
           */
          bnd?: CurrencyOptions.Bnd;

          /**
           * Shipping rate defined in BOB.
           */
          bob?: CurrencyOptions.Bob;

          /**
           * Shipping rate defined in BRL.
           */
          brl?: CurrencyOptions.Brl;

          /**
           * Shipping rate defined in BSD.
           */
          bsd?: CurrencyOptions.Bsd;

          /**
           * Shipping rate defined in BTN.
           */
          btn?: CurrencyOptions.Btn;

          /**
           * Shipping rate defined in BWP.
           */
          bwp?: CurrencyOptions.Bwp;

          /**
           * Shipping rate defined in BYN.
           */
          byn?: CurrencyOptions.Byn;

          /**
           * Shipping rate defined in BZD.
           */
          bzd?: CurrencyOptions.Bzd;

          /**
           * Shipping rate defined in CAD.
           */
          cad?: CurrencyOptions.Cad;

          /**
           * Shipping rate defined in CDF.
           */
          cdf?: CurrencyOptions.Cdf;

          /**
           * Shipping rate defined in CHF.
           */
          chf?: CurrencyOptions.Chf;

          /**
           * Shipping rate defined in CLP.
           */
          clp?: CurrencyOptions.Clp;

          /**
           * Shipping rate defined in CNY.
           */
          cny?: CurrencyOptions.Cny;

          /**
           * Shipping rate defined in COP.
           */
          cop?: CurrencyOptions.Cop;

          /**
           * Shipping rate defined in CRC.
           */
          crc?: CurrencyOptions.Crc;

          /**
           * Shipping rate defined in CVE.
           */
          cve?: CurrencyOptions.Cve;

          /**
           * Shipping rate defined in CZK.
           */
          czk?: CurrencyOptions.Czk;

          /**
           * Shipping rate defined in DJF.
           */
          djf?: CurrencyOptions.Djf;

          /**
           * Shipping rate defined in DKK.
           */
          dkk?: CurrencyOptions.Dkk;

          /**
           * Shipping rate defined in DOP.
           */
          dop?: CurrencyOptions.Dop;

          /**
           * Shipping rate defined in DZD.
           */
          dzd?: CurrencyOptions.Dzd;

          /**
           * Shipping rate defined in EGP.
           */
          egp?: CurrencyOptions.Egp;

          /**
           * Shipping rate defined in ETB.
           */
          etb?: CurrencyOptions.Etb;

          /**
           * Shipping rate defined in EUR.
           */
          eur?: CurrencyOptions.Eur;

          /**
           * Shipping rate defined in FJD.
           */
          fjd?: CurrencyOptions.Fjd;

          /**
           * Shipping rate defined in FKP.
           */
          fkp?: CurrencyOptions.Fkp;

          /**
           * Shipping rate defined in GBP.
           */
          gbp?: CurrencyOptions.Gbp;

          /**
           * Shipping rate defined in GEL.
           */
          gel?: CurrencyOptions.Gel;

          /**
           * Shipping rate defined in GHS.
           */
          ghs?: CurrencyOptions.Ghs;

          /**
           * Shipping rate defined in GIP.
           */
          gip?: CurrencyOptions.Gip;

          /**
           * Shipping rate defined in GMD.
           */
          gmd?: CurrencyOptions.Gmd;

          /**
           * Shipping rate defined in GNF.
           */
          gnf?: CurrencyOptions.Gnf;

          /**
           * Shipping rate defined in GTQ.
           */
          gtq?: CurrencyOptions.Gtq;

          /**
           * Shipping rate defined in GYD.
           */
          gyd?: CurrencyOptions.Gyd;

          /**
           * Shipping rate defined in HKD.
           */
          hkd?: CurrencyOptions.Hkd;

          /**
           * Shipping rate defined in HNL.
           */
          hnl?: CurrencyOptions.Hnl;

          /**
           * Shipping rate defined in HRK.
           */
          hrk?: CurrencyOptions.Hrk;

          /**
           * Shipping rate defined in HTG.
           */
          htg?: CurrencyOptions.Htg;

          /**
           * Shipping rate defined in HUF.
           */
          huf?: CurrencyOptions.Huf;

          /**
           * Shipping rate defined in IDR.
           */
          idr?: CurrencyOptions.Idr;

          /**
           * Shipping rate defined in ILS.
           */
          ils?: CurrencyOptions.Ils;

          /**
           * Shipping rate defined in INR.
           */
          inr?: CurrencyOptions.Inr;

          /**
           * Shipping rate defined in ISK.
           */
          isk?: CurrencyOptions.Isk;

          /**
           * Shipping rate defined in JMD.
           */
          jmd?: CurrencyOptions.Jmd;

          /**
           * Shipping rate defined in JOD.
           */
          jod?: CurrencyOptions.Jod;

          /**
           * Shipping rate defined in JPY.
           */
          jpy?: CurrencyOptions.Jpy;

          /**
           * Shipping rate defined in KES.
           */
          kes?: CurrencyOptions.Kes;

          /**
           * Shipping rate defined in KGS.
           */
          kgs?: CurrencyOptions.Kgs;

          /**
           * Shipping rate defined in KHR.
           */
          khr?: CurrencyOptions.Khr;

          /**
           * Shipping rate defined in KMF.
           */
          kmf?: CurrencyOptions.Kmf;

          /**
           * Shipping rate defined in KRW.
           */
          krw?: CurrencyOptions.Krw;

          /**
           * Shipping rate defined in KWD.
           */
          kwd?: CurrencyOptions.Kwd;

          /**
           * Shipping rate defined in KYD.
           */
          kyd?: CurrencyOptions.Kyd;

          /**
           * Shipping rate defined in KZT.
           */
          kzt?: CurrencyOptions.Kzt;

          /**
           * Shipping rate defined in LAK.
           */
          lak?: CurrencyOptions.Lak;

          /**
           * Shipping rate defined in LBP.
           */
          lbp?: CurrencyOptions.Lbp;

          /**
           * Shipping rate defined in LKR.
           */
          lkr?: CurrencyOptions.Lkr;

          /**
           * Shipping rate defined in LRD.
           */
          lrd?: CurrencyOptions.Lrd;

          /**
           * Shipping rate defined in LSL.
           */
          lsl?: CurrencyOptions.Lsl;

          /**
           * Shipping rate defined in MAD.
           */
          mad?: CurrencyOptions.Mad;

          /**
           * Shipping rate defined in MDL.
           */
          mdl?: CurrencyOptions.Mdl;

          /**
           * Shipping rate defined in MGA.
           */
          mga?: CurrencyOptions.Mga;

          /**
           * Shipping rate defined in MKD.
           */
          mkd?: CurrencyOptions.Mkd;

          /**
           * Shipping rate defined in MMK.
           */
          mmk?: CurrencyOptions.Mmk;

          /**
           * Shipping rate defined in MNT.
           */
          mnt?: CurrencyOptions.Mnt;

          /**
           * Shipping rate defined in MOP.
           */
          mop?: CurrencyOptions.Mop;

          /**
           * Shipping rate defined in MRO.
           */
          mro?: CurrencyOptions.Mro;

          /**
           * Shipping rate defined in MUR.
           */
          mur?: CurrencyOptions.Mur;

          /**
           * Shipping rate defined in MVR.
           */
          mvr?: CurrencyOptions.Mvr;

          /**
           * Shipping rate defined in MWK.
           */
          mwk?: CurrencyOptions.Mwk;

          /**
           * Shipping rate defined in MXN.
           */
          mxn?: CurrencyOptions.Mxn;

          /**
           * Shipping rate defined in MYR.
           */
          myr?: CurrencyOptions.Myr;

          /**
           * Shipping rate defined in MZN.
           */
          mzn?: CurrencyOptions.Mzn;

          /**
           * Shipping rate defined in NAD.
           */
          nad?: CurrencyOptions.Nad;

          /**
           * Shipping rate defined in NGN.
           */
          ngn?: CurrencyOptions.Ngn;

          /**
           * Shipping rate defined in NIO.
           */
          nio?: CurrencyOptions.Nio;

          /**
           * Shipping rate defined in NOK.
           */
          nok?: CurrencyOptions.Nok;

          /**
           * Shipping rate defined in NPR.
           */
          npr?: CurrencyOptions.Npr;

          /**
           * Shipping rate defined in NZD.
           */
          nzd?: CurrencyOptions.Nzd;

          /**
           * Shipping rate defined in OMR.
           */
          omr?: CurrencyOptions.Omr;

          /**
           * Shipping rate defined in PAB.
           */
          pab?: CurrencyOptions.Pab;

          /**
           * Shipping rate defined in PEN.
           */
          pen?: CurrencyOptions.Pen;

          /**
           * Shipping rate defined in PGK.
           */
          pgk?: CurrencyOptions.Pgk;

          /**
           * Shipping rate defined in PHP.
           */
          php?: CurrencyOptions.Php;

          /**
           * Shipping rate defined in PKR.
           */
          pkr?: CurrencyOptions.Pkr;

          /**
           * Shipping rate defined in PLN.
           */
          pln?: CurrencyOptions.Pln;

          /**
           * Shipping rate defined in PYG.
           */
          pyg?: CurrencyOptions.Pyg;

          /**
           * Shipping rate defined in QAR.
           */
          qar?: CurrencyOptions.Qar;

          /**
           * Shipping rate defined in RON.
           */
          ron?: CurrencyOptions.Ron;

          /**
           * Shipping rate defined in RSD.
           */
          rsd?: CurrencyOptions.Rsd;

          /**
           * Shipping rate defined in RUB.
           */
          rub?: CurrencyOptions.Rub;

          /**
           * Shipping rate defined in RWF.
           */
          rwf?: CurrencyOptions.Rwf;

          /**
           * Shipping rate defined in SAR.
           */
          sar?: CurrencyOptions.Sar;

          /**
           * Shipping rate defined in SBD.
           */
          sbd?: CurrencyOptions.Sbd;

          /**
           * Shipping rate defined in SCR.
           */
          scr?: CurrencyOptions.Scr;

          /**
           * Shipping rate defined in SEK.
           */
          sek?: CurrencyOptions.Sek;

          /**
           * Shipping rate defined in SGD.
           */
          sgd?: CurrencyOptions.Sgd;

          /**
           * Shipping rate defined in SHP.
           */
          shp?: CurrencyOptions.Shp;

          /**
           * Shipping rate defined in SLL.
           */
          sll?: CurrencyOptions.Sll;

          /**
           * Shipping rate defined in SOS.
           */
          sos?: CurrencyOptions.Sos;

          /**
           * Shipping rate defined in SRD.
           */
          srd?: CurrencyOptions.Srd;

          /**
           * Shipping rate defined in STD.
           */
          std?: CurrencyOptions.Std;

          /**
           * Shipping rate defined in SZL.
           */
          szl?: CurrencyOptions.Szl;

          /**
           * Shipping rate defined in THB.
           */
          thb?: CurrencyOptions.Thb;

          /**
           * Shipping rate defined in TJS.
           */
          tjs?: CurrencyOptions.Tjs;

          /**
           * Shipping rate defined in TND.
           */
          tnd?: CurrencyOptions.Tnd;

          /**
           * Shipping rate defined in TOP.
           */
          top?: CurrencyOptions.Top;

          /**
           * Shipping rate defined in TRY.
           */
          try?: CurrencyOptions.Try;

          /**
           * Shipping rate defined in TTD.
           */
          ttd?: CurrencyOptions.Ttd;

          /**
           * Shipping rate defined in TWD.
           */
          twd?: CurrencyOptions.Twd;

          /**
           * Shipping rate defined in TZS.
           */
          tzs?: CurrencyOptions.Tzs;

          /**
           * Shipping rate defined in UAH.
           */
          uah?: CurrencyOptions.Uah;

          /**
           * Shipping rate defined in UGX.
           */
          ugx?: CurrencyOptions.Ugx;

          /**
           * Shipping rate defined in USD.
           */
          usd?: CurrencyOptions.Usd;

          /**
           * Shipping rate defined in USDC.
           */
          usdc?: CurrencyOptions.Usdc;

          /**
           * Shipping rate defined in UYU.
           */
          uyu?: CurrencyOptions.Uyu;

          /**
           * Shipping rate defined in UZS.
           */
          uzs?: CurrencyOptions.Uzs;

          /**
           * Shipping rate defined in VND.
           */
          vnd?: CurrencyOptions.Vnd;

          /**
           * Shipping rate defined in VUV.
           */
          vuv?: CurrencyOptions.Vuv;

          /**
           * Shipping rate defined in WST.
           */
          wst?: CurrencyOptions.Wst;

          /**
           * Shipping rate defined in XAF.
           */
          xaf?: CurrencyOptions.Xaf;

          /**
           * Shipping rate defined in XCD.
           */
          xcd?: CurrencyOptions.Xcd;

          /**
           * Shipping rate defined in XOF.
           */
          xof?: CurrencyOptions.Xof;

          /**
           * Shipping rate defined in XPF.
           */
          xpf?: CurrencyOptions.Xpf;

          /**
           * Shipping rate defined in YER.
           */
          yer?: CurrencyOptions.Yer;

          /**
           * Shipping rate defined in ZAR.
           */
          zar?: CurrencyOptions.Zar;

          /**
           * Shipping rate defined in ZMW.
           */
          zmw?: CurrencyOptions.Zmw;
        }

        namespace CurrencyOptions {
          interface Aed {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Aed.TaxBehavior;
          }

          namespace Aed {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Afn {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Afn.TaxBehavior;
          }

          namespace Afn {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface All {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: All.TaxBehavior;
          }

          namespace All {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Amd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Amd.TaxBehavior;
          }

          namespace Amd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Ang {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Ang.TaxBehavior;
          }

          namespace Ang {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Aoa {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Aoa.TaxBehavior;
          }

          namespace Aoa {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Ars {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Ars.TaxBehavior;
          }

          namespace Ars {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Aud {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Aud.TaxBehavior;
          }

          namespace Aud {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Awg {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Awg.TaxBehavior;
          }

          namespace Awg {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Azn {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Azn.TaxBehavior;
          }

          namespace Azn {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Bam {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Bam.TaxBehavior;
          }

          namespace Bam {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Bbd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Bbd.TaxBehavior;
          }

          namespace Bbd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Bdt {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Bdt.TaxBehavior;
          }

          namespace Bdt {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Bgn {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Bgn.TaxBehavior;
          }

          namespace Bgn {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Bhd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Bhd.TaxBehavior;
          }

          namespace Bhd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Bif {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Bif.TaxBehavior;
          }

          namespace Bif {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Bmd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Bmd.TaxBehavior;
          }

          namespace Bmd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Bnd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Bnd.TaxBehavior;
          }

          namespace Bnd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Bob {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Bob.TaxBehavior;
          }

          namespace Bob {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Brl {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Brl.TaxBehavior;
          }

          namespace Brl {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Bsd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Bsd.TaxBehavior;
          }

          namespace Bsd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Btn {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Btn.TaxBehavior;
          }

          namespace Btn {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Bwp {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Bwp.TaxBehavior;
          }

          namespace Bwp {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Byn {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Byn.TaxBehavior;
          }

          namespace Byn {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Bzd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Bzd.TaxBehavior;
          }

          namespace Bzd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Cad {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Cad.TaxBehavior;
          }

          namespace Cad {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Cdf {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Cdf.TaxBehavior;
          }

          namespace Cdf {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Chf {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Chf.TaxBehavior;
          }

          namespace Chf {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Clp {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Clp.TaxBehavior;
          }

          namespace Clp {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Cny {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Cny.TaxBehavior;
          }

          namespace Cny {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Cop {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Cop.TaxBehavior;
          }

          namespace Cop {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Crc {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Crc.TaxBehavior;
          }

          namespace Crc {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Cve {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Cve.TaxBehavior;
          }

          namespace Cve {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Czk {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Czk.TaxBehavior;
          }

          namespace Czk {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Djf {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Djf.TaxBehavior;
          }

          namespace Djf {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Dkk {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Dkk.TaxBehavior;
          }

          namespace Dkk {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Dop {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Dop.TaxBehavior;
          }

          namespace Dop {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Dzd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Dzd.TaxBehavior;
          }

          namespace Dzd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Egp {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Egp.TaxBehavior;
          }

          namespace Egp {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Etb {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Etb.TaxBehavior;
          }

          namespace Etb {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Eur {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Eur.TaxBehavior;
          }

          namespace Eur {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Fjd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Fjd.TaxBehavior;
          }

          namespace Fjd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Fkp {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Fkp.TaxBehavior;
          }

          namespace Fkp {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Gbp {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Gbp.TaxBehavior;
          }

          namespace Gbp {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Gel {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Gel.TaxBehavior;
          }

          namespace Gel {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Ghs {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Ghs.TaxBehavior;
          }

          namespace Ghs {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Gip {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Gip.TaxBehavior;
          }

          namespace Gip {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Gmd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Gmd.TaxBehavior;
          }

          namespace Gmd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Gnf {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Gnf.TaxBehavior;
          }

          namespace Gnf {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Gtq {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Gtq.TaxBehavior;
          }

          namespace Gtq {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Gyd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Gyd.TaxBehavior;
          }

          namespace Gyd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Hkd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Hkd.TaxBehavior;
          }

          namespace Hkd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Hnl {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Hnl.TaxBehavior;
          }

          namespace Hnl {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Hrk {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Hrk.TaxBehavior;
          }

          namespace Hrk {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Htg {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Htg.TaxBehavior;
          }

          namespace Htg {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Huf {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Huf.TaxBehavior;
          }

          namespace Huf {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Idr {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Idr.TaxBehavior;
          }

          namespace Idr {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Ils {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Ils.TaxBehavior;
          }

          namespace Ils {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Inr {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Inr.TaxBehavior;
          }

          namespace Inr {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Isk {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Isk.TaxBehavior;
          }

          namespace Isk {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Jmd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Jmd.TaxBehavior;
          }

          namespace Jmd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Jod {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Jod.TaxBehavior;
          }

          namespace Jod {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Jpy {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Jpy.TaxBehavior;
          }

          namespace Jpy {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Kes {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Kes.TaxBehavior;
          }

          namespace Kes {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Kgs {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Kgs.TaxBehavior;
          }

          namespace Kgs {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Khr {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Khr.TaxBehavior;
          }

          namespace Khr {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Kmf {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Kmf.TaxBehavior;
          }

          namespace Kmf {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Krw {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Krw.TaxBehavior;
          }

          namespace Krw {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Kwd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Kwd.TaxBehavior;
          }

          namespace Kwd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Kyd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Kyd.TaxBehavior;
          }

          namespace Kyd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Kzt {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Kzt.TaxBehavior;
          }

          namespace Kzt {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Lak {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Lak.TaxBehavior;
          }

          namespace Lak {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Lbp {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Lbp.TaxBehavior;
          }

          namespace Lbp {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Lkr {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Lkr.TaxBehavior;
          }

          namespace Lkr {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Lrd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Lrd.TaxBehavior;
          }

          namespace Lrd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Lsl {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Lsl.TaxBehavior;
          }

          namespace Lsl {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Mad {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Mad.TaxBehavior;
          }

          namespace Mad {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Mdl {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Mdl.TaxBehavior;
          }

          namespace Mdl {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Mga {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Mga.TaxBehavior;
          }

          namespace Mga {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Mkd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Mkd.TaxBehavior;
          }

          namespace Mkd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Mmk {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Mmk.TaxBehavior;
          }

          namespace Mmk {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Mnt {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Mnt.TaxBehavior;
          }

          namespace Mnt {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Mop {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Mop.TaxBehavior;
          }

          namespace Mop {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Mro {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Mro.TaxBehavior;
          }

          namespace Mro {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Mur {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Mur.TaxBehavior;
          }

          namespace Mur {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Mvr {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Mvr.TaxBehavior;
          }

          namespace Mvr {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Mwk {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Mwk.TaxBehavior;
          }

          namespace Mwk {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Mxn {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Mxn.TaxBehavior;
          }

          namespace Mxn {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Myr {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Myr.TaxBehavior;
          }

          namespace Myr {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Mzn {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Mzn.TaxBehavior;
          }

          namespace Mzn {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Nad {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Nad.TaxBehavior;
          }

          namespace Nad {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Ngn {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Ngn.TaxBehavior;
          }

          namespace Ngn {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Nio {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Nio.TaxBehavior;
          }

          namespace Nio {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Nok {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Nok.TaxBehavior;
          }

          namespace Nok {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Npr {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Npr.TaxBehavior;
          }

          namespace Npr {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Nzd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Nzd.TaxBehavior;
          }

          namespace Nzd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Omr {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Omr.TaxBehavior;
          }

          namespace Omr {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Pab {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Pab.TaxBehavior;
          }

          namespace Pab {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Pen {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Pen.TaxBehavior;
          }

          namespace Pen {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Pgk {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Pgk.TaxBehavior;
          }

          namespace Pgk {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Php {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Php.TaxBehavior;
          }

          namespace Php {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Pkr {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Pkr.TaxBehavior;
          }

          namespace Pkr {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Pln {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Pln.TaxBehavior;
          }

          namespace Pln {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Pyg {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Pyg.TaxBehavior;
          }

          namespace Pyg {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Qar {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Qar.TaxBehavior;
          }

          namespace Qar {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Ron {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Ron.TaxBehavior;
          }

          namespace Ron {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Rsd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Rsd.TaxBehavior;
          }

          namespace Rsd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Rub {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Rub.TaxBehavior;
          }

          namespace Rub {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Rwf {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Rwf.TaxBehavior;
          }

          namespace Rwf {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Sar {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Sar.TaxBehavior;
          }

          namespace Sar {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Sbd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Sbd.TaxBehavior;
          }

          namespace Sbd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Scr {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Scr.TaxBehavior;
          }

          namespace Scr {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Sek {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Sek.TaxBehavior;
          }

          namespace Sek {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Sgd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Sgd.TaxBehavior;
          }

          namespace Sgd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Shp {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Shp.TaxBehavior;
          }

          namespace Shp {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Sll {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Sll.TaxBehavior;
          }

          namespace Sll {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Sos {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Sos.TaxBehavior;
          }

          namespace Sos {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Srd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Srd.TaxBehavior;
          }

          namespace Srd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Std {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Std.TaxBehavior;
          }

          namespace Std {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Szl {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Szl.TaxBehavior;
          }

          namespace Szl {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Thb {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Thb.TaxBehavior;
          }

          namespace Thb {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Tjs {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Tjs.TaxBehavior;
          }

          namespace Tjs {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Tnd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Tnd.TaxBehavior;
          }

          namespace Tnd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Top {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Top.TaxBehavior;
          }

          namespace Top {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Try {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Try.TaxBehavior;
          }

          namespace Try {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Ttd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Ttd.TaxBehavior;
          }

          namespace Ttd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Twd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Twd.TaxBehavior;
          }

          namespace Twd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Tzs {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Tzs.TaxBehavior;
          }

          namespace Tzs {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Uah {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Uah.TaxBehavior;
          }

          namespace Uah {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Ugx {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Ugx.TaxBehavior;
          }

          namespace Ugx {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Usd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Usd.TaxBehavior;
          }

          namespace Usd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Usdc {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Usdc.TaxBehavior;
          }

          namespace Usdc {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Uyu {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Uyu.TaxBehavior;
          }

          namespace Uyu {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Uzs {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Uzs.TaxBehavior;
          }

          namespace Uzs {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Vnd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Vnd.TaxBehavior;
          }

          namespace Vnd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Vuv {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Vuv.TaxBehavior;
          }

          namespace Vuv {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Wst {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Wst.TaxBehavior;
          }

          namespace Wst {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Xaf {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Xaf.TaxBehavior;
          }

          namespace Xaf {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Xcd {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Xcd.TaxBehavior;
          }

          namespace Xcd {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Xof {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Xof.TaxBehavior;
          }

          namespace Xof {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Xpf {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Xpf.TaxBehavior;
          }

          namespace Xpf {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Yer {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Yer.TaxBehavior;
          }

          namespace Yer {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Zar {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Zar.TaxBehavior;
          }

          namespace Zar {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }

          interface Zmw {
            /**
             * A non-negative integer in cents representing how much to charge.
             */
            amount?: number;

            /**
             * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
             */
            tax_behavior?: Zmw.TaxBehavior;
          }

          namespace Zmw {
            type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
          }
        }
      }

      type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
    }

    interface ShippingRateListParams extends PaginationParams {
      /**
       * Only return shipping rates that are active or inactive.
       */
      active?: boolean;

      /**
       * A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
       */
      created?: Stripe.RangeQueryParam | number;

      /**
       * Only return shipping rates for the given currency.
       */
      currency?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    class ShippingRatesResource {
      /**
       * Creates a new shipping rate object.
       */
      create(
        params: ShippingRateCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.ShippingRate>>;

      /**
       * Returns the shipping rate object with the given ID.
       */
      retrieve(
        id: string,
        params?: ShippingRateRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.ShippingRate>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.ShippingRate>>;

      /**
       * Updates an existing shipping rate object.
       */
      update(
        id: string,
        params?: ShippingRateUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.ShippingRate>>;

      /**
       * Returns a list of your shipping rates.
       */
      list(
        params?: ShippingRateListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.ShippingRate>;
      list(options?: RequestOptions): ApiListPromise<Stripe.ShippingRate>;
    }
  }
}
