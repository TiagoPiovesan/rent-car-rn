import Bullet from '../Bullet';
import {
  Container,
  ImageIndexes,
  CarImageWrapper,
  CarImage
} from './styles'

interface Props {
  imagesUrl: string[];
}

export default function ImageSlider({ imagesUrl }: Props) {
  return (
    <Container>
      <ImageIndexes>
        <Bullet active={true} />
        <Bullet active={false} />
        <Bullet active={false} />
        <Bullet active={false} />
      </ImageIndexes>

      <CarImageWrapper>
        <CarImage
          source={{ uri: imagesUrl[0] }}
          resizeMode="contain"
        />
      </CarImageWrapper>
    </Container>
  )
}
