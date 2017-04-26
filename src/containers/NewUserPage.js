import classNames from 'classnames';
import every from 'lodash/every';
import values from 'lodash/values';
import React, { Component, PropTypes } from 'react';
import Button from 'react-md/lib/Buttons/Button';
import Card from 'react-md/lib/Cards/Card';
import CardText from 'react-md/lib/Cards/CardText';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import Divider from 'react-md/lib/Dividers';
import SelectField from 'react-md/lib/SelectFields';
import Switch from 'react-md/lib/SelectionControls/Switch';
import TextField from 'react-md/lib/TextFields';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { fetchLocations } from '../actions/location';
import { createUser } from '../actions/user';
import Loading from '../components/common/Loading';
import {
  validateCustom,
  validateEmail,
  validatePresence
} from '../utils/inputValidations';

import '../assets/scss/newUserPage.scss';

class NewUserPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        admin: false,
        billable: true,
        cognizantId: '',
        email: '',
        firstName: '',
        lastName: '',
        locationId: '',
        title: ''
      },
      formErrors: {
        cognizantId: true,
        email: true,
        firstName: true,
        lastName: true,
        locationId: true
      }
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchLocations());
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(createUser(this.state.formData));
  }

  handleUpdate(name, value) {
    this.updateFormData(name, value);
    this.updateFormErrors(name, value);
  }

  updateFormData(name, value) {
    const newFormData = Object.assign({}, this.state.formData, { [name]: value });
    this.setState({ formData: newFormData });
  }

  updateFormErrors(name, value) {
    const errors = {};
    switch (name) {
      case 'firstName':
      case 'lastName':
        errors[name] = !validatePresence(value);
        break;
      case 'email':
        errors[name] = !validateEmail(value);
        break;
      case 'cognizantId':
        errors[name] = !validateCustom(value, /^\d{6}$/);
        break;
      default:
        errors[name] = false;
    }
    const newFormErrors = Object.assign({}, this.state.formErrors, errors);
    this.setState({ formErrors: newFormErrors });
  }

  validateForm() {
    return every(values(this.state.formErrors), value => !value);
  }

  render() {
    if (this.props.requesting) {
      return (
        <Card className="page-container">
          <Loading />
        </Card>
      );
    }

    const { formData, formErrors } = this.state;

    // Force form fields to full width on mobile and tablet
    const formFieldGridCellClasses = classNames(
      'md-cell',
      'md-cell--6-desktop',
      'md-cell--12-tablet',
      'md-cell--12-mobile'
    );

    return (
      <Card className="new-user page-container">
        <CardTitle
          className="new-user__title page-container__title"
          title="New User"
        />
        <Divider />
        <CardText className="new-user__body md-grid">
          <TextField
            className={formFieldGridCellClasses}
            errorText="This is a required field"
            id="first-name"
            label="First Name"
            name="firstName"
            onChange={(value, e) => this.handleUpdate(e.target.name, value)}
            required
            value={formData.firstName}
          />
          <TextField
            className={formFieldGridCellClasses}
            errorText="This is a required field"
            id="last-name"
            label="Last Name"
            name="lastName"
            onChange={(value, e) => this.handleUpdate(e.target.name, value)}
            required
            value={formData.lastName}
          />
          <TextField
            className={formFieldGridCellClasses}
            error={formData.email ? formErrors.email : false}
            errorText="Please provide a valid email"
            id="email"
            label="Email"
            name="email"
            onChange={(value, e) => this.handleUpdate(e.target.name, value)}
            required
            value={formData.email}
          />
          <TextField
            className={formFieldGridCellClasses}
            error={formData.cognizantId ? formErrors.cognizantId : false}
            errorText="Please provide a valid Cognizant ID"
            id="cognizant-id"
            label="Cognizant ID"
            name="cognizantId"
            onChange={(value, e) => this.handleUpdate(e.target.name, value)}
            required
            value={formData.cognizantId}
          />
          <TextField
            className={formFieldGridCellClasses}
            id="job-title"
            label="Job Title"
            name="title"
            onChange={(value, e) => this.updateFormData(e.target.name, value)}
            value={formData.title}
          />
          <SelectField
            className={formFieldGridCellClasses}
            errorText="Please select a location"
            id="locations"
            itemLabel="name"
            itemValue="id"
            label="Location"
            menuItems={this.props.locations}
            name="location"
            onChange={(value) => this.handleUpdate('locationId', value)}
            required
            value={formData.locationId}
          />
          <div className="new-user__admin-options md-cell md-cell--12">
            <Switch
              checked={formData.billable}
              id="billable"
              label="Billable"
              labelBefore
              name="billable"
              onChange={(value, e) => this.updateFormData(e.target.name, value)}
            />
            <Switch
              checked={formData.admin}
              id="admin"
              label="Admin"
              labelBefore
              name="admin"
              onChange={(value, e) => this.updateFormData(e.target.name, value)}
            />
          </div>
          <div className="form-actions md-cell md-cell--12">
            <Button
              className="new-user__cancel-btn"
              flat
              label="cancel"
              onClick={() => browserHistory.goBack()}
              secondary
            />
            <Button
              className="new-user__save-btn"
              disabled={!this.validateForm()}
              label="Save"
              onClick={e => this.handleSubmit(e)}
              raised
              secondary
            />
          </div>
        </CardText>
      </Card>
    );
  }
}

NewUserPage.propTypes = {
  dispatch: PropTypes.func,
  locations: PropTypes.array,
  requesting: PropTypes.bool
};

function mapStateToProps(state) {
  return {
    locations: state.locations.list,
    requesting: state.locations.requesting
  };
}

export default connect(mapStateToProps)(NewUserPage);
