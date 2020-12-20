import React from "react";
import { useTheme } from "@material-ui/core/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from "recharts";
import Title from "./Title";

// Generate Sales Data
function createData(month, amount) {
  return { month, amount };
}

const data = [
  createData("Jan", 0),
  createData("Feb", 300),
  createData("Mar", 600),
  createData("Apr", 800),
  createData("May", 1500),
  createData("Jun", 2000),
  createData("Jul", 2400),
  createData("Aug", 2400),
  createData("Sep", 1500),
  createData("Oct", 2500),
  createData("Nov", 2100),
  createData("Dec", 2000),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      {/* <Title>Today</Title> */}
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="month" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: "middle", fill: theme.palette.text.primary }}
            >
              Commission (₹)
            </Label>
          </YAxis>
          <Line
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
