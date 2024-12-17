type Props = {
    logoText: string
}
  
  function Header({ logoText }: Props) {
  
    return (
      <>
        <h1>{logoText}</h1>
      </>
    )
  }
  
  export default Header