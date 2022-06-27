// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * The Coupon object.
     */
    interface Coupon {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'coupon';

      /**
       * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
       */
      amount_off: number | null;

      applies_to?: Coupon.AppliesTo;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * If `amount_off` has been set, the three-letter [ISO code for the currency](https://stripe.com/docs/currencies) of the amount to take off.
       */
      currency: string | null;

      currency_options?: Coupon.CurrencyOptions;

      deleted?: void;

      /**
       * One of `forever`, `once`, and `repeating`. Describes how long a customer who applies this coupon will get the discount.
       */
      duration: Coupon.Duration;

      /**
       * If `duration` is `repeating`, the number of months the coupon applies. Null if coupon `duration` is `forever` or `once`.
       */
      duration_in_months: number | null;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Maximum number of times this coupon can be redeemed, in total, across all customers, before it is no longer valid.
       */
      max_redemptions: number | null;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata | null;

      /**
       * Name of the coupon displayed to customers on for instance invoices or receipts.
       */
      name: string | null;

      /**
       * Percent that will be taken off the subtotal of any invoices for this customer for the duration of the coupon. For example, a coupon with percent_off of 50 will make a %s100 invoice %s50 instead.
       */
      percent_off: number | null;

      /**
       * Date after which the coupon can no longer be redeemed.
       */
      redeem_by: number | null;

      /**
       * Number of times this coupon has been applied to a customer.
       */
      times_redeemed: number;

      /**
       * Taking account of the above properties, whether this coupon can still be applied to a customer.
       */
      valid: boolean;
    }

    namespace Coupon {
      interface AppliesTo {
        /**
         * A list of product IDs this coupon applies to
         */
        products: Array<string>;
      }

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
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Afn {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface All {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Amd {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Ang {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Aoa {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Ars {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Aud {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Awg {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Azn {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Bam {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Bbd {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Bdt {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Bgn {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Bhd {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Bif {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Bmd {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Bnd {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Bob {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Brl {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Bsd {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Btn {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Bwp {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Byn {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Bzd {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Cad {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Cdf {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Chf {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Clp {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Cny {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Cop {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Crc {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Cve {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Czk {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Djf {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Dkk {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Dop {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Dzd {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Egp {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Etb {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Eur {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Fjd {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Fkp {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Gbp {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Gel {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Ghs {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Gip {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Gmd {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Gnf {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Gtq {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Gyd {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Hkd {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Hnl {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Hrk {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Htg {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Huf {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Idr {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Ils {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Inr {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Isk {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Jmd {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Jod {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Jpy {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Kes {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Kgs {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Khr {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Kmf {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Krw {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Kwd {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Kyd {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Kzt {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Lak {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Lbp {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Lkr {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Lrd {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Lsl {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Mad {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Mdl {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Mga {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Mkd {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Mmk {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Mnt {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Mop {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Mro {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Mur {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Mvr {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Mwk {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Mxn {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Myr {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Mzn {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Nad {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Ngn {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Nio {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Nok {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Npr {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Nzd {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Omr {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Pab {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Pen {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Pgk {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Php {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Pkr {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Pln {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Pyg {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Qar {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Ron {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Rsd {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Rub {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Rwf {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Sar {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Sbd {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Scr {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Sek {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Sgd {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Shp {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Sll {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Sos {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Srd {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Std {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Szl {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Thb {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Tjs {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Tnd {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Top {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Try {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Ttd {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Twd {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Tzs {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Uah {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Ugx {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Usd {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Usdc {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Uyu {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Uzs {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Vnd {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Vuv {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Wst {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Xaf {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Xcd {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Xof {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Xpf {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Yer {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Zar {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }

        interface Zmw {
          /**
           * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
           */
          amount_off: number;
        }
      }

      type Duration = 'forever' | 'once' | 'repeating';
    }

    /**
     * The DeletedCoupon object.
     */
    interface DeletedCoupon {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'coupon';

      /**
       * Always true for a deleted object
       */
      deleted: true;
    }

    interface CouponCreateParams {
      /**
       * A positive integer representing the amount to subtract from an invoice total (required if `percent_off` is not passed).
       */
      amount_off?: number;

      /**
       * A hash containing directions for what this Coupon will apply discounts to.
       */
      applies_to?: CouponCreateParams.AppliesTo;

      /**
       * Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) of the `amount_off` parameter (required if `amount_off` is passed).
       */
      currency?: string;

      /**
       * Coupons defined in each available currency option (only supported if `amount_off` is passed). Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
       */
      currency_options?: CouponCreateParams.CurrencyOptions;

      /**
       * Specifies how long the discount will be in effect if used on a subscription. Can be `forever`, `once`, or `repeating`. Defaults to `once`.
       */
      duration?: CouponCreateParams.Duration;

      /**
       * Required only if `duration` is `repeating`, in which case it must be a positive integer that specifies the number of months the discount will be in effect.
       */
      duration_in_months?: number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Unique string of your choice that will be used to identify this coupon when applying it to a customer. If you don't want to specify a particular code, you can leave the ID blank and we'll generate a random code for you.
       */
      id?: string;

      /**
       * A positive integer specifying the number of times the coupon can be redeemed before it's no longer valid. For example, you might have a 50% off coupon that the first 20 readers of your blog can use.
       */
      max_redemptions?: number;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * Name of the coupon displayed to customers on, for instance invoices, or receipts. By default the `id` is shown if `name` is not set.
       */
      name?: string;

      /**
       * A positive float larger than 0, and smaller or equal to 100, that represents the discount the coupon will apply (required if `amount_off` is not passed).
       */
      percent_off?: number;

      /**
       * Unix timestamp specifying the last time at which the coupon can be redeemed. After the redeem_by date, the coupon can no longer be applied to new customers.
       */
      redeem_by?: number;
    }

    namespace CouponCreateParams {
      interface AppliesTo {
        /**
         * An array of Product IDs that this Coupon will apply to.
         */
        products?: Array<string>;
      }

      interface CurrencyOptions {
        /**
         * Coupon defined in AED.
         */
        aed?: CurrencyOptions.Aed;

        /**
         * Coupon defined in AFN.
         */
        afn?: CurrencyOptions.Afn;

        /**
         * Coupon defined in ALL.
         */
        all?: CurrencyOptions.All;

        /**
         * Coupon defined in AMD.
         */
        amd?: CurrencyOptions.Amd;

        /**
         * Coupon defined in ANG.
         */
        ang?: CurrencyOptions.Ang;

        /**
         * Coupon defined in AOA.
         */
        aoa?: CurrencyOptions.Aoa;

        /**
         * Coupon defined in ARS.
         */
        ars?: CurrencyOptions.Ars;

        /**
         * Coupon defined in AUD.
         */
        aud?: CurrencyOptions.Aud;

        /**
         * Coupon defined in AWG.
         */
        awg?: CurrencyOptions.Awg;

        /**
         * Coupon defined in AZN.
         */
        azn?: CurrencyOptions.Azn;

        /**
         * Coupon defined in BAM.
         */
        bam?: CurrencyOptions.Bam;

        /**
         * Coupon defined in BBD.
         */
        bbd?: CurrencyOptions.Bbd;

        /**
         * Coupon defined in BDT.
         */
        bdt?: CurrencyOptions.Bdt;

        /**
         * Coupon defined in BGN.
         */
        bgn?: CurrencyOptions.Bgn;

        /**
         * Coupon defined in BHD.
         */
        bhd?: CurrencyOptions.Bhd;

        /**
         * Coupon defined in BIF.
         */
        bif?: CurrencyOptions.Bif;

        /**
         * Coupon defined in BMD.
         */
        bmd?: CurrencyOptions.Bmd;

        /**
         * Coupon defined in BND.
         */
        bnd?: CurrencyOptions.Bnd;

        /**
         * Coupon defined in BOB.
         */
        bob?: CurrencyOptions.Bob;

        /**
         * Coupon defined in BRL.
         */
        brl?: CurrencyOptions.Brl;

        /**
         * Coupon defined in BSD.
         */
        bsd?: CurrencyOptions.Bsd;

        /**
         * Coupon defined in BTN.
         */
        btn?: CurrencyOptions.Btn;

        /**
         * Coupon defined in BWP.
         */
        bwp?: CurrencyOptions.Bwp;

        /**
         * Coupon defined in BYN.
         */
        byn?: CurrencyOptions.Byn;

        /**
         * Coupon defined in BZD.
         */
        bzd?: CurrencyOptions.Bzd;

        /**
         * Coupon defined in CAD.
         */
        cad?: CurrencyOptions.Cad;

        /**
         * Coupon defined in CDF.
         */
        cdf?: CurrencyOptions.Cdf;

        /**
         * Coupon defined in CHF.
         */
        chf?: CurrencyOptions.Chf;

        /**
         * Coupon defined in CLP.
         */
        clp?: CurrencyOptions.Clp;

        /**
         * Coupon defined in CNY.
         */
        cny?: CurrencyOptions.Cny;

        /**
         * Coupon defined in COP.
         */
        cop?: CurrencyOptions.Cop;

        /**
         * Coupon defined in CRC.
         */
        crc?: CurrencyOptions.Crc;

        /**
         * Coupon defined in CVE.
         */
        cve?: CurrencyOptions.Cve;

        /**
         * Coupon defined in CZK.
         */
        czk?: CurrencyOptions.Czk;

        /**
         * Coupon defined in DJF.
         */
        djf?: CurrencyOptions.Djf;

        /**
         * Coupon defined in DKK.
         */
        dkk?: CurrencyOptions.Dkk;

        /**
         * Coupon defined in DOP.
         */
        dop?: CurrencyOptions.Dop;

        /**
         * Coupon defined in DZD.
         */
        dzd?: CurrencyOptions.Dzd;

        /**
         * Coupon defined in EGP.
         */
        egp?: CurrencyOptions.Egp;

        /**
         * Coupon defined in ETB.
         */
        etb?: CurrencyOptions.Etb;

        /**
         * Coupon defined in EUR.
         */
        eur?: CurrencyOptions.Eur;

        /**
         * Coupon defined in FJD.
         */
        fjd?: CurrencyOptions.Fjd;

        /**
         * Coupon defined in FKP.
         */
        fkp?: CurrencyOptions.Fkp;

        /**
         * Coupon defined in GBP.
         */
        gbp?: CurrencyOptions.Gbp;

        /**
         * Coupon defined in GEL.
         */
        gel?: CurrencyOptions.Gel;

        /**
         * Coupon defined in GHS.
         */
        ghs?: CurrencyOptions.Ghs;

        /**
         * Coupon defined in GIP.
         */
        gip?: CurrencyOptions.Gip;

        /**
         * Coupon defined in GMD.
         */
        gmd?: CurrencyOptions.Gmd;

        /**
         * Coupon defined in GNF.
         */
        gnf?: CurrencyOptions.Gnf;

        /**
         * Coupon defined in GTQ.
         */
        gtq?: CurrencyOptions.Gtq;

        /**
         * Coupon defined in GYD.
         */
        gyd?: CurrencyOptions.Gyd;

        /**
         * Coupon defined in HKD.
         */
        hkd?: CurrencyOptions.Hkd;

        /**
         * Coupon defined in HNL.
         */
        hnl?: CurrencyOptions.Hnl;

        /**
         * Coupon defined in HRK.
         */
        hrk?: CurrencyOptions.Hrk;

        /**
         * Coupon defined in HTG.
         */
        htg?: CurrencyOptions.Htg;

        /**
         * Coupon defined in HUF.
         */
        huf?: CurrencyOptions.Huf;

        /**
         * Coupon defined in IDR.
         */
        idr?: CurrencyOptions.Idr;

        /**
         * Coupon defined in ILS.
         */
        ils?: CurrencyOptions.Ils;

        /**
         * Coupon defined in INR.
         */
        inr?: CurrencyOptions.Inr;

        /**
         * Coupon defined in ISK.
         */
        isk?: CurrencyOptions.Isk;

        /**
         * Coupon defined in JMD.
         */
        jmd?: CurrencyOptions.Jmd;

        /**
         * Coupon defined in JOD.
         */
        jod?: CurrencyOptions.Jod;

        /**
         * Coupon defined in JPY.
         */
        jpy?: CurrencyOptions.Jpy;

        /**
         * Coupon defined in KES.
         */
        kes?: CurrencyOptions.Kes;

        /**
         * Coupon defined in KGS.
         */
        kgs?: CurrencyOptions.Kgs;

        /**
         * Coupon defined in KHR.
         */
        khr?: CurrencyOptions.Khr;

        /**
         * Coupon defined in KMF.
         */
        kmf?: CurrencyOptions.Kmf;

        /**
         * Coupon defined in KRW.
         */
        krw?: CurrencyOptions.Krw;

        /**
         * Coupon defined in KWD.
         */
        kwd?: CurrencyOptions.Kwd;

        /**
         * Coupon defined in KYD.
         */
        kyd?: CurrencyOptions.Kyd;

        /**
         * Coupon defined in KZT.
         */
        kzt?: CurrencyOptions.Kzt;

        /**
         * Coupon defined in LAK.
         */
        lak?: CurrencyOptions.Lak;

        /**
         * Coupon defined in LBP.
         */
        lbp?: CurrencyOptions.Lbp;

        /**
         * Coupon defined in LKR.
         */
        lkr?: CurrencyOptions.Lkr;

        /**
         * Coupon defined in LRD.
         */
        lrd?: CurrencyOptions.Lrd;

        /**
         * Coupon defined in LSL.
         */
        lsl?: CurrencyOptions.Lsl;

        /**
         * Coupon defined in MAD.
         */
        mad?: CurrencyOptions.Mad;

        /**
         * Coupon defined in MDL.
         */
        mdl?: CurrencyOptions.Mdl;

        /**
         * Coupon defined in MGA.
         */
        mga?: CurrencyOptions.Mga;

        /**
         * Coupon defined in MKD.
         */
        mkd?: CurrencyOptions.Mkd;

        /**
         * Coupon defined in MMK.
         */
        mmk?: CurrencyOptions.Mmk;

        /**
         * Coupon defined in MNT.
         */
        mnt?: CurrencyOptions.Mnt;

        /**
         * Coupon defined in MOP.
         */
        mop?: CurrencyOptions.Mop;

        /**
         * Coupon defined in MRO.
         */
        mro?: CurrencyOptions.Mro;

        /**
         * Coupon defined in MUR.
         */
        mur?: CurrencyOptions.Mur;

        /**
         * Coupon defined in MVR.
         */
        mvr?: CurrencyOptions.Mvr;

        /**
         * Coupon defined in MWK.
         */
        mwk?: CurrencyOptions.Mwk;

        /**
         * Coupon defined in MXN.
         */
        mxn?: CurrencyOptions.Mxn;

        /**
         * Coupon defined in MYR.
         */
        myr?: CurrencyOptions.Myr;

        /**
         * Coupon defined in MZN.
         */
        mzn?: CurrencyOptions.Mzn;

        /**
         * Coupon defined in NAD.
         */
        nad?: CurrencyOptions.Nad;

        /**
         * Coupon defined in NGN.
         */
        ngn?: CurrencyOptions.Ngn;

        /**
         * Coupon defined in NIO.
         */
        nio?: CurrencyOptions.Nio;

        /**
         * Coupon defined in NOK.
         */
        nok?: CurrencyOptions.Nok;

        /**
         * Coupon defined in NPR.
         */
        npr?: CurrencyOptions.Npr;

        /**
         * Coupon defined in NZD.
         */
        nzd?: CurrencyOptions.Nzd;

        /**
         * Coupon defined in OMR.
         */
        omr?: CurrencyOptions.Omr;

        /**
         * Coupon defined in PAB.
         */
        pab?: CurrencyOptions.Pab;

        /**
         * Coupon defined in PEN.
         */
        pen?: CurrencyOptions.Pen;

        /**
         * Coupon defined in PGK.
         */
        pgk?: CurrencyOptions.Pgk;

        /**
         * Coupon defined in PHP.
         */
        php?: CurrencyOptions.Php;

        /**
         * Coupon defined in PKR.
         */
        pkr?: CurrencyOptions.Pkr;

        /**
         * Coupon defined in PLN.
         */
        pln?: CurrencyOptions.Pln;

        /**
         * Coupon defined in PYG.
         */
        pyg?: CurrencyOptions.Pyg;

        /**
         * Coupon defined in QAR.
         */
        qar?: CurrencyOptions.Qar;

        /**
         * Coupon defined in RON.
         */
        ron?: CurrencyOptions.Ron;

        /**
         * Coupon defined in RSD.
         */
        rsd?: CurrencyOptions.Rsd;

        /**
         * Coupon defined in RUB.
         */
        rub?: CurrencyOptions.Rub;

        /**
         * Coupon defined in RWF.
         */
        rwf?: CurrencyOptions.Rwf;

        /**
         * Coupon defined in SAR.
         */
        sar?: CurrencyOptions.Sar;

        /**
         * Coupon defined in SBD.
         */
        sbd?: CurrencyOptions.Sbd;

        /**
         * Coupon defined in SCR.
         */
        scr?: CurrencyOptions.Scr;

        /**
         * Coupon defined in SEK.
         */
        sek?: CurrencyOptions.Sek;

        /**
         * Coupon defined in SGD.
         */
        sgd?: CurrencyOptions.Sgd;

        /**
         * Coupon defined in SHP.
         */
        shp?: CurrencyOptions.Shp;

        /**
         * Coupon defined in SLL.
         */
        sll?: CurrencyOptions.Sll;

        /**
         * Coupon defined in SOS.
         */
        sos?: CurrencyOptions.Sos;

        /**
         * Coupon defined in SRD.
         */
        srd?: CurrencyOptions.Srd;

        /**
         * Coupon defined in STD.
         */
        std?: CurrencyOptions.Std;

        /**
         * Coupon defined in SZL.
         */
        szl?: CurrencyOptions.Szl;

        /**
         * Coupon defined in THB.
         */
        thb?: CurrencyOptions.Thb;

        /**
         * Coupon defined in TJS.
         */
        tjs?: CurrencyOptions.Tjs;

        /**
         * Coupon defined in TND.
         */
        tnd?: CurrencyOptions.Tnd;

        /**
         * Coupon defined in TOP.
         */
        top?: CurrencyOptions.Top;

        /**
         * Coupon defined in TRY.
         */
        try?: CurrencyOptions.Try;

        /**
         * Coupon defined in TTD.
         */
        ttd?: CurrencyOptions.Ttd;

        /**
         * Coupon defined in TWD.
         */
        twd?: CurrencyOptions.Twd;

        /**
         * Coupon defined in TZS.
         */
        tzs?: CurrencyOptions.Tzs;

        /**
         * Coupon defined in UAH.
         */
        uah?: CurrencyOptions.Uah;

        /**
         * Coupon defined in UGX.
         */
        ugx?: CurrencyOptions.Ugx;

        /**
         * Coupon defined in USD.
         */
        usd?: CurrencyOptions.Usd;

        /**
         * Coupon defined in USDC.
         */
        usdc?: CurrencyOptions.Usdc;

        /**
         * Coupon defined in UYU.
         */
        uyu?: CurrencyOptions.Uyu;

        /**
         * Coupon defined in UZS.
         */
        uzs?: CurrencyOptions.Uzs;

        /**
         * Coupon defined in VND.
         */
        vnd?: CurrencyOptions.Vnd;

        /**
         * Coupon defined in VUV.
         */
        vuv?: CurrencyOptions.Vuv;

        /**
         * Coupon defined in WST.
         */
        wst?: CurrencyOptions.Wst;

        /**
         * Coupon defined in XAF.
         */
        xaf?: CurrencyOptions.Xaf;

        /**
         * Coupon defined in XCD.
         */
        xcd?: CurrencyOptions.Xcd;

        /**
         * Coupon defined in XOF.
         */
        xof?: CurrencyOptions.Xof;

        /**
         * Coupon defined in XPF.
         */
        xpf?: CurrencyOptions.Xpf;

        /**
         * Coupon defined in YER.
         */
        yer?: CurrencyOptions.Yer;

        /**
         * Coupon defined in ZAR.
         */
        zar?: CurrencyOptions.Zar;

        /**
         * Coupon defined in ZMW.
         */
        zmw?: CurrencyOptions.Zmw;
      }

      namespace CurrencyOptions {
        interface Aed {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Afn {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface All {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Amd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Ang {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Aoa {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Ars {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Aud {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Awg {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Azn {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Bam {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Bbd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Bdt {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Bgn {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Bhd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Bif {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Bmd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Bnd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Bob {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Brl {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Bsd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Btn {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Bwp {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Byn {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Bzd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Cad {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Cdf {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Chf {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Clp {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Cny {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Cop {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Crc {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Cve {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Czk {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Djf {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Dkk {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Dop {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Dzd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Egp {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Etb {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Eur {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Fjd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Fkp {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Gbp {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Gel {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Ghs {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Gip {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Gmd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Gnf {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Gtq {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Gyd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Hkd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Hnl {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Hrk {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Htg {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Huf {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Idr {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Ils {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Inr {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Isk {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Jmd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Jod {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Jpy {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Kes {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Kgs {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Khr {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Kmf {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Krw {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Kwd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Kyd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Kzt {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Lak {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Lbp {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Lkr {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Lrd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Lsl {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Mad {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Mdl {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Mga {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Mkd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Mmk {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Mnt {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Mop {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Mro {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Mur {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Mvr {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Mwk {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Mxn {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Myr {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Mzn {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Nad {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Ngn {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Nio {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Nok {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Npr {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Nzd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Omr {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Pab {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Pen {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Pgk {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Php {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Pkr {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Pln {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Pyg {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Qar {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Ron {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Rsd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Rub {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Rwf {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Sar {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Sbd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Scr {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Sek {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Sgd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Shp {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Sll {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Sos {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Srd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Std {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Szl {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Thb {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Tjs {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Tnd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Top {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Try {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Ttd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Twd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Tzs {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Uah {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Ugx {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Usd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Usdc {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Uyu {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Uzs {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Vnd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Vuv {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Wst {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Xaf {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Xcd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Xof {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Xpf {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Yer {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Zar {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Zmw {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }
      }

      type Duration = 'forever' | 'once' | 'repeating';
    }

    interface CouponRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface CouponUpdateParams {
      /**
       * Coupons defined in each available currency option (only supported if the coupon is amount-based). Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
       */
      currency_options?: CouponUpdateParams.CurrencyOptions;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * Name of the coupon displayed to customers on, for instance invoices, or receipts. By default the `id` is shown if `name` is not set.
       */
      name?: string;
    }

    namespace CouponUpdateParams {
      interface CurrencyOptions {
        /**
         * Coupon defined in AED.
         */
        aed?: CurrencyOptions.Aed;

        /**
         * Coupon defined in AFN.
         */
        afn?: CurrencyOptions.Afn;

        /**
         * Coupon defined in ALL.
         */
        all?: CurrencyOptions.All;

        /**
         * Coupon defined in AMD.
         */
        amd?: CurrencyOptions.Amd;

        /**
         * Coupon defined in ANG.
         */
        ang?: CurrencyOptions.Ang;

        /**
         * Coupon defined in AOA.
         */
        aoa?: CurrencyOptions.Aoa;

        /**
         * Coupon defined in ARS.
         */
        ars?: CurrencyOptions.Ars;

        /**
         * Coupon defined in AUD.
         */
        aud?: CurrencyOptions.Aud;

        /**
         * Coupon defined in AWG.
         */
        awg?: CurrencyOptions.Awg;

        /**
         * Coupon defined in AZN.
         */
        azn?: CurrencyOptions.Azn;

        /**
         * Coupon defined in BAM.
         */
        bam?: CurrencyOptions.Bam;

        /**
         * Coupon defined in BBD.
         */
        bbd?: CurrencyOptions.Bbd;

        /**
         * Coupon defined in BDT.
         */
        bdt?: CurrencyOptions.Bdt;

        /**
         * Coupon defined in BGN.
         */
        bgn?: CurrencyOptions.Bgn;

        /**
         * Coupon defined in BHD.
         */
        bhd?: CurrencyOptions.Bhd;

        /**
         * Coupon defined in BIF.
         */
        bif?: CurrencyOptions.Bif;

        /**
         * Coupon defined in BMD.
         */
        bmd?: CurrencyOptions.Bmd;

        /**
         * Coupon defined in BND.
         */
        bnd?: CurrencyOptions.Bnd;

        /**
         * Coupon defined in BOB.
         */
        bob?: CurrencyOptions.Bob;

        /**
         * Coupon defined in BRL.
         */
        brl?: CurrencyOptions.Brl;

        /**
         * Coupon defined in BSD.
         */
        bsd?: CurrencyOptions.Bsd;

        /**
         * Coupon defined in BTN.
         */
        btn?: CurrencyOptions.Btn;

        /**
         * Coupon defined in BWP.
         */
        bwp?: CurrencyOptions.Bwp;

        /**
         * Coupon defined in BYN.
         */
        byn?: CurrencyOptions.Byn;

        /**
         * Coupon defined in BZD.
         */
        bzd?: CurrencyOptions.Bzd;

        /**
         * Coupon defined in CAD.
         */
        cad?: CurrencyOptions.Cad;

        /**
         * Coupon defined in CDF.
         */
        cdf?: CurrencyOptions.Cdf;

        /**
         * Coupon defined in CHF.
         */
        chf?: CurrencyOptions.Chf;

        /**
         * Coupon defined in CLP.
         */
        clp?: CurrencyOptions.Clp;

        /**
         * Coupon defined in CNY.
         */
        cny?: CurrencyOptions.Cny;

        /**
         * Coupon defined in COP.
         */
        cop?: CurrencyOptions.Cop;

        /**
         * Coupon defined in CRC.
         */
        crc?: CurrencyOptions.Crc;

        /**
         * Coupon defined in CVE.
         */
        cve?: CurrencyOptions.Cve;

        /**
         * Coupon defined in CZK.
         */
        czk?: CurrencyOptions.Czk;

        /**
         * Coupon defined in DJF.
         */
        djf?: CurrencyOptions.Djf;

        /**
         * Coupon defined in DKK.
         */
        dkk?: CurrencyOptions.Dkk;

        /**
         * Coupon defined in DOP.
         */
        dop?: CurrencyOptions.Dop;

        /**
         * Coupon defined in DZD.
         */
        dzd?: CurrencyOptions.Dzd;

        /**
         * Coupon defined in EGP.
         */
        egp?: CurrencyOptions.Egp;

        /**
         * Coupon defined in ETB.
         */
        etb?: CurrencyOptions.Etb;

        /**
         * Coupon defined in EUR.
         */
        eur?: CurrencyOptions.Eur;

        /**
         * Coupon defined in FJD.
         */
        fjd?: CurrencyOptions.Fjd;

        /**
         * Coupon defined in FKP.
         */
        fkp?: CurrencyOptions.Fkp;

        /**
         * Coupon defined in GBP.
         */
        gbp?: CurrencyOptions.Gbp;

        /**
         * Coupon defined in GEL.
         */
        gel?: CurrencyOptions.Gel;

        /**
         * Coupon defined in GHS.
         */
        ghs?: CurrencyOptions.Ghs;

        /**
         * Coupon defined in GIP.
         */
        gip?: CurrencyOptions.Gip;

        /**
         * Coupon defined in GMD.
         */
        gmd?: CurrencyOptions.Gmd;

        /**
         * Coupon defined in GNF.
         */
        gnf?: CurrencyOptions.Gnf;

        /**
         * Coupon defined in GTQ.
         */
        gtq?: CurrencyOptions.Gtq;

        /**
         * Coupon defined in GYD.
         */
        gyd?: CurrencyOptions.Gyd;

        /**
         * Coupon defined in HKD.
         */
        hkd?: CurrencyOptions.Hkd;

        /**
         * Coupon defined in HNL.
         */
        hnl?: CurrencyOptions.Hnl;

        /**
         * Coupon defined in HRK.
         */
        hrk?: CurrencyOptions.Hrk;

        /**
         * Coupon defined in HTG.
         */
        htg?: CurrencyOptions.Htg;

        /**
         * Coupon defined in HUF.
         */
        huf?: CurrencyOptions.Huf;

        /**
         * Coupon defined in IDR.
         */
        idr?: CurrencyOptions.Idr;

        /**
         * Coupon defined in ILS.
         */
        ils?: CurrencyOptions.Ils;

        /**
         * Coupon defined in INR.
         */
        inr?: CurrencyOptions.Inr;

        /**
         * Coupon defined in ISK.
         */
        isk?: CurrencyOptions.Isk;

        /**
         * Coupon defined in JMD.
         */
        jmd?: CurrencyOptions.Jmd;

        /**
         * Coupon defined in JOD.
         */
        jod?: CurrencyOptions.Jod;

        /**
         * Coupon defined in JPY.
         */
        jpy?: CurrencyOptions.Jpy;

        /**
         * Coupon defined in KES.
         */
        kes?: CurrencyOptions.Kes;

        /**
         * Coupon defined in KGS.
         */
        kgs?: CurrencyOptions.Kgs;

        /**
         * Coupon defined in KHR.
         */
        khr?: CurrencyOptions.Khr;

        /**
         * Coupon defined in KMF.
         */
        kmf?: CurrencyOptions.Kmf;

        /**
         * Coupon defined in KRW.
         */
        krw?: CurrencyOptions.Krw;

        /**
         * Coupon defined in KWD.
         */
        kwd?: CurrencyOptions.Kwd;

        /**
         * Coupon defined in KYD.
         */
        kyd?: CurrencyOptions.Kyd;

        /**
         * Coupon defined in KZT.
         */
        kzt?: CurrencyOptions.Kzt;

        /**
         * Coupon defined in LAK.
         */
        lak?: CurrencyOptions.Lak;

        /**
         * Coupon defined in LBP.
         */
        lbp?: CurrencyOptions.Lbp;

        /**
         * Coupon defined in LKR.
         */
        lkr?: CurrencyOptions.Lkr;

        /**
         * Coupon defined in LRD.
         */
        lrd?: CurrencyOptions.Lrd;

        /**
         * Coupon defined in LSL.
         */
        lsl?: CurrencyOptions.Lsl;

        /**
         * Coupon defined in MAD.
         */
        mad?: CurrencyOptions.Mad;

        /**
         * Coupon defined in MDL.
         */
        mdl?: CurrencyOptions.Mdl;

        /**
         * Coupon defined in MGA.
         */
        mga?: CurrencyOptions.Mga;

        /**
         * Coupon defined in MKD.
         */
        mkd?: CurrencyOptions.Mkd;

        /**
         * Coupon defined in MMK.
         */
        mmk?: CurrencyOptions.Mmk;

        /**
         * Coupon defined in MNT.
         */
        mnt?: CurrencyOptions.Mnt;

        /**
         * Coupon defined in MOP.
         */
        mop?: CurrencyOptions.Mop;

        /**
         * Coupon defined in MRO.
         */
        mro?: CurrencyOptions.Mro;

        /**
         * Coupon defined in MUR.
         */
        mur?: CurrencyOptions.Mur;

        /**
         * Coupon defined in MVR.
         */
        mvr?: CurrencyOptions.Mvr;

        /**
         * Coupon defined in MWK.
         */
        mwk?: CurrencyOptions.Mwk;

        /**
         * Coupon defined in MXN.
         */
        mxn?: CurrencyOptions.Mxn;

        /**
         * Coupon defined in MYR.
         */
        myr?: CurrencyOptions.Myr;

        /**
         * Coupon defined in MZN.
         */
        mzn?: CurrencyOptions.Mzn;

        /**
         * Coupon defined in NAD.
         */
        nad?: CurrencyOptions.Nad;

        /**
         * Coupon defined in NGN.
         */
        ngn?: CurrencyOptions.Ngn;

        /**
         * Coupon defined in NIO.
         */
        nio?: CurrencyOptions.Nio;

        /**
         * Coupon defined in NOK.
         */
        nok?: CurrencyOptions.Nok;

        /**
         * Coupon defined in NPR.
         */
        npr?: CurrencyOptions.Npr;

        /**
         * Coupon defined in NZD.
         */
        nzd?: CurrencyOptions.Nzd;

        /**
         * Coupon defined in OMR.
         */
        omr?: CurrencyOptions.Omr;

        /**
         * Coupon defined in PAB.
         */
        pab?: CurrencyOptions.Pab;

        /**
         * Coupon defined in PEN.
         */
        pen?: CurrencyOptions.Pen;

        /**
         * Coupon defined in PGK.
         */
        pgk?: CurrencyOptions.Pgk;

        /**
         * Coupon defined in PHP.
         */
        php?: CurrencyOptions.Php;

        /**
         * Coupon defined in PKR.
         */
        pkr?: CurrencyOptions.Pkr;

        /**
         * Coupon defined in PLN.
         */
        pln?: CurrencyOptions.Pln;

        /**
         * Coupon defined in PYG.
         */
        pyg?: CurrencyOptions.Pyg;

        /**
         * Coupon defined in QAR.
         */
        qar?: CurrencyOptions.Qar;

        /**
         * Coupon defined in RON.
         */
        ron?: CurrencyOptions.Ron;

        /**
         * Coupon defined in RSD.
         */
        rsd?: CurrencyOptions.Rsd;

        /**
         * Coupon defined in RUB.
         */
        rub?: CurrencyOptions.Rub;

        /**
         * Coupon defined in RWF.
         */
        rwf?: CurrencyOptions.Rwf;

        /**
         * Coupon defined in SAR.
         */
        sar?: CurrencyOptions.Sar;

        /**
         * Coupon defined in SBD.
         */
        sbd?: CurrencyOptions.Sbd;

        /**
         * Coupon defined in SCR.
         */
        scr?: CurrencyOptions.Scr;

        /**
         * Coupon defined in SEK.
         */
        sek?: CurrencyOptions.Sek;

        /**
         * Coupon defined in SGD.
         */
        sgd?: CurrencyOptions.Sgd;

        /**
         * Coupon defined in SHP.
         */
        shp?: CurrencyOptions.Shp;

        /**
         * Coupon defined in SLL.
         */
        sll?: CurrencyOptions.Sll;

        /**
         * Coupon defined in SOS.
         */
        sos?: CurrencyOptions.Sos;

        /**
         * Coupon defined in SRD.
         */
        srd?: CurrencyOptions.Srd;

        /**
         * Coupon defined in STD.
         */
        std?: CurrencyOptions.Std;

        /**
         * Coupon defined in SZL.
         */
        szl?: CurrencyOptions.Szl;

        /**
         * Coupon defined in THB.
         */
        thb?: CurrencyOptions.Thb;

        /**
         * Coupon defined in TJS.
         */
        tjs?: CurrencyOptions.Tjs;

        /**
         * Coupon defined in TND.
         */
        tnd?: CurrencyOptions.Tnd;

        /**
         * Coupon defined in TOP.
         */
        top?: CurrencyOptions.Top;

        /**
         * Coupon defined in TRY.
         */
        try?: CurrencyOptions.Try;

        /**
         * Coupon defined in TTD.
         */
        ttd?: CurrencyOptions.Ttd;

        /**
         * Coupon defined in TWD.
         */
        twd?: CurrencyOptions.Twd;

        /**
         * Coupon defined in TZS.
         */
        tzs?: CurrencyOptions.Tzs;

        /**
         * Coupon defined in UAH.
         */
        uah?: CurrencyOptions.Uah;

        /**
         * Coupon defined in UGX.
         */
        ugx?: CurrencyOptions.Ugx;

        /**
         * Coupon defined in USD.
         */
        usd?: CurrencyOptions.Usd;

        /**
         * Coupon defined in USDC.
         */
        usdc?: CurrencyOptions.Usdc;

        /**
         * Coupon defined in UYU.
         */
        uyu?: CurrencyOptions.Uyu;

        /**
         * Coupon defined in UZS.
         */
        uzs?: CurrencyOptions.Uzs;

        /**
         * Coupon defined in VND.
         */
        vnd?: CurrencyOptions.Vnd;

        /**
         * Coupon defined in VUV.
         */
        vuv?: CurrencyOptions.Vuv;

        /**
         * Coupon defined in WST.
         */
        wst?: CurrencyOptions.Wst;

        /**
         * Coupon defined in XAF.
         */
        xaf?: CurrencyOptions.Xaf;

        /**
         * Coupon defined in XCD.
         */
        xcd?: CurrencyOptions.Xcd;

        /**
         * Coupon defined in XOF.
         */
        xof?: CurrencyOptions.Xof;

        /**
         * Coupon defined in XPF.
         */
        xpf?: CurrencyOptions.Xpf;

        /**
         * Coupon defined in YER.
         */
        yer?: CurrencyOptions.Yer;

        /**
         * Coupon defined in ZAR.
         */
        zar?: CurrencyOptions.Zar;

        /**
         * Coupon defined in ZMW.
         */
        zmw?: CurrencyOptions.Zmw;
      }

      namespace CurrencyOptions {
        interface Aed {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Afn {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface All {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Amd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Ang {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Aoa {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Ars {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Aud {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Awg {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Azn {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Bam {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Bbd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Bdt {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Bgn {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Bhd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Bif {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Bmd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Bnd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Bob {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Brl {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Bsd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Btn {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Bwp {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Byn {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Bzd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Cad {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Cdf {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Chf {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Clp {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Cny {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Cop {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Crc {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Cve {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Czk {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Djf {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Dkk {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Dop {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Dzd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Egp {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Etb {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Eur {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Fjd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Fkp {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Gbp {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Gel {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Ghs {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Gip {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Gmd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Gnf {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Gtq {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Gyd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Hkd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Hnl {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Hrk {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Htg {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Huf {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Idr {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Ils {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Inr {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Isk {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Jmd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Jod {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Jpy {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Kes {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Kgs {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Khr {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Kmf {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Krw {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Kwd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Kyd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Kzt {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Lak {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Lbp {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Lkr {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Lrd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Lsl {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Mad {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Mdl {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Mga {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Mkd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Mmk {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Mnt {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Mop {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Mro {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Mur {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Mvr {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Mwk {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Mxn {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Myr {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Mzn {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Nad {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Ngn {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Nio {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Nok {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Npr {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Nzd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Omr {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Pab {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Pen {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Pgk {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Php {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Pkr {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Pln {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Pyg {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Qar {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Ron {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Rsd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Rub {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Rwf {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Sar {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Sbd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Scr {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Sek {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Sgd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Shp {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Sll {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Sos {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Srd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Std {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Szl {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Thb {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Tjs {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Tnd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Top {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Try {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Ttd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Twd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Tzs {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Uah {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Ugx {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Usd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Usdc {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Uyu {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Uzs {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Vnd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Vuv {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Wst {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Xaf {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Xcd {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Xof {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Xpf {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Yer {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Zar {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }

        interface Zmw {
          /**
           * A positive integer representing the amount to subtract from an invoice total.
           */
          amount_off: number;
        }
      }
    }

    interface CouponListParams extends PaginationParams {
      /**
       * A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
       */
      created?: Stripe.RangeQueryParam | number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface CouponDeleteParams {}

    class CouponsResource {
      /**
       * You can create coupons easily via the [coupon management](https://dashboard.stripe.com/coupons) page of the Stripe dashboard. Coupon creation is also accessible via the API if you need to create coupons on the fly.
       *
       * A coupon has either a percent_off or an amount_off and currency. If you set an amount_off, that amount will be subtracted from any invoice's subtotal. For example, an invoice with a subtotal of 100 will have a final total of 0 if a coupon with an amount_off of 200 is applied to it and an invoice with a subtotal of 300 will have a final total of 100 if a coupon with an amount_off of 200 is applied to it.
       */
      create(
        params?: CouponCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Coupon>>;
      create(options?: RequestOptions): Promise<Stripe.Response<Stripe.Coupon>>;

      /**
       * Retrieves the coupon with the given ID.
       */
      retrieve(
        id: string,
        params?: CouponRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Coupon>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Coupon>>;

      /**
       * Updates the metadata of a coupon. Other coupon details (currency, duration, amount_off) are, by design, not editable.
       */
      update(
        id: string,
        params?: CouponUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Coupon>>;

      /**
       * Returns a list of your coupons.
       */
      list(
        params?: CouponListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.Coupon>;
      list(options?: RequestOptions): ApiListPromise<Stripe.Coupon>;

      /**
       * You can delete coupons via the [coupon management](https://dashboard.stripe.com/coupons) page of the Stripe dashboard. However, deleting a coupon does not affect any customers who have already applied the coupon; it means that new customers can't redeem the coupon. You can also delete coupons via the API.
       */
      del(
        id: string,
        params?: CouponDeleteParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.DeletedCoupon>>;
      del(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.DeletedCoupon>>;
    }
  }
}
