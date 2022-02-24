import { useEffect, useState } from "react";
import { BetterCoinArea } from "./styled";
import '../../components/MainStyles.css';

const BetterCoin = () => {

  const initialFiatType = () => {
    const fiatType = localStorage.getItem('lsFiatType') || "USDT";
    return fiatType;
  };
  const initialRLTNetworkPower = () => {
    const RLTNetworkPower = Number(localStorage.getItem('lsRLTNetworkPower')) || 0;
    return RLTNetworkPower;
  };
  const initialSelectRLTNetworkPower = () => {
    const selectRLTNetworkPower = Number(localStorage.getItem('lsSelectRLTNetworkPower')) || 1000000000;
    return selectRLTNetworkPower;
  };
  const initialBTCNetworkPower = () => {
    const BTCNetworkPower = Number(localStorage.getItem('lsBTCNetworkPower')) || 0;
    return BTCNetworkPower;
  };
  const initialSelectBTCNetworkPower = () => {
    const selectBTCNetworkPower = Number(localStorage.getItem('lsSelectBTCNetworkPower')) || 1000000000;
    return selectBTCNetworkPower;
  };
  const initialETHNetworkPower = () => {
    const ETHNetworkPower = Number(localStorage.getItem('lsETHNetworkPower')) || 0;
    return ETHNetworkPower;
  };
  const initialSelectETHNetworkPower = () => {
    const selectETHNetworkPower = Number(localStorage.getItem('lsSelectETHNetworkPower')) || 1000000000;
    return selectETHNetworkPower;
  };
  const initialBNBNetworkPower = () => {
    const BNBNetworkPower = Number(localStorage.getItem('lsBNBNetworkPower')) || 0;
    return BNBNetworkPower;
  };
  const initialSelectBNBNetworkPower = () => {
    const selectBNBNetworkPower = Number(localStorage.getItem('lsSelectBNBNetworkPower')) || 1000000000;
    return selectBNBNetworkPower;
  };
  const initialMATICNetworkPower = () => {
    const MATICNetworkPower = Number(localStorage.getItem('lsMATICNetworkPower')) || 0;
    return MATICNetworkPower;
  };
  const initialSelectMATICNetworkPower = () => {
    const selectMATICNetworkPower = Number(localStorage.getItem('lsSelectMATICNetworkPower')) || 1000000000;
    return selectMATICNetworkPower;
  };
  const initialDOGENetworkPower = () => {
    const DOGENetworkPower = Number(localStorage.getItem('lsDOGENetworkPower')) || 0;
    return DOGENetworkPower;
  };
  const initialSelectDOGENetworkPower = () => {
    const selectDOGENetworkPower = Number(localStorage.getItem('lsSelectDOGENetworkPower')) || 1000000000;
    return selectDOGENetworkPower;
  };
  const initialGoalPower = () => {
    const goalPower = Number(localStorage.getItem('lsGoalPower')) || 0;
    return goalPower;
  };
  const initialSelectGoalPower = () => {
    const selectGoalPower = Number(localStorage.getItem('lsSelectGoalPower')) || 1000;
    return selectGoalPower;
  };

  const [RLTValue, setRLTValue] = useState(0);
  const [BTCValue, setBTCValue] = useState(0);
  const [ETHValue, setETHValue] = useState(0);
  const [BNBValue, setBNBValue] = useState(0);
  const [MATICValue, setMATICValue] = useState(0);
  const [DOGEValue, setDOGEValue] = useState(0);
  const [RLTBlockReward, setRLTBlockReward] = useState(0);
  const [BTCBlockReward, setBTCBlockReward] = useState(0);
  const [ETHBlockReward, setETHBlockReward] = useState(0);
  const [BNBBlockReward, setBNBBlockReward] = useState(0);
  const [MATICBlockReward, setMATICBlockReward] = useState(0);
  const [DOGEBlockReward, setDOGEBlockReward] = useState(0);
  const [fiatType, setFiatType] = useState(initialFiatType);
  const [RLTNetworkPower, setRLTNetworkPower] = useState(initialRLTNetworkPower);
  const [selectRLTNetworkPower, setSelectRLTNetworkPower] = useState(initialSelectRLTNetworkPower);
  const [BTCNetworkPower, setBTCNetworkPower] = useState(initialBTCNetworkPower);
  const [selectBTCNetworkPower, setSelectBTCNetworkPower] = useState(initialSelectBTCNetworkPower);
  const [ETHNetworkPower, setETHNetworkPower] = useState(initialETHNetworkPower);
  const [selectETHNetworkPower, setSelectETHNetworkPower] = useState(initialSelectETHNetworkPower);
  const [BNBNetworkPower, setBNBNetworkPower] = useState(initialBNBNetworkPower);
  const [selectBNBNetworkPower, setSelectBNBNetworkPower] = useState(initialSelectBNBNetworkPower);
  const [MATICNetworkPower, setMATICNetworkPower] = useState(initialMATICNetworkPower);
  const [selectMATICNetworkPower, setSelectMATICNetworkPower] = useState(initialSelectMATICNetworkPower);
  const [DOGENetworkPower, setDOGENetworkPower] = useState(initialDOGENetworkPower);
  const [selectDOGENetworkPower, setSelectDOGENetworkPower] = useState(initialSelectDOGENetworkPower);
  const [goalPower, setGoalPower] = useState(initialGoalPower);
  const [selectGoalPower, setSelectGoalPower] = useState(initialSelectGoalPower);


  useEffect(() => {
    let RLTReward = (goalPower * selectGoalPower) / (RLTNetworkPower * selectRLTNetworkPower) * 30;
    if (isNaN(RLTReward)) RLTReward = 0;
    setRLTBlockReward(RLTReward);

    localStorage.setItem('lsFiatType', fiatType);
    localStorage.setItem('lsRLTNetworkPower', RLTNetworkPower.toString());
    localStorage.setItem('lsSelectRLTNetworkPower', selectRLTNetworkPower.toString());
    localStorage.setItem('lsGoalPower', goalPower.toString());
    localStorage.setItem('lsSelectGoalPower', selectGoalPower.toString());

    var RLTRequestURL;
    if (fiatType === "BRL") {
      RLTRequestURL = `https://api.binance.com/api/v3/trades?symbol=BUSDBRL`;
    }
    else if (fiatType === "USDT") {
      RLTRequestURL = `https://api.binance.com/api/v3/trades?symbol=BUSDUSDT`;
    }
    else {
      RLTRequestURL = `https://api.binance.com/api/v3/trades?symbol=EURUSDT`;
    }

    var RLTRequest = new XMLHttpRequest();
    RLTRequest.open("GET", RLTRequestURL);
    RLTRequest.responseType = "json";
    RLTRequest.send();
    RLTRequest.onload = function () {
      var RLTResponse = RLTRequest.response[0].price;
      if (fiatType === "EUR") {
        setRLTValue((1 / RLTResponse) * RLTBlockReward * 4320);
      }
      else {
        setRLTValue(RLTResponse * RLTBlockReward * 4320);
      }
    };
  }, [RLTBlockReward, RLTNetworkPower, fiatType, goalPower, selectRLTNetworkPower, selectGoalPower]);

  useEffect(() => {
    let BTCReward = (goalPower * selectGoalPower) / (BTCNetworkPower * selectBTCNetworkPower) * 0.0003;
    if (isNaN(BTCReward)) BTCReward = 0;
    setBTCBlockReward(BTCReward);

    localStorage.setItem('lsFiatType', fiatType);
    localStorage.setItem('lsBTCNetworkPower', BTCNetworkPower.toString());
    localStorage.setItem('lsSelectBTCNetworkPower', selectBTCNetworkPower.toString());
    localStorage.setItem('lsGoalPower', goalPower.toString());
    localStorage.setItem('lsSelectGoalPower', selectGoalPower.toString());

    var BTCRequestURL = `https://api.binance.com/api/v3/trades?symbol=BTC${fiatType}`;
    var BTCRequest = new XMLHttpRequest();
    BTCRequest.open("GET", BTCRequestURL);
    BTCRequest.responseType = "json";
    BTCRequest.send();
    BTCRequest.onload = function () {
      var BTCResponse = BTCRequest.response[0].price;
      setBTCValue(BTCResponse * BTCBlockReward * 4320);
    };
  }, [BTCBlockReward, BTCNetworkPower, fiatType, goalPower, selectBTCNetworkPower, selectGoalPower]);

  useEffect(() => {
    let ETHReward = (goalPower * selectGoalPower) / (ETHNetworkPower * selectETHNetworkPower) * 0.005;
    if (isNaN(ETHReward)) ETHReward = 0;
    setETHBlockReward(ETHReward);

    localStorage.setItem('lsFiatType', fiatType);
    localStorage.setItem('lsETHNetworkPower', ETHNetworkPower.toString());
    localStorage.setItem('lsSelectETHNetworkPower', selectETHNetworkPower.toString());
    localStorage.setItem('lsGoalPower', goalPower.toString());
    localStorage.setItem('lsSelectGoalPower', selectGoalPower.toString());

    var ETHRequestURL = `https://api.binance.com/api/v3/trades?symbol=ETH${fiatType}`;
    var ETHRequest = new XMLHttpRequest();
    ETHRequest.open("GET", ETHRequestURL);
    ETHRequest.responseType = "json";
    ETHRequest.send();
    ETHRequest.onload = function () {
      var ETHResponse = ETHRequest.response[0].price;
      setETHValue(ETHResponse * ETHBlockReward * 4320);
    };
  }, [ETHBlockReward, ETHNetworkPower, fiatType, goalPower, selectETHNetworkPower, selectGoalPower]);

  useEffect(() => {
    let BNBReward = (goalPower * selectGoalPower) / (BNBNetworkPower * selectBNBNetworkPower) * 0.012;
    if (isNaN(BNBReward)) BNBReward = 0;
    setBNBBlockReward(BNBReward);

    localStorage.setItem('lsFiatType', fiatType);
    localStorage.setItem('lsBNBNetworkPower', BNBNetworkPower.toString());
    localStorage.setItem('lsSelectBNBNetworkPower', selectBNBNetworkPower.toString());
    localStorage.setItem('lsGoalPower', goalPower.toString());
    localStorage.setItem('lsSelectGoalPower', selectGoalPower.toString());

    var BNBRequestURL = `https://api.binance.com/api/v3/trades?symbol=BNB${fiatType}`;
    var BNBRequest = new XMLHttpRequest();
    BNBRequest.open("GET", BNBRequestURL);
    BNBRequest.responseType = "json";
    BNBRequest.send();
    BNBRequest.onload = function () {
      var BNBResponse = BNBRequest.response[0].price;
      setBNBValue(BNBResponse * BNBBlockReward * 4320);
    };
  }, [BNBBlockReward, BNBNetworkPower, fiatType, goalPower, selectBNBNetworkPower, selectGoalPower]);


  useEffect(() => {
    let MATICReward = (goalPower * selectGoalPower) / (MATICNetworkPower * selectMATICNetworkPower) * 3
    if (isNaN(MATICReward)) MATICReward = 0;
    setMATICBlockReward(MATICReward);

    localStorage.setItem('lsFiatType', fiatType);
    localStorage.setItem('lsMATICNetworkPower', MATICNetworkPower.toString());
    localStorage.setItem('lsSelectMATICNetworkPower', selectMATICNetworkPower.toString());
    localStorage.setItem('lsGoalPower', goalPower.toString());
    localStorage.setItem('lsSelectGoalPower', selectGoalPower.toString());

    var MATICRequestURL = `https://api.binance.com/api/v3/trades?symbol=MATIC${fiatType}`;
    var MATICRequest = new XMLHttpRequest();
    MATICRequest.open("GET", MATICRequestURL);
    MATICRequest.responseType = "json";
    MATICRequest.send();
    MATICRequest.onload = function () {
      var MATICResponse = MATICRequest.response[0].price;
      setMATICValue(MATICResponse * MATICBlockReward * 4320);
    };
  }, [MATICBlockReward, MATICNetworkPower, fiatType, goalPower, selectMATICNetworkPower, selectGoalPower]);

  useEffect(() => {
    let DOGEReward = (goalPower * selectGoalPower) / (DOGENetworkPower * selectDOGENetworkPower) * 20;
    if (isNaN(DOGEReward)) DOGEReward = 0;
    setDOGEBlockReward(DOGEReward);

    localStorage.setItem('lsFiatType', fiatType);
    localStorage.setItem('lsDOGENetworkPower', DOGENetworkPower.toString());
    localStorage.setItem('lsSelectDOGENetworkPower', selectDOGENetworkPower.toString());
    localStorage.setItem('lsGoalPower', goalPower.toString());
    localStorage.setItem('lsSelectGoalPower', selectGoalPower.toString());

    var DOGERequestURL = `https://api.binance.com/api/v3/trades?symbol=DOGE${fiatType}`;
    var DOGERequest = new XMLHttpRequest();
    DOGERequest.open("GET", DOGERequestURL);
    DOGERequest.responseType = "json";
    DOGERequest.send();
    DOGERequest.onload = function () {
      var DOGEResponse = DOGERequest.response[0].price;
      setDOGEValue(DOGEResponse * DOGEBlockReward * 4320);
    };
  }, [DOGEBlockReward, DOGENetworkPower, fiatType, goalPower, selectDOGENetworkPower, selectGoalPower]);

  let order: any = [RLTValue, BTCValue, ETHValue, BNBValue, MATICValue, DOGEValue];
  order.sort( function(a: number, b: number){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
  });

  const RLTElement = (
    <tr>
      <td className="crypto-logo"><img src="/rlt.svg" alt="" /><span>{(RLTBlockReward * 4320).toFixed(3)} RLT</span></td>
      <td>{RLTValue === 0 ? "-" : RLTValue.toFixed(2)}</td>
    </tr>
  );

  const BTCElement = (
    <tr>
      <td className="crypto-logo"><img src="/btc.svg" alt="" />{(BTCBlockReward * 4320 * 100000000).toFixed(0)} SAT</td>
      <td>{BTCValue === 0 ? "-" : BTCValue.toFixed(2)}</td>
    </tr>
  );

  const ETHElement = (
    <tr>
      <td className="crypto-logo"><img src="/eth.svg" alt="" />{(ETHBlockReward * 4320).toFixed(3)} ETH</td>
      <td>{ETHValue === 0 ? "-" : ETHValue.toFixed(2)}</td>
    </tr>
  );

  const BNBElement = (
    <tr>
      <td className="crypto-logo"><img src="/bnb.svg" alt="" />{(BNBBlockReward * 4320).toFixed(3)} BNB</td>
      <td>{BNBValue === 0 ? "-" : BNBValue.toFixed(2)}</td>
    </tr>
  );

  const MATICElement = (
    <tr>
      <td className="crypto-logo"><img src="/matic.svg" alt="" />{(MATICBlockReward * 4320).toFixed(3)} MATIC</td>
      <td>{MATICValue === 0 ? "-" : MATICValue.toFixed(2)}</td>
    </tr>
  );

  const DOGEElement = (
    <tr>
      <td className="crypto-logo"><img src="/doge.svg" alt="" />{(DOGEBlockReward * 4320).toFixed(3)} DOGE</td>
      <td>{DOGEValue === 0 ? "-" : DOGEValue.toFixed(2)}</td>
    </tr>
  );

  var RLTIndex = order.indexOf(RLTValue);
  if (RLTIndex !== -1) {
    order[RLTIndex] = RLTElement;
  }

  var BTCIndex = order.indexOf(BTCValue);
  if (BTCIndex !== -1) {
    order[BTCIndex] = BTCElement;
  }

  var ETHIndex = order.indexOf(ETHValue);
  if (ETHIndex !== -1) {
    order[ETHIndex] = ETHElement;
  }

  var BNBIndex = order.indexOf(BNBValue);
  if (BNBIndex !== -1) {
    order[BNBIndex] = BNBElement;
  }

  var MATICIndex = order.indexOf(MATICValue);
  if (MATICIndex !== -1) {
    order[MATICIndex] = MATICElement;
  }

  var DOGEIndex = order.indexOf(DOGEValue);
  if (DOGEIndex !== -1) {
    order[DOGEIndex] = DOGEElement;
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
                  <span className="crypto-name"><img src="/rlt.svg" alt="" />Rollertoken (RLT)</span>
                  <div>
                    <input type="number"
                      defaultValue={RLTNetworkPower}
                      onChange={(e) => setRLTNetworkPower(Number(e.target.value))}
                    />
                    <select
                      defaultValue={selectRLTNetworkPower}
                      onChange={(e) => setSelectRLTNetworkPower(Number(e.target.value))}
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
                      defaultValue={BTCNetworkPower}
                      onChange={(e) => setBTCNetworkPower(Number(e.target.value))}
                    />
                    <select
                      defaultValue={selectBTCNetworkPower}
                      onChange={(e) => setSelectBTCNetworkPower(Number(e.target.value))}
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
                      defaultValue={ETHNetworkPower}
                      onChange={(e) => setETHNetworkPower(Number(e.target.value))}
                    />
                    <select
                      defaultValue={selectETHNetworkPower}
                      onChange={(e) => setSelectETHNetworkPower(Number(e.target.value))}
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
                      defaultValue={BNBNetworkPower}
                      onChange={(e) => setBNBNetworkPower(Number(e.target.value))}
                    />
                    <select
                      defaultValue={selectBNBNetworkPower}
                      onChange={(e) => setSelectBNBNetworkPower(Number(e.target.value))}
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
                      defaultValue={MATICNetworkPower}
                      onChange={(e) => setMATICNetworkPower(Number(e.target.value))}
                    />
                    <select
                      defaultValue={selectMATICNetworkPower}
                      onChange={(e) => setSelectMATICNetworkPower(Number(e.target.value))}
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
                      defaultValue={DOGENetworkPower}
                      onChange={(e) => setDOGENetworkPower(Number(e.target.value))}
                    />
                    <select
                      defaultValue={selectDOGENetworkPower}
                      onChange={(e) => setSelectDOGENetworkPower(Number(e.target.value))}
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
                    <option value="BRL">BRL</option>
                    <option value="EUR">EUR</option>
                    <option value="USDT">USD</option>
                  </select>
                </div>
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <td className="title"></td>
                  <td className="top-table">{`${fiatType === "USDT" ? "USD" : fiatType.toUpperCase()}/month`}</td>
                </tr>
              </thead>
              <tbody>
                {order[5]}
              </tbody>
              <tbody>
                {order[4]}
              </tbody>
              <tbody>
                {order[3]}
              </tbody>
              <tbody>
                {order[2]}
              </tbody>
              <tbody>
                {order[1]}
              </tbody>
              <tbody>
                {order[0]}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </BetterCoinArea >
  );
}
export default BetterCoin;