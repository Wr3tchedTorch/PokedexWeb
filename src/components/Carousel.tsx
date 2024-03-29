import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          className="CarouselImage"
          src="https://s2-techtudo.glbimg.com/epB6qQDdGiXxjyY5tqGyWmwt7Pc=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/i/5/Wi6pk5RQOQRTXHGcwOmQ/pokemon-24-anos-red-green-franquia-criacao.jpg"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="CarouselImage"
          src="https://s2-techtudo.glbimg.com/B30fV2G1ImLD0Qc5CRQUnu0umDM=/0x0:1280x720/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/4/2/sDAes7SJ6wg0nKpcbcjQ/2018-11-27-the-sims-4-rumo-a-fama-tirando-fotos-de-celebridade.jpg"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="CarouselImage"
          src="https://s2-techtudo.glbimg.com/UgzWB4HtE4ODK1V2R8sxGly7ZaM=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/k/x/A9S5EPRBWAYBaAIfh6XQ/how-to-pre-register-pokemon-sleep-android-ios.jpeg"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
