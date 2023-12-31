import React from "react";

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }

    onEmailChange = (e) => {
        this.setState({signInEmail: e.target.value})
    }

    onPasswordChange = (e) => {
        this.setState({signInPassword: e.target.value})
    }

    onSubmitSignIn = () => {
        fetch('https://smartbrain-api-qcx5.onrender.com/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user.id) {
                this.props.loadUser(user)
                this.props.onRouteChange('home')
            }
        })
    }

    render(){
        const { onRouteChange } = this.props
        return (
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="white f1 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="white db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input onChange={this.onEmailChange} required className="pa2 input-reset b--white ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="white db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input onChange={this.onPasswordChange} required className="b--white pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                        </div>
                        </fieldset>
                        <div className="">
                        <input onClick={this.onSubmitSignIn} className="white b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib hover-bg-black" type="submit" value="Sign in" />
                        </div>
                        <div className="lh-copy mt3">
                        <p onClick={() => onRouteChange('register')} className="white f6 link dim black db pointer">Register</p>
                        </div>
                    </div>
                </main>
            </article>
        )
    }
}

export default SignIn