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
import TextArea from 'react-md/lib/TextFields';
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

class Measure extends Component {
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
    alert("Measure Name : "+this.state.formData.firstName);
    alert("Measure Description : "+this.state.formData.lastName);
    //this.props.dispatch(createUser(this.state.formData));
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
      <div className="container">
          <form className="form-horizontal" role="form" >
                  <h2>Measure</h2>
               <div className="form-group">
                      <label for="measureName" className=" col-sm-3 control-label ">Name</label>
                      <div className="col-sm-8">
                          <TextField   name="firstName" placeholder="Measure Name"  className="form-control"  onChange={(value, e) => this.handleUpdate(e.target.name, value)}  value={formData.firstName}/>
                      </div>
               </div>
               <div className="form-group">
                      <label for="measureDescription" className="col-sm-3 control-label">Description</label>
                      <div className="col-sm-8">
                           <TextField   name="lastName" placeholder="Measure Description"  className="form-control"  onChange={(value, e) => this.handleUpdate(e.target.name, value)}  value={formData.lastName} />
                          
                      </div>
                  </div>
         
                 <div className="form-group">
                      <label for="measureType" className="col-sm-3 control-label">Type</label>
                      <div className="col-sm-8">
                          <select id="measureType" className="form-control">
                              <option>Afghanistan</option>
                              <option>Bahamas</option>
                              <option>Cambodia</option>
                              <option>Denmark</option>
                              <option>Ecuador</option>
                              <option>Fiji</option>
                              <option>Gabon</option>
                              <option>Haiti</option>
                          </select>
                      </div>
                  </div>
                  <div className="form-group">
                        <label for="measureCategory" className="col-sm-3 control-label">Category</label>
                        <div className="col-sm-8">
                            <select id="measureCategory" className="form-control">
                                <option>Afghanistan</option>
                                <option>Bahamas</option>
                                <option>Cambodia</option>
                                <option>Denmark</option>
                                <option>Ecuador</option>
                                <option>Fiji</option>
                                <option>Gabon</option>
                                <option>Haiti</option>
                            </select>
                        </div>
                    </div>
          
         <div className="form-group">
                      <label className="control-label col-sm-3"></label>
                      <div className="col-sm-8">
                          <div className="row">
                              <div className="col-sm-4">
                                  <label className="radio-inline">
                                      <input type="radio" id="publicRadio" value="Public"/>Public
                                  </label>
                              </div>
                              <div className="col-sm-4">
                                  <label className="radio-inline">
                                      <input type="radio" id="privateRadio" value="Private"/>Private
                                  </label>
                              </div>
                              <div className="col-sm-4">
                                  <label className="radio-inline">
                                      <input type="radio" id="readOnlyRadio" value="readOnly"/>Read Only
                                  </label>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="form-group">
                      <div className="col-sm-8 col-sm-offset-3">
                          <Button  className="btn btn-primary btn-block" label="Save&Continue" onClick={e => this.handleSubmit(e)}/>
                      </div>
                  </div>
                      
          </form>
        </div>
    );
  }
}

Measure.propTypes = {
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

export default connect(mapStateToProps)(Measure);
