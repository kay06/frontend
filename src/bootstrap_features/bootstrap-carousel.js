import Carousel from 'react-bootstrap/Carousel';
import catItMan from '../pictures/carousel/cat_it_man.jpg'
import catRepair from '../pictures/carousel/cat_repair.jpg'
import catProgram from '../pictures/carousel/cat_program.jpg'

function BootstrapCarousel() {
  return (
    <Carousel>
        <Carousel.Item>
          <img
            src={catItMan}
            alt="Cat Is IT"
          />
          <Carousel.Caption>
            <h3>Cat Is IT</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={catRepair}
            alt="Cat Is Repair"
          />
          <Carousel.Caption>
            <h3>Cat Is Repair</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={catProgram}
            alt="Cat Is Program"
          />
          <Carousel.Caption>
            <h3>Cat Is Program</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  );
}

export default BootstrapCarousel;