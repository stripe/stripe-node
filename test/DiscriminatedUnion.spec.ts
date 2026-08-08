// @ts-nocheck
import {expect} from 'chai';
import {flattenAndStringify} from '../src/utils.js';

// ---------------------------------------------------------------------------
// Type definitions mirroring the shapes the codegen produces for discriminated
// unions.  These are hand-written here so the test file is self-contained, but
// they exactly match the object-literal typedef shape the Node generator emits
// for each variant.
// ---------------------------------------------------------------------------

// --- standalone union (color model) ----------------------------------------

type RgbColorParams = {
  model: 'rgb';
  rgb: string;
};

type HsvColorParams = {
  model: 'hsv';
  hsv: string;
};

type HslColorParams = {
  model: 'hsl';
  hsl: string;
};

type ColorParams = RgbColorParams | HsvColorParams | HslColorParams;

// --- inline union (llama type) ----------------------------------------------
// Inline unions appear at the parent object level: the discriminator field and
// variant-specific payload field are siblings, not nested inside a wrapper.

type AlienLlamaVariant = {
  type: 'alien_llama';
  alien_llama: {
    planet: string;
  };
};

type EarthLlamaVariant = {
  type: 'earth_llama';
  earth_llama: {
    breed: string;
  };
};

type LlamaBaseParams = {
  name: string;
  color: ColorParams;
};

type CreateLlamaParams = LlamaBaseParams & (AlienLlamaVariant | EarthLlamaVariant);

// --- response object --------------------------------------------------------
// The Node SDK returns plain objects from the API.  A discriminated union
// response simply has the discriminator as a plain field.

type RgbColorResponse = {
  object: 'color';
  model: 'rgb';
  rgb: string;
  id: string;
};

type HsvColorResponse = {
  object: 'color';
  model: 'hsv';
  hsv: string;
  id: string;
};

type ColorResponse = RgbColorResponse | HsvColorResponse;

// --- response-side inline union (payment method model) ----------------------
// Response inline unions share the same intersection shape as request inline
// unions: base resource fields are intersected with a union of variant types.
// Each variant carries the discriminator as a literal and one nested payload.

type CardResource = {
  brand: string;
  last4: string;
  exp_month: number;
};

type BankResource = {
  bank_name: string;
  routing_number: string;
};

