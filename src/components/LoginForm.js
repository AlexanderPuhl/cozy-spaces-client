import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './Input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
          <React.Fragment>
            <p className="loginText">Please login</p> 
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    id="username"
                    autocomplete="username"
                    validate={[required, nonEmpty]}
                    label="Username"
                />
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    id="password"
                    autocomplete="current-password"
                    validate={[required, nonEmpty]}
                    label='Password'
                />
                <button className="login" disabled={this.props.pristine || this.props.submitting}>
                    Cozy up!
                </button>
            </form>
          </React.Fragment>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
//