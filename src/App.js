import axios from "axios";
import './assets/app.css';
import { useEffect, useState } from "react";
import { RefreshContainer } from "./App.styles";
import Button from "./components/atoms/Button/Button";
import SelectInput from "./components/molecules/SelectInput/SelectInput";
import { BASE_URL } from "./config/config";
import { GET_DB_DATA, GET_PHILLM_DATA, UPDATE } from "./utils/common/constants/Endpoint";
import ComponentLoading from "./components/molecules/ComponentLoading/ComponentLoading";
// NOTE: Main entry point of the application
function App() {
  /**
   * Component States
   */
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isRefresh, setIsRefresh] = useState(true);
  const [completedCount, setCompletedCount] = useState(0);
  const [completedSize, setCompletedSize] = useState(0);
  const [totalSize, setTotalSize] = useState(0);
  const [currentMachine, setCurrentMachine] = useState('');

  /**
   * End of Component States
   */

  useEffect(() => {
    setTimeout(() => {
      setIsDisabled(false);
    }, 20000);
  }, []);

  const fetchData = async (action, showLoading = true) => {
    try {
      setLoading(showLoading);
      console.log('fetching data');
      const response = await axios.get(`${BASE_URL}${action}`);
      const sorted = response.data.sort((a, b) => {
        const numA = parseInt(a.name);
        const numB = parseInt(b.name);
        if (numA < numB) {
          return -1;
        }
        if (numA > numB) {
          return 1;
        }
        return 0;
      });
      setData(sorted);
      const completedItems = sorted.filter((x) => x.status === 'complete');
      setCompletedCount(completedItems.length);
      const totalSum = sorted.reduce((a, x) => a + parseFloat(x.size), 0);
      setTotalSize(totalSum);
      const sum = completedItems.reduce((a, x) => a + parseFloat(x.size), 0);
      setCompletedSize(sum);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching data:", error);
    }
  };

  async function updateStatus(id, status, machine) {
    await axios.get(`${BASE_URL}${UPDATE}/${id}/${machine}/${status}`);
    fetchData(GET_DB_DATA, false);
  }

  useEffect(() => {
    console.log('starting app');
    setLoading(true);
    fetchData(GET_DB_DATA);
  }, []); // Empty dependency array ensures the effect runs only once

  // * START:  Download Button
  const downloadButtonAction = async (url, name, id) => {
    if (!currentMachine) {
      alert('Please select machine');
      return;
    }
    await axios.get(`${BASE_URL}${UPDATE}/${id}/${currentMachine}/downloading`);
    fetchData(GET_DB_DATA, false);
    window.open(url, "_blank");
  };
  // ! END :  Download Button

  // * START:  Refresh Button
  const refreshButtonClick = () => {
    if (!isDisabled) {  
      fetchData(GET_PHILLM_DATA);
      setIsRefresh(!isRefresh);
    }
    setIsDisabled(true);
  };
  // ! END:  Refresh Button

  return (
    <>
      <RefreshContainer>
        <p>Please click here to get updated data</p>
        <Button disabled={isDisabled} className="btn-sm" onClick={refreshButtonClick} label="Re-Scrap" />{" "}
      </RefreshContainer>
      {isDisabled && <p className="text-muted">You can fetch updates after 20 seconds</p>}
      <ComponentLoading isLoading={loading}>
        <div className="status-bar">
          <b>
            Completed count: {completedCount}/{data.length}, Completed size: {Math.floor(completedSize * 100) / 100} GB, Total size: {totalSize} GB
          </b>
          <div className="select-machine">
            Select current machine:{" "}
            <SelectInput
              class
              onChange={(e) => setCurrentMachine(e.target.value)}
              options={["server", "Algus", "asd"]}
            />
          </div>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Status</th>
              <th scope="col">Download Machine</th>
              <th scope="col">Link</th>
              <th scope="col">Size</th>
              <th scope="col">Seeder's</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr>
                <td>{item?.id}</td>
                <td>{item?.name}</td>
                <td className={item?.status}>
                  <SelectInput
                    defaultOption={"Status"}
                    value={item?.status}
                    options={["pending", "downloading", "complete"]}
                    onChange={(e) => updateStatus(item.id, e.target.value, item.machine)}
                  />
                </td>
                <td className={item?.machine}>
                  <SelectInput
                    defaultOption={"Machine"}
                    value={item?.machine}
                    options={["Algus", "server", "asd"]}
                    onChange={(e) => updateStatus(item.id, item.status, e.target.value)}
                  />
                </td>
                <td>
                  <a href={`${item?.link}`} target="_blank">
                    {item?.link}
                  </a>
                </td>
                <td>{item?.size}</td>
                <td>{item?.seeders}</td>
                <td>
                  <Button
                    className={"btn-sm"}
                    onClick={() => downloadButtonAction(item?.link, item?.name, item?.id)}
                    label="Download"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ComponentLoading>
    </>
  );
}

export default App;
