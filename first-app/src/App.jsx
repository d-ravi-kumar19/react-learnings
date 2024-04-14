import Header from "./components/Header"
import Footer from "./components/Footer"
import Card from "./components/Card"
import Button from "./components/Button/Button"
import Student from "./components/Student"
import UserGreating from "./components/UserGreating"

function App() {

  return (
    <>
      <Header />
      <UserGreating isLoggedIn= {true} userName ="Ravi"/>

      <Card />
      <Student name="ravi" age={20} isStudent={true} />
      {/* <Student name="shiva" age={30} isStudent={false} /> */}
      {/* <Student /> */}


      <Button />

      <Footer />
    </>
  )
}

export default App
