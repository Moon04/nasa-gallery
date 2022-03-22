import React, { useState, useEffect } from "react";

import { Header, Loader, MainContent } from "./components/layout";
import ImagesList from "./components/imagesList";

import { getNASAPictures } from "./NasaAPI";
import { getStartDate } from "./utils";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [dateRange, updateDateRange] = useState("3");
  const [pictures, updatePictures] = useState(null);
  const [isLoading, updateIsLoading] = useState(false);

  const handleRangeChange = ({ target }) => {
    if (dateRange !== target.value) {
      updateDateRange(target.value);
      updateIsLoading(true);

      const startDate = getStartDate(target.value);
      const endDate = new Date();

      getNASAPictures(startDate, endDate).then((res) => {
        updatePictures(res);
        updateIsLoading(false);
      });
    }
  };

  useEffect(() => {
    const startDate = getStartDate("3");
    const endDate = new Date();

    getNASAPictures(startDate, endDate).then((res) => {
      updatePictures(res);
    });
  }, []);

  return (
    <div className="App">
      <Header dateRange={dateRange} onRangeChange={handleRangeChange} />
      <MainContent>
        {pictures && !isLoading ? <ImagesList images={pictures} /> : <Loader />}
      </MainContent>
    </div>
  );
}

export default App;
