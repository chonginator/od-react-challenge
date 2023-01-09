import { useState } from "react";
import { Tabs, Tab } from "@mui/material";

const App = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleTabChange = (_, tabIndex) => {
    setCurrentTabIndex(tabIndex);
  };
  return (
    <>
      <h1>Hello, World!</h1>
      <Tabs value={currentTabIndex} onChange={handleTabChange}>
        <Tab label="Videos" />
        <Tab label="Photos" />
      </Tabs>
    </>
  );
};

export default App;
