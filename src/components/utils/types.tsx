export interface Image_2 {
    map: any
    asset: {
      _ref: string,
      _type: string,
    },
    _type: string,
    alt: string,
    _key: string
  }

export interface singleProductTypeDescription {
    markDefs: any[],
    children: any[],
    _type: string
    style: string
    _key: string
}

interface singleProductTypeSlug{
    current: string,
    _type: string
}

export interface singleProductType {
    producttype: string,
    image: Image_2,
    name: string,
    quantity: number,
    price: number,
    slug: singleProductTypeSlug,
    size: string[],
    description: singleProductTypeDescription
};

export interface allProductFetherFromSanityType {
    query: string,
    result: Array<singleProductType>
};


