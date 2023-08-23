import SpeedSvg from '../assets/speed.svg';
import AccelerationSvg from '../assets/acceleration.svg';
import ForceSvg from '../assets/force.svg';
import GasolineSvg from '../assets/gasoline.svg';
import EnergySvg from '../assets/energy.svg';
import ExchangeSvg from '../assets/exchange.svg';
import CarSvg from '../assets/car.svg';
import HybridSvg from '../assets/hybrid.svg';
import PeopleSvg from '../assets/people.svg';


export function getAcessotyIcon(type: string) {
  switch (type) {
    case 'speed':
      return SpeedSvg;
    case 'acceleration':
      return AccelerationSvg;
    case 'turning_diameter':
      return ForceSvg;
    case 'gasoline_motor':
      return GasolineSvg;
    case 'hybrid_motor':
      return HybridSvg;
    case 'electric_motor':
      return EnergySvg;
    case 'exchange':
      return ExchangeSvg;
    case 'seats':
      return HybridSvg;
    default:
      return CarSvg;
  }
}
