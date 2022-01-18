import { ChangeEvent, useEffect, useState } from "react";
import { HomeArea } from "./styled";

const Home = () => {

  const initialNetworkPower = () => {
    const networkPower = 0;
    return networkPower;
  };
  const initialSelectNetworkPower = () => {
    const selectNetworkPower = 1000000000;
    return selectNetworkPower;
  };
  const initialGoalPower = () => {
    const goalPower = 0;
    return goalPower;
  };
  const initialSelectGoalPower = () => {
    const selectGoalPower = 1000;
    return selectGoalPower;
  };
  const initialBlockReward = () => {
    const selectBlockReward = 30;
    return selectBlockReward;
  };
  const initialFiatType = () => {
    const fiatType = "usd";
    return fiatType;
  };
  const initialCrypto = () => {
    const crypto = "rlt";
    return crypto;
  };
  const [crypto, setCrypto] = useState(initialCrypto);
  const [fiatType, setFiatType] = useState(initialFiatType);
  const [fiat, setFiat] = useState(0);
  const [blockReward, setBlockReward] = useState(0);
  const [networkPower, setNetworkPower] = useState(initialNetworkPower);
  const [goalPower, setGoalPower] = useState(initialGoalPower);
  const [selectNetworkPower, setSelectNetworkPower] = useState(initialSelectNetworkPower);
  const [selectGoalPower, setSelectGoalPower] = useState(initialSelectGoalPower);
  const [selectBlockReward, setSelectBlockReward] = useState(initialBlockReward);

  function onChangeBlockReward(e: ChangeEvent<HTMLSelectElement>) {
    setSelectBlockReward(Number(e.target.value));
    setCrypto(e.target.options[e.target.selectedIndex].text.toLowerCase());
  }

  useEffect(() => {
    let reward = (goalPower * selectGoalPower) / (networkPower * selectNetworkPower) * selectBlockReward;
    if (isNaN(reward)) reward = 0;
    setBlockReward(reward);
  }, [goalPower, networkPower, selectBlockReward, selectGoalPower, selectNetworkPower]);

  if (crypto === "matic") {
    var requestMATIC = 'https://api.binance.com/api/v3/trades?symbol=MATICBTC';
    var preRequestMATIC = new XMLHttpRequest();
    preRequestMATIC.open('GET', requestMATIC);
    preRequestMATIC.responseType = 'json';
    preRequestMATIC.send();
    preRequestMATIC.onload = function () {
      var usd = preRequestMATIC.response[0].price;

      var requestUSD = `https://api.coinconvert.net/convert/btc/${fiatType}?amount=${usd}`;
      var request = new XMLHttpRequest();
      request.open('GET', requestUSD);
      request.responseType = 'json';
      request.send();
      request.onload = function () {
        var response = request.response;
        setFiat((response[Object.keys(response)[2]]) * blockReward);
      }
    }
  }
  else {
    var requestURL;
    if (crypto === "rlt") {
      requestURL = `https://api.coinconvert.net/convert/busd/${fiatType}?amount=1`;
    }
    else {
      requestURL = `https://api.coinconvert.net/convert/${crypto}/${fiatType}?amount=1`;
    }
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
      var response = request.response;
      setFiat((response[Object.keys(response)[2]]) * blockReward);
    }
  }



  return (
    <HomeArea>
      <div className="intro"><span>Calculate how much your <strong>power</strong> can mine and convert it to your <strong>currency</strong>!</span></div>
      <div className="main-content">
        <div className="input-area">
          <div>
            <div className="input">
              <span>Enter <strong>Network Power</strong> For Desired Coin</span>
              <div>
                <input type="number"
                  defaultValue={networkPower}
                  onChange={(e) => setNetworkPower(Number(e.target.value))}
                />
                <select
                  defaultValue={selectNetworkPower}
                  onChange={(e) => setSelectNetworkPower(Number(e.target.value))}
                >
                  <option value="1">GH/s</option>
                  <option value="1000">TH/s</option>
                  <option value="1000000">PH/s</option>
                  <option value="1000000000">EH/s</option>
                </select>
              </div>
            </div>
            <div className="input">
              <span>Enter <strong>Your</strong> Desired Goal Power</span>
              <div>
                <input type="number"
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
              <span>Enter <strong>Block Reward</strong> For Desired Coin</span>
              <div>
                <input type="number"
                  value={selectBlockReward}
                  onChange={(e) => setSelectBlockReward(Number(e.target.value))}
                />
                <select
                  id="block-reward"
                  defaultValue={selectBlockReward}
                  onChange={(e) => onChangeBlockReward(e)}
                >
                  <option value="30">RLT</option>
                  <option value="0.0003">BTC</option>
                  <option value="0.005">ETH</option>
                  <option value="0.012">BNB</option>
                  <option value="3">MATIC</option>
                  <option value="20">DOGE</option>
                </select>
              </div>
            </div>
            <div className="input">
              <span>Choose <strong>Your Currency</strong> For Convertion</span>
              <div>
                <select
                  className="currency"
                  value={fiatType}
                  onChange={(e) => setFiatType(e.target.value)}
                >
                  <option value="brl">BRL</option>
                  <option value="eur">EUR</option>
                  <option value="jpy">JPY</option>
                  <option value="usd">USD</option>
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
                  <td className="top-table">{fiatType.toUpperCase()}</td>
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
                  <td>{blockReward === 0 ? "-" : (blockReward * 144).toFixed(7)}</td>
                  <td></td>
                  <td>{fiat === 0 ? "-" : (fiat * 144).toFixed(2)}</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>Weekly Reward</td>
                  <td>{blockReward === 0 ? "-" : (blockReward * 1008).toFixed(6)}</td>
                  <td></td>
                  <td>{fiat === 0 ? "-" : (fiat * 1008).toFixed(2)}</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>Monthly Reward</td>
                  <td className="bottom-table">{blockReward === 0 ? "-" : (blockReward * 4320).toFixed(5)}</td>
                  <td></td>
                  <td className="bottom-table">{fiat === 0 ? "-" : (fiat * 4320).toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </HomeArea >
  );
}
export default Home;