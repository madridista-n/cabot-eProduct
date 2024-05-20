import React from 'react';


function Footer() {
  return (
    
    <footer className=" text-white text-center bg-dark text-lg-start mt-4" >
    <div className="container p-4">
      <div className="row">
        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 className="text-uppercase">EPS</h5>
          <p> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, sunt optio expedita deleniti, maiores tempora id provident blanditiis voluptas voluptatum dignissimos velit. Voluptatum repellat, quasi repellendus deserunt eveniet cupiditate ullam.
          </p>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Links</h5>
          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 4</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-0">Links</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!" className="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 4</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="text-center p-3" style={{ backgroundColor: '#1a2421' }}>
      © 2024 Copyright:
      <a className="text-white text-decoration-none" href="https://www.products.com/"> eProducts.com</a>
    </div>
  </footer>
  )
}

export default Footer