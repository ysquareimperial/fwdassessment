import { Col, Row } from 'reactstrap'
import './App.css'
import { Header } from './Header'
import Details from './Details'
import Chart from './Chart'
import LeftColContent from './LeftColContent'
function App() {
  return (
    <div className="App">
      <div className="main_body">
        <Row className="m-0">
          <Col md={1}></Col>
          <Col md={10} className="second_body" style={{ backgroundColor: '' }}>
            <Row>
              <Col md={3} className="left_col">
                <LeftColContent />
                <div className="img_div"></div>
              </Col>
              <Col md={9} className="right_col">
                <div style={{ marginTop: 30, marginLeft: 15, marginRight: 15 }}>
                  <div className="right_col_header">
                    <Header />
                  </div>
                  <div className="chart_div"></div>
                  <div className="more_details mb-4">
                    <Chart />
                    <Details />
                  </div>
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
