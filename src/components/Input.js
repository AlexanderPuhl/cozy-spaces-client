import React from 'react';

export default class Input extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.meta.active && this.props.meta.active) {
            this.input.focus();
        }
    }

    render() {
        let error;
        if (this.props.meta.touched && this.props.meta.error) {
            error = <div className="form-error">{this.props.meta.error}</div>;
        }

        let warning;
        if (this.props.meta.touched && this.props.meta.warning) {
            warning = (
                <div className="form-warning">{this.props.meta.warning}</div>
            );
        }

        return (
            <div className="form-input">
                <label htmlFor={this.props.label}>{this.props.labelText || this.props.label}</label>
                <input
                    {...this.props.input}
                    aria-label={this.props.label}
                    className='inputPaddingStripped'
                    id={this.props.label}
                    type={this.props.type}
                    ref={input => (this.input = input)}
                    min={this.props.min}
                    max={this.props.max}
                />
                <div>
                    {error}
                    {warning}
                </div>
                <br />
            </div>
        );
    }
}
