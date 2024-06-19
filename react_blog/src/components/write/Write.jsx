import "./write.css";

const Write = () => {
  return (
    <div className="write">
    <img src="https://images.pexels.com/photos/1539700/pexels-photo-1539700.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="writeImg" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className=" writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea type="text" placeholder="Tell your story..." className="writeInput writeText "></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
};

export default Write;
