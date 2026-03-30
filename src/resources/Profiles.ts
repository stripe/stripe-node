// File generated from our OpenAPI spec

import {RequestOptions} from '../lib.js';
export interface Profile {
  id: string;

  object: 'profile';

  branding: Profile.Branding | null;

  description: string | null;

  display_name: string;

  livemode: boolean;

  url: string | null;

  username: string;
}
export namespace Profile {
  export interface Branding {
    icon: Branding.Icon | null;

    logo: Branding.Logo | null;

    primary_color: string | null;

    secondary_color: string | null;
  }

  export namespace Branding {
    export interface Icon {
      original: string;
    }

    export interface Logo {
      original: string;
    }
  }
}
