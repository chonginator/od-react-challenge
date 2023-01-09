import { useState, useEffect } from "react";
import { Tabs, Tab } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";

const Index = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState("0");
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);

  const handleTabChange = (_, tabIndex) => {
    setCurrentTabIndex(tabIndex);
  };
  return (
    <>
      <h1>Hello, World!</h1>
      <Tabs value={currentTabIndex} onChange={handleTabChange}>
        <Tab value="0" label="Videos" />
        <Tab value="1" label="Photos" />
      </Tabs>

      <TabContext value={currentTabIndex}>
        <TabPanel value="0">Panel 1</TabPanel>
        <TabPanel value="1">Panel 2</TabPanel>
      </TabContext>
    </>
  );
};

export default Index;
