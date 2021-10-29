import React, { useState } from "react";

const Form = (props) => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();

    props.loadweather(city, country);
  };

  return (
    <div className="container">
      <form onSubmit={onFormSubmit}>
        <div>{props.error ? error(props.error) : ""}</div>
        <div className="row">
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="city"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="country"
              required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <button type="submit" className="btn btn-warning">
              Get Weather
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const error = (props) => {
  return <div className="error">{props}</div>;
};

export default Form;
