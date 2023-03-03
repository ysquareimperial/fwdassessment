import React from 'react'
import { Col, Row } from 'reactstrap'
import { IoMdWater } from 'react-icons/io'
import { BsCloudRain, BsWind } from 'react-icons/bs'
import { TbCloudRain } from 'react-icons/tb'
import { BsSun } from 'react-icons/bs'
import { CiTempHigh } from 'react-icons/ci'
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress'
import { styled } from '@mui/material/styles'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#5793d8' : '#308fe8',
  },
}))

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
            <p className="detail_p m-0">
              82% <span>bad</span>
            </p>
            <Row>
              <Col md={4}>
                <span style={{ color: 'grey', fontSize: 12 }}>good</span>
                <BorderLinearProgress variant="determinate" value={100} />
              </Col>
              <Col md={4}>
                <span style={{ color: 'grey', fontSize: 12 }}>normal</span>

                <BorderLinearProgress variant="determinate" value={100} />
              </Col>
              <Col md={4}>
                <span style={{ color: 'grey', fontSize: 12 }}>bad</span>

                <BorderLinearProgress variant="determinate" value={40} />
              </Col>
            </Row>
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
            <p className="detail_p m-0">8 km/h</p>
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
            <p className="detail_p m-0">1.4 cm</p>
            <Row>
              <Col md={4}>
                <span style={{ color: 'grey', fontSize: 12 }}>good</span>
                <BorderLinearProgress variant="determinate" value={100} />
              </Col>
              <Col md={4}>
                <span style={{ color: 'grey', fontSize: 12 }}>normal</span>

                <BorderLinearProgress variant="determinate" value={100} />
              </Col>
              <Col md={4}>
                <span style={{ color: 'grey', fontSize: 12 }}>bad</span>

                <BorderLinearProgress variant="determinate" value={40} />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      <Row className="mt-4">
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
            <p className="detail_p m-0">
              4 <span>medium</span>
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <span style={{ color: 'grey', fontSize: 12 }}>0-2</span>
                <BorderLinearProgress variant="determinate" value={100} />
              </div>
              <div>
                <span style={{ color: 'grey', fontSize: 12 }}>3-5</span>
                <BorderLinearProgress variant="determinate" value={50} />
              </div>
              <div>
                <span style={{ color: 'grey', fontSize: 12 }}>6-7</span>
                <BorderLinearProgress variant="determinate" value={0} />
              </div>
              <div>
                <span style={{ color: 'grey', fontSize: 12 }}>8-10</span>
                <BorderLinearProgress variant="determinate" value={0} />
              </div>
              <div>
                <span style={{ color: 'grey', fontSize: 12 }}>11+</span>
                <BorderLinearProgress variant="determinate" value={0} />
              </div>
            </div>
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
            <p className="detail_p m-0">
              30<sup>o</sup>
            </p>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'grey', fontSize: 12 }}>
                  0<sup>o</sup>
                </span>
                <span style={{ color: 'grey', fontSize: 12 }}>
                  25<sup>o</sup>
                </span>
                <span style={{ color: 'grey', fontSize: 12 }}>
                  50<sup>o</sup>
                </span>
              </div>

              <BorderLinearProgress variant="determinate" value={70} />
            </div>
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
            <p className="detail_p m-0">42%</p>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'grey', fontSize: 12 }}>
                  0%
                </span>
                <span style={{ color: 'grey', fontSize: 12 }}>
                  25%
                </span>
                <span style={{ color: 'grey', fontSize: 12 }}>
                  50%
                </span>
                <span style={{ color: 'grey', fontSize: 12 }}>
                  75%
                </span> <span style={{ color: 'grey', fontSize: 12 }}>
                  100%
                </span>
              </div>

              <BorderLinearProgress variant="determinate" value={40} />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
