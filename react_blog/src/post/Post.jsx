import './post.css'


export const Post = () => {
  return (
    <div className="post">
        <img src="https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='postImg' />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit amet.</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <div className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis atque officiis et, aliquid explicabo est dicta, earum dolores tempore odio quidem sunt laborum. Architecto, nihil! Rem blanditiis repellat voluptas culpa!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis atque officiis et, aliquid explicabo est dicta, earum dolores tempore odio quidem sunt laborum. Architecto, nihil! Rem blanditiis repellat voluptas culpa!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis atque officiis et, aliquid explicabo est dicta, earum dolores tempore odio quidem sunt laborum. Architecto, nihil! Rem blanditiis repellat voluptas culpa!</div>
    </div>
  )
}
