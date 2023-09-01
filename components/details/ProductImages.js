import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ProductImages = () => {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/"
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/"
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/"
    }
  ];

  return (
    <div className="App" w={{base:'100%', md:'50%'}} border='2px solid red'>
      <ImageGallery
        items={images}
        showPlayButton={true}
        showFullscreenButton={true}
        slideInterval={1000}
        // slideOnThumbnailOver={true}
        // showIndex={true}
      />
    </div>
  );
}
export default ProductImages
