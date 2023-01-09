import Image from "next/image";
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
        <TabPanel value="0">
          <VideoPanel />
        </TabPanel>
        <TabPanel value="1">
          {/* <Image src={user1} width={1000} height={1000} alt="User 1" /> */}
        </TabPanel>
      </TabContext>
    </>
  );

  function VideoPanel() {
    const videoData = data?.videos;
    const videoHtml = videoData?.map((video, index) => {
      const { title, filename } = video;

      return (
        <Image
          key={index}
          src={`/images/${filename}`}
          width={430}
          height={200}
          alt={title}
        />
      );
    });

    return <div>{videoHtml}</div>;
  }
};

export default Index;
