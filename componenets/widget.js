import MediEditorButton from './meButton'

export default function Widget () {
  function editorOpen () {
    const myEditor = window.cloudinary.mediaEditor()
    const publicId = window.document.getElementById('publicId').value || 'dog'
    // console.log(`using public id: ${publicId}`)
    myEditor.update({
      publicIds: [publicId],
      cloudName: 'dbmataac4',
      image: {
        steps: [
          'resizeAndCrop',
          'textOverlays',
          'export'
        ]
      }
    })
    myEditor.show()
    myEditor.on('export', function (data) {
      // console.log(JSON.stringify(data))
      const element = window.document.createElement('p')
      element.textContent = data.assets[0].secureUrl

      const exportDiv = window.document.getElementById('exported')
      exportDiv.appendChild(element)
    })
  }
  return (
    <>
      <MediEditorButton func={editorOpen} />
    </>
  )
}
