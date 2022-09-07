const labels = [
  "",
  "February",
  "March",
  "April",
  "May",
  "June",
  "June",
  "June",
  "June",
  "June",
  "June",
  "June",
];

const data = {
  labels: labels,
  datasets: [
    {
      backgroundColor: "#147AD6",
      borderColor: "#147AD6",
      data: [500, 510, 480, 120, 500, 510, 480, 150, 500, 510, 480, 100, 500],
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {
    responsive: true,
    scales: {
      x: {
        display: false,
        title: {
          display: true,
        },
      },
      y: {
        display: true,
      },
    },
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    hover: {
      mode: "index",
      intersec: false,
    },
    scales: {
      x: {
        grid: {
          color: "white",
        },
        display: true,
      },
      y: {
        grid: {
          drawBorder: false,
        },
        min: 0,
        max: 750,
        ticks: {
          // forces step size to be 50 units
          stepSize: 250,
        },
      },
    },
  },
};

const myChart = new Chart(document.getElementById("myChart"), config);
