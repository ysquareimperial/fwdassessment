import { Col, Row } from 'reactstrap'
import './App.css'
import{AiOutlinePlus} from 'react-icons/ai'
import { Header } from './Header'
import Details from './Details'
function App() {
  return (
    <div className="App">
      <div className="main_body">
        <Row className="m-0">
          <Col md={1}></Col>
          <Col md={10} className="second_body" style={{ backgroundColor: '' }}>
            <Row>
              <Col md={3} className="left_col p-5">
                <div style={{display:'flex', justifyContent:'space-between'}}>
                  <div>
                    <button className='app_btn'><AiOutlinePlus/></button>
                  </div>
                  <div>
                    <div className='first'></div>
                    <div className='second'></div>
                    <div className='third'></div>
                  </div>
                  <div>
                    <button className='app_btn'><AiOutlinePlus/></button>
                  </div>
                </div>
              </Col>
              <Col md={9} className="right_col p-5">
                <div className="right_col_header">
                  <Header />
                </div>
                <div className="chart_div"></div>
                <div className="more_details">
                  <Details/>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={1}></Col>
        </Row>
      </div>
    </div>
  )
}

export default App
