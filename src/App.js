import "./App.css";

function App() {
  return (
    <div className="bg-container">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="heading mt-3">Included VR Kit</h1>
          </div>

          <div className="col-12 col-md-4">
            <div className="card-container d-flex flex-row justify-content-center mt-3">
              <div>
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/vr-kit-1-img.png"
                  className="img1"
                  alt="img1"
                />
                <h1 className="cardheading mt-3">Two Touch Controllers</h1>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card-container d-flex flex-row justify-content-center mt-3">
              <div>
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/vr-kit-2-img.png"
                  className="img1"
                  alt="img2"
                />
                <h1
                  className="cardheading mt-3"
                  style={{ textAlign: "center" }}
                >
                  VR Headseat
                </h1>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card-container d-flex flex-row justify-content-center mt-3">
              <div>
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/vr-kit-3-img.png"
                  className="img1"
                  alt="img3"
                />
                <h1
                  className="cardheading mt-3"
                  style={{ textAlign: "center" }}
                >
                  Charging Cable
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
