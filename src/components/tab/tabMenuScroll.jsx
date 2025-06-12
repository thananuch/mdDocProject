import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function TabMenuScroll() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    typography: {
      fontFamily: "font-promptRegu",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          flexGrow: 1,
          // bgcolor: "background.paper",
          borderRadius:'4px',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          aria-label="visible arrows tabs example"
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: 0.3 },
            },
            "& .MuiTab-root": {
              fontFamily: "PromptRegular",
              fontSize: "1rem",
            },
          }}
        >
          <Tab label="ภาพรวม" />
          <Tab label="หน่วยงาน" />
          <Tab label="สถานะโครงงาน" />
          <Tab label="ประเภทงบประมาณ" />
          <Tab label="สถานะการตรวจสอบ" />
          <Tab label="พื้นที่โครงการ" />
        </Tabs>
      </Box>
    </ThemeProvider>
  );
}
