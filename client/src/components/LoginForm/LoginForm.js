import * as React from 'react'
import { Link, Redirect } from 'react-router-dom'

export default function LoginForm(props) {
    return (
        <div>
            {props.user.jwt && <Redirect to={'/'}></Redirect>}

            {props.values.signupMode && <Redirect to={'/signup'}></Redirect>}

            {!props.values.signupMode &&
                <div>
                    <Link to={`/`}>Ad's list</Link>
                    <form onSubmit={props.onSubmit}>
                        <h4>Login your account to begin selling items</h4>
                        <label>
                            Email:
                        <input type="email" required name="email" onChange={props.onChange} value={props.values.email} />
                        </label>

                        <label>
                            Password:
                        <input type="password" required name="password" minLength="6" onChange={props.onChange} value={props.values.password} />
                        </label>

                        <button type="submit">Login</button>

                        {/* Display error message */}
                        {props.user.url && props.user.url.includes('login') &&
                            <p>{props.user.message}</p>}

                        <p>Don't have an account yet? Sign up to create an account</p>

                        <button type="button" onClick={props.onClick}>Sign up</button>
                    </form>
                </div>}
        </div>)
}