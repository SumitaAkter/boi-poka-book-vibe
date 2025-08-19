import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  CartesianGrid,
  Cell
} from "recharts";

const PagesToRead = () => {
  // Loader থেকে data আনছি
  const allBooks = useLoaderData() || [];

  // Chart এর data বানাচ্ছি
  const chartData = allBooks.map((book) => ({
    bookName: book.bookName || "Unknown",
    pagesRead: book.totalPages || 0,
    readers: book.readers || 1,
    year: book.yearOfPublishing || "N/A",
  }));

  const colors = [
    "#84cc16", "#facc15", "#3b82f6", "#f87171",
    "#a78bfa", "#f472b6", "#34d399", "#fb923c"
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">
        📊 Pages Distribution Histogram
      </h2>

      <div className="overflow-x-auto">
        <div style={{ minWidth: `${chartData.length * 80}px`, height: 400 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 70, right: 20, left: 20, bottom: 60 }}
              barCategoryGap="30%"
            >
              <CartesianGrid strokeDasharray="3 3" />

              {/* Book Name X Axis */}
              <XAxis
                dataKey="bookName"
                tick={({ x, y, payload }) => {
                  const name = payload.value;
                  let lines = [];

                  if (name.length > 12) {
                    const mid = Math.floor(name.length / 2);
                    lines = [name.slice(0, mid), name.slice(mid)];
                  } else {
                    lines = [name];
                  }

                  return lines.map((line, index) => (
                    <text
                      key={index}
                      x={x}
                      y={y + index * 14 + 5}
                      textAnchor="middle"
                      fill="#fff"
                      fontSize={12}
                    >
                      {line}
                    </text>
                  ));
                }}
                interval={0}
              />

              {/* Y Axis */}
              <YAxis
                label={{ value: "Pages", angle: -90, position: "insideLeft" }}
                tick={{ fontSize: 12, fill: "#fff" }}
              />

              {/* Tooltip */}
              <Tooltip
                contentStyle={{ backgroundColor: "#333", color: "#fff" }}
              />

              {/* Bars */}
              <Bar
                dataKey="pagesRead"
                barSize={30}
                radius={[200, 200, 0, 0]}
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
                <LabelList
                  dataKey="year"
                  position="top"
                  style={{ fontWeight: "semibold", fill: "#fff" }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default PagesToRead;
