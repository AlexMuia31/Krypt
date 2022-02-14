import { Navbar, Welcome, Services, Footer, Transactions } from './components'

function App() {

  return (
    <div className="App">
      <div className='min-h-screen'>
        <div className='gradient-bg-welcome'>
          <Navbar />
          <Welcome />
        </div>
        <div>
          <Services />
          <Transactions />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
