import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { HomeArea } from "./styled";

const Home = () => {
  const initialCrypto = () => {
    const crypto = localStorage.getItem("lsCrypto") || "RLT";
    return crypto;
  };
  const initialFiatType = () => {
    const fiatType = localStorage.getItem("lsFiatType") || "USD";
    return fiatType;
  };
  const initialNetworkPower = () => {
    const networkPower = Number(localStorage.getItem("lsNetworkPower")) || 0;
    return networkPower;
  };
  const initialSelectNetworkPower = () => {
    const selectNetworkPower =
      Number(localStorage.getItem("lsSelectNetworkPower")) || 1000000000;
    return selectNetworkPower;
  };
  const initialGoalPower = () => {
    const goalPower = Number(localStorage.getItem("lsGoalPower")) || 0;
    return goalPower;
  };
  const initialSelectGoalPower = () => {
    const selectGoalPower =
      Number(localStorage.getItem("lsSelectGoalPower")) || 1000;
    return selectGoalPower;
  };
  const initialBlockReward = () => {
    const selectBlockReward =
      Number(localStorage.getItem("lsSelectBlockReward")) || 20;
    return selectBlockReward;
  };

  const [fiat, setFiat] = useState(0);
  const [blockReward, setBlockReward] = useState(0);
  const [crypto, setCrypto] = useState(initialCrypto);
  const [fiatType, setFiatType] = useState(initialFiatType);
  const [networkPower, setNetworkPower] = useState(initialNetworkPower);
  const [selectNetworkPower, setSelectNetworkPower] = useState(
    initialSelectNetworkPower
  );
  const [goalPower, setGoalPower] = useState(initialGoalPower);
  const [selectGoalPower, setSelectGoalPower] = useState(
    initialSelectGoalPower
  );
  const [selectBlockReward, setSelectBlockReward] =
    useState(initialBlockReward);

  const handleLocalStorage = useCallback(() => {
    localStorage.setItem("lsCrypto", crypto);
    localStorage.setItem("lsFiatType", fiatType);
    localStorage.setItem("lsNetworkPower", networkPower.toString());
    localStorage.setItem("lsSelectNetworkPower", selectNetworkPower.toString());
    localStorage.setItem("lsGoalPower", goalPower.toString());
    localStorage.setItem("lsSelectGoalPower", selectGoalPower.toString());
    localStorage.setItem("lsSelectBlockReward", selectBlockReward.toString());
  }, [
    crypto,
    fiatType,
    goalPower,
    networkPower,
    selectBlockReward,
    selectGoalPower,
    selectNetworkPower,
  ]);

  function onChangeBlockReward(e: ChangeEvent<HTMLSelectElement>) {
    setSelectBlockReward(Number(e.target.value));
    setCrypto(e.target.options[e.target.selectedIndex].text.toUpperCase());
  }

  useEffect(() => {
    let reward =
      ((goalPower * selectGoalPower) / (networkPower * selectNetworkPower)) *
      selectBlockReward;
    if (isNaN(reward)) reward = 0;
    setBlockReward(reward);
    handleLocalStorage();
  }, [
    goalPower,
    handleLocalStorage,
    networkPower,
    selectBlockReward,
    selectGoalPower,
    selectNetworkPower,
  ]);

  var requestURL;
  if (crypto === "RLT" && fiatType === "BRL") {
    requestURL = `https://api.binance.com/api/v3/trades?symbol=BUSDBRL`;
  }
  else if (crypto === "RLT" && fiatType === "USDT") {
    requestURL = `https://api.binance.com/api/v3/trades?symbol=BUSDUSDT`;
  }
  else if (crypto === "RLT" && fiatType === "EUR") {
    requestURL = `https://api.binance.com/api/v3/trades?symbol=EURUSDT`;
  }
  else if (crypto === "SAT (BTC)") {
    requestURL = `https://api.binance.com/api/v3/trades?symbol=BTC${fiatType}`;
  }
  else {
    requestURL = `https://api.binance.com/api/v3/trades?symbol=${crypto}${fiatType}`;
  }
  var request = new XMLHttpRequest();
  request.open("GET", requestURL);
  request.responseType = "json";
  request.send();
  request.onload = function () {
    var response = request.response[0].price;
    if (crypto === "SAT (BTC)") {
      setFiat((response * blockReward) / 100000000);
    }
    else if (crypto === "RLT" && fiatType === "EUR") {
      setFiat((1 / response) * blockReward);
    }
    else {
      setFiat(response * blockReward);
    }
  };

  return (
    <HomeArea>
      <h2 className="intro">
        <span>
          Calculate how much your <strong>power</strong> can mine and convert it
          to your <strong>currency</strong>!
        </span>
      </h2>
      <div className="main-content">
        <div className="input-area">
          <div>
            <div className="input">
              <span>
                Enter <strong>Your</strong> Desired Goal Power
              </span>
              <div>
                <input
                  type="number"
                  defaultValue={goalPower}
                  onChange={(e) => setGoalPower(Number(e.target.value))}
                />
                <select
                  defaultValue={selectGoalPower}
                  onChange={(e) => setSelectGoalPower(Number(e.target.value))}
                >
                  <option value="1">GH/s</option>
                  <option value="1000">TH/s</option>
                  <option value="1000000">PH/s</option>
                  <option value="1000000000">EH/s</option>
                </select>
              </div>
            </div>
            <div className="input">
              <span>
                Enter <strong>Network Power</strong> For Desired Coin
              </span>
              <div>
                <input
                  type="number"
                  defaultValue={networkPower}
                  onChange={(e) => setNetworkPower(Number(e.target.value))}
                />
                <select
                  defaultValue={selectNetworkPower}
                  onChange={(e) =>
                    setSelectNetworkPower(Number(e.target.value))
                  }
                >
                  <option value="1">GH/s</option>
                  <option value="1000">TH/s</option>
                  <option value="1000000">PH/s</option>
                  <option value="1000000000">EH/s</option>
                </select>
              </div>
            </div>
            <div className="input">
              <span>
                Enter <strong>Block Reward</strong> For Desired Coin
              </span>
              <div>
                <input
                  type="number"
                  value={selectBlockReward}
                  onChange={(e) => setSelectBlockReward(Number(e.target.value))}
                />
                <select
                  id="block-reward"
                  defaultValue={selectBlockReward}
                  onChange={(e) => onChangeBlockReward(e)}
                >
                  <option value="20">RLT</option>
                  <option value="30000">SAT (BTC)</option>
                  <option value="0.005">ETH</option>
                  <option value="0.012">BNB</option>
                  <option value="3">MATIC</option>
                  <option value="20">DOGE</option>
                  <option value="0.05">SOL</option>
                </select>
              </div>
            </div>
            <div className="input">
              <span>
                Choose <strong>Your Currency</strong> For Convertion
              </span>
              <div>
                <select
                  className="currency"
                  value={fiatType}
                  onChange={(e) => setFiatType(e.target.value)}
                >
                  <option value="BRL">BRL</option>
                  <option value="EUR">EUR</option>
                  <option value="USDT">USD</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="output-area">
          <div>
            <span>Expected Reward</span>
            <table>
              <thead>
                <tr>
                  <td className="title"></td>
                  <td className="top-table">{crypto.toUpperCase()}</td>
                  <td></td>
                  <td className="top-table">{fiatType === "USDT" ? "USD" : fiatType.toUpperCase()}</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Block Reward</td>
                  <td>{blockReward === 0 ? "-" : blockReward.toFixed(8)}</td>
                  <td></td>
                  <td>{fiat === 0 ? "-" : fiat.toFixed(2)}</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>Daily Reward</td>
                  <td>
                    {blockReward === 0 ? "-" : (blockReward * 144).toFixed(7)}
                  </td>
                  <td></td>
                  <td>{fiat === 0 ? "-" : (fiat * 144).toFixed(2)}</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>Weekly Reward</td>
                  <td>
                    {blockReward === 0 ? "-" : (blockReward * 1008).toFixed(6)}
                  </td>
                  <td></td>
                  <td>{fiat === 0 ? "-" : (fiat * 1008).toFixed(2)}</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>Monthly Reward</td>
                  <td className="bottom-table">
                    {blockReward === 0 ? "-" : (blockReward * 4320).toFixed(5)}
                  </td>
                  <td></td>
                  <td className="bottom-table">
                    {fiat === 0 ? "-" : (fiat * 4320).toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </HomeArea>
  );
};
export default Home;
