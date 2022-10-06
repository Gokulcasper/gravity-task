import React from "react";
import "./manageReport.css";

const ManageReport = () => {
  const data = [
    {
      load_id: "AKOOOO",
      admin_no: "AD112",
      name: "Soumyadip Chudhury",
      status: "Approved",
      date: "18.01.2022",
      return: "16.01.2022",
      collect_form: "Media Store",
      ao: "Liang Kai Jie",
      loan_type: "Normal",
    },
    {
      load_id: "AKOOOO",
      admin_no: "AD112",
      name: "Soumyadip Chudhury",
      status: "Approved",
      date: "18.01.2022",
      return: "16.01.2022",
      collect_form: "Media Store",
      ao: "Liang Kai Jie",
      loan_type: "Normal",
    },
    {
      load_id: "AKOOOO",
      admin_no: "AD112",
      name: "Soumyadip Chudhury",
      status: "Approved",
      date: "18.01.2022",
      return: "16.01.2022",
      collect_form: "Media Store",
      ao: "Liang Kai Jie",
      loan_type: "Normal",
    },
    {
      load_id: "AKOOOO",
      admin_no: "AD112",
      name: "Soumyadip Chudhury",
      status: "Approved",
      date: "18.01.2022",
      return: "16.01.2022",
      collect_form: "Media Store",
      ao: "Liang Kai Jie",
      loan_type: "Normal",
    },
    {
      load_id: "AKOOOO",
      admin_no: "AD112",
      name: "Soumyadip Chudhury",
      status: "Approved",
      date: "18.01.2022",
      return: "16.01.2022",
      collect_form: "Media Store",
      ao: "Liang Kai Jie",
      loan_type: "Normal",
    },
  ];
  return (
    <div className="r_container">
      <div className="report_container">
        {data.map((detail) => {
          return (
            <div className="report_row">
              {/* <div className="report_rowItem"> */}
              <div className="report_column ">
                <h6>Loan ID</h6>
                <p>{detail.load_id}</p>
              </div>
              {/* </div> */}

              <div className="report_rowItem">
                <div className="report_column">
                  <h6>Admin No.</h6>
                  <p>{detail.admin_no}</p>
                </div>
              </div>

              <div className="report_rowItem">
                <div className="report_column">
                  <h6>Name</h6>
                  <p>{detail.name}</p>
                </div>
              </div>

              <div className="report_rowItem">
                <div className="report_column">
                  <h6>Status</h6>
                  <p style={{ color: "green" }}>{detail.status}</p>
                </div>
              </div>

              <div className="report_rowItem">
                <div className="report_column">
                  <h6>Collection Date</h6>
                  <p>{detail.date}</p>
                </div>
              </div>

              <div className="report_rowItem">
                <div className="report_column">
                  <h6>Return</h6>
                  <p>{detail.return}</p>
                </div>
              </div>

              <div className="report_rowItem">
                <div className="report_column">
                  <h6>Collection From</h6>
                  <p>{detail.collect_form}</p>
                </div>
              </div>

              <div className="report_rowItem">
                <div className="report_column">
                  <h6>AO</h6>
                  <p>{detail.ao}</p>
                </div>
              </div>

              <div className="report_rowItem">
                <div className="report_column">
                  <h6>Loan Type</h6>
                  <p>{detail.loan_type}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ManageReport;

// import React from "react";

// const Report = () => {
//   );
// };

// export default Report;
