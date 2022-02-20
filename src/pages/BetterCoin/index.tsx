import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { BetterCoinArea } from "./styled";
import '../../components/MainStyles.css';

const BetterCoin = () => {

  const initialCrypto = () => {
    const crypto = localStorage.getItem('lsCrypto') || "rlt";
    return crypto;
  };
  const initialFiatType = () => {
    const fiatType = localStorage.getItem('lsFiatType') || "usd";
    return fiatType;
  };
  const initialNetworkPower = () => {
    const networkPower = Number(localStorage.getItem('lsNetworkPower')) || 0;
    return networkPower;
  };
  const initialSelectNetworkPower = () => {
    const selectNetworkPower = Number(localStorage.getItem('lsSelectNetworkPower')) || 1000000000;
    return selectNetworkPower;
  };
  const initialGoalPower = () => {
    const goalPower = Number(localStorage.getItem('lsGoalPower')) || 0;
    return goalPower;
  };
  const initialSelectGoalPower = () => {
    const selectGoalPower = Number(localStorage.getItem('lsSelectGoalPower')) || 1000;
    return selectGoalPower;
  };
  const initialBlockReward = () => {
    const selectBlockReward = Number(localStorage.getItem('lsSelectBlockReward')) || 30;
    return selectBlockReward;
  };

  const [fiat, setFiat] = useState(0);
  const [blockReward, setBlockReward] = useState(0);
  const [crypto, setCrypto] = useState(initialCrypto);
  const [fiatType, setFiatType] = useState(initialFiatType);
  const [networkPower, setNetworkPower] = useState(initialNetworkPower);
  const [selectNetworkPower, setSelectNetworkPower] = useState(initialSelectNetworkPower);
  const [goalPower, setGoalPower] = useState(initialGoalPower);
  const [selectGoalPower, setSelectGoalPower] = useState(initialSelectGoalPower);
  const [selectBlockReward, setSelectBlockReward] = useState(initialBlockReward);

  const handleLocalStorage = useCallback(() => {
    localStorage.setItem('lsCrypto', crypto);
    localStorage.setItem('lsFiatType', fiatType);
    localStorage.setItem('lsNetworkPower', networkPower.toString());
    localStorage.setItem('lsSelectNetworkPower', selectNetworkPower.toString());
    localStorage.setItem('lsGoalPower', goalPower.toString());
    localStorage.setItem('lsSelectGoalPower', selectGoalPower.toString());
    localStorage.setItem('lsSelectBlockReward', selectBlockReward.toString());
  }, [crypto, fiatType, goalPower, networkPower, selectBlockReward, selectGoalPower, selectNetworkPower]);

  function onChangeBlockReward(e: ChangeEvent<HTMLSelectElement>) {
    setSelectBlockReward(Number(e.target.value));
    setCrypto(e.target.options[e.target.selectedIndex].text.toLowerCase());
  }

  useEffect(() => {
    let reward = (goalPower * selectGoalPower) / (networkPower * selectNetworkPower) * selectBlockReward;
    if (isNaN(reward)) reward = 0;
    setBlockReward(reward);
    handleLocalStorage();
  }, [goalPower, handleLocalStorage, networkPower, selectBlockReward, selectGoalPower, selectNetworkPower]);

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
  else if (crypto === "sat (btc)") {
    var requestBTC = `https://api.coinconvert.net/convert/btc/${fiatType}?amount=1`;
    var preRequestBTC = new XMLHttpRequest();
    preRequestBTC.open('GET', requestBTC);
    preRequestBTC.responseType = 'json';
    preRequestBTC.send();
    preRequestBTC.onload = function () {
      var response = preRequestBTC.response;
      setFiat((response[Object.keys(response)[2]]) * blockReward / 100000000);
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
    <BetterCoinArea>
      <div className="intro"><span>Calculate which is the <strong>best coin</strong> to mine <strong>right now</strong>!</span></div>
      <div className="description"><span>It is a <strong>technical</strong> and <strong>mathematical</strong> analysis. The better coin <strong>for you</strong> can vary depending on your strategy.</span></div>
      <div className="main-content">
        <div className="input-area">
          <div className="input-area-inner">
            <span className="input-area-title">Enter <strong>Network Power</strong> For Each Coin</span>
            <div className="crypto-inputs">
              <div className="crypto-inputs-left">
                <div className="input">
                  <span className="crypto-name"><img src="/rlt.svg" alt="" /> Rollertoken (RLT)</span>
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
                  <span className="crypto-name"><img src="/btc.svg" alt="" /> Bitcoin (BTC)</span>
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
                  <span className="crypto-name"><img src="/eth.svg" alt="" /> Ethereum (ETH)</span>
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
              </div>
              <div className="crypto-inputs-right">
                <div className="input">
                  <span className="crypto-name"><img src="/bnb.svg" alt="" /> Binance (BNB)</span>
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
                  <span className="crypto-name"><img src="/matic.svg" alt="" /> Polygon (MATIC)</span>
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
                  <span className="crypto-name"><img src="/doge.svg" alt="" /> Dogecoin (DOGE)</span>
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
              </div>
            </div>
          </div>
        </div>
        <div className="output-area">
          <div className="output-area-inner">
            <span className="output-area-title">Enter <strong>Your</strong> Desired</span>
            <div className="output-area-inputs">
              <div className="input">
                <span>Goal Power</span>
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
                <span>Currency</span>
                <div>
                  <select
                    className="currency"
                    value={fiatType}
                    onChange={(e) => setFiatType(e.target.value)}
                  >
                    <option value="brl">BRL</option>
                    <option value="eur">EUR</option>
                    <option value="usd">USD</option>
                  </select>
                </div>
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <td className="title"></td>
                  <td className="top-table">{`${fiatType.toUpperCase()}/month`}</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><img src="/rlt.svg" alt="" />RLT</td>
                  <td>{fiat === 0 ? "-" : fiat.toFixed(2)}</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td><img src="/btc.svg" alt="" />BTC</td>
                  <td>{fiat === 0 ? "-" : (fiat * 144).toFixed(2)}</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                <td><img src="/eth.svg" alt="" />ETH</td>
                  <td>{fiat === 0 ? "-" : (fiat * 1008).toFixed(2)}</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>Monthly Reward</td>
                  <td className="bottom-table">{fiat === 0 ? "-" : (fiat * 4320).toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </BetterCoinArea >
  );
}
export default BetterCoin;