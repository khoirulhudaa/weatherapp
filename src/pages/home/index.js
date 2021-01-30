import React from 'react';
import '../../assets/style/index.css';

class Weather extends React.Component {

    state = {
        dateTime: '',
        query: '',
        data: null,
        key: 'e9fef74671976fc503243a3b2d9b1880',
        base: 'api.openweathermap.org/data/2.5/'
    }

    componentDidMount() {
    }

    valueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    getData = (e) => {
        if(e.key === "Enter" || e.which === 13) {

            const Months = ["january", "February", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Dese,ber"];
            const days = ["Sunday", "Monday", "Tuseday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
            const std = new Date();
            const date = std.getDate();
            const month = Months[std.getMonth()];
            const day = days[std.getDay()];
            const year = std.getFullYear();
    
            this.setState({
                dateTime: `${day}, ${date} ${month} ${year}`
            })
    
           fetch(`${this.state.base}weather?q=${this.state.query}&units=standard&appid=${this.state.key}`)
            .then(result => {
                this.setState({
                    data: result,
                    query: ''
                })
                console.log(result)
            })
        }
    }

    render() {
        const { valueChange, getData } = this;
        const { dateTime, query } = this.state;

        return (
            <div>
                <div className="wrap">
                    <div className="nav">
                        <input type="text" name="query" value={query} placeholder="cari sekarang...." onChange={valueChange} onKeyPress={getData} />
                    </div>
                    <div className="body">
                        <h2 className="cityName">New York City, US</h2>
                        <h3 className="dateName">{dateTime}</h3>

                        <hr />
                        
                        <h1 className="celcius"><span>30C</span></h1>
                        <h4 className="semi">Sunny</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default Weather;