import "./settings.css";
import SideBar from "../../components/sidebar/SideBar";
const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update your account</span>
            <span className="settingsDeleteTitle">Delete your account</span>
        </div>
        <form className="settingsForm">
            <label >Profile Picture</label>
            <div className="settingsPP">
                <img src="https://images.pexels.com/photos/9558758/pexels-photo-9558758.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <label htmlFor="fileInput">
                <i className="settingsPPIcon far fa-user-circle"></i>
                </label>
                <input type="file" id = 'fileInput' style = {{display:"none"}}/>
            </div>
            <label>Username</label>
            <input type="text" placeholder="John" />
            <label>Email</label>
            <input type="email" placeholder="john@gmail.com" />
            <label>Password</label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <SideBar></SideBar>
    </div>
  );
};

export default Settings;
