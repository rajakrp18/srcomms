import {defineField, defineType} from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Smartphone / Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'price',
      title: 'Price (e.g. ₹18,999)',
      type: 'string',
    }),
    defineField({
      name: 'specs',
      title: 'Specifications (e.g. 256GB / 8GB RAM)',
      type: 'string',
    }),
    defineField({
      name: 'badge',
      title: 'Badge (e.g. NEW, HOT)',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Smartphone', value: 'smartphone'},
          {title: 'Accessory', value: 'accessory'},
          {title: 'Smartwatch', value: 'smartwatch'},
        ],
      },
    }),
    defineField({
      name: 'brand',
      title: 'Brand',
      type: 'string',
      options: {
        list: [
          {title: 'Apple', value: 'Apple'},
          {title: 'Samsung', value: 'Samsung'},
          {title: 'Vivo', value: 'Vivo'},
          {title: 'OnePlus', value: 'OnePlus'},
          {title: 'Nothing', value: 'Nothing'},
          {title: 'Oppo', value: 'Oppo'},
          {title: 'Realme', value: 'Realme'},
          {title: 'Xiaomi', value: 'Xiaomi'},
        ],
      },
    }),
  ],
})
