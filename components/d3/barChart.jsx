import * as d3 from "d3";
import useLayoutEffect from "@/hooks/useLayoutEffect";

export default function BarChart() {
	const id = "bar-chart";

	async function drawChart() {
		const ROOT_ELEM = d3.select(`#${id}`);
		// 0. Delete All Chids inside of root

		ROOT_ELEM.selectAll("*").remove();
		const data = await d3.tsv(
			"https://raw.githubusercontent.com/ttimbers/palmerpenguins/aef2d7c48466b88dcfe0832a67b0a270607f1737/inst/extdata/penguins.tsv",
		);

		const minSize = d3.min([window.innerWidth * 0.7, window.innerHeight * 0.7]);

		let dimension = {
			width: minSize,
			height: minSize,
			margin: {
				top: 30,
				right: 30,
				bottom: 30,
				left: 30,
			},
		};

		const { width, height, margin } = dimension;

		dimension.boundedWidth = width - margin.left - margin.right;
		dimension.boundedHeight = height - margin.top - margin.bottom;

		// 3. draw canvas
		const wrapper = ROOT_ELEM.append("svg")
			.attr("width", width)
			.attr("height", height);

		const bounds = wrapper
			.append("g")
			.style("transform", `translate(${margin.left}px, ${margin.top}px)`);

		const attrName = "bill_length_mm";
		const xAccessor = (d) => parseFloat(d[attrName], 10);

		const xScale = d3
			.scaleLinear()
			.domain([0, d3.max(data, xAccessor)])
			.range([0, dimension.boundedWidth]);

		const binGenerator = d3.bin().domain(xScale.domain()).value(xAccessor);

		const bins = binGenerator(data);

		console.log({ bins });

		const yScale = d3
			.scaleLinear()
			.domain([0, Math.max(...bins.map((d) => d.length))])
			.range([0, dimension.boundedHeight]);

		const binGroup = bounds.append("g");
		const binGroups = binGroup.selectAll("g").data(bins).join("g");

		binGroups
			.append("rect")
			.attr("x", (d) => xScale(d.x0))
			.attr("y", (d) => dimension.boundedHeight - yScale(d.length))
			.attr("width", (d) => xScale(d.x1 - d.x0) - 1)
			.attr("height", (d) => yScale(d.length))
			.attr("fill", "cornflowerblue");

		const xAxisGenerator = d3.axisBottom(xScale);

		const xAxis = bounds
			.append("g")
			.call(xAxisGenerator)
			.style("transform", `translateY(${dimension.boundedHeight}px)`);

		const texts = binGroups
			.append("text")
			.attr("x", (d) => xScale(d.x0) + xScale(d.x1 - d.x0) / 2)
			.attr("y", (d) => dimension.boundedHeight - yScale(d.length))
			.attr("fill", "black")
			.style("text-anchor", "middle")
			.html((d) => d.length);

		const mean = d3.mean(data, xAccessor);

		const meanGroup = bounds.append("g");
		const meanLine = meanGroup
			.append("line")
			.attr("x1", xScale(mean))
			.attr("x2", xScale(mean))
			.attr("y1", -10)
			.attr("y2", dimension.boundedHeight)
			.attr("stroke", "maroon")
			.attr("stroke-dasharray", "2px 4px");
		const meanText = meanGroup
			.append("text")
			.attr("x", xScale(mean))
			.attr("y", -20)
			.attr("fill", "maroon")
			.style("text-anchor", "middle")
			.html("mean");
	}

	useLayoutEffect(() => {
		drawChart();
	}, []);

	return <div id={id} style={{ width: "100%", height: "700px" }} />;
}
