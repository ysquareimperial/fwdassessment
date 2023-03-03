import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import {MdKeyboardArrowDown, MdKeyboardArrowRight} from 'react-icons/md'
const data = [
  {
    name: '23%',
    uv: 5,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '29%',
    uv: 5,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '58%',
    uv: 7,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '75%',
    uv: 8,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '33%',
    uv: 5,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '20%',
    uv: 4,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '73%',
    uv: 8,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '49%',
    uv: 20,
    pv: 4300,
    amt: 2100,
  },
]

export default function Chart() {
  return (
    <div className="details_card p-3 mt-4 mb-5 text-dark" style={{}}>
      <div className="chart_head">
        <div>
          <p style={{ marginLeft: 10 }}>Upcoming hours</p>
        </div>
        <div>
          <button onClick={()=>{alert('You clicked me')}} className="d_btn_1">
            Rain Precipitation
            <MdKeyboardArrowDown />
          </button>
          <button onClick={()=>{alert('You clicked me')}} className="d_btn">
            Next days
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>
      <AreaChart
        width={750}
        height={250}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="" dataKey="uv" stroke="#5793D8" fill="#5793D8" />
      </AreaChart>
    </div>
  )
}
