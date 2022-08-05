// import Widget from './widget'
import dynamic from 'next/dynamic'

const Widget = dynamic(() => import('./widget'), { ssr: false })

export default function Editor () {
  return (
    <>
      <h2 className='text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-4 mt-8'>Choose an image</h2>
      <label>Enter publicid:</label>
      <input type='text' name='publicId' id='publicId' defaultValue='dog' /> <br />
      <Widget />
      <div id='exported' />
    </>
  )
}