type PaymentMethodResource = {
  id: string;
  object: 'payment_method';
} & (
  | {type: 'card'; card: CardResource}
  | {type: 'us_bank_account'; us_bank_account: BankResource}
);

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe('Discriminated union type shapes', () => {
  describe('standalone union params', () => {
    it('rgb variant carries the discriminator and variant-specific field', () => {
      const params: RgbColorParams = {model: 'rgb', rgb: '#ff8000'};

      expect(params.model).to.equal('rgb');
      expect(params.rgb).to.equal('#ff8000');
    });

    it('hsv variant carries the discriminator and variant-specific field', () => {
      const params: HsvColorParams = {model: 'hsv', hsv: '30,100,100'};

      expect(params.model).to.equal('hsv');
      expect(params.hsv).to.equal('30,100,100');
    });

    it('hsl variant carries the discriminator and variant-specific field', () => {
      const params: HslColorParams = {model: 'hsl', hsl: '30,100%,50%'};

      expect(params.model).to.equal('hsl');
      expect(params.hsl).to.equal('30,100%,50%');
    });

    it('ColorParams union accepts any variant', () => {
      const variants: ColorParams[] = [
        {model: 'rgb', rgb: '#ff0000'},
        {model: 'hsv', hsv: '0,100,100'},
        {model: 'hsl', hsl: '0,100%,50%'},
      ];

      expect(variants).to.have.length(3);
      expect(variants.map((v) => v.model)).to.deep.equal([
        'rgb',
        'hsv',
        'hsl',
      ]);
    });

    it('discriminator can be used to narrow to the correct variant', () => {
      const params: ColorParams = {model: 'rgb', rgb: '#00ff00'};

      if (params.model === 'rgb') {
        expect(params.rgb).to.equal('#00ff00');
      } else {
        throw new Error('expected rgb branch');
      }
    });

    it('plain object matching the union shape passes through JSON serialization unchanged', () => {
      const params: RgbColorParams = {model: 'rgb', rgb: '#0000ff'};
      const serialized = JSON.stringify(params);
      const parsed = JSON.parse(serialized);

      expect(parsed.model).to.equal('rgb');
      expect(parsed.rgb).to.equal('#0000ff');
    });
  });

  describe('inline union params', () => {
    it('alien_llama variant has discriminator and nested payload', () => {
      const params: CreateLlamaParams = {
        name: 'Zyx',
        color: {model: 'rgb', rgb: '#ffffff'},
        type: 'alien_llama',
        alien_llama: {planet: 'Zorg'},
      };

      expect(params.type).to.equal('alien_llama');
      expect((params as AlienLlamaVariant).alien_llama.planet).to.equal('Zorg');
    });

    it('earth_llama variant has discriminator and nested payload', () => {
      const params: CreateLlamaParams = {
        name: 'Spot',
        color: {model: 'hsv', hsv: '120,80,60'},
        type: 'earth_llama',
        earth_llama: {breed: 'Huacaya'},
      };

      expect(params.type).to.equal('earth_llama');
      expect((params as EarthLlamaVariant).earth_llama.breed).to.equal(
        'Huacaya'
      );
    });

    it('base fields are present alongside the variant-specific fields', () => {
      const params: CreateLlamaParams = {
        name: 'Bob',
        color: {model: 'hsl', hsl: '200,50%,50%'},
        type: 'earth_llama',
        earth_llama: {breed: 'Suri'},
      };

      expect(params.name).to.equal('Bob');
      expect(params.color.model).to.equal('hsl');
      expect(params.type).to.equal('earth_llama');
    });

    it('discriminator narrows the inline variant correctly', () => {
      const params: CreateLlamaParams = {
        name: 'Luna',
        color: {model: 'rgb', rgb: '#aabbcc'},
        type: 'alien_llama',
        alien_llama: {planet: 'Kepler-22b'},
      };

      if (params.type === 'alien_llama') {
        expect(params.alien_llama.planet).to.equal('Kepler-22b');
      } else {
        throw new Error('expected alien_llama branch');
      }
    });
  });

  describe('response-side object', () => {
    it('rgb color response exposes the discriminator and variant field', () => {
      // Simulates a plain object returned from the Stripe API after
      // JSON.parse() — no coercion, just field access.
      const response: RgbColorResponse = {
        object: 'color',
        model: 'rgb',
        rgb: '#123456',
        id: 'col_abc',
      };

      expect(response.model).to.equal('rgb');
      expect(response.rgb).to.equal('#123456');
    });

    it('hsv color response exposes the discriminator and variant field', () => {
      const response: HsvColorResponse = {
        object: 'color',
        model: 'hsv',
        hsv: '210,50,80',
        id: 'col_def',
      };

      expect(response.model).to.equal('hsv');
      expect(response.hsv).to.equal('210,50,80');
    });

    it('ColorResponse union allows narrowing via discriminator', () => {
      const response: ColorResponse = {
        object: 'color',
        model: 'rgb',
        rgb: '#abcdef',
        id: 'col_ghi',
      };

      if (response.model === 'rgb') {
        expect(response.rgb).to.equal('#abcdef');
      } else {
        throw new Error('expected rgb branch');
      }
    });

    it('response object survives JSON round-trip with discriminator intact', () => {
      const response: RgbColorResponse = {
        object: 'color',
        model: 'rgb',
        rgb: '#ffffff',
        id: 'col_jkl',
      };

      const roundTripped = JSON.parse(JSON.stringify(response));

      expect(roundTripped.model).to.equal('rgb');
      expect(roundTripped.rgb).to.equal('#ffffff');
      expect(roundTripped.id).to.equal('col_jkl');
    });

    it('can process multiple response objects with different variants', () => {
      const responses: ColorResponse[] = [
        {object: 'color', model: 'rgb', rgb: '#ff0000', id: 'col_1'},
        {object: 'color', model: 'hsv', hsv: '0,100,100', id: 'col_2'},
      ];

      const models = responses.map((r) => r.model);
      expect(models).to.deep.equal(['rgb', 'hsv']);
    });
  });

  describe('response-side inline discriminated union', () => {
    it('deserializes card variant with nested payload', () => {
      const json = {
        id: 'pm_123',
        object: 'payment_method' as const,
        type: 'card' as const,
        card: {brand: 'visa', last4: '4242', exp_month: 12},
      };
      const pm: PaymentMethodResource = json;

      expect(pm.type).to.equal('card');
      expect(pm.card.brand).to.equal('visa');
      expect(pm.card.last4).to.equal('4242');
      expect(pm.card.exp_month).to.equal(12);
    });

    it('deserializes bank variant with nested payload', () => {
      const json = {
        id: 'pm_456',
        object: 'payment_method' as const,
        type: 'us_bank_account' as const,
        us_bank_account: {bank_name: 'Chase', routing_number: '110000000'},
      };
      const pm: PaymentMethodResource = json;

      expect(pm.type).to.equal('us_bank_account');
      expect(pm.us_bank_account.bank_name).to.equal('Chase');
      expect(pm.us_bank_account.routing_number).to.equal('110000000');
    });

    it('narrows type via discriminator check', () => {
      const json = {
        id: 'pm_789',
        object: 'payment_method' as const,
        type: 'card' as const,
        card: {brand: 'mastercard', last4: '5555', exp_month: 6},
      };
      const pm: PaymentMethodResource = json;

      if (pm.type === 'card') {
        expect(pm.card.brand).to.equal('mastercard');
      } else {
        throw new Error('expected card branch');
      }
    });

    it('round-trips through JSON serialization', () => {
      const original: PaymentMethodResource = {
        id: 'pm_abc',
        object: 'payment_method',
        type: 'card',
        card: {brand: 'amex', last4: '0001', exp_month: 3},
      };
      const deserialized = JSON.parse(
        JSON.stringify(original)
      ) as PaymentMethodResource;

      expect(deserialized.id).to.equal('pm_abc');
      expect(deserialized.type).to.equal('card');
      expect(deserialized.card.brand).to.equal('amex');
    });

    it('base fields are accessible regardless of variant', () => {
      const json = {
        id: 'pm_xyz',
        object: 'payment_method' as const,
        type: 'us_bank_account' as const,
        us_bank_account: {
          bank_name: 'Wells Fargo',
          routing_number: '121000248',
        },
      };
      const pm: PaymentMethodResource = json;

      expect(pm.id).to.equal('pm_xyz');
      expect(pm.object).to.equal('payment_method');
    });
  });

  describe('Request standalone DU encoding via flattenAndStringify', () => {
    it('encodes discriminator with bracket notation', () => {
      const params = {color: {model: 'rgb', r: '255', g: '128', b: '0'}};
      const encoded = flattenAndStringify(params);
      expect(encoded['color[model]']).to.equal('rgb');
    });

    it('encodes variant payload fields with bracket notation', () => {
      const params = {color: {model: 'rgb', r: '255', g: '128', b: '0'}};
      const encoded = flattenAndStringify(params);
      expect(encoded['color[r]']).to.equal('255');
      expect(encoded['color[g]']).to.equal('128');
      expect(encoded['color[b]']).to.equal('0');
    });

    it('encodes HSV variant correctly', () => {
      const params = {color: {model: 'hsv', h: '180', s: '100', v: '50'}};
      const encoded = flattenAndStringify(params);
      expect(encoded['color[model]']).to.equal('hsv');
      expect(encoded['color[h]']).to.equal('180');
      expect(encoded['color[s]']).to.equal('100');
      expect(encoded['color[v]']).to.equal('50');
    });

    it('does not include keys for absent variant fields', () => {
      const params = {color: {model: 'rgb', r: '255'}};
      const encoded = flattenAndStringify(params);
      expect(encoded['color[model]']).to.equal('rgb');
      expect(encoded['color[r]']).to.equal('255');
      expect(encoded).to.not.have.property('color[g]');
      expect(encoded).to.not.have.property('color[b]');
    });
  });

  describe('Request inline DU encoding via flattenAndStringify', () => {
    it('encodes discriminator at top level', () => {
      const params = {
        amount: '1000',
        type: 'card',
        card: {number: '4242424242424242', exp_month: '12'},
      };
      const encoded = flattenAndStringify(params);
      expect(encoded['type']).to.equal('card');
    });

    it('encodes nested variant payload with bracket notation', () => {
      const params = {
        amount: '1000',
        type: 'card',
        card: {number: '4242424242424242', exp_month: '12'},
      };
      const encoded = flattenAndStringify(params);
      expect(encoded['card[number]']).to.equal('4242424242424242');
      expect(encoded['card[exp_month]']).to.equal('12');
    });

    it('encodes base fields alongside discriminator', () => {
      const params = {amount: '1000', type: 'card', card: {number: '4242'}};
      const encoded = flattenAndStringify(params);
      expect(encoded['amount']).to.equal('1000');
    });

    it('does not include non-selected variant keys', () => {
      const params = {amount: '1000', type: 'card', card: {number: '4242'}};
      const encoded = flattenAndStringify(params);
      expect(encoded).to.not.have.property('us_bank_account[bank_name]');
      expect(encoded).to.not.have.property('us_bank_account[routing_number]');
    });

    it('encodes bank variant correctly', () => {
      const params = {
        amount: '500',
        type: 'us_bank_account',
        us_bank_account: {bank_name: 'Chase', routing_number: '110000000'},
      };
      const encoded = flattenAndStringify(params);
      expect(encoded['type']).to.equal('us_bank_account');
      expect(encoded['us_bank_account[bank_name]']).to.equal('Chase');
      expect(encoded['us_bank_account[routing_number]']).to.equal('110000000');
    });
  });
});
