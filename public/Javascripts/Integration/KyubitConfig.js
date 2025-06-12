$kyu.globalConfig =
{
    URL: "https://mddoc.md.go.th",
    font: "Calibri",
    fontColor: "#333333",
    fontSize: "14px",
    titleFontSize: "24px",
    chartFontColor: "#333333",
    chartFontSize: "12px",
    mainColor: "Red",
    analysisIcon: null,
    openDashboardIcon: null,
    enlargeIcon: null,
    progressIcon: null,
    hideProgress: false,
    continueAnalysis: true,
    excelExport: true
}

//
// COLOR PALLETES
//

$kyu.colorPalletes =
    [
        { ID: 0, Name: "Standard", Colors: ["#058dc7", "#aadff3", "#50b432", "#ed561b", "#ff9655", "#edef00", "#64e572", "#fd91e5", "#f10120", "#82a75a", "#08b081", "#166609", "#70b6a8", "#8003b4", "#11d496", "#efc8ce", "#46bb2b", "#5b5f94", "#c30475", "#c4094f", "#98f410", "#954058", "#26d34a", "#d001cc", "#33d65e", "#d349ed", "#e15b29", "#eaa4b0", "#804914", "#4aba40", "#aa03f1", "#4efc30", "#4d473e", "#22965e", "#167709", "#133ea5", "#4e0051", "#fdf926", "#7f332f", "#6f97d1", "#9f23f4", "#c5e76b", "#3a3fbf", "#cacdc4", "#89142c", "#5ac1de", "#a89128", "#154015", "#3b0700", "#9569b5"] },
        { ID: 1, Name: "Warm", Colors: ["#ED7D31", "#FFC000", "#70AD47", "#9E480E", "#997300", "#43682B", "#F1975A", "#FFCD33", "#8CC168", "#D26012", "#CC9A00", "#5A8A39", "#F4B183", "#FFD966", "#A9D18E", "#843C0C", "#7F6000", "#385723", "#F3AA78", "#FFD34D", "#9AC97B", "#B85410", "#B38600", "#4E7932", "#F6BE98", "#FFDF7F", "#B7D8A1"] },
        { ID: 2, Name: "Cold", Colors: ["#5B9BD5", "#A5A5A5", "#4472C4", "#255E91", "#636363", "#264478", "#84B4DF", "#B7B7B7", "#698ED0", "#327DC2", "#848484", "#335AA1", "#9DC3E6", "#C9C9C9", "#8FAADC", "#1F4E79", "#525252", "#203864", "#8CB9E2", "#C0C0C0", "#7C9CD6", "#2B6DA9", "#747474", "#2C4F8C", "#ADCDEA", "#D2D2D2", "#A2B9E2"] },
        { ID: 3, Name: "Strong", Colors: ["#70AD47", "#4472C4", "#FFC000", "#43682B", "#264478", "#997300", "#8CC168", "#698ED0", "#FFCD33", "#5A8A39", "#335AA1", "#CC9A00", "#A9D18E", "#8FAADC", "#FFD966", "#385723", "#203864", "#7F6000", "#9AC97B", "#7C9CD6", "#FFD34D", "#4E7932", "#2C4F8C", "#B38600", "#B7D8A1", "#A2B9E2", "#FFDF7F"] },
        { ID: 4, Name: "Gray", Colors: ["#5F5F5F", "#B3B3B3", "#898989", "#212121", "#DADADA", "#AAAAAA", "#7C7C7C", "#5F5F5F", "#B3B3B3", "#898989", "#212121"] },
        { ID: 5, Name: "MyPallete", Colors: ["Yellow", "#B3B3B3", "Red", "#212121", "#DADADA", "#AAAAAA", "#7C7C7C", "#5F5F5F", "#B3B3B3", "#898989", "#212121"] },
        { ID: 6, Name: "SingleColor", Colors: ["$#ED7D31"] }
    ]

// 
//  MULTILINGUAL PHRASES
//

$kyu.langauge =
    [
        { key: "_openDashboard", txt: "Open Dashboard" },
        { key: "_now", txt: "Now" },
        { key: "_cubePicker", txt: "Cube Dimension Picker" },
        { key: "_close", txt: "Close" },
        { key: "_openInExcel", txt: "Open In Excel" },
        { key: "_openAnalysis", txt: "Open Analysis" },
        { key: "__noDataDisplay", txt: "No data to display" },
        { key: "_selectChartType", txt: "Select Chart Type" },
        { key: "__columnChart", txt: "Column Chart" },
        { key: "__columnStack", txt: "Column Stack" },
        { key: "__lineChart", txt: "Line Chart" },
        { key: "__splineChart", txt: "Spline Chart" },
        { key: "__barChart", txt: "Bar Chart" },
        { key: "__heatMap", txt: "Heat Map" },
        { key: "__sunburst", txt: "Sunburst" },
        { key: "__areaChart", txt: "Area Chart" },
        { key: "__areaStackChart", txt: "Area Stack Chart" },
        { key: "__doughnutChart", txt: "Doughnut Chart" },
        { key: "__pieChart", txt: "Pie Chart" },
        { key: "__bubbleChart", txt: "Bubble Chart" },
        { key: "__table", txt: "Table Chart" },
        { key: "__list", txt: "List Chart" },
        { key: "__combo", txt: "Combo Chart" },
        { key: "__drillDown", txt: "Drill Down" },
        { key: "__drillBy", txt: "Drill By" },
        { key: "__drillthrough", txt: "Drill-through" },
        { key: "__undoAnalysisAction", txt: "Undo Analysis Action" },
        { key: "__drilltResults", txt: "Drill-through Results" },
        { key: "__resultsCount", txt: "Results Count" },
        { key: "_showEnlarged", txt: "Show Enlarged" },
        { key: "__levelAlreadyAttached", txt: "Level Already Attached!" },
        { key: "__openInExcel", txt: "Open In Excel" },
        { key: "__asc", txt: "Asc" },
        { key: "__desc", txt: "Desc" },
        { key: "__removeSorting", txt: "Remove Sorting" },
        { key: "__sorting", txt: "Sorting" },
        { key: "__removeFilter", txt: "Remove Filter" },
        { key: "__top", txt: "Top" },
        { key: "__trendLine", txt: "Trend Line" },
        { key: "__averageLine", txt: "Average Line" },
        { key: "__valLabels", txt: "Value Labels" },
        { key: "__selDimHier", txt: "Select dimension hierarchy" },
        { key: "__compare", txt: "Compare" },
        { key: "__kpi", txt: "KPI" },
        { key: "__actual", txt: "Actual" },
        { key: "__target", txt: "Target" },
        { key: "__kpivsTarget", txt: "KPI vs Target" },
        { key: "__add", txt: "Add" },
        { key: "__2measures", txt: "At least 2 measures are expected." }
    ]

