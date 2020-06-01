import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ["AAPl", "AMZN", "ADBE", "TSLA", "TMUS", "QCOM", "NFLX", "MSFT", "INTC"],
            items: [],
            isloaded: false,
        }
        //Ключ
        this.token = ' '; //В протоколі
        this.secondsReload = 20;
        this.state.time = [];
        this.INTERVAL = 10;
        this.total = 0;
        this.intervalTimer = [];
    }

    timer() {
        this.total++;
        this.setState({
            time: {
                s: Math.round(this.total/this.INTERVAL),
                m: this.total % this.INTERVAL
            }
        });
    }

    loadData() {

        clearInterval(this.intervalTimer);
        this.total = 0;

        fetch('https://sandbox.iexapis.com/v1/stock/market/batch?symbols=AAPl,AMZN,ADBE,TSLA,TMUS,QCOM,NFLX,MSFT,INTC&types=quote&filter=symbol,change,companyName,latestPrice,latestUpdate,date&token=' + this.token)
            .then(res => res.json())
            .then(json => {
                this.state.items = json;
                this.setState({
                    isLoaded: true,
                    items: json,
                });

                this.intervalTimer = setInterval(() => this.timer(), (1000 / this.INTERVAL));

            });
    }

    componentDidMount() {
        this.loadData();
        this.interval = setInterval(() => this.loadData(), (this.secondsReload * 1000));
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        var {isLoaded, items} = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>;
        }
        else {
            return (
              <div>
              <div className="Time_count">
                    <h3>Час з моменту останнього оновлення:
                    {this.state.time.s},{this.state.time.m}</h3>
              </div>
                <table className="Table_API" border="1" width="70%" cellpadding="5">

                    <thead>
                    <tr className = "name_columns">
                        <td>Назва компанії</td>
                        <td>Назва позиції</td>
                        <td>Ціна</td>
                        <td>Різниця в ціні</td>
                        <td>Різниця в часі (угода)</td>
                    </tr>
                    </thead>
                    <tbody>
                    {Object.keys(items).map(key => (
                        <tr>
                            <td>
                                { items[key].quote.companyName}
                            </td>
                            <td>
                                {items[key].quote.symbol}
                            </td>
                            <td>
                                {items[key].quote.latestPrice}
                            </td>
                            <td class='js-range-latest-price'>
                                {items[key].quote.change}
                            </td>
                            <td>
                                {new Date(new Date().getTime() - items[key].quote.latestUpdate).getSeconds()}с
                            </td>
                        </tr>
                    ))}
                    </tbody>

                </table>
                  <div className="Time_current">
                      {new Date().toLocaleString()}
                  </div>
                </div>
            );
        }
    }
}

export default App;
