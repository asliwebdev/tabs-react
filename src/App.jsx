import { useState } from "react";
import { useEffect } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchData = async() => {
    try {
      const response = await fetch(url);
      const newJobs = await response.json()
      setJobs(newJobs);
    } catch (error) {
      console.log(error);
    }
   setIsLoading(false);
  }

useEffect(() => {
  fetchData();
}, [])

if(isLoading) {
  return <section className="jobs-center">
    <div className="loading"></div>
  </section>
}

  return <section className="jobs-center">
    {/* button container */}
    <BtnContainer jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem}/>
    {/* job-info */}
    <JobInfo jobs={jobs} currentItem = {currentItem}/>
  </section>;
};
export default App;
