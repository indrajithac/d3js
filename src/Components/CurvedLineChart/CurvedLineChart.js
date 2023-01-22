import React, { useEffect, useRef } from "react";
import {
  line,
  select,
  curveCardinal,
  axisBottom,
  axisRight,
  scaleLinear,
} from "d3";
import "./CurvedLineChart.css";

function CurvedLineChart({ data }) {
  const curvedLineRef = useRef();

  useEffect(() => {
    const svg = select(curvedLineRef.current);
    const xScale = scaleLinear()
      .domain([0, data.length - 1])
      .range([0, 300]);
    const yScale = scaleLinear().domain([0, 75]).range([150, 0]);

    const xAxis = axisBottom(xScale)
      .ticks(data.length)
      .tickFormat((index) => index + 1);
    svg.select(".x-axis").style("transform", "translateY(150px").call(xAxis);

    const yAxis = axisRight(yScale);
    svg.select(".y-axis").style("transform", "translateX(300px)").call(yAxis);

    const myLine = line()
      .x((value, index) => xScale(index))
      .y(yScale)
      .curve(curveCardinal);
    svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("class", "line")
      .attr("d", myLine)
      .attr("fill", "none")
      .attr("stroke", "black");
  }, [data]);

  return (
    <div className="curvedLine">
      <svg ref={curvedLineRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </div>
  );
}

export default CurvedLineChart;
