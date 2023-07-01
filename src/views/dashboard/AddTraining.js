import React, { Component } from "react"
import TrainingDataService from "../../services/training.service"

export default class AddTraining extends Component {
  constructor(props) {
    super(props)
    // this.onChangeTitle = this.onChangeTitle.bind(this);
    // this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this)
    this.newTutorial = this.newTutorial.bind(this)

    this.onChangeCourseName = this.onChangeCourseName.bind(this)
    this.onChangeSector = this.onChangeSector.bind(this)
    this.onChangeBatchStartDate = this.onChangeBatchStartDate.bind(this)
    this.onChangeBatchEndDate = this.onChangeBatchEndDate.bind(this)
    this.onChangeIndustryVisitCompleted =
      this.onChangeIndustryVisitCompleted.bind(this)
    this.onChangeOjtCompleted = this.onChangeOjtCompleted.bind(this)

    this.onChangeTrainingStatus = this.onChangeTrainingStatus.bind(this)
    this.onChangeAttendencePercentage =
      this.onChangeAttendencePercentage.bind(this)

    this.onChangeAssessmentConducted =
      this.onChangeAssessmentConducted.bind(this)
    this.onChangeCertified = this.onChangeCertified.bind(this)
    this.onChangeDateOfCoursePassing =
      this.onChangeDateOfCoursePassing.bind(this)
    this.onChangeDateOfIssuanceOfCertificate =
      this.onChangeDateOfIssuanceOfCertificate.bind(this)

    this.onChangeCertificateNameOrAward =
      this.onChangeCertificateNameOrAward.bind(this)
    this.onChangeGrade = this.onChangeGrade.bind(this)
    this.onChangeComments = this.onChangeComments.bind(this)
    this.onChangeLastUpdateTimestamp =
      this.onChangeLastUpdateTimestamp.bind(this)
    this.onChangeCreationTimestamp = this.onChangeCreationTimestamp.bind(this)

    this.state = {
      traineeid: null,
      trainingid: null,
      courseName: "",
      sector: "",
      batchStartDate: "",
      batchEndDate: "",
      industryVisitCompleted: "",
      ojtCompleted: "",
      trainingStatus: "",
      attendencePercentage: "",
      assessmentConducted: "",
      certified: "",
      dateOfCoursePassing: "",
      dateOfIssuanceOfCertificate: "",
      certificateNameOrAward: "",
      grade: "",
      comments: "",
      lastUpdateTimestamp: "",
      creationTimestamp: "",

      submitted: false
    }
  }

  onChangeCourseName(e) {
    this.setState({
      courseName: e.target.value
    })
  }

  onChangeSector(e) {
    this.setState({
      sector: e.target.value
    })
  }
  onChangeBatchStartDate(e) {
    this.setState({
      batchStartDate: e.target.value
    })
  }
  onChangeBatchEndDate(e) {
    this.setState({
      batchEndDate: e.target.value
    })
  }
  onChangeIndustryVisitCompleted(e) {
    this.setState({
      industryVisitCompleted: e.target.value
    })
  }
  onChangeOjtCompleted(e) {
    this.setState({
      ojtCompleted: e.target.value
    })
  }
  onChangeTrainingStatus(e) {
    this.setState({
      trainingStatus: e.target.value
    })
  }
  onChangeAttendencePercentage(e) {
    this.setState({
      attendencePercentage: e.target.value
    })
  }

  onChangeAssessmentConducted(e) {
    this.setState({
      assessmentConducted: e.target.value
    })
  }

  onChangeCertified(e) {
    this.setState({
      certified: e.target.value
    })
  }

  onChangeDateOfCoursePassing(e) {
    this.setState({
      dateOfCoursePassing: e.target.value
    })
  }

  onChangeDateOfIssuanceOfCertificate(e) {
    this.setState({
      dateOfIssuanceOfCertificate: e.target.value
    })
  }

  onChangeCertificateNameOrAward(e) {
    this.setState({
      certificateNameOrAward: e.target.value
    })
  }

  onChangeGrade(e) {
    this.setState({
      grade: e.target.value
    })
  }

  onChangeComments(e) {
    this.setState({
      comments: e.target.value
    })
  }

