import React, { useEffect, useRef } from "react";
import { select, axisBottom, axisRight, scaleLinear, scaleBand } from "d3";
import "./BarGraph.css";

function BarGraph({ data }) {
  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);
    const xScale = scaleBand()
      .domain(data.map((value, index) => index))
      .range([0, 300])
      .padding(0.5);
    const yScale = scaleLinear().domain([0, 100]).range([150, 0]);

    const colourScale = scaleLinear()
      .domain([50, 70, 80])
      .range(["green", "orange", "red"])
      .clamp(true);

    const xAxis = axisBottom(xScale).ticks(data.length);

    svg.select(".x-axis").style("transform", "translateY(150px").call(xAxis);

    const yAxis = axisRight(yScale);
    svg.select(".y-axis").style("transform", "translateX(300px)").call(yAxis);

    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .style("transform", "scale(1,-1)")
      .attr("x", (value, index) => xScale(index))
      .attr("y", -150)
      .attr("width", xScale.bandwidth())
      .transition()
      .attr("fill", colourScale)
      .attr("height", (value) => 150 - yScale(value));
  }, [data]);

  return (
    <div className="barGraph">
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </div>
  );
}

export default BarGraph;
