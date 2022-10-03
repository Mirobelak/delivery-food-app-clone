export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
   {
    name: 'name',
    title: 'Dish name',
    type: 'string',
    validation: Rule => Rule.required(),
   },
    {
    name: 'image',
    title: 'Image of Dish',
    type: 'image',
    },
    {
    name: 'price',
    title: 'Price of Dish',
    type: 'number',
    validation: Rule => Rule.required(),
    },
    {
    name: 'short_description',
    title: 'Short description of Dish',
    type: 'string',
    validation: Rule => Rule.required(),
    },
  ],

}
