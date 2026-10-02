import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('SR Communication')
    .items([
      S.documentTypeListItem('product').title('Smartphones & Products'),
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('promo').title('Promotional Offers'),
      S.divider(),
    ])
