
type Props = {
  message: string
}

function Welcome({ message }: Props) {

  return (
    <>
      <p>{message}</p>
    </>
  )
}

export default Welcome