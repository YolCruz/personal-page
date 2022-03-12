import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  Label,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const sampleData = [
  {
    date: "2019-12-12",
    open: 1.1057,
    close: 1.1154,
    low: 1.1052,
  },
  {
    date: "2019-12-08",
    open: 1.1021,
    high: 1.1116,
    low: 1.1001,
    close: 1.1058,
  },
  {
    date: "2019-12-01",
    open: 1.1022,
    high: 1.1032,
    low: 1.098,
    close: 1.1021,
  },
  {
    date: "2019-11-24",
    open: 1.1052,
    high: 1.1097,
    low: 1.1012,
    close: 1.1022,
  },
];

export default function Graph() {
  return (
    <ResponsiveContainer width="95%" height="40%">
      <LineChart data={sampleData} margin={{ left: 0, right: 0, bottom: 20 }}>
        <Line type="monotone" dataKey="open" stroke="#8884d8" />
        <CartesianGrid stroke="#a1a1a1" strokeDasharray="5" />
        <XAxis dataKey="date">
          <Label value="Currency Exchange" position="bottom" />
        </XAxis>
        <YAxis domain={["auto", "auto"]} padding={{ bottom: 10 }} />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
}
