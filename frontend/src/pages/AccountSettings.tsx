import "./styles/AccountSettings.css"
import { IoIosLogOut } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";

const AccountSettings = () => {
    return (
        <section className="account-settings">
            <div className="as-top-header">
                <h1>Account Settings</h1>
            </div>
            <div className="as-container">
                <main className="as-container-left">
                    <h1>General Information</h1>
                    <p>Setup your account, edit your profile details, and change your password</p>
                    <div className="as-name-container">
                        <input
                            className="fn-name-container"
                            placeholder="Username"
                            type="text" 
                            />
                    </div>
                    <h1>Account Information</h1>
                    <p>Change your email and password</p>
                    <div className="as-emailpass-container">
                        <input
                            className={`as-email`}
                            placeholder="Email"
                            type="text" 
                        />
                        <a className="as-a-change"></a>
                        <input
                            className={`as-password`}
                            placeholder="Password"
                            type="password"
                        />
                        <input
                            className={`as-confirm-password`}
                            placeholder="Confirm Password"
                            type="password"
                        />
                        <a className="as-a-change"></a>
                    </div>
                </main>
                <main className="as-container-right">
                    <MdAccountCircle fontSize="15rem" className="default-acc-pic"/>
                    <h3>USERNAME</h3>
                    <p>EMAIL</p>
                    <button className="as-save-btn">Save Changes</button>
                </main>
            </div>
        </section>
    )
}

export default AccountSettings