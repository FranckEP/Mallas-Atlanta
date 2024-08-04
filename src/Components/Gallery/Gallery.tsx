import "./Gallery.css";
import logo from '../../assets/Logos/logo.svg'
import image1 from '../../assets/Carousel Images/1.png'

const images = [
  {
    image: image1
  },
  {
    image: 'https://png.pngtree.com/background/20230524/original/pngtree-sad-pictures-for-desktop-hd-backgrounds-picture-image_2705986.jpg'
  },
  {
    image: 'https://png.pngtree.com/background/20230524/original/pngtree-sad-pictures-for-desktop-hd-backgrounds-picture-image_2705986.jpg'
  },
  {
    image: 'https://png.pngtree.com/background/20230524/original/pngtree-sad-pictures-for-desktop-hd-backgrounds-picture-image_2705986.jpg'
  },
  {
    image: 'https://png.pngtree.com/background/20230524/original/pngtree-sad-pictures-for-desktop-hd-backgrounds-picture-image_2705986.jpg'
  },
  {
    image: 'https://png.pngtree.com/background/20230524/original/pngtree-sad-pictures-for-desktop-hd-backgrounds-picture-image_2705986.jpg'
  },
  {
    image: 'https://png.pngtree.com/background/20230524/original/pngtree-sad-pictures-for-desktop-hd-backgrounds-picture-image_2705986.jpg'
  }
];

const Gallery = () => {
  return (
    <div>
      
      <div className="gallery-container">
          {images.map((image, index) => (
            <div className="gallery-item" key={index}>
              <img src={image.image} alt={`Gallery Image ${index + 1}`} className="gallery-image" />
              <img src={logo} alt="Logo" className="logo-icon" />
            </div>
          ))}
      </div>
    </div>
  )
}

export default Gallery;