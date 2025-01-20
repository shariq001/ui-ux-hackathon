import { type SchemaTypeDefinition } from 'sanity'
import { product } from './Product'
import { Category } from './category'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, Category],
}
