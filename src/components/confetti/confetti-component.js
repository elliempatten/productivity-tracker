import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { times, sample } from 'lodash';

const WIDTH = 960;
const HEIGHT = 540;
const SQUIGGLE_POLY = (
  <polygon
    fill="#219BFF"
    points="0.0249041967 6.40715712 2.44266787 2.32841404 8.61913975 5.99475295 15.7411051 0.968176232 23.2334787 5.41761831 30.343342 0.392213768 39.1559965 5.62565618 36.7370086 9.70369201 30.5690362 6.03818152 23.4582075 11.0638447 15.9648685 6.61466132 8.8438685 11.6409794"
  />
);
const WEDGE_POLY = (
  <polygon
    fill="#FFBF1B"
    points="16.9164158 0.365617519 22.2256862 12.3238556 2.3369639 14.1473783 0.548819712 7.66988246"
  />
);
const CIRCLE_POLY = <circle fill="#FF575C" cx="8.5" cy="8.5" r="8.5" />;
const SHAPES = [SQUIGGLE_POLY, WEDGE_POLY, CIRCLE_POLY];

const rand = (min, max) => {
  const value = Math.random() * (max + min) - min;
  return Math.random() > 0.5 ? value : -value;
};

class ConfettiComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.loop = this.loop.bind(this);
    this.state = {
      particles: []
    };
  }

  componentDidMount() {
    this.frame = requestAnimationFrame(time => {
      this.lastTime = time;
      this.loop(time);
    });
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.frame);
  }

  render() {
    const { particles } = this.state;
    const { size } = this.props;
    // note: height and width adjusted by elliempatten
    return (
      <svg
        style={{ width: '250%', height: '250%' }}
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      >
        {particles.map((particle, i) => {
          const {
            position: { x, y },
            velocity: { x: vx, y: vy },
            element,
            opacity = 1
          } = particle;
          const rotation = (Math.atan2(vy, vx) / Math.PI) * 180;
          return (
            <g
              key={i}
              transform={`translate(${x}, ${y}) rotate(${rotation} 0 0) scale(${size})`}
              opacity={opacity}
            >
              {element}
            </g>
          );
        })}
      </svg>
    );
  }

  makeParticle(minSpeed, maxSpeed) {
    // note: position adjusted by elliempatten
    return {
      velocity: { x: rand(minSpeed, maxSpeed), y: rand(minSpeed, maxSpeed) },
      position: { x: WIDTH / 5, y: HEIGHT / 5 },
      element: sample(this.props.particles),
      opacity: 1
    };
  }

  loop(time) {
    const delta = (time - this.lastTime) / 60;
    this.lastTime = time;
    const {
      count,
      minSpeed,
      maxSpeed,
      gravity,
      windResistance,
      fade
    } = this.props;
    let { particles } = this.state;

    // Add particles up to our limit
    times(count - particles.length, () => {
      const particle = this.makeParticle(minSpeed, maxSpeed);
      particles.push(particle);
    });

    particles.forEach(particle => {
      const { velocity, position } = particle;

      velocity.y += gravity;

      velocity.x = velocity.x - (velocity.x * delta) / (100 - windResistance);
      velocity.y = velocity.y - (velocity.y * delta) / (100 - windResistance);

      position.x += velocity.x * delta;
      position.y += velocity.y * delta;

      particle.opacity -= delta / (100 - fade);
    });

    // Remove off-canvas particles
    // TODO reuse particles when they go off-canvas
    particles = particles.filter(
      ({ position: { x, y }, opacity }) =>
        opacity > 0 && x > 0 && y > 0 && x < WIDTH && y < HEIGHT
    );

    this.setState({ particles });

    this.frame = requestAnimationFrame(this.loop);
  }
}
ConfettiComponent.defaultProps = {
  minSpeed: 5,
  maxSpeed: 21,
  count: 157,
  gravity: 0.25,
  size: 0.6,
  windResistance: 66,
  fade: 63,
  particles: SHAPES
};
ConfettiComponent.propTypes = {
  minSpeed: PropTypes.number,
  maxSpeed: PropTypes.number,
  count: PropTypes.number,
  gravity: PropTypes.number,
  size: PropTypes.number,
  windResistance: PropTypes.number,
  fade: PropTypes.number,
  particles: PropTypes.arrayOf(PropTypes.element)
};

export default ConfettiComponent;
