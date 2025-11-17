// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface ChargeCreateParams {
      /**
       * Amount intended to be collected by this payment. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
       */
      amount?: number;

      application_fee?: number;

      /**
       * A fee in cents (or local equivalent) that will be applied to the charge and transferred to the application owner's Stripe account. The request must be made with an OAuth key or the `Stripe-Account` header in order to take an application fee. For more information, see the application fees [documentation](https://stripe.com/docs/connect/direct-charges#collect-fees).
       */
      application_fee_amount?: number;

      /**
       * Whether to immediately capture the charge. Defaults to `true`. When `false`, the charge issues an authorization (or pre-authorization), and will need to be [captured](https://stripe.com/docs/api#capture_charge) later. Uncaptured charges expire after a set number of days (7 by default). For more information, see the [authorizing charges and settling later](https://stripe.com/docs/charges/placing-a-hold) documentation.
       */
      capture?: boolean;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency?: string;

      /**
       * The ID of an existing customer that will be charged in this request.
       */
      customer?: string;

      /**
       * An arbitrary string which you can attach to a `Charge` object. It is displayed when in the web interface alongside the charge. Note that if you use Stripe to send automatic email receipts to your customers, your receipt emails will include the `description` of the charge(s) that they are describing.
       */
      description?: string;

      destination?: ChargeCreateParams.Destination;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * The Stripe account ID for which these funds are intended. Automatically set if you use the `destination` parameter. For details, see [Creating Separate Charges and Transfers](https://stripe.com/docs/connect/separate-charges-and-transfers#settlement-merchant).
       */
      on_behalf_of?: string;

      /**
       * Options to configure Radar. See [Radar Session](https://stripe.com/docs/radar/radar-session) for more information.
       */
      radar_options?: ChargeCreateParams.RadarOptions;

      /**
       * The email address to which this charge's [receipt](https://stripe.com/docs/dashboard/receipts) will be sent. The receipt will not be sent until the charge is paid, and no receipts will be sent for test mode charges. If this charge is for a [Customer](https://stripe.com/docs/api/customers/object), the email address specified here will override the customer's email address. If `receipt_email` is specified for a charge in live mode, a receipt will be sent regardless of your [email settings](https://dashboard.stripe.com/account/emails).
       */
      receipt_email?: string;

      /**
       * Shipping information for the charge. Helps prevent fraud on charges for physical goods.
       */
      shipping?: ChargeCreateParams.Shipping;

      /**
       * A payment source to be charged. This can be the ID of a [card](https://stripe.com/docs/api#cards) (i.e., credit or debit card), a [bank account](https://stripe.com/docs/api#bank_accounts), a [source](https://stripe.com/docs/api#sources), a [token](https://stripe.com/docs/api#tokens), or a [connected account](https://stripe.com/docs/connect/account-debits#charging-a-connected-account). For certain sources---namely, [cards](https://stripe.com/docs/api#cards), [bank accounts](https://stripe.com/docs/api#bank_accounts), and attached [sources](https://stripe.com/docs/api#sources)---you must also pass the ID of the associated customer.
       */
      source?: string;

      /**
       * For a non-card charge, text that appears on the customer's statement as the statement descriptor. This value overrides the account's default statement descriptor. For information about requirements, including the 22-character limit, see [the Statement Descriptor docs](https://docs.stripe.com/get-started/account/statement-descriptors).
       *
       * For a card charge, this value is ignored unless you don't specify a `statement_descriptor_suffix`, in which case this value is used as the suffix.
       */
      statement_descriptor?: string;

      /**
       * Provides information about a card charge. Concatenated to the account's [statement descriptor prefix](https://docs.stripe.com/get-started/account/statement-descriptors#static) to form the complete statement descriptor that appears on the customer's statement. If the account has no prefix value, the suffix is concatenated to the account's statement descriptor.
       */
      statement_descriptor_suffix?: string;

      /**
       * An optional dictionary including the account to automatically transfer to as part of a destination charge. [See the Connect documentation](https://stripe.com/docs/connect/destination-charges) for details.
       */
      transfer_data?: ChargeCreateParams.TransferData;

      /**
       * A string that identifies this transaction as part of a group. For details, see [Grouping transactions](https://stripe.com/docs/connect/separate-charges-and-transfers#transfer-options).
       */
      transfer_group?: string;
    }

    namespace ChargeCreateParams {
      interface Destination {
        /**
         * ID of an existing, connected Stripe account.
         */
        account: string;

        /**
         * The amount to transfer to the destination account without creating an `Application Fee` object. Cannot be combined with the `application_fee` parameter. Must be less than or equal to the charge amount.
         */
        amount?: number;
      }

      interface RadarOptions {
        /**
         * A [Radar Session](https://stripe.com/docs/radar/radar-session) is a snapshot of the browser metadata and device details that help Radar make more accurate predictions on your payments.
         */
        session?: string;
      }

      interface Shipping {
        /**
         * Shipping address.
         */
        address: Stripe.AddressParam;

        /**
         * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
         */
        carrier?: string;

        /**
         * Recipient name.
         */
        name: string;

        /**
         * Recipient phone (including extension).
         */
        phone?: string;

        /**
         * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
         */
        tracking_number?: string;
      }

      interface TransferData {
        /**
         * The amount transferred to the destination account, if specified. By default, the entire charge amount is transferred to the destination account.
         */
        amount?: number;

        /**
         * ID of an existing, connected Stripe account.
         */
        destination: string;
      }
    }

    interface ChargeRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface ChargeUpdateParams {
      /**
       * The ID of an existing customer that will be associated with this request. This field may only be updated if there is no existing associated customer with this charge.
       */
      customer?: string;

      /**
       * An arbitrary string which you can attach to a charge object. It is displayed when in the web interface alongside the charge. Note that if you use Stripe to send automatic email receipts to your customers, your receipt emails will include the `description` of the charge(s) that they are describing.
       */
      description?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * A set of key-value pairs you can attach to a charge giving information about its riskiness. If you believe a charge is fraudulent, include a `user_report` key with a value of `fraudulent`. If you believe a charge is safe, include a `user_report` key with a value of `safe`. Stripe will use the information you send to improve our fraud detection algorithms.
       */
      fraud_details?: ChargeUpdateParams.FraudDetails;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * Provides industry-specific information about the charge.
       */
      payment_details?: ChargeUpdateParams.PaymentDetails;

      /**
       * This is the email address that the receipt for this charge will be sent to. If this field is updated, then a new email receipt will be sent to the updated address.
       */
      receipt_email?: string;

      /**
       * Shipping information for the charge. Helps prevent fraud on charges for physical goods.
       */
      shipping?: ChargeUpdateParams.Shipping;

      /**
       * A string that identifies this transaction as part of a group. `transfer_group` may only be provided if it has not been set. See the [Connect documentation](https://stripe.com/docs/connect/separate-charges-and-transfers#transfer-options) for details.
       */
      transfer_group?: string;
    }

    namespace ChargeUpdateParams {
      interface FraudDetails {
        /**
         * Either `safe` or `fraudulent`.
         */
        user_report: Stripe.Emptyable<FraudDetails.UserReport>;
      }

      namespace FraudDetails {
        type UserReport = 'fraudulent' | 'safe';
      }

      interface PaymentDetails {
        /**
         * Car rental details for this PaymentIntent.
         */
        car_rental?: PaymentDetails.CarRental;

        /**
         * Car rental data for this PaymentIntent.
         */
        car_rental_data?: Stripe.Emptyable<
          Array<PaymentDetails.CarRentalDatum>
        >;

        /**
         * A unique value to identify the customer. This field is available only for card payments.
         *
         * This field is truncated to 25 alphanumeric characters, excluding spaces, before being sent to card networks.
         */
        customer_reference?: Stripe.Emptyable<string>;

        /**
         * Event details for this PaymentIntent
         */
        event_details?: PaymentDetails.EventDetails;

        /**
         * Flight reservation details for this PaymentIntent
         */
        flight?: PaymentDetails.Flight;

        /**
         * Flight data for this PaymentIntent.
         */
        flight_data?: Stripe.Emptyable<Array<PaymentDetails.FlightDatum>>;

        /**
         * Lodging reservation details for this PaymentIntent
         */
        lodging?: PaymentDetails.Lodging;

        /**
         * Lodging data for this PaymentIntent.
         */
        lodging_data?: Stripe.Emptyable<Array<PaymentDetails.LodgingDatum>>;

        /**
         * A unique value assigned by the business to identify the transaction. Required for L2 and L3 rates.
         *
         * Required when the Payment Method Types array contains `card`, including when [automatic_payment_methods.enabled](https://docs.stripe.com/api/payment_intents/create#create_payment_intent-automatic_payment_methods-enabled) is set to `true`.
         *
         * For Cards, this field is truncated to 25 alphanumeric characters, excluding spaces, before being sent to card networks. For Klarna, this field is truncated to 255 characters and is visible to customers when they view the order in the Klarna app.
         */
        order_reference?: Stripe.Emptyable<string>;

        /**
         * Subscription details for this PaymentIntent
         */
        subscription?: PaymentDetails.Subscription;
      }

      namespace PaymentDetails {
        interface CarRental {
          /**
           * Affiliate details for this purchase.
           */
          affiliate?: CarRental.Affiliate;

          /**
           * The booking number associated with the car rental.
           */
          booking_number: string;

          /**
           * Class code of the car.
           */
          car_class_code?: string;

          /**
           * Make of the car.
           */
          car_make?: string;

          /**
           * Model of the car.
           */
          car_model?: string;

          /**
           * The name of the rental car company.
           */
          company?: string;

          /**
           * The customer service phone number of the car rental company.
           */
          customer_service_phone_number?: string;

          /**
           * Number of days the car is being rented.
           */
          days_rented: number;

          /**
           * Delivery details for this purchase.
           */
          delivery?: CarRental.Delivery;

          /**
           * The details of the distance traveled during the rental period.
           */
          distance?: CarRental.Distance;

          /**
           * The details of the passengers in the travel reservation
           */
          drivers?: Array<CarRental.Driver>;

          /**
           * List of additional charges being billed.
           */
          extra_charges?: Array<CarRental.ExtraCharge>;

          /**
           * Indicates if the customer did not keep nor cancel their booking.
           */
          no_show?: boolean;

          /**
           * Car pick-up address.
           */
          pickup_address?: Stripe.AddressParam;

          /**
           * Car pick-up time. Measured in seconds since the Unix epoch.
           */
          pickup_at: number;

          /**
           * Name of the pickup location.
           */
          pickup_location_name?: string;

          /**
           * Rental rate.
           */
          rate_amount?: number;

          /**
           * The frequency at which the rate amount is applied. One of `day`, `week` or `month`
           */
          rate_interval?: CarRental.RateInterval;

          /**
           * The name of the person or entity renting the car.
           */
          renter_name?: string;

          /**
           * Car return address.
           */
          return_address?: Stripe.AddressParam;

          /**
           * Car return time. Measured in seconds since the Unix epoch.
           */
          return_at: number;

          /**
           * Name of the return location.
           */
          return_location_name?: string;

          /**
           * Indicates whether the goods or services are tax-exempt or tax is not collected.
           */
          tax_exempt?: boolean;

          /**
           * The vehicle identification number.
           */
          vehicle_identification_number?: string;
        }

        namespace CarRental {
          interface Affiliate {
            /**
             * The name of the affiliate that originated the purchase.
             */
            name: string;
          }

          interface Delivery {
            /**
             * The delivery method for the payment
             */
            mode?: Delivery.Mode;

            /**
             * Details of the recipient.
             */
            recipient?: Delivery.Recipient;
          }

          namespace Delivery {
            type Mode = 'email' | 'phone' | 'pickup' | 'post';

            interface Recipient {
              /**
               * The email of the recipient the ticket is delivered to.
               */
              email?: string;

              /**
               * The name of the recipient the ticket is delivered to.
               */
              name?: string;

              /**
               * The phone number of the recipient the ticket is delivered to.
               */
              phone?: string;
            }
          }

          interface Distance {
            /**
             * Distance traveled.
             */
            amount?: number;

            /**
             * Unit of measurement for the distance traveled. One of `miles` or `kilometers`.
             */
            unit?: Distance.Unit;
          }

          namespace Distance {
            type Unit = 'kilometers' | 'miles';
          }

          interface Driver {
            /**
             * Driver's identification number.
             */
            driver_identification_number?: string;

            /**
             * Driver's tax number.
             */
            driver_tax_number?: string;

            /**
             * Full name of the person or entity on the car reservation.
             */
            name: string;
          }

          type ExtraCharge =
            | 'extra_mileage'
            | 'gas'
            | 'late_return'
            | 'one_way_service'
            | 'parking_violation';

          type RateInterval = 'day' | 'month' | 'week';
        }

        interface CarRentalDatum {
          /**
           * Affiliate (such as travel agency) details for the rental.
           */
          affiliate?: CarRentalDatum.Affiliate;

          /**
           * Booking confirmation number for the car rental.
           */
          booking_number?: string;

          /**
           * Name of the car rental company.
           */
          carrier_name?: string;

          /**
           * Customer service phone number for the car rental company.
           */
          customer_service_phone_number?: string;

          /**
           * Number of days the car is being rented.
           */
          days_rented?: number;

          /**
           * Distance details for the rental.
           */
          distance?: CarRentalDatum.Distance;

          /**
           * List of drivers for the rental.
           */
          drivers?: Array<CarRentalDatum.Driver>;

          /**
           * Drop-off location details.
           */
          drop_off: CarRentalDatum.DropOff;

          /**
           * Insurance details for the rental.
           */
          insurances?: Array<CarRentalDatum.Insurance>;

          /**
           * Indicates if the customer was a no-show.
           */
          no_show_indicator?: boolean;

          /**
           * Pickup location details.
           */
          pickup: CarRentalDatum.Pickup;

          /**
           * Name of the person renting the vehicle.
           */
          renter_name?: string;

          /**
           * Total cost breakdown for the rental.
           */
          total: CarRentalDatum.Total;

          /**
           * Vehicle details for the rental.
           */
          vehicle?: CarRentalDatum.Vehicle;
        }

        namespace CarRentalDatum {
          interface Affiliate {
            /**
             * Affiliate partner code.
             */
            code?: string;

            /**
             * Name of affiliate partner.
             */
            name?: string;
          }

          interface Distance {
            /**
             * Distance traveled.
             */
            amount: number;

            /**
             * Unit of measurement for the distance traveled. One of `miles` or `kilometers`.
             */
            unit: Distance.Unit;
          }

          namespace Distance {
            type Unit = 'kilometers' | 'miles';
          }

          interface Driver {
            /**
             * Driver's date of birth.
             */
            date_of_birth?: Driver.DateOfBirth;

            /**
             * Driver's identification number.
             */
            driver_identification_number?: string;

            /**
             * Driver's tax number.
             */
            driver_tax_number?: string;

            /**
             * Driver's full name.
             */
            name: string;
          }

          namespace Driver {
            interface DateOfBirth {
              /**
               * Day of birth (1-31).
               */
              day: number;

              /**
               * Month of birth (1-12).
               */
              month: number;

              /**
               * Year of birth (must be greater than 1900).
               */
              year: number;
            }
          }

          interface DropOff {
            /**
             * Address of the rental location.
             */
            address: DropOff.Address;

            /**
             * Location name.
             */
            location_name?: string;

            /**
             * Timestamp for the location.
             */
            time: number;
          }

          namespace DropOff {
            interface Address {
              /**
               * City, district, suburb, town, or village.
               */
              city: string;

              /**
               * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
               */
              country: string;

              /**
               * Address line 1, such as the street, PO Box, or company name.
               */
              line1: string;

              /**
               * Address line 2, such as the apartment, suite, unit, or building.
               */
              line2?: string;

              /**
               * ZIP or postal code.
               */
              postal_code: string;

              /**
               * State, county, province, or region.
               */
              state?: string;
            }
          }

          interface Insurance {
            /**
             * Amount of the insurance coverage in cents.
             */
            amount: number;

            /**
             * Currency of the insurance amount.
             */
            currency?: string;

            /**
             * Name of the insurance company.
             */
            insurance_company_name?: string;

            /**
             * Type of insurance coverage.
             */
            insurance_type: Insurance.InsuranceType;
          }

          namespace Insurance {
            type InsuranceType =
              | 'liability_supplement'
              | 'loss_damage_waiver'
              | 'other'
              | 'partial_damage_waiver'
              | 'personal_accident'
              | 'personal_effects';
          }

          interface Pickup {
            /**
             * Address of the rental location.
             */
            address: Pickup.Address;

            /**
             * Location name.
             */
            location_name?: string;

            /**
             * Timestamp for the location.
             */
            time: number;
          }

          namespace Pickup {
            interface Address {
              /**
               * City, district, suburb, town, or village.
               */
              city: string;

              /**
               * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
               */
              country: string;

              /**
               * Address line 1, such as the street, PO Box, or company name.
               */
              line1: string;

              /**
               * Address line 2, such as the apartment, suite, unit, or building.
               */
              line2?: string;

              /**
               * ZIP or postal code.
               */
              postal_code: string;

              /**
               * State, county, province, or region.
               */
              state?: string;
            }
          }

          interface Total {
            /**
             * Total amount in cents.
             */
            amount: number;

            /**
             * Currency of the amount.
             */
            currency?: string;

            /**
             * Discount details for the rental.
             */
            discounts?: Total.Discounts;

            /**
             * Additional charges for the rental.
             */
            extra_charges?: Array<Total.ExtraCharge>;

            /**
             * Rate per unit for the rental.
             */
            rate_per_unit?: number;

            /**
             * Unit of measurement for the rate.
             */
            rate_unit?: Total.RateUnit;

            /**
             * Tax breakdown for the rental.
             */
            tax?: Total.Tax;
          }

          namespace Total {
            interface Discounts {
              /**
               * Corporate client discount code.
               */
              corporate_client_code?: string;

              /**
               * Coupon code applied to the rental.
               */
              coupon?: string;

              /**
               * Maximum number of free miles or kilometers included.
               */
              maximum_free_miles_or_kilometers?: number;
            }

            interface ExtraCharge {
              /**
               * Amount of the extra charge in cents.
               */
              amount: number;

              /**
               * Type of extra charge.
               */
              type: ExtraCharge.Type;
            }

            namespace ExtraCharge {
              type Type =
                | 'extra_mileage'
                | 'gas'
                | 'gps'
                | 'late_charge'
                | 'one_way_drop_off'
                | 'other'
                | 'parking'
                | 'phone'
                | 'regular_mileage'
                | 'towing';
            }

            type RateUnit =
              | 'days'
              | 'kilometers'
              | 'miles'
              | 'months'
              | 'weeks';

            interface Tax {
              /**
               * Indicates if the transaction is tax exempt.
               */
              tax_exempt_indicator?: boolean;

              /**
               * Array of tax details.
               */
              taxes?: Array<Tax.Tax>;
            }

            namespace Tax {
              interface Tax {
                /**
                 * Tax amount.
                 */
                amount?: number;

                /**
                 * Tax rate applied.
                 */
                rate?: number;

                /**
                 * Type of tax applied.
                 */
                type?: string;
              }
            }
          }

          interface Vehicle {
            /**
             * Make of the rental vehicle.
             */
            make?: string;

            /**
             * Model of the rental vehicle.
             */
            model?: string;

            /**
             * Odometer reading at the time of rental.
             */
            odometer?: number;

            /**
             * Type of the rental vehicle.
             */
            type?: Vehicle.Type;

            /**
             * Class of the rental vehicle.
             */
            vehicle_class?: Vehicle.VehicleClass;

            /**
             * Vehicle identification number (VIN).
             */
            vehicle_identification_number?: string;
          }

          namespace Vehicle {
            type Type =
              | 'cargo_van'
              | 'compact'
              | 'economy'
              | 'exotic'
              | 'exotic_suv'
              | 'fifteen_passenger_van'
              | 'four_wheel_drive'
              | 'full_size'
              | 'intermediate'
              | 'large_suv'
              | 'large_truck'
              | 'luxury'
              | 'medium_suv'
              | 'midsize'
              | 'mini'
              | 'minivan'
              | 'miscellaneous'
              | 'moped'
              | 'moving_van'
              | 'premium'
              | 'regular'
              | 'small_medium_truck'
              | 'small_suv'
              | 'special'
              | 'standard'
              | 'stretch'
              | 'subcompact'
              | 'taxi'
              | 'twelve_foot_truck'
              | 'twelve_passenger_van'
              | 'twenty_foot_truck'
              | 'twenty_four_foot_truck'
              | 'twenty_six_foot_truck'
              | 'unique';

            type VehicleClass =
              | 'business'
              | 'economy'
              | 'first_class'
              | 'premium_economy';
          }
        }

        interface EventDetails {
          /**
           * Indicates if the tickets are digitally checked when entering the venue.
           */
          access_controlled_venue?: boolean;

          /**
           * The event location's address.
           */
          address?: Stripe.AddressParam;

          /**
           * Affiliate details for this purchase.
           */
          affiliate?: EventDetails.Affiliate;

          /**
           * The name of the company
           */
          company?: string;

          /**
           * Delivery details for this purchase.
           */
          delivery?: EventDetails.Delivery;

          /**
           * Event end time. Measured in seconds since the Unix epoch.
           */
          ends_at?: number;

          /**
           * Type of the event entertainment (concert, sports event etc)
           */
          genre?: string;

          /**
           * The name of the event.
           */
          name: string;

          /**
           * Event start time. Measured in seconds since the Unix epoch.
           */
          starts_at?: number;
        }

        namespace EventDetails {
          interface Affiliate {
            /**
             * The name of the affiliate that originated the purchase.
             */
            name: string;
          }

          interface Delivery {
            /**
             * The delivery method for the payment
             */
            mode?: Delivery.Mode;

            /**
             * Details of the recipient.
             */
            recipient?: Delivery.Recipient;
          }

          namespace Delivery {
            type Mode = 'email' | 'phone' | 'pickup' | 'post';

            interface Recipient {
              /**
               * The email of the recipient the ticket is delivered to.
               */
              email?: string;

              /**
               * The name of the recipient the ticket is delivered to.
               */
              name?: string;

              /**
               * The phone number of the recipient the ticket is delivered to.
               */
              phone?: string;
            }
          }
        }

        interface Flight {
          /**
           * Affiliate details for this purchase.
           */
          affiliate?: Flight.Affiliate;

          /**
           * The agency number (i.e. International Air Transport Association (IATA) agency number) of the travel agency that made the booking.
           */
          agency_number?: string;

          /**
           * The International Air Transport Association (IATA) carrier code of the carrier that issued the ticket.
           */
          carrier?: string;

          /**
           * Delivery details for this purchase.
           */
          delivery?: Flight.Delivery;

          /**
           * The name of the person or entity on the reservation.
           */
          passenger_name?: string;

          /**
           * The details of the passengers in the travel reservation.
           */
          passengers?: Array<Flight.Passenger>;

          /**
           * The individual flight segments associated with the trip.
           */
          segments: Array<Flight.Segment>;

          /**
           * The ticket number associated with the travel reservation.
           */
          ticket_number?: string;
        }

        namespace Flight {
          interface Affiliate {
            /**
             * The name of the affiliate that originated the purchase.
             */
            name: string;
          }

          interface Delivery {
            /**
             * The delivery method for the payment
             */
            mode?: Delivery.Mode;

            /**
             * Details of the recipient.
             */
            recipient?: Delivery.Recipient;
          }

          namespace Delivery {
            type Mode = 'email' | 'phone' | 'pickup' | 'post';

            interface Recipient {
              /**
               * The email of the recipient the ticket is delivered to.
               */
              email?: string;

              /**
               * The name of the recipient the ticket is delivered to.
               */
              name?: string;

              /**
               * The phone number of the recipient the ticket is delivered to.
               */
              phone?: string;
            }
          }

          interface Passenger {
            /**
             * Full name of the person or entity on the flight reservation.
             */
            name: string;
          }

          interface Segment {
            /**
             * The flight segment amount.
             */
            amount?: number;

            /**
             * The International Air Transport Association (IATA) airport code for the arrival airport.
             */
            arrival_airport?: string;

            /**
             * The arrival time for the flight segment. Measured in seconds since the Unix epoch.
             */
            arrives_at?: number;

            /**
             * The International Air Transport Association (IATA) carrier code of the carrier operating the flight segment.
             */
            carrier?: string;

            /**
             * The departure time for the flight segment. Measured in seconds since the Unix epoch.
             */
            departs_at: number;

            /**
             * The International Air Transport Association (IATA) airport code for the departure airport.
             */
            departure_airport?: string;

            /**
             * The flight number associated with the segment
             */
            flight_number?: string;

            /**
             * The fare class for the segment.
             */
            service_class?: Segment.ServiceClass;
          }

          namespace Segment {
            type ServiceClass =
              | 'business'
              | 'economy'
              | 'first'
              | 'premium_economy';
          }
        }

        interface FlightDatum {
          /**
           * Affiliate details if applicable.
           */
          affiliate?: FlightDatum.Affiliate;

          /**
           * Reservation reference.
           */
          booking_number?: string;

          /**
           * Computerized reservation system used to make the reservation and purchase the ticket.
           */
          computerized_reservation_system?: string;

          /**
           * Ticket restrictions.
           */
          endorsements_and_restrictions?: string;

          /**
           * List of insurances.
           */
          insurances?: Array<FlightDatum.Insurance>;

          /**
           * List of passengers.
           */
          passengers?: Array<FlightDatum.Passenger>;

          /**
           * List of flight segments.
           */
          segments: Array<FlightDatum.Segment>;

          /**
           * Electronic ticket indicator.
           */
          ticket_electronically_issued_indicator?: boolean;

          /**
           * Total cost breakdown.
           */
          total: FlightDatum.Total;

          /**
           * Type of flight transaction.
           */
          transaction_type?: FlightDatum.TransactionType;
        }

        namespace FlightDatum {
          interface Affiliate {
            /**
             * Affiliate partner code.
             */
            code?: string;

            /**
             * Name of affiliate partner.
             */
            name?: string;

            /**
             * Code provided by the company to a travel agent authorizing ticket issuance.
             */
            travel_authorization_code?: string;
          }

          interface Insurance {
            /**
             * Insurance cost.
             */
            amount: number;

            /**
             * Insurance currency.
             */
            currency?: string;

            /**
             * Insurance company name.
             */
            insurance_company_name?: string;

            /**
             * Type of insurance.
             */
            insurance_type: Insurance.InsuranceType;
          }

          namespace Insurance {
            type InsuranceType =
              | 'baggage'
              | 'bankruptcy'
              | 'cancelation'
              | 'emergency'
              | 'medical';
          }

          interface Passenger {
            /**
             * Passenger's full name.
             */
            name: string;
          }

          interface Segment {
            /**
             * Segment fare amount.
             */
            amount?: number;

            /**
             * Arrival details.
             */
            arrival: Segment.Arrival;

            /**
             * Airline carrier code.
             */
            carrier_code: string;

            /**
             * Carrier name.
             */
            carrier_name?: string;

            /**
             * Segment currency.
             */
            currency?: string;

            /**
             * Departure details.
             */
            departure: Segment.Departure;

            /**
             * Exchange ticket number.
             */
            exchange_ticket_number?: string;

            /**
             * Fare basis code.
             */
            fare_basis_code?: string;

            /**
             * Additional fees.
             */
            fees?: number;

            /**
             * Flight number.
             */
            flight_number?: string;

            /**
             * Stopover indicator.
             */
            is_stop_over_indicator?: boolean;

            /**
             * Refundable ticket indicator.
             */
            refundable?: boolean;

            /**
             * Class of service.
             */
            service_class: Segment.ServiceClass;

            /**
             * Tax amount for segment.
             */
            tax_amount?: number;

            /**
             * Ticket number.
             */
            ticket_number?: string;
          }

          namespace Segment {
            interface Arrival {
              /**
               * Arrival airport IATA code.
               */
              airport: string;

              /**
               * Arrival date/time.
               */
              arrives_at?: number;

              /**
               * Arrival city.
               */
              city?: string;

              /**
               * Arrival country.
               */
              country?: string;
            }

            interface Departure {
              /**
               * Departure airport IATA code.
               */
              airport: string;

              /**
               * Departure city.
               */
              city?: string;

              /**
               * Departure country.
               */
              country?: string;

              /**
               * Departure date/time.
               */
              departs_at: number;
            }

            type ServiceClass =
              | 'business'
              | 'economy'
              | 'first_class'
              | 'premium_economy';
          }

          interface Total {
            /**
             * Total flight amount.
             */
            amount: number;

            /**
             * Reason for credit.
             */
            credit_reason?: Total.CreditReason;

            /**
             * Total currency.
             */
            currency?: string;

            /**
             * Discount details.
             */
            discounts?: Total.Discounts;

            /**
             * Additional charges.
             */
            extra_charges?: Array<Total.ExtraCharge>;

            /**
             * Tax breakdown.
             */
            tax?: Total.Tax;
          }

          namespace Total {
            type CreditReason =
              | 'other'
              | 'partial_ticket_refund'
              | 'passenger_transport_ancillary_cancellation'
              | 'ticket_and_ancillary_cancellation'
              | 'ticket_cancellation';

            interface Discounts {
              /**
               * Corporate client discount code.
               */
              corporate_client_code?: string;
            }

            interface ExtraCharge {
              /**
               * Amount of additional charges.
               */
              amount?: number;

              /**
               * Type of additional charges.
               */
              type?: ExtraCharge.Type;
            }

            namespace ExtraCharge {
              type Type =
                | 'additional_fees'
                | 'ancillary_service_charges'
                | 'exchange_fee';
            }

            interface Tax {
              /**
               * Array of tax details.
               */
              taxes?: Array<Tax.Tax>;
            }

            namespace Tax {
              interface Tax {
                /**
                 * Tax amount.
                 */
                amount?: number;

                /**
                 * Tax rate.
                 */
                rate?: number;

                /**
                 * Type of tax.
                 */
                type?: string;
              }
            }
          }

          type TransactionType =
            | 'exchange_ticket'
            | 'miscellaneous'
            | 'refund'
            | 'ticket_purchase';
        }

        interface Lodging {
          /**
           * The lodging location's address.
           */
          address?: Stripe.AddressParam;

          /**
           * The number of adults on the booking
           */
          adults?: number;

          /**
           * Affiliate details for this purchase.
           */
          affiliate?: Lodging.Affiliate;

          /**
           * The booking number associated with the lodging reservation.
           */
          booking_number?: string;

          /**
           * The lodging category
           */
          category?: Lodging.Category;

          /**
           * Lodging check-in time. Measured in seconds since the Unix epoch.
           */
          checkin_at: number;

          /**
           * Lodging check-out time. Measured in seconds since the Unix epoch.
           */
          checkout_at: number;

          /**
           * The customer service phone number of the lodging company.
           */
          customer_service_phone_number?: string;

          /**
           * The daily lodging room rate.
           */
          daily_room_rate_amount?: number;

          /**
           * Delivery details for this purchase.
           */
          delivery?: Lodging.Delivery;

          /**
           * List of additional charges being billed.
           */
          extra_charges?: Array<Lodging.ExtraCharge>;

          /**
           * Indicates whether the lodging location is compliant with the Fire Safety Act.
           */
          fire_safety_act_compliance?: boolean;

          /**
           * The name of the lodging location.
           */
          name?: string;

          /**
           * Indicates if the customer did not keep their booking while failing to cancel the reservation.
           */
          no_show?: boolean;

          /**
           * The number of rooms on the booking
           */
          number_of_rooms?: number;

          /**
           * The details of the passengers in the travel reservation
           */
          passengers?: Array<Lodging.Passenger>;

          /**
           * The phone number of the lodging location.
           */
          property_phone_number?: string;

          /**
           * The room class for this purchase.
           */
          room_class?: string;

          /**
           * The number of room nights
           */
          room_nights?: number;

          /**
           * The total tax amount associating with the room reservation.
           */
          total_room_tax_amount?: number;

          /**
           * The total tax amount
           */
          total_tax_amount?: number;
        }

        namespace Lodging {
          interface Affiliate {
            /**
             * The name of the affiliate that originated the purchase.
             */
            name: string;
          }

          type Category = 'hotel' | 'vacation_rental';

          interface Delivery {
            /**
             * The delivery method for the payment
             */
            mode?: Delivery.Mode;

            /**
             * Details of the recipient.
             */
            recipient?: Delivery.Recipient;
          }

          namespace Delivery {
            type Mode = 'email' | 'phone' | 'pickup' | 'post';

            interface Recipient {
              /**
               * The email of the recipient the ticket is delivered to.
               */
              email?: string;

              /**
               * The name of the recipient the ticket is delivered to.
               */
              name?: string;

              /**
               * The phone number of the recipient the ticket is delivered to.
               */
              phone?: string;
            }
          }

          type ExtraCharge =
            | 'gift_shop'
            | 'laundry'
            | 'mini_bar'
            | 'other'
            | 'restaurant'
            | 'telephone';

          interface Passenger {
            /**
             * Full name of the person or entity on the lodging reservation.
             */
            name: string;
          }
        }

        interface LodgingDatum {
          /**
           * Accommodation details for the lodging.
           */
          accommodation?: LodgingDatum.Accommodation;

          /**
           * Affiliate details if applicable.
           */
          affiliate?: LodgingDatum.Affiliate;

          /**
           * Booking confirmation number for the lodging.
           */
          booking_number?: string;

          /**
           * Check-in date.
           */
          checkin_at: number;

          /**
           * Check-out date.
           */
          checkout_at: number;

          /**
           * Customer service phone number for the lodging company.
           */
          customer_service_phone_number?: string;

          /**
           * Whether the lodging is compliant with any hotel fire safety regulations.
           */
          fire_safety_act_compliance_indicator?: boolean;

          /**
           * List of guests for the lodging.
           */
          guests?: Array<LodgingDatum.Guest>;

          /**
           * Host details for the lodging.
           */
          host?: LodgingDatum.Host;

          /**
           * List of insurances for the lodging.
           */
          insurances?: Array<LodgingDatum.Insurance>;

          /**
           * Whether the renter is a no-show.
           */
          no_show_indicator?: boolean;

          /**
           * Renter ID number for the lodging.
           */
          renter_id_number?: string;

          /**
           * Renter name for the lodging.
           */
          renter_name?: string;

          /**
           * Total details for the lodging.
           */
          total: LodgingDatum.Total;
        }

        namespace LodgingDatum {
          interface Accommodation {
            /**
             * Type of accommodation.
             */
            accommodation_type?: Accommodation.AccommodationType;

            /**
             * Bed type.
             */
            bed_type?: string;

            /**
             * Daily accommodation rate in cents.
             */
            daily_rate_amount?: number;

            /**
             * Number of nights.
             */
            nights?: number;

            /**
             * Number of rooms, cabanas, apartments, and so on.
             */
            number_of_rooms?: number;

            /**
             * Rate type.
             */
            rate_type?: string;

            /**
             * Whether smoking is allowed.
             */
            smoking_indicator?: boolean;
          }

          namespace Accommodation {
            type AccommodationType =
              | 'apartment'
              | 'cabana'
              | 'house'
              | 'penthouse'
              | 'room'
              | 'standard'
              | 'suite'
              | 'villa';
          }

          interface Affiliate {
            /**
             * Affiliate partner code.
             */
            code?: string;

            /**
             * Affiliate partner name.
             */
            name?: string;
          }

          interface Guest {
            /**
             * Guest's full name.
             */
            name: string;
          }

          interface Host {
            /**
             * Address of the host.
             */
            address?: Host.Address;

            /**
             * Host's country of domicile.
             */
            country_of_domicile?: string;

            /**
             * Reference number for the host.
             */
            host_reference?: string;

            /**
             * Type of host.
             */
            host_type?: Host.HostType;

            /**
             * Name of the lodging property or host.
             */
            name?: string;

            /**
             * Total number of reservations for the host.
             */
            number_of_reservations?: number;

            /**
             * Property phone number.
             */
            property_phone_number?: string;

            /**
             * Host's registration date.
             */
            registered_at?: number;
          }

          namespace Host {
            interface Address {
              /**
               * City, district, suburb, town, or village.
               */
              city: string;

              /**
               * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
               */
              country: string;

              /**
               * Address line 1, such as the street, PO Box, or company name.
               */
              line1: string;

              /**
               * Address line 2, such as the apartment, suite, unit, or building.
               */
              line2?: string;

              /**
               * ZIP or postal code.
               */
              postal_code: string;

              /**
               * State, county, province, or region.
               */
              state?: string;
            }

            type HostType = 'hostel' | 'hotel' | 'owner' | 'rental_agency';
          }

          interface Insurance {
            /**
             * Price of the insurance coverage in cents.
             */
            amount: number;

            /**
             * Currency of the insurance amount.
             */
            currency?: string;

            /**
             * Name of the insurance company.
             */
            insurance_company_name?: string;

            /**
             * Type of insurance coverage.
             */
            insurance_type: Insurance.InsuranceType;
          }

          namespace Insurance {
            type InsuranceType =
              | 'bankruptcy'
              | 'cancelation'
              | 'emergency'
              | 'medical';
          }

          interface Total {
            /**
             * Total price of the lodging reservation in cents.
             */
            amount: number;

            /**
             * Cash advances in cents.
             */
            cash_advances?: number;

            /**
             * Currency of the total amount.
             */
            currency?: string;

            /**
             * Discount details for the lodging.
             */
            discounts?: Total.Discounts;

            /**
             * Additional charges for the lodging.
             */
            extra_charges?: Array<Total.ExtraCharge>;

            /**
             * Prepaid amount in cents.
             */
            prepaid_amount?: number;

            /**
             * Tax breakdown for the lodging reservation.
             */
            tax?: Total.Tax;
          }

          namespace Total {
            interface Discounts {
              /**
               * Corporate client discount code.
               */
              corporate_client_code?: string;

              /**
               * Coupon code.
               */
              coupon?: string;
            }

            interface ExtraCharge {
              /**
               * Amount of the extra charge in cents.
               */
              amount?: number;

              /**
               * Type of extra charge.
               */
              type?: ExtraCharge.Type;
            }

            namespace ExtraCharge {
              type Type =
                | 'gift_shop'
                | 'laundry'
                | 'mini_bar'
                | 'other'
                | 'phone'
                | 'restaurant';
            }

            interface Tax {
              /**
               * Indicates whether the transaction is tax exempt.
               */
              tax_exempt_indicator?: boolean;

              /**
               * Tax details.
               */
              taxes?: Array<Tax.Tax>;
            }

            namespace Tax {
              interface Tax {
                /**
                 * Tax amount in cents.
                 */
                amount?: number;

                /**
                 * Tax rate.
                 */
                rate?: number;

                /**
                 * Type of tax applied.
                 */
                type?: string;
              }
            }
          }
        }

        interface Subscription {
          /**
           * Affiliate details for this purchase.
           */
          affiliate?: Subscription.Affiliate;

          /**
           * Info whether the subscription will be auto renewed upon expiry.
           */
          auto_renewal?: boolean;

          /**
           * Subscription billing details for this purchase.
           */
          billing_interval?: Subscription.BillingInterval;

          /**
           * Subscription end time. Measured in seconds since the Unix epoch.
           */
          ends_at?: number;

          /**
           * Name of the product on subscription. e.g. Apple Music Subscription
           */
          name: string;

          /**
           * Subscription start time. Measured in seconds since the Unix epoch.
           */
          starts_at?: number;
        }

        namespace Subscription {
          interface Affiliate {
            /**
             * The name of the affiliate that originated the purchase.
             */
            name: string;
          }

          interface BillingInterval {
            /**
             * The number of intervals, as an whole number greater than 0. Stripe multiplies this by the interval type to get the overall duration.
             */
            count: number;

            /**
             * Specifies a type of interval unit. Either `day`, `week`, `month` or `year`.
             */
            interval: BillingInterval.Interval;
          }

          namespace BillingInterval {
            type Interval = 'day' | 'month' | 'week' | 'year';
          }
        }
      }

      interface Shipping {
        /**
         * Shipping address.
         */
        address: Stripe.AddressParam;

        /**
         * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
         */
        carrier?: string;

        /**
         * Recipient name.
         */
        name: string;

        /**
         * Recipient phone (including extension).
         */
        phone?: string;

        /**
         * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
         */
        tracking_number?: string;
      }
    }

    interface ChargeListParams extends PaginationParams {
      /**
       * Only return charges that were created during the given date interval.
       */
      created?: Stripe.RangeQueryParam | number;

      /**
       * Only return charges for the customer specified by this customer ID.
       */
      customer?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Only return charges that were created by the PaymentIntent specified by this PaymentIntent ID.
       */
      payment_intent?: string;

      /**
       * Only return charges for this transfer group, limited to 100.
       */
      transfer_group?: string;
    }

    interface ChargeCaptureParams {
      /**
       * The amount to capture, which must be less than or equal to the original amount.
       */
      amount?: number;

      /**
       * An application fee to add on to this charge.
       */
      application_fee?: number;

      /**
       * An application fee amount to add on to this charge, which must be less than or equal to the original amount.
       */
      application_fee_amount?: number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Provides industry-specific information about the charge.
       */
      payment_details?: ChargeCaptureParams.PaymentDetails;

      /**
       * The email address to send this charge's receipt to. This will override the previously-specified email address for this charge, if one was set. Receipts will not be sent in test mode.
       */
      receipt_email?: string;

      /**
       * For a non-card charge, text that appears on the customer's statement as the statement descriptor. This value overrides the account's default statement descriptor. For information about requirements, including the 22-character limit, see [the Statement Descriptor docs](https://docs.stripe.com/get-started/account/statement-descriptors).
       *
       * For a card charge, this value is ignored unless you don't specify a `statement_descriptor_suffix`, in which case this value is used as the suffix.
       */
      statement_descriptor?: string;

      /**
       * Provides information about a card charge. Concatenated to the account's [statement descriptor prefix](https://docs.stripe.com/get-started/account/statement-descriptors#static) to form the complete statement descriptor that appears on the customer's statement. If the account has no prefix value, the suffix is concatenated to the account's statement descriptor.
       */
      statement_descriptor_suffix?: string;

      /**
       * An optional dictionary including the account to automatically transfer to as part of a destination charge. [See the Connect documentation](https://stripe.com/docs/connect/destination-charges) for details.
       */
      transfer_data?: ChargeCaptureParams.TransferData;

      /**
       * A string that identifies this transaction as part of a group. `transfer_group` may only be provided if it has not been set. See the [Connect documentation](https://stripe.com/docs/connect/separate-charges-and-transfers#transfer-options) for details.
       */
      transfer_group?: string;
    }

    namespace ChargeCaptureParams {
      interface PaymentDetails {
        /**
         * Car rental details for this PaymentIntent.
         */
        car_rental?: PaymentDetails.CarRental;

        /**
         * Car rental data for this PaymentIntent.
         */
        car_rental_data?: Stripe.Emptyable<
          Array<PaymentDetails.CarRentalDatum>
        >;

        /**
         * A unique value to identify the customer. This field is available only for card payments.
         *
         * This field is truncated to 25 alphanumeric characters, excluding spaces, before being sent to card networks.
         */
        customer_reference?: Stripe.Emptyable<string>;

        /**
         * Event details for this PaymentIntent
         */
        event_details?: PaymentDetails.EventDetails;

        /**
         * Flight reservation details for this PaymentIntent
         */
        flight?: PaymentDetails.Flight;

        /**
         * Flight data for this PaymentIntent.
         */
        flight_data?: Stripe.Emptyable<Array<PaymentDetails.FlightDatum>>;

        /**
         * Lodging reservation details for this PaymentIntent
         */
        lodging?: PaymentDetails.Lodging;

        /**
         * Lodging data for this PaymentIntent.
         */
        lodging_data?: Stripe.Emptyable<Array<PaymentDetails.LodgingDatum>>;

        /**
         * A unique value assigned by the business to identify the transaction. Required for L2 and L3 rates.
         *
         * Required when the Payment Method Types array contains `card`, including when [automatic_payment_methods.enabled](https://docs.stripe.com/api/payment_intents/create#create_payment_intent-automatic_payment_methods-enabled) is set to `true`.
         *
         * For Cards, this field is truncated to 25 alphanumeric characters, excluding spaces, before being sent to card networks. For Klarna, this field is truncated to 255 characters and is visible to customers when they view the order in the Klarna app.
         */
        order_reference?: Stripe.Emptyable<string>;

        /**
         * Subscription details for this PaymentIntent
         */
        subscription?: PaymentDetails.Subscription;
      }

      namespace PaymentDetails {
        interface CarRental {
          /**
           * Affiliate details for this purchase.
           */
          affiliate?: CarRental.Affiliate;

          /**
           * The booking number associated with the car rental.
           */
          booking_number: string;

          /**
           * Class code of the car.
           */
          car_class_code?: string;

          /**
           * Make of the car.
           */
          car_make?: string;

          /**
           * Model of the car.
           */
          car_model?: string;

          /**
           * The name of the rental car company.
           */
          company?: string;

          /**
           * The customer service phone number of the car rental company.
           */
          customer_service_phone_number?: string;

          /**
           * Number of days the car is being rented.
           */
          days_rented: number;

          /**
           * Delivery details for this purchase.
           */
          delivery?: CarRental.Delivery;

          /**
           * The details of the distance traveled during the rental period.
           */
          distance?: CarRental.Distance;

          /**
           * The details of the passengers in the travel reservation
           */
          drivers?: Array<CarRental.Driver>;

          /**
           * List of additional charges being billed.
           */
          extra_charges?: Array<CarRental.ExtraCharge>;

          /**
           * Indicates if the customer did not keep nor cancel their booking.
           */
          no_show?: boolean;

          /**
           * Car pick-up address.
           */
          pickup_address?: Stripe.AddressParam;

          /**
           * Car pick-up time. Measured in seconds since the Unix epoch.
           */
          pickup_at: number;

          /**
           * Name of the pickup location.
           */
          pickup_location_name?: string;

          /**
           * Rental rate.
           */
          rate_amount?: number;

          /**
           * The frequency at which the rate amount is applied. One of `day`, `week` or `month`
           */
          rate_interval?: CarRental.RateInterval;

          /**
           * The name of the person or entity renting the car.
           */
          renter_name?: string;

          /**
           * Car return address.
           */
          return_address?: Stripe.AddressParam;

          /**
           * Car return time. Measured in seconds since the Unix epoch.
           */
          return_at: number;

          /**
           * Name of the return location.
           */
          return_location_name?: string;

          /**
           * Indicates whether the goods or services are tax-exempt or tax is not collected.
           */
          tax_exempt?: boolean;

          /**
           * The vehicle identification number.
           */
          vehicle_identification_number?: string;
        }

        namespace CarRental {
          interface Affiliate {
            /**
             * The name of the affiliate that originated the purchase.
             */
            name: string;
          }

          interface Delivery {
            /**
             * The delivery method for the payment
             */
            mode?: Delivery.Mode;

            /**
             * Details of the recipient.
             */
            recipient?: Delivery.Recipient;
          }

          namespace Delivery {
            type Mode = 'email' | 'phone' | 'pickup' | 'post';

            interface Recipient {
              /**
               * The email of the recipient the ticket is delivered to.
               */
              email?: string;

              /**
               * The name of the recipient the ticket is delivered to.
               */
              name?: string;

              /**
               * The phone number of the recipient the ticket is delivered to.
               */
              phone?: string;
            }
          }

          interface Distance {
            /**
             * Distance traveled.
             */
            amount?: number;

            /**
             * Unit of measurement for the distance traveled. One of `miles` or `kilometers`.
             */
            unit?: Distance.Unit;
          }

          namespace Distance {
            type Unit = 'kilometers' | 'miles';
          }

          interface Driver {
            /**
             * Driver's identification number.
             */
            driver_identification_number?: string;

            /**
             * Driver's tax number.
             */
            driver_tax_number?: string;

            /**
             * Full name of the person or entity on the car reservation.
             */
            name: string;
          }

          type ExtraCharge =
            | 'extra_mileage'
            | 'gas'
            | 'late_return'
            | 'one_way_service'
            | 'parking_violation';

          type RateInterval = 'day' | 'month' | 'week';
        }

        interface CarRentalDatum {
          /**
           * Affiliate (such as travel agency) details for the rental.
           */
          affiliate?: CarRentalDatum.Affiliate;

          /**
           * Booking confirmation number for the car rental.
           */
          booking_number?: string;

          /**
           * Name of the car rental company.
           */
          carrier_name?: string;

          /**
           * Customer service phone number for the car rental company.
           */
          customer_service_phone_number?: string;

          /**
           * Number of days the car is being rented.
           */
          days_rented?: number;

          /**
           * Distance details for the rental.
           */
          distance?: CarRentalDatum.Distance;

          /**
           * List of drivers for the rental.
           */
          drivers?: Array<CarRentalDatum.Driver>;

          /**
           * Drop-off location details.
           */
          drop_off: CarRentalDatum.DropOff;

          /**
           * Insurance details for the rental.
           */
          insurances?: Array<CarRentalDatum.Insurance>;

          /**
           * Indicates if the customer was a no-show.
           */
          no_show_indicator?: boolean;

          /**
           * Pickup location details.
           */
          pickup: CarRentalDatum.Pickup;

          /**
           * Name of the person renting the vehicle.
           */
          renter_name?: string;

          /**
           * Total cost breakdown for the rental.
           */
          total: CarRentalDatum.Total;

          /**
           * Vehicle details for the rental.
           */
          vehicle?: CarRentalDatum.Vehicle;
        }

        namespace CarRentalDatum {
          interface Affiliate {
            /**
             * Affiliate partner code.
             */
            code?: string;

            /**
             * Name of affiliate partner.
             */
            name?: string;
          }

          interface Distance {
            /**
             * Distance traveled.
             */
            amount: number;

            /**
             * Unit of measurement for the distance traveled. One of `miles` or `kilometers`.
             */
            unit: Distance.Unit;
          }

          namespace Distance {
            type Unit = 'kilometers' | 'miles';
          }

          interface Driver {
            /**
             * Driver's date of birth.
             */
            date_of_birth?: Driver.DateOfBirth;

            /**
             * Driver's identification number.
             */
            driver_identification_number?: string;

            /**
             * Driver's tax number.
             */
            driver_tax_number?: string;

            /**
             * Driver's full name.
             */
            name: string;
          }

          namespace Driver {
            interface DateOfBirth {
              /**
               * Day of birth (1-31).
               */
              day: number;

              /**
               * Month of birth (1-12).
               */
              month: number;

              /**
               * Year of birth (must be greater than 1900).
               */
              year: number;
            }
          }

          interface DropOff {
            /**
             * Address of the rental location.
             */
            address: DropOff.Address;

            /**
             * Location name.
             */
            location_name?: string;

            /**
             * Timestamp for the location.
             */
            time: number;
          }

          namespace DropOff {
            interface Address {
              /**
               * City, district, suburb, town, or village.
               */
              city: string;

              /**
               * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
               */
              country: string;

              /**
               * Address line 1, such as the street, PO Box, or company name.
               */
              line1: string;

              /**
               * Address line 2, such as the apartment, suite, unit, or building.
               */
              line2?: string;

              /**
               * ZIP or postal code.
               */
              postal_code: string;

              /**
               * State, county, province, or region.
               */
              state?: string;
            }
          }

          interface Insurance {
            /**
             * Amount of the insurance coverage in cents.
             */
            amount: number;

            /**
             * Currency of the insurance amount.
             */
            currency?: string;

            /**
             * Name of the insurance company.
             */
            insurance_company_name?: string;

            /**
             * Type of insurance coverage.
             */
            insurance_type: Insurance.InsuranceType;
          }

          namespace Insurance {
            type InsuranceType =
              | 'liability_supplement'
              | 'loss_damage_waiver'
              | 'other'
              | 'partial_damage_waiver'
              | 'personal_accident'
              | 'personal_effects';
          }

          interface Pickup {
            /**
             * Address of the rental location.
             */
            address: Pickup.Address;

            /**
             * Location name.
             */
            location_name?: string;

            /**
             * Timestamp for the location.
             */
            time: number;
          }

          namespace Pickup {
            interface Address {
              /**
               * City, district, suburb, town, or village.
               */
              city: string;

              /**
               * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
               */
              country: string;

              /**
               * Address line 1, such as the street, PO Box, or company name.
               */
              line1: string;

              /**
               * Address line 2, such as the apartment, suite, unit, or building.
               */
              line2?: string;

              /**
               * ZIP or postal code.
               */
              postal_code: string;

              /**
               * State, county, province, or region.
               */
              state?: string;
            }
          }

          interface Total {
            /**
             * Total amount in cents.
             */
            amount: number;

            /**
             * Currency of the amount.
             */
            currency?: string;

            /**
             * Discount details for the rental.
             */
            discounts?: Total.Discounts;

            /**
             * Additional charges for the rental.
             */
            extra_charges?: Array<Total.ExtraCharge>;

            /**
             * Rate per unit for the rental.
             */
            rate_per_unit?: number;

            /**
             * Unit of measurement for the rate.
             */
            rate_unit?: Total.RateUnit;

            /**
             * Tax breakdown for the rental.
             */
            tax?: Total.Tax;
          }

          namespace Total {
            interface Discounts {
              /**
               * Corporate client discount code.
               */
              corporate_client_code?: string;

              /**
               * Coupon code applied to the rental.
               */
              coupon?: string;

              /**
               * Maximum number of free miles or kilometers included.
               */
              maximum_free_miles_or_kilometers?: number;
            }

            interface ExtraCharge {
              /**
               * Amount of the extra charge in cents.
               */
              amount: number;

              /**
               * Type of extra charge.
               */
              type: ExtraCharge.Type;
            }

            namespace ExtraCharge {
              type Type =
                | 'extra_mileage'
                | 'gas'
                | 'gps'
                | 'late_charge'
                | 'one_way_drop_off'
                | 'other'
                | 'parking'
                | 'phone'
                | 'regular_mileage'
                | 'towing';
            }

            type RateUnit =
              | 'days'
              | 'kilometers'
              | 'miles'
              | 'months'
              | 'weeks';

            interface Tax {
              /**
               * Indicates if the transaction is tax exempt.
               */
              tax_exempt_indicator?: boolean;

              /**
               * Array of tax details.
               */
              taxes?: Array<Tax.Tax>;
            }

            namespace Tax {
              interface Tax {
                /**
                 * Tax amount.
                 */
                amount?: number;

                /**
                 * Tax rate applied.
                 */
                rate?: number;

                /**
                 * Type of tax applied.
                 */
                type?: string;
              }
            }
          }

          interface Vehicle {
            /**
             * Make of the rental vehicle.
             */
            make?: string;

            /**
             * Model of the rental vehicle.
             */
            model?: string;

            /**
             * Odometer reading at the time of rental.
             */
            odometer?: number;

            /**
             * Type of the rental vehicle.
             */
            type?: Vehicle.Type;

            /**
             * Class of the rental vehicle.
             */
            vehicle_class?: Vehicle.VehicleClass;

            /**
             * Vehicle identification number (VIN).
             */
            vehicle_identification_number?: string;
          }

          namespace Vehicle {
            type Type =
              | 'cargo_van'
              | 'compact'
              | 'economy'
              | 'exotic'
              | 'exotic_suv'
              | 'fifteen_passenger_van'
              | 'four_wheel_drive'
              | 'full_size'
              | 'intermediate'
              | 'large_suv'
              | 'large_truck'
              | 'luxury'
              | 'medium_suv'
              | 'midsize'
              | 'mini'
              | 'minivan'
              | 'miscellaneous'
              | 'moped'
              | 'moving_van'
              | 'premium'
              | 'regular'
              | 'small_medium_truck'
              | 'small_suv'
              | 'special'
              | 'standard'
              | 'stretch'
              | 'subcompact'
              | 'taxi'
              | 'twelve_foot_truck'
              | 'twelve_passenger_van'
              | 'twenty_foot_truck'
              | 'twenty_four_foot_truck'
              | 'twenty_six_foot_truck'
              | 'unique';

            type VehicleClass =
              | 'business'
              | 'economy'
              | 'first_class'
              | 'premium_economy';
          }
        }

        interface EventDetails {
          /**
           * Indicates if the tickets are digitally checked when entering the venue.
           */
          access_controlled_venue?: boolean;

          /**
           * The event location's address.
           */
          address?: Stripe.AddressParam;

          /**
           * Affiliate details for this purchase.
           */
          affiliate?: EventDetails.Affiliate;

          /**
           * The name of the company
           */
          company?: string;

          /**
           * Delivery details for this purchase.
           */
          delivery?: EventDetails.Delivery;

          /**
           * Event end time. Measured in seconds since the Unix epoch.
           */
          ends_at?: number;

          /**
           * Type of the event entertainment (concert, sports event etc)
           */
          genre?: string;

          /**
           * The name of the event.
           */
          name: string;

          /**
           * Event start time. Measured in seconds since the Unix epoch.
           */
          starts_at?: number;
        }

        namespace EventDetails {
          interface Affiliate {
            /**
             * The name of the affiliate that originated the purchase.
             */
            name: string;
          }

          interface Delivery {
            /**
             * The delivery method for the payment
             */
            mode?: Delivery.Mode;

            /**
             * Details of the recipient.
             */
            recipient?: Delivery.Recipient;
          }

          namespace Delivery {
            type Mode = 'email' | 'phone' | 'pickup' | 'post';

            interface Recipient {
              /**
               * The email of the recipient the ticket is delivered to.
               */
              email?: string;

              /**
               * The name of the recipient the ticket is delivered to.
               */
              name?: string;

              /**
               * The phone number of the recipient the ticket is delivered to.
               */
              phone?: string;
            }
          }
        }

        interface Flight {
          /**
           * Affiliate details for this purchase.
           */
          affiliate?: Flight.Affiliate;

          /**
           * The agency number (i.e. International Air Transport Association (IATA) agency number) of the travel agency that made the booking.
           */
          agency_number?: string;

          /**
           * The International Air Transport Association (IATA) carrier code of the carrier that issued the ticket.
           */
          carrier?: string;

          /**
           * Delivery details for this purchase.
           */
          delivery?: Flight.Delivery;

          /**
           * The name of the person or entity on the reservation.
           */
          passenger_name?: string;

          /**
           * The details of the passengers in the travel reservation.
           */
          passengers?: Array<Flight.Passenger>;

          /**
           * The individual flight segments associated with the trip.
           */
          segments: Array<Flight.Segment>;

          /**
           * The ticket number associated with the travel reservation.
           */
          ticket_number?: string;
        }

        namespace Flight {
          interface Affiliate {
            /**
             * The name of the affiliate that originated the purchase.
             */
            name: string;
          }

          interface Delivery {
            /**
             * The delivery method for the payment
             */
            mode?: Delivery.Mode;

            /**
             * Details of the recipient.
             */
            recipient?: Delivery.Recipient;
          }

          namespace Delivery {
            type Mode = 'email' | 'phone' | 'pickup' | 'post';

            interface Recipient {
              /**
               * The email of the recipient the ticket is delivered to.
               */
              email?: string;

              /**
               * The name of the recipient the ticket is delivered to.
               */
              name?: string;

              /**
               * The phone number of the recipient the ticket is delivered to.
               */
              phone?: string;
            }
          }

          interface Passenger {
            /**
             * Full name of the person or entity on the flight reservation.
             */
            name: string;
          }

          interface Segment {
            /**
             * The flight segment amount.
             */
            amount?: number;

            /**
             * The International Air Transport Association (IATA) airport code for the arrival airport.
             */
            arrival_airport?: string;

            /**
             * The arrival time for the flight segment. Measured in seconds since the Unix epoch.
             */
            arrives_at?: number;

            /**
             * The International Air Transport Association (IATA) carrier code of the carrier operating the flight segment.
             */
            carrier?: string;

            /**
             * The departure time for the flight segment. Measured in seconds since the Unix epoch.
             */
            departs_at: number;

            /**
             * The International Air Transport Association (IATA) airport code for the departure airport.
             */
            departure_airport?: string;

            /**
             * The flight number associated with the segment
             */
            flight_number?: string;

            /**
             * The fare class for the segment.
             */
            service_class?: Segment.ServiceClass;
          }

          namespace Segment {
            type ServiceClass =
              | 'business'
              | 'economy'
              | 'first'
              | 'premium_economy';
          }
        }

        interface FlightDatum {
          /**
           * Affiliate details if applicable.
           */
          affiliate?: FlightDatum.Affiliate;

          /**
           * Reservation reference.
           */
          booking_number?: string;

          /**
           * Computerized reservation system used to make the reservation and purchase the ticket.
           */
          computerized_reservation_system?: string;

          /**
           * Ticket restrictions.
           */
          endorsements_and_restrictions?: string;

          /**
           * List of insurances.
           */
          insurances?: Array<FlightDatum.Insurance>;

          /**
           * List of passengers.
           */
          passengers?: Array<FlightDatum.Passenger>;

          /**
           * List of flight segments.
           */
          segments: Array<FlightDatum.Segment>;

          /**
           * Electronic ticket indicator.
           */
          ticket_electronically_issued_indicator?: boolean;

          /**
           * Total cost breakdown.
           */
          total: FlightDatum.Total;

          /**
           * Type of flight transaction.
           */
          transaction_type?: FlightDatum.TransactionType;
        }

        namespace FlightDatum {
          interface Affiliate {
            /**
             * Affiliate partner code.
             */
            code?: string;

            /**
             * Name of affiliate partner.
             */
            name?: string;

            /**
             * Code provided by the company to a travel agent authorizing ticket issuance.
             */
            travel_authorization_code?: string;
          }

          interface Insurance {
            /**
             * Insurance cost.
             */
            amount: number;

            /**
             * Insurance currency.
             */
            currency?: string;

            /**
             * Insurance company name.
             */
            insurance_company_name?: string;

            /**
             * Type of insurance.
             */
            insurance_type: Insurance.InsuranceType;
          }

          namespace Insurance {
            type InsuranceType =
              | 'baggage'
              | 'bankruptcy'
              | 'cancelation'
              | 'emergency'
              | 'medical';
          }

          interface Passenger {
            /**
             * Passenger's full name.
             */
            name: string;
          }

          interface Segment {
            /**
             * Segment fare amount.
             */
            amount?: number;

            /**
             * Arrival details.
             */
            arrival: Segment.Arrival;

            /**
             * Airline carrier code.
             */
            carrier_code: string;

            /**
             * Carrier name.
             */
            carrier_name?: string;

            /**
             * Segment currency.
             */
            currency?: string;

            /**
             * Departure details.
             */
            departure: Segment.Departure;

            /**
             * Exchange ticket number.
             */
            exchange_ticket_number?: string;

            /**
             * Fare basis code.
             */
            fare_basis_code?: string;

            /**
             * Additional fees.
             */
            fees?: number;

            /**
             * Flight number.
             */
            flight_number?: string;

            /**
             * Stopover indicator.
             */
            is_stop_over_indicator?: boolean;

            /**
             * Refundable ticket indicator.
             */
            refundable?: boolean;

            /**
             * Class of service.
             */
            service_class: Segment.ServiceClass;

            /**
             * Tax amount for segment.
             */
            tax_amount?: number;

            /**
             * Ticket number.
             */
            ticket_number?: string;
          }

          namespace Segment {
            interface Arrival {
              /**
               * Arrival airport IATA code.
               */
              airport: string;

              /**
               * Arrival date/time.
               */
              arrives_at?: number;

              /**
               * Arrival city.
               */
              city?: string;

              /**
               * Arrival country.
               */
              country?: string;
            }

            interface Departure {
              /**
               * Departure airport IATA code.
               */
              airport: string;

              /**
               * Departure city.
               */
              city?: string;

              /**
               * Departure country.
               */
              country?: string;

              /**
               * Departure date/time.
               */
              departs_at: number;
            }

            type ServiceClass =
              | 'business'
              | 'economy'
              | 'first_class'
              | 'premium_economy';
          }

          interface Total {
            /**
             * Total flight amount.
             */
            amount: number;

            /**
             * Reason for credit.
             */
            credit_reason?: Total.CreditReason;

            /**
             * Total currency.
             */
            currency?: string;

            /**
             * Discount details.
             */
            discounts?: Total.Discounts;

            /**
             * Additional charges.
             */
            extra_charges?: Array<Total.ExtraCharge>;

            /**
             * Tax breakdown.
             */
            tax?: Total.Tax;
          }

          namespace Total {
            type CreditReason =
              | 'other'
              | 'partial_ticket_refund'
              | 'passenger_transport_ancillary_cancellation'
              | 'ticket_and_ancillary_cancellation'
              | 'ticket_cancellation';

            interface Discounts {
              /**
               * Corporate client discount code.
               */
              corporate_client_code?: string;
            }

            interface ExtraCharge {
              /**
               * Amount of additional charges.
               */
              amount?: number;

              /**
               * Type of additional charges.
               */
              type?: ExtraCharge.Type;
            }

            namespace ExtraCharge {
              type Type =
                | 'additional_fees'
                | 'ancillary_service_charges'
                | 'exchange_fee';
            }

            interface Tax {
              /**
               * Array of tax details.
               */
              taxes?: Array<Tax.Tax>;
            }

            namespace Tax {
              interface Tax {
                /**
                 * Tax amount.
                 */
                amount?: number;

                /**
                 * Tax rate.
                 */
                rate?: number;

                /**
                 * Type of tax.
                 */
                type?: string;
              }
            }
          }

          type TransactionType =
            | 'exchange_ticket'
            | 'miscellaneous'
            | 'refund'
            | 'ticket_purchase';
        }

        interface Lodging {
          /**
           * The lodging location's address.
           */
          address?: Stripe.AddressParam;

          /**
           * The number of adults on the booking
           */
          adults?: number;

          /**
           * Affiliate details for this purchase.
           */
          affiliate?: Lodging.Affiliate;

          /**
           * The booking number associated with the lodging reservation.
           */
          booking_number?: string;

          /**
           * The lodging category
           */
          category?: Lodging.Category;

          /**
           * Lodging check-in time. Measured in seconds since the Unix epoch.
           */
          checkin_at: number;

          /**
           * Lodging check-out time. Measured in seconds since the Unix epoch.
           */
          checkout_at: number;

          /**
           * The customer service phone number of the lodging company.
           */
          customer_service_phone_number?: string;

          /**
           * The daily lodging room rate.
           */
          daily_room_rate_amount?: number;

          /**
           * Delivery details for this purchase.
           */
          delivery?: Lodging.Delivery;

          /**
           * List of additional charges being billed.
           */
          extra_charges?: Array<Lodging.ExtraCharge>;

          /**
           * Indicates whether the lodging location is compliant with the Fire Safety Act.
           */
          fire_safety_act_compliance?: boolean;

          /**
           * The name of the lodging location.
           */
          name?: string;

          /**
           * Indicates if the customer did not keep their booking while failing to cancel the reservation.
           */
          no_show?: boolean;

          /**
           * The number of rooms on the booking
           */
          number_of_rooms?: number;

          /**
           * The details of the passengers in the travel reservation
           */
          passengers?: Array<Lodging.Passenger>;

          /**
           * The phone number of the lodging location.
           */
          property_phone_number?: string;

          /**
           * The room class for this purchase.
           */
          room_class?: string;

          /**
           * The number of room nights
           */
          room_nights?: number;

          /**
           * The total tax amount associating with the room reservation.
           */
          total_room_tax_amount?: number;

          /**
           * The total tax amount
           */
          total_tax_amount?: number;
        }

        namespace Lodging {
          interface Affiliate {
            /**
             * The name of the affiliate that originated the purchase.
             */
            name: string;
          }

          type Category = 'hotel' | 'vacation_rental';

          interface Delivery {
            /**
             * The delivery method for the payment
             */
            mode?: Delivery.Mode;

            /**
             * Details of the recipient.
             */
            recipient?: Delivery.Recipient;
          }

          namespace Delivery {
            type Mode = 'email' | 'phone' | 'pickup' | 'post';

            interface Recipient {
              /**
               * The email of the recipient the ticket is delivered to.
               */
              email?: string;

              /**
               * The name of the recipient the ticket is delivered to.
               */
              name?: string;

              /**
               * The phone number of the recipient the ticket is delivered to.
               */
              phone?: string;
            }
          }

          type ExtraCharge =
            | 'gift_shop'
            | 'laundry'
            | 'mini_bar'
            | 'other'
            | 'restaurant'
            | 'telephone';

          interface Passenger {
            /**
             * Full name of the person or entity on the lodging reservation.
             */
            name: string;
          }
        }

        interface LodgingDatum {
          /**
           * Accommodation details for the lodging.
           */
          accommodation?: LodgingDatum.Accommodation;

          /**
           * Affiliate details if applicable.
           */
          affiliate?: LodgingDatum.Affiliate;

          /**
           * Booking confirmation number for the lodging.
           */
          booking_number?: string;

          /**
           * Check-in date.
           */
          checkin_at: number;

          /**
           * Check-out date.
           */
          checkout_at: number;

          /**
           * Customer service phone number for the lodging company.
           */
          customer_service_phone_number?: string;

          /**
           * Whether the lodging is compliant with any hotel fire safety regulations.
           */
          fire_safety_act_compliance_indicator?: boolean;

          /**
           * List of guests for the lodging.
           */
          guests?: Array<LodgingDatum.Guest>;

          /**
           * Host details for the lodging.
           */
          host?: LodgingDatum.Host;

          /**
           * List of insurances for the lodging.
           */
          insurances?: Array<LodgingDatum.Insurance>;

          /**
           * Whether the renter is a no-show.
           */
          no_show_indicator?: boolean;

          /**
           * Renter ID number for the lodging.
           */
          renter_id_number?: string;

          /**
           * Renter name for the lodging.
           */
          renter_name?: string;

          /**
           * Total details for the lodging.
           */
          total: LodgingDatum.Total;
        }

        namespace LodgingDatum {
          interface Accommodation {
            /**
             * Type of accommodation.
             */
            accommodation_type?: Accommodation.AccommodationType;

            /**
             * Bed type.
             */
            bed_type?: string;

            /**
             * Daily accommodation rate in cents.
             */
            daily_rate_amount?: number;

            /**
             * Number of nights.
             */
            nights?: number;

            /**
             * Number of rooms, cabanas, apartments, and so on.
             */
            number_of_rooms?: number;

            /**
             * Rate type.
             */
            rate_type?: string;

            /**
             * Whether smoking is allowed.
             */
            smoking_indicator?: boolean;
          }

          namespace Accommodation {
            type AccommodationType =
              | 'apartment'
              | 'cabana'
              | 'house'
              | 'penthouse'
              | 'room'
              | 'standard'
              | 'suite'
              | 'villa';
          }

          interface Affiliate {
            /**
             * Affiliate partner code.
             */
            code?: string;

            /**
             * Affiliate partner name.
             */
            name?: string;
          }

          interface Guest {
            /**
             * Guest's full name.
             */
            name: string;
          }

          interface Host {
            /**
             * Address of the host.
             */
            address?: Host.Address;

            /**
             * Host's country of domicile.
             */
            country_of_domicile?: string;

            /**
             * Reference number for the host.
             */
            host_reference?: string;

            /**
             * Type of host.
             */
            host_type?: Host.HostType;

            /**
             * Name of the lodging property or host.
             */
            name?: string;

            /**
             * Total number of reservations for the host.
             */
            number_of_reservations?: number;

            /**
             * Property phone number.
             */
            property_phone_number?: string;

            /**
             * Host's registration date.
             */
            registered_at?: number;
          }

          namespace Host {
            interface Address {
              /**
               * City, district, suburb, town, or village.
               */
              city: string;

              /**
               * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
               */
              country: string;

              /**
               * Address line 1, such as the street, PO Box, or company name.
               */
              line1: string;

              /**
               * Address line 2, such as the apartment, suite, unit, or building.
               */
              line2?: string;

              /**
               * ZIP or postal code.
               */
              postal_code: string;

              /**
               * State, county, province, or region.
               */
              state?: string;
            }

            type HostType = 'hostel' | 'hotel' | 'owner' | 'rental_agency';
          }

          interface Insurance {
            /**
             * Price of the insurance coverage in cents.
             */
            amount: number;

            /**
             * Currency of the insurance amount.
             */
            currency?: string;

            /**
             * Name of the insurance company.
             */
            insurance_company_name?: string;

            /**
             * Type of insurance coverage.
             */
            insurance_type: Insurance.InsuranceType;
          }

          namespace Insurance {
            type InsuranceType =
              | 'bankruptcy'
              | 'cancelation'
              | 'emergency'
              | 'medical';
          }

          interface Total {
            /**
             * Total price of the lodging reservation in cents.
             */
            amount: number;

            /**
             * Cash advances in cents.
             */
            cash_advances?: number;

            /**
             * Currency of the total amount.
             */
            currency?: string;

            /**
             * Discount details for the lodging.
             */
            discounts?: Total.Discounts;

            /**
             * Additional charges for the lodging.
             */
            extra_charges?: Array<Total.ExtraCharge>;

            /**
             * Prepaid amount in cents.
             */
            prepaid_amount?: number;

            /**
             * Tax breakdown for the lodging reservation.
             */
            tax?: Total.Tax;
          }

          namespace Total {
            interface Discounts {
              /**
               * Corporate client discount code.
               */
              corporate_client_code?: string;

              /**
               * Coupon code.
               */
              coupon?: string;
            }

            interface ExtraCharge {
              /**
               * Amount of the extra charge in cents.
               */
              amount?: number;

              /**
               * Type of extra charge.
               */
              type?: ExtraCharge.Type;
            }

            namespace ExtraCharge {
              type Type =
                | 'gift_shop'
                | 'laundry'
                | 'mini_bar'
                | 'other'
                | 'phone'
                | 'restaurant';
            }

            interface Tax {
              /**
               * Indicates whether the transaction is tax exempt.
               */
              tax_exempt_indicator?: boolean;

              /**
               * Tax details.
               */
              taxes?: Array<Tax.Tax>;
            }

            namespace Tax {
              interface Tax {
                /**
                 * Tax amount in cents.
                 */
                amount?: number;

                /**
                 * Tax rate.
                 */
                rate?: number;

                /**
                 * Type of tax applied.
                 */
                type?: string;
              }
            }
          }
        }

        interface Subscription {
          /**
           * Affiliate details for this purchase.
           */
          affiliate?: Subscription.Affiliate;

          /**
           * Info whether the subscription will be auto renewed upon expiry.
           */
          auto_renewal?: boolean;

          /**
           * Subscription billing details for this purchase.
           */
          billing_interval?: Subscription.BillingInterval;

          /**
           * Subscription end time. Measured in seconds since the Unix epoch.
           */
          ends_at?: number;

          /**
           * Name of the product on subscription. e.g. Apple Music Subscription
           */
          name: string;

          /**
           * Subscription start time. Measured in seconds since the Unix epoch.
           */
          starts_at?: number;
        }

        namespace Subscription {
          interface Affiliate {
            /**
             * The name of the affiliate that originated the purchase.
             */
            name: string;
          }

          interface BillingInterval {
            /**
             * The number of intervals, as an whole number greater than 0. Stripe multiplies this by the interval type to get the overall duration.
             */
            count: number;

            /**
             * Specifies a type of interval unit. Either `day`, `week`, `month` or `year`.
             */
            interval: BillingInterval.Interval;
          }

          namespace BillingInterval {
            type Interval = 'day' | 'month' | 'week' | 'year';
          }
        }
      }

      interface TransferData {
        /**
         * The amount transferred to the destination account, if specified. By default, the entire charge amount is transferred to the destination account.
         */
        amount?: number;
      }
    }

    interface ChargeSearchParams {
      /**
       * The search query string. See [search query language](https://stripe.com/docs/search#search-query-language) and the list of supported [query fields for charges](https://stripe.com/docs/search#query-fields-for-charges).
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

    class ChargesResource {
      /**
       * This method is no longer recommended—use the [Payment Intents API](https://docs.stripe.com/docs/api/payment_intents)
       * to initiate a new payment instead. Confirmation of the PaymentIntent creates the Charge
       * object used to request payment.
       */
      create(
        params?: ChargeCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Charge>>;
      create(options?: RequestOptions): Promise<Stripe.Response<Stripe.Charge>>;

      /**
       * Retrieves the details of a charge that has previously been created. Supply the unique charge ID that was returned from your previous request, and Stripe will return the corresponding charge information. The same information is returned when creating or refunding the charge.
       */
      retrieve(
        id: string,
        params?: ChargeRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Charge>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Charge>>;

      /**
       * Updates the specified charge by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
       */
      update(
        id: string,
        params?: ChargeUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Charge>>;

      /**
       * Returns a list of charges you've previously created. The charges are returned in sorted order, with the most recent charges appearing first.
       */
      list(
        params?: ChargeListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.Charge>;
      list(options?: RequestOptions): ApiListPromise<Stripe.Charge>;

      /**
       * Capture the payment of an existing, uncaptured charge that was created with the capture option set to false.
       *
       * Uncaptured payments expire a set number of days after they are created ([7 by default](https://docs.stripe.com/docs/charges/placing-a-hold)), after which they are marked as refunded and capture attempts will fail.
       *
       * Don't use this method to capture a PaymentIntent-initiated charge. Use [Capture a PaymentIntent](https://docs.stripe.com/docs/api/payment_intents/capture).
       */
      capture(
        id: string,
        params?: ChargeCaptureParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Charge>>;
      capture(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Charge>>;

      /**
       * Search for charges you've previously created using Stripe's [Search Query Language](https://docs.stripe.com/docs/search#search-query-language).
       * Don't use search in read-after-write flows where strict consistency is necessary. Under normal operating
       * conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
       * to an hour behind during outages. Search functionality is not available to merchants in India.
       */
      search(
        params: ChargeSearchParams,
        options?: RequestOptions
      ): ApiSearchResultPromise<Stripe.Charge>;
    }
  }
}
