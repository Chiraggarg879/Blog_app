import "./singlePost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostwrapper">
        <img
          src="https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author : <b>Safak</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className = 'singlePostDesc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          commodi est assumenda voluptatibus dolores unde minus. Autem ad
          laboriosam aliquid sunt laudantium aperiam optio ipsa natus facere
          aliquam enim quia possimus fugiat consequatur omnis provident velit
          expedita, vel ratione consequuntur quis delectus. In odit nobis,
          cumque delectus doloremque voluptas id veniam commodi culpa
          necessitatibus explicabo repellendus nam magnam, eius blanditiis sint
          eligendi aut aperiam dolorem libero ad temporibus ipsa? Voluptates
          totam dignissimos quaerat sint illum dicta nemo eius quasi maxime
          asperiores necessitatibus omnis, ratione at molestias nam consequuntur
          facere corrupti distinctio veritatis. Vel, et? Unde totam itaque
          sapiente nulla ab.lorem30
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
