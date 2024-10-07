import './App.css'
import { Table } from './components/Table/Table'
import { Slider } from './components/Slider/Slider'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <div className="content">
      <Header />
      <main className="main">
        <div className='container'>
          <Slider />
        </div>
        <div className="container">
          <Table />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App
