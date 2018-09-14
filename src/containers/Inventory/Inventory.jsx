import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import './Inventory.css';
import Car from '../../components/Car/Car';
import Wheels from '../../components/Wheels/Wheels';
import Counter from '../../components/Counter/Counter';
import Stats from '../../components/Stats/Stats';
import Climate from '../../components/Climate/Climate';

import { getCarStats, getInitialStats } from '../../store/actions/statsActions';

const speed = {
  step: 5,
  max: 70,
  min: 45,
  title: "Speed",
  unit: "mph"
};

const temperature = {
  step: 10,
  max: 40,
  min: -10,
  title: "Outside Temperature",
  unit: "°"
};

class Inventory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      speed: 55,
      temperature: 20,
      climate: true,
      wheels: 19
    }

    this.speedIncrement = this.speedIncrement.bind(this);
    this.speedDecrement = this.speedDecrement.bind(this);
    this.tempIncrement = this.tempIncrement.bind(this);
    this.tempDecrement = this.tempDecrement.bind(this);
    this.onWheelChange = this.onWheelChange.bind(this);
    this.onClimateChange = this.onClimateChange.bind(this);
  }

  componentWillMount() {
    this.props.getInitialStats();
  }

  onWheelChange(e) {
    const newState = { ...this.state, wheels: e.target.value};
    this.setState({wheels: e.target.value});
    this.props.getCarStats(newState);
  }

  speedIncrement(speed) {
    const newState = { ...this.state, speed};
    this.setState({speed});
    this.props.getCarStats(newState);
  }

  speedDecrement(speed) {
    const newState = { ...this.state, speed};
    this.setState({speed});
    this.props.getCarStats(newState)
  }

  tempIncrement(temperature) {
    const newState = { ...this.state, temperature};
    this.setState({temperature})
    this.props.getCarStats(newState)

  }

  tempDecrement(temperature) {
    const newState = { ...this.state, temperature};
    this.setState({temperature})
    this.props.getCarStats(newState)
  }

  onClimateChange(e) {
    const newState = { ...this.state, climate: e.target.checked};
    this.setState({climate: e.target.checked});
    this.props.getCarStats(newState);
  }

  render() {
    return (
      <Fragment>
        <form className="tesla-battery">
          <h1>Range Per Charge</h1>
          <Car wheelsize={this.state.wheels} speed={this.state.speed}/>
            <Stats stats={this.props.stats}/>
          <div className="tesla-controls cf">
            <Counter 
              { ...speed }
              value={this.state.speed}
              onCounterIncrement={this.speedIncrement}
              onCounterDecrement={this.speedDecrement}
              />
              <Counter 
                { ...temperature }
                value={this.state.temperature}
                onCounterIncrement={this.tempIncrement}
                onCounterDecrement={this.tempDecrement}
              />
            <div className="tesla-temp cf">
              <Climate 
                limit={this.state.temperature > 10}
                climate={this.state.climate} 
                onClimateChange={this.onClimateChange}/> 
            </div>
            <Wheels wheels={this.state.wheels} onWheelChange={this.onWheelChange}/>
          </div>
          <div className="tesla-battery__notice">
            <p>
              The actual amount of range that you experience will vary based 
              on your particular use conditions. See how particular use conditions 
              may affect your range in our simulation model.
            </p>
            <p>
              Vehicle range may vary depending on the vehicle configuration, 
              battery age and condition, driving style and operating, environmental 
              and climate conditions.
            </p>
          </div>
        </form>
      </Fragment>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  getCarStats: (value) => {
    dispatch(getCarStats(value))
  },
  getInitialStats: () => {
    dispatch(getInitialStats())
  }
})

const mapStateToProps = (state) => ({
  stats: state.stats
})

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);