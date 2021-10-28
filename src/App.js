import './App.css';
import { Carousel } from './lib';

function App() {
  let data = [];

  for (let i = 0; i < 114; i++) {
    console.log(`../assets/${i}.jpg`);
    data[i] = {
      image: `../assets/${i}.jpg`,
    };
  }

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  };
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  };
  return (
    <div className="App">
      <div style={{ textAlign: 'center' }}>
        <h2>Album Modified by Emmanuel@2019</h2>
        <p>Original code was created by Sahil</p>
        <p>you can open the image with the browser by right clicking - open image</p>
        <div
          style={{
            padding: '0 20px',
          }}
        >
          <Carousel
            data={data}
            time={50000}
            width="850px"
            height="70vh"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={false}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            showNavBtn={true}
            style={{
              textAlign: 'center',
              maxWidth: '850px',
              margin: '40px auto',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
