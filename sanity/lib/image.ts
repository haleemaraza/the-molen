import createImageUrlBuilder from '@sanity/image-url'

import { dataset, projectId } from '../env'
import { Image_2 } from '@/components/utils/types'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source: { _ref: string; _type: string; }) => {
  return imageBuilder?.image(source._ref).auto('format').fit('max')
}