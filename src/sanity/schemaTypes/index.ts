import { type SchemaTypeDefinition } from 'sanity'
import blog from '../blogPost'
import author from '../author'
import category from '../category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, author, category],
}
