type Props = {
    firstname: string, 
    lastname: string, 
    age: number, 
    isStudent: boolean
} 
  
function Info({ firstname, lastname, age, isStudent }: Props) {
  
    return (
      <div>
        <p>Name: {firstname} {lastname}, Age: {age}, Is Student: {isStudent? "Yes" : "No"}</p>
      </div>
    )
}
  
export default Info