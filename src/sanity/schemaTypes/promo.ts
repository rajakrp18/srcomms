import {defineField, defineType} from 'sanity'

export const promoType = defineType({
  name: 'promo',
  title: 'Promotional Offer',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title (e.g. 0% Downpayment)',
      type: 'string',
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text (e.g. EXPLORE OFFERS)',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Promo Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'colorTheme',
      title: 'Color Theme',
      type: 'string',
      options: {
        list: [
          {title: 'Purple (Promo 1)', value: 'promo-1'},
          {title: 'Blue (Promo 2)', value: 'promo-2'},
          {title: 'Green (Promo 3)', value: 'promo-3'},
        ],
      },
    }),
  ],
})
