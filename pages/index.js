import { AdvancedImage, placeholder, responsive } from '@cloudinary/react'
import { CloudinaryImage, Delivery } from '@cloudinary/url-gen'

export default function Home () {
  const img = new CloudinaryImage('sample', { cloudName: 'demo' }, { analytics: false })
  img.quality('auto').format('auto')// .delivery(Delivery.dpr('auto'))
  return (
    <div>
      <div style={{ width: '800px' }}>
        <AdvancedImage style={{ maxWidth: '100%' }} cldImg={img} plugins={[responsive(), placeholder()]} />
      </div>
    </div>
  )
}