  onChangeLastUpdateTimestamp(e) {
    this.setState({
      lastUpdateTimestamp: e.target.value
    })
  }

  onChangeCreationTimestamp(e) {
    this.setState({
      creationTimestamp: e.target.value
    })
  }

  saveTutorial() {
    var data = {
      courseName: this.state.courseName,
      sector: this.state.sector,
      batchStartDate: this.state.batchStartDate,
      batchEndDate: this.state.batchEndDate,
      industryVisitCompleted: this.state.industryVisitCompleted,
      ojtCompleted: this.state.ojtCompleted,
      trainingStatus: this.state.trainingStatus,
      attendencePercentage: this.state.attendencePercentage,
      assessmentConducted: this.state.assessmentConducted,
      certified: this.state.certified,
      dateOfCoursePassing: this.state.dateOfCoursePassing,
      dateOfIssuanceOfCertificate: this.state.dateOfIssuanceOfCertificate,
      certificateNameOrAward: this.state.certificateNameOrAward,
      grade: this.state.grade,
      comments: this.state.comments,
      lastUpdateTimestamp: this.state.lastUpdateTimestamp,
      creationTimestamp: this.state.creationTimestamp
    }

    TrainingDataService.create(data)
      .then(response => {
        this.setState({
          traineeid: response.data.traineeid,
          courseName: response.data.courseName,
          sector: response.data.sector,
          batchStartDate: response.data.batchStartDate,
          batchEndDate: response.data.batchEndDate,
          industryVisitCompleted: response.data.industryVisitCompleted,
          ojtCompleted: response.data.ojtCompleted,
          trainingStatus: response.data.trainingStatus,
          attendencePercentage: response.data.attendencePercentage,
          assessmentConducted: response.data.assessmentConducted,
          certified: response.data.certified,
          dateOfCoursePassing: response.data.dateOfCoursePassing,
          dateOfIssuanceOfCertificate:
            response.data.dateOfIssuanceOfCertificate,
          certificateNameOrAward: response.data.certificateNameOrAward,
          grade: response.data.grade,
          comments: response.data.comments,
          lastUpdateTimestamp: response.data.lastUpdateTimestamp,
          creationTimestamp: response.data.creationTimestamp,

          submitted: true
        })
        console.log(response.data)
      })
      .catch(e => {
        console.log(e)
      })
  }

  newTutorial() {
    this.setState({
      traineeid: null,
      courseName: "",
      sector: "",
      batchStartDate: "",
      batchEndDate: "",
      industryVisitCompleted: "",
      ojtCompleted: "",
      trainingStatus: "",
      attendencePercentage: "",
      assessmentConducted: "",
      certified: "",
      dateOfCoursePassing: "",
      dateOfIssuanceOfCertificate: "",
      certificateNameOrAward: "",
      grade: "",
      comments: "",
      lastUpdateTimestamp: "",
      creationTimestamp: "",
      submitted: false
    })
  }

