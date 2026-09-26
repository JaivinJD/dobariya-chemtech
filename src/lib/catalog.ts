// Shared catalogue helpers, used by the homepage and the products pages.
// The product data itself lives in src/data/products (CMS-managed); this file
// only describes the three families and formats values for display.

export const families = [
  {
    slug: 'alkyl-solvents',
    name: 'Alkyl Bromides',
    sub: 'in solvents',
    blurb: 'Bromoalkanes supplied in solvent form for synthesis and industrial processes.',
    samples: ['1-Bromobutane', '1-Bromooctane', '1-Bromodecane'],
    short: 'Alkyl · solvents',
  },
  {
    slug: 'alkyl-solid',
    name: 'Alkyl Bromides',
    sub: 'solid and other forms',
    blurb: 'Inorganic and solid-form bromides, including acids and anhydrous salts.',
    samples: ['Sodium Bromide', 'Zinc Bromide', 'HBr 48%'],
    short: 'Solid / inorganic',
  },
  {
    slug: 'other',
    name: 'Other Bromides',
    sub: 'specialty range',
    blurb: 'A broad range of n-, iso- and specialty alkyl bromides for diverse applications.',
    samples: ['n-Butyl Bromide', 'Allyl Bromide', 'n-Cetyl Bromide'],
    short: 'Specialty',
  },
] as const;

export type FamilySlug = (typeof families)[number]['slug'];

export const familyBySlug = (slug: string) => families.find((f) => f.slug === slug);

// "C8H17Br" -> "C<sub>8</sub>H<sub>17</sub>Br". Escapes first, so it is safe for set:html.
export function formulaHtml(formula = ''): string {
  const escaped = formula.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
  return escaped.replace(/([A-Za-z)])(\d+)/g, '$1<sub>$2</sub>');
}

// Lets long names like "7-(Bromomethyl)pentadecane" wrap after ")" instead of mid-word.
export const withBreaks = (name: string) =>
  name.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`).replace(/\)/g, ')<wbr/>');
