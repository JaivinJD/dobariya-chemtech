import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const products = defineCollection({
  // Load every entry from our single JSON file.
  loader: file('src/data/products.json'),

  // The rulebook: every product is checked against this at build time.
  schema: z.object({
    name:     z.string(),                                   // required
    category: z.enum(['alkyl-solvents', 'alkyl-solid', 'other']),  // must be one of these
    formula:  z.string().optional(),                        // may be missing
    grade:    z.string().optional(),
    synonyms: z.array(z.string()).optional(),
    cas:      z.string().optional(),
    packaging:    z.array(z.string()).optional(),           // a list of strings
    applications: z.array(z.string()).optional(),
    featured: z.boolean().default(false),                   // defaults to false if absent
  }),
});

export const collections = { products };