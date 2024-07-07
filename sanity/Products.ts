export default {
    name: 'products',
    type: 'document',
    title: 'Products',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Product Name'
        },
        {
            name:'producttype',
            type:'string',
            title:'Product Type'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'name'
            }
        },
        {
            name: 'description',
            type: 'array',
            title: 'Description',
            of: [
                {
                    type: 'block'
                }
            ]
        },
        {
            name: 'image',
            type: 'image',
            title: 'Product Image',
            fields:[
                {
                    name:'alt',
                    type:'string',
                    title:'Alternative Text'
                }
            ]
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price'
        },
        {
            name: 'size',
            type: 'array',
            title: 'Size',
            of: [
                {
                    type: 'string'
                }
            ]
        },
  
        {
            name: 'quantity',
            type: 'number',
            title: 'Quantity'
        }
    ]
}
