import React, { useState } from "react";

export default function Cgpa() {
  const [subject1, setSubject1] = useState(0);
  const [credithours1, setCredithours1] = useState(0);
  const [subject2, setSubject2] = useState(0);
  const [credithours2, setCredithours2] = useState(0);
  const [subject3, setSubject3] = useState(0);
  const [credithours3, setCredithours3] = useState(0);
  const [subject4, setSubject4] = useState(0);
  const [credithours4, setCredithours4] = useState(0);
  const [subject5, setSubject5] = useState(0);
  const [credithours5, setCredithours5] = useState(0);
  const [subject6, setSubject6] = useState(0);
  const [credithours6, setCredithours6] = useState(0);
  const [cgpa, setCgpa] = useState(0);

  const calculateCgpa = () => {
    let total =
      subject1 * credithours1 +
      subject2 * credithours2 +
      subject3 * credithours3 +
      subject4 * credithours4 +
      subject5 * credithours5 +
      subject6 * credithours6;
    let totalCredits =
      credithours1 +
      credithours2 +
      credithours3 +
      credithours4 +
      credithours5 +
      credithours6;
    let cgpa = total / totalCredits;
    setCgpa(cgpa);
  };

  return (
    <div className="container">
      <h1 className="text-center">Calculate CGPA</h1>
      <div className=" d-flex justify-content-center align-items-center">
        <div>
          <h2>GPA</h2>
          <label>Subject 1</label>
          <input
            type="number"
            className="form-control"
            onChange={(e) => setSubject1(parseFloat(e.target.value))}
          />
          <label>Subject 2</label>
          <input
            type="number"
            className="form-control"
            onChange={(e) => setSubject2(parseFloat(e.target.value))}
          />
          <label>Subject 3</label>
          <input
            type="number"
            className="form-control"
            onChange={(e) => setSubject3(parseFloat(e.target.value))}
          />
          <label>Subject 4</label>
          <input
            type="number"
            className="form-control"
            onChange={(e) => setSubject4(parseFloat(e.target.value))}
          />
          <label>Subject 5</label>
          <input
            type="number"
            className="form-control"
            onChange={(e) => setSubject5(parseFloat(e.target.value))}
          />
          <label>Subject 6</label>
          <input
            type="number"
            className="form-control"
            onChange={(e) => setSubject6(parseFloat(e.target.value))}
          />
        </div>

        <div className="ms-3">
          <h2>Credit Hours</h2>
          <label>Subject 1</label>
          <input
            type="number"
            className="form-control"
            onChange={(e) => setCredithours1(parseFloat(e.target.value))}
          />
          <label>Subject 2</label>
          <input
            type="number"
            className="form-control"
            onChange={(e) => setCredithours2(parseFloat(e.target.value))}
          />
          <label>Subject 3</label>
          <input
            type="number"
            className="form-control"
            onChange={(e) => setCredithours3(parseFloat(e.target.value))}
          />
          <label>Subject 4</label>
          <input
            type="number"
            className="form-control"
            onChange={(e) => setCredithours4(parseFloat(e.target.value))}
          />
          <label>Subject 5</label>
          <input
            type="number"
            className="form-control"
            onChange={(e) => setCredithours5(parseFloat(e.target.value))}
          />
          <label>Subject 6</label>
          <input
            type="number"
            className="form-control"
            onChange={(e) => setCredithours6(parseFloat(e.target.value))}
          />
        </div>
      </div>
      <div className="text-center mt-2">
        <button className="btn btn-primary btn-center" onClick={calculateCgpa}>
          Calculate CGPA
        </button>
        <h3 className="mt-2">Your CGPA is {cgpa.toFixed(3)}</h3>
      </div>
      <div>
        <h2>Key Points</h2>
        <h5>This CGPA calculator is made up with ReactJS and Bootstrap 5.</h5>
        <p>
          1- CGPA is the average of grade points obtained in all the subjects.
        </p>
        <p>
          2- CGPA is calculated by dividing the sum of grade points in a given
          period by the sum of credit hours attended by the student in that
          period.
        </p>
        <p>
          3- CGPA = Sum of (Grade Points × Credit Hours) / Sum of Credit Hours.
        </p>
        <p>4- If the subjects are 5 then add 0 in the 6th subject.</p>
        <a
          href="https://github.com/italhachaudhary/cgpa_calculatorReact"
          className="btn btn-secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          5- Source Code
        </a>
      </div>
    </div>
  );
}
