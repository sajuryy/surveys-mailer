import React, { Component } from 'react';
import StripeCheckput from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';


// handleToken
class Payments extends Component {
    render() {
        return (
            <StripeCheckput
                name="FSWD"
                description="$5 for 5 credits"
                amount={500} //$5
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">Add Credits</button>
            </StripeCheckput>
        );
    }
};

export default connect(null, actions)(Payments);
