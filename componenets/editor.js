// import Widget from './widget'
import dynamic from 'next/dynamic'

const Widget = dynamic(() => import('./widget'), { ssr: false })

export default function Editor () {
  return (
    <>
      <hr />
      <h2>Choose an image</h2>
      <label for='publicId'>Enter publicId:
        <input type='text' name='publicId' id='publicId' placeholder='dog' required />
      </label><br />
      <Widget />
      <div id='exported' />
    </>
  )
}