  render() {
    return (
      <div className="container">
        <div className="submit-form">
          {this.state.submitted ? (
            <div>
              <h4 style={{ color: "white" }}>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={this.newTutorial}>
                Add
              </button>
            </div>
          ) : (
            <div className="form-container">
              <div className="form-column">
                <div className="form-group">
                  <label htmlFor="courseName" style={{ color: "#06ebfb" }}>
                    CourseName
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="courseName"
                    required
                    value={this.state.courseName}
                    onChange={this.onChangeCourseName}
                    name="courseName"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="sector" style={{ color: "white" }}>
                    Sector
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="sector"
                    required
                    value={this.state.sector}
                    onChange={this.onChangeSector}
                    name="sector"
                  />
                </div>
              </div>
              <div className="form-column">
                <div className="form-group">
                  <label htmlFor="batchStartDate" style={{ color: "white" }}>
                    BatchStartDate
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="batchStartDate"
                    required
                    value={this.state.batchStartDate}
                    onChange={this.onChangeBatchStartDate}
                    name="batchStartDate"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="batchEndDate" style={{ color: "white" }}>
                    BatchEndDate
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="batchEndDate"
                    required
                    value={this.state.batchEndDate}
                    onChange={this.onChangeBatchEndDate}
                    name="batchEndDate"
                  />
                </div>
              </div>
              <div className="form-column">
                <div className="form-group">
                  <label
                    htmlFor="industryVisitCompleted"
                    style={{ color: "white" }}
                  >
                    IndustryVisitCompleted
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="industryVisitCompleted"
                    required
                    value={this.state.industryVisitCompleted}
                    onChange={this.onChangeIndustryVisitCompleted}
                    name="industryVisitCompleted"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="ojtCompleted" style={{ color: "white" }}>
                    OJT Completed
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ojtCompleted"
                    required
                    value={this.state.ojtCompleted}
                    onChange={this.onChangeOjtCompleted}
                    name="ojtCompleted"
                  />
                </div>
              </div>
              <div className="form-column">
                <div className="form-group">
                  <label htmlFor="trainingStatus" style={{ color: "white" }}>
                    Training Status
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="trainingStatus"
                    required
                    value={this.state.trainPercentageingStatus}
                    onChange={this.onChangeTrainingStatus}
                    name="trainingStatus"
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="attendencePercentage"
                    style={{ color: "white" }}
                  >
                    Attendence Percentage
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="attendencePercentage"
                    required
                    value={this.state.attendencePercentage}
                    onChange={this.onChangeAttendencePercentage}
                    name="attendencePercentage"
                  />
                </div>
              </div>
              <div className="form-column">
                <div className="form-group">
                  <label
                    htmlFor="assessmentConducted"
                    style={{ color: "white" }}
                  >
                    AssessmentConducted
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="assessmentConducted"
                    required
                    value={this.state.assessmentConducted}
                    onChange={this.onChangeAssessmentConducted}
                    name="assessmentConducted"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="certified" style={{ color: "white" }}>
                    certified
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="certified"
                    required
                    value={this.state.certified}
                    onChange={this.onChangeCertified}
                    name="certified"
                  />
                </div>
              </div>
              <div className="form-column">
                <div className="form-group">
                  <label
                    htmlFor="dateOfCoursePassing"
                    style={{ color: "white" }}
                  >
                    DateOfCoursePassing
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="dateOfCoursePassing"
                    required
                    value={this.state.dateOfCoursePassing}
                    onChange={this.onChangeDateOfCoursePassing}
                    name="dateOfCoursePassing"
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="dateOfIssuanceOfCertificate"
                    style={{ color: "white" }}
                  >
                    DateOfIssuanceOfCertificate
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="dateOfIssuanceOfCertificate"
                    required
                    value={this.state.dateOfIssuanceOfCertificate}
                    onChange={this.onChangeDateOfIssuanceOfCertificate}
                    name="dateOfIssuanceOfCertificate"
                  />
                </div>
              </div>
              <div className="form-column">
                <div className="form-group">
                  <label
                    htmlFor="certificateNameOrAward"
                    style={{ color: "white" }}
                  >
                    CertificateNameOrAward
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="certificateNameOrAward"
                    required
                    value={this.state.certificateNameOrAward}
                    onChange={this.onChangeCertificateNameOrAward}
                    name="certificateNameOrAward"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="grade" style={{ color: "white" }}>
                    Grade
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="grade"
                    required
                    value={this.state.grade}
                    onChange={this.onChangeGrade}
                    name="grade"
                  />
                </div>
              </div>
              <div className="form-column">
                <div className="form-group">
                  <label htmlFor="comments" style={{ color: "white" }}>
                    comments
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="comments"
                    required
                    value={this.state.comments}
                    onChange={this.onChangeComments}
                    name="comments"
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="lastUpdateTimestamp"
                    style={{ color: "white" }}
                  >
                    LastUpdateTimestamp
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastUpdateTimestamp"
                    required
                    value={this.state.lastUpdateTimestamp}
                    onChange={this.onChangeLastUpdateTimestamp}
                    name="lastUpdateTimestamp"
                  />
                </div>
              </div>
              <div className="form-column">
                <div className="form-group">
                  <label htmlFor="creationTimestamp" style={{ color: "white" }}>
                    CreationTimestamp
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="creationTimestamp"
                    required
                    value={this.state.creationTimestamp}
                    onChange={this.onChangeCreationTimestamp}
                    name="creationTimestamp"
                  />
                </div>
              </div>
              <button onClick={this.saveTutorial} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}
