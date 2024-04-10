import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5locales_ru_RU from "@amcharts/amcharts5/locales/ru_RU";

const ChartModule = {
  state: () => ({
    data: [
      { date: "2020-07-01", visits: 213 },
      { date: "2020-07-02", visits: 249 },
      { date: "2020-07-03", visits: 179 },
      { date: "2020-07-04", visits: 170 },
      { date: "2020-07-05", visits: 184 },
      { date: "2020-07-06", visits: 202 },
      { date: "2020-07-07", visits: 198 },
      { date: "2020-07-08", visits: 168 },
      { date: "2020-07-09", visits: 176 },
      { date: "2020-07-10", visits: 171 },
      { date: "2020-07-11", visits: 190 },
      { date: "2020-07-12", visits: 154 },
      { date: "2020-07-13", visits: 246 },
      { date: "2020-07-14", visits: 250 },
      { date: "2020-07-15", visits: 227 },
      { date: "2020-07-16", visits: 140 },
      { date: "2020-07-17", visits: 170 },
      { date: "2020-07-18", visits: 125 },
      { date: "2020-07-19", visits: 106 },
      { date: "2020-07-20", visits: 207 },
      { date: "2020-07-21", visits: 222 },
      { date: "2020-07-22", visits: 198 },
      { date: "2020-07-23", visits: 204 },
      { date: "2020-07-24", visits: 213 },
      { date: "2020-07-25", visits: 145 },
      { date: "2020-07-26", visits: 166 },
      { date: "2020-07-27", visits: 163 },
      { date: "2020-07-28", visits: 135 },
      { date: "2020-07-29", visits: 45 },
    ],
  }),
  actions: {
    createChar({ state }, coreElem) {
      //creating core elem
      let root = am5.Root.new(coreElem);

      //localization
      root.locale = am5locales_ru_RU;

      //create chart
      let chart = root.container.children.push(am5xy.XYChart.new(root, {}));

      //create axes
      let xAxis = chart.xAxes.push(
        am5xy.DateAxis.new(root, {
          groupData: false,
          baseInterval: {
            timeUnit: "day",
            count: 1,
          },
          gridIntervals: [{ timeUnit: "week", count: 1 }],
          renderer: am5xy.AxisRendererX.new(root, {
            minorGridEnabled: true,
            minGridDistance: 50,
          }),
          tooltip: am5.Tooltip.new(root, {}),
        })
      );

      let yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          min: 0,
          renderer: am5xy.AxisRendererY.new(root, {}),
        })
      );

      //creating series
      let series = chart.series.push(
        am5xy.LineSeries.new(root, {
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "visits",
          valueXField: "date",
          stroke: am5.color("#ff4402"),
          fill: am5.color("#ff4402"),
          tooltip: am5.Tooltip.new(root, {
            pointerOrientation: "vertical",
            labelText: "{valueY}",
          }),
        })
      );

      //set date format
      series.data.processor = am5.DataProcessor.new(root, {
        dateFormat: "yyyy-MM-dd",
        dateFields: ["date"],
      });

      //set data
      series.data.setAll(state.data);

      //set series fill
      series.fills.template.setAll({
        fillOpacity: 0.2,
        visible: true,
      });

      //create bullets
      series.bullets.push(function () {
        let circle = am5.Circle.new(root, {
          radius: 5,
          fill: "#ff4402",
          stroke: "#ff4402",
          strokeWidth: 2,
        });

        return am5.Bullet.new(root, {
          sprite: circle,
        });
      });

      //creare cursor
      let cursor = chart.set(
        "cursor",
        am5xy.XYCursor.new(root, {
          xAxis: xAxis,
          behavior: "none",
        })
      );
      cursor.lineY.set("visible", false);
      cursor.lineX.set("visible", false);
    },
  },
  namespaced: true,
};

export default ChartModule;
