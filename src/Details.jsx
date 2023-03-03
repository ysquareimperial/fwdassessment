import React from 'react'
import { Col, Row } from 'reactstrap'
import { IoMdWater } from 'react-icons/io'
import {BsCloudRain, BsWind} from 'react-icons/bs'
import {TbCloudRain} from 'react-icons/tb'
import{BsSun} from 'react-icons/bs'
import {CiTempHigh} from 'react-icons/ci'
export default function Details() {
  return (
    <div>
      <p>
        <b>More details of today's weather</b>
      </p>
      <Row>
        <Col md={4}>
          <div className="details_card p-4">
            <Row>
              <Col md={9}>
                <span className="details_card_title">Humidity</span>
              </Col>
              <Col md={3}>
                <IoMdWater className="details_card_icon" />
              </Col>
            </Row>
            <p className="detail_p">
              82% <span>bad</span>
            </p>
          </div>
        </Col>
        <Col md={4}>
          <div className="details_card p-4">
            <Row>
              <Col md={9}>
                <span className="details_card_title">Wind</span>
              </Col>
              <Col md={3}>
                <BsWind className="details_card_icon" />
              </Col>
            </Row>
            <p className="detail_p">8 km/h</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="details_card p-4">
            <Row>
              <Col md={9}>
                <span className="details_card_title">Precipitation</span>
              </Col>
              <Col md={3}>
                <TbCloudRain className="details_card_icon" />
              </Col>
            </Row>
            <p className="detail_p">1.4 cm</p>
          </div>
        </Col>
      </Row>
    
      <Row className='mt-4'>
        <Col md={4}>
          <div className="details_card p-4">
            <Row>
              <Col md={9}>
                <span className="details_card_title">UV Index</span>
              </Col>
              <Col md={3}>
                <BsSun className="details_card_icon" />
              </Col>
            </Row>
            <p className="detail_p">
              4 <span>medium</span>
            </p>
          </div>
        </Col>
        <Col md={4}>
          <div className="details_card p-4">
            <Row>
              <Col md={9}>
                <span className="details_card_title">Feels like</span>
              </Col>
              <Col md={3}>
                <CiTempHigh className="details_card_icon" />
              </Col>
            </Row>
            <p className="detail_p">
              30<sup>o</sup>
            </p>
          </div>
        </Col>
        <Col md={4}>
          <div className="details_card p-4">
            <Row>
              <Col md={9}>
                <span className="details_card_title">Chance of rain</span>
              </Col>
              <Col md={3}>
                <BsCloudRain className="details_card_icon" />
              </Col>
            </Row>
            <p className="detail_p">42%</p>
          </div>
        </Col>
      </Row>
    </div>
  )
}
