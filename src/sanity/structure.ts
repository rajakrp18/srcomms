import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('SR Communication')
    .items([
      S.listItem()
        .title('Smartphones by Brand')
        .child(
          S.list()
            .title('Brands')
            .items([
              'Apple', 'Samsung', 'Vivo', 'OnePlus', 'Nothing', 'Oppo', 'Realme', 'Xiaomi'
            ].map(brand => 
              S.listItem()
                .title(brand)
                .child(
                  S.documentList()
                    .title(`${brand} Smartphones`)
                    .filter('_type == "product" && brand == $brand')
                    .params({ brand })
                )
            ))
        ),
      S.documentTypeListItem('product').title('All Products List'),
      S.divider(),
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('promo').title('Promotional Offers'),
    ])
