export default function MediEditorButton ({ func }) {
  return (
    <>
      <input
        type='button'
        name='Launch'
        value='Launch'
        onClick={func}
      />
    </>
  )
}
