import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { Switch } from '@mui/material'
import { BsSun, BsSunrise } from 'react-icons/bs'
import { TbLocation } from 'react-icons/tb'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { Col, Row } from 'reactstrap'

export default function LeftColContent() {
  const label = { inputProps: { 'aria-label': 'Switch demo' } }

  return (
    <div>
      <div style={{ marginTop: 30, marginLeft: 15, marginRight: 15 }}>
        <div
          className="lll"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <button
              className="app_btn"
              onClick={() => {
                alert('You clicked me')
              }}
            >
              <AiOutlinePlus />
            </button>
          </div>
          <div>
            <div className="first"></div>
            <div className="second"></div>
            <div className="third"></div>
          </div>
          <div>
            <span className="text-white">°C</span>
            <Switch {...label} size="small" />
            <span className="text-white">°F</span>
          </div>
        </div>
        <div className="mt-5 text-white">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <p>
              <TbLocation /> New York, USA
            </p>
            <p>
              <BsSunrise /> 07:19
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <p style={{ fontSize: 12 }}>Today 28 Sept</p>
            <p>
              <BsSunrise /> 19:32
            </p>
          </div>
        </div>
        <div className="mt-4">
          <Row>
            <Col md={2}>
              <MdKeyboardArrowLeft size="2rem" className="text-white mt-4" />
            </Col>
            <Col md={8}>
              <p className="temp m-0 text-center">27°</p>
              <p className="m-0 text-white" style={{ fontSize: 20 }}>
                <BsSun /> Sunny
              </p>
            </Col>
            <Col md={2}>
              <MdKeyboardArrowRight size="2rem" className="text-white mt-4" />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}
