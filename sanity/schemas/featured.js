export default {
    name: 'featured',
    title: 'Featured',
    type: 'document',
    fields: [
     {
      name: 'name',
      title: 'Dish name',
      type: 'string',
      validation: Rule => Rule.required(),
     },
      {
      name: 'short_description',
      title: 'Short description of Dish',
      type: 'string',
      validation: Rule => Rule.required(),
      },
      {
      name: 'restaurants',
      title: 'Restaurants',
      type: 'array',
      of: [{type: 'reference', to: {type: 'restaurant'}}],
      },
    ],
  
  }
  