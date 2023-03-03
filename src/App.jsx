import { Col, Row } from 'reactstrap'
import './App.css'
import { AiOutlinePlus } from 'react-icons/ai'
import { Header } from './Header'
import Details from './Details'
import { Switch } from '@mui/material'
function App() {
  const label = { inputProps: { 'aria-label': 'Switch demo' } }
  return (
    <div className="App">
      <div className="main_body">
        <Row className="m-0">
          <Col md={1}></Col>
          <Col md={10} className="second_body" style={{ backgroundColor: '' }}>
            <Row>
              <Col md={3} className="left_col">
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: 30,
                    marginLeft: 15,
                    marginRight: 15,
                  }}
                >
                  <div>
                    <button className="app_btn">
                      <AiOutlinePlus />
                    </button>
                  </div>
                  <div>
                    <div className="first"></div>
                    <div className="second"></div>
                    <div className="third"></div>
                  </div>
                  <div>
                    <span className="text-white">
                      <sup>o</sup>C
                    </span>
                    <Switch {...label} size="small" />
                    <span className="text-white">
                      <sup>o</sup>F
                    </span>
                  </div>
                </div>
              </Col>
              <Col md={9} className="right_col">
                <div style={{ marginTop: 30, marginLeft: 15, marginRight: 15 }}>
                  <div className="right_col_header">
                    <Header />
                  </div>
                  <div className="chart_div"></div>
                  <div className="more_details">
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
