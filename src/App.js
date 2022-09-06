import logo from "./logo.svg";
import "./App.css";
import "./sb-admin-2.min.css";
import PieChart from "./components/PieChart";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import GMaps from "./components/GMaps";
import React, {useMemo} from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";
import OpenStreetMaps from "./components/OpenStreetMaps";
// import googleMapsEV from "./components/googleMapsEV";

function App() {
  const printRef = React.useRef();
  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("print.pdf");
  };

  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: "AIzaSyDJsOOXRqIErbvkZdgqZRg5gKV1HFZQb8A",
  // });

  // if (!isLoaded) return <div>Loading...</div>;
  // return <Map/>;




  // function Map()
  // {
  //   //const center = useMemo(()=>({lat:44, lng:-80}),[]);
  
  //   const center = {
  //     lat: 0,
  //     lng: -180
  //   }
    
  //   const position = {
  //     lat: 37.772,
  //     lng: -122.214
  //   } 
    
  //   const onLoad = marker => {
  //     console.log('marker: ', marker)
  //   }
    
  //   const mapContainerStyle = {
  //     height: "400px",
  //     width: "800px"
  //   }

  //   return   <GoogleMap
  //   id="marker-example"
  //   mapContainerStyle={mapContainerStyle}
  //   zoom={2}
  //   center={center}
  // >
  //   <MarkerF
  //     onLoad={onLoad}
  //     position={position}
  //   />
  // </GoogleMap>
  // }

   return (
  
    <div ref={printRef}>
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              V1G Dashboard
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Utility1
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Utility2
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Utility3
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled">Disabled</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
     
        <div className="row pt-5 ml-5 pl-5">
          <div className="col-xl-2 col-md-6 mb-4 ">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Invited
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      3485
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-2 col-md-6 mb-4">
            <div className="card border-left-success shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                      Enrolled
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      344
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-2 col-md-6 mb-4">
            <div className="card border-left-warning shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                      Pending
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      110
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-comments fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-2 col-md-6 mb-4">
            <div className="card border-left-warning shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                      UnEnrolled
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      66
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-comments fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-2 col-md-6 mb-4">
            <div className="card border-left-warning shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                      Failed
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      3
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-comments fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>

      <div className="container ml-5">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Charge Management Information</h1>
          <a
            href="#"
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" onClick={handleDownloadPdf}>

            <i className="fas fa-download fa-sm text-white-50"></i> Generate
            Report
          </a>
        </div>

</div>
<div className="container pl-2">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Energy Mapping
                  </h6>
                </div>

                <div className="card-body">
                  <div className="chart-area">
                    <LineChart />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-5">
              <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Distribution
                  </h6>
                  <div className="dropdown no-arrow">
                    <a
                      className="dropdown-toggle"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                    </a>
                 
                  </div>
                </div>

                <div className="card-body">
                  <div className="chart-pie pt-4 pb-2">
                    <PieChart />
                  </div>
                  <div className="mt-4 text-center small">
                    <span className="mr-2">
                      <i className="fas fa-circle text-primary"></i> 
                    </span>
                    <span className="mr-2">
                      <i className="fas fa-circle text-success"></i> 
                    </span>
                    <span className="mr-2">
                      <i className="fas fa-circle text-info"></i> 
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container pl-2">
          <div className="row">
            <div className="col-xl-12 col-lg-7">
              <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Participation
                  </h6>
                </div>

                <div className="card-body">
                  <div>
                  <BarChart />
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>
           

            <div className="container pl-2">
          <div className="row">
            <div className="col-xl-12 col-lg-7">
              <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Google Maps Integration
                  </h6>
                </div>

                <div className="card-body">
                  <div>
                  <GMaps/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>


            <div className="container pl-2">
          <div className="row">
            <div className="col-xl-12 col-lg-7">
              <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">
                    OSM Integration
                  </h6>
                </div>

                <div className="card-body">
                  <div>
                  <OpenStreetMaps/>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>

            
            
              
          
             
    </div> 
 

  );
}

export default App;
