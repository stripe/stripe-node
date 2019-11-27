declare namespace Stripe {
  /**
   * The Settings object.
   */
  interface Settings {
    branding?: SettingsBranding;

    card_payments?: SettingsCardPayments;

    dashboard?: SettingsDashboard;

    payments?: SettingsPayments;

    payouts?: SettingsPayouts;
  }
}