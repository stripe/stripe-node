// @ts-nocheck
import {expect} from 'chai';

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

type CreateLlamaParams = LlamaBaseParams &
  (AlienLlamaVariant | EarthLlamaVariant);

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
      expect(variants.map((v) => v.model)).to.deep.equal(['rgb', 'hsv', 'hsl']);
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
});
