import "./blogform.scss";
import "../HomePage-component/blog.scss";
function BlogForm() {
    let arr = [1,1,1,1,1,1]
  return (
    <>
      <div className="blog-page">
        <div className="catagories__toptext">
          <div className="catagories__textto">Latest Blog</div>
          <div className="catagories__textnho">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.{" "}
          </div>
        </div>

        <div className="blog-page__body">
          <div className="blog-body-filter">
            <div className="blog-body-filter__search">
              <i class="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="Search..." />
            </div>

            <div className="blog-body-filter__catagori">
              <div className="blog-body-filter__catatext">Categories</div>

              <div className="blog-body-filter__listtext">
                <div className="blog-body-filter__textsun">
                  <i class="fa-solid fa-angle-right"></i>
                  <div>Technology</div>
                </div>
                <div className="blog-body-filter__textsun">
                  <i class="fa-solid fa-angle-right"></i>
                  <div>Blog</div>
                </div>
                <div className="blog-body-filter__textsun">
                  <i class="fa-solid fa-angle-right"></i>
                  <div>Gadget</div>
                </div>
                <div className="blog-body-filter__textsun">
                  <i class="fa-solid fa-angle-right"></i>
                  <div>Gaming</div>
                </div>
                <div className="blog-body-filter__textsun">
                  <i class="fa-solid fa-angle-right"></i>
                  <div>Reviews</div>
                </div>
                <div className="blog-body-filter__textsun">
                  <i class="fa-solid fa-angle-right"></i>
                  <div>News</div>
                </div>
              </div>
            </div>

            <div className="blog-body-filter-tag">
              <div className="blog-body-filter-tag__toptext">Tags</div>

              <div className="blog-body-filter-tag__list">
                <div className="blog-body-filter-tag__sun">
                  <div>Tips</div>
                </div>
                <div className="blog-body-filter-tag__sun">
                  <div>Tech</div>
                </div>
                <div className="blog-body-filter-tag__sun">
                  <div>Blog</div>
                </div>
                <div className="blog-body-filter-tag__sun">
                  <div>News</div>
                </div>
                <div className="blog-body-filter-tag__sun">
                  <div>Gaming</div>
                </div>
                <div className="blog-body-filter-tag__sun">
                  <div>Reviews</div>
                </div>
              </div>
            </div>

            <div className="recent-post">
              <div className="recent-post__toptext">Recent Post</div>

              <div className="recent-post__sun">
                <div className="recent-post__wrapimg">
                  <img src="" alt="" />
                </div>

                <div className="recent-post__wrapinfo">
                  <div className="recent-post__comment">
                    Lorem ipsum dolor sit amet, consectetur.{" "}
                  </div>
                  <div className="nameAdmin">
                    <div className="name">Admin</div>
                    <div className="namsinh"> - 12 June 2021</div>
                  </div>
                </div>
              </div>

              <div className="recent-post__sun">
                <div className="recent-post__wrapimg">
                  <img src="" alt="" />
                </div>

                <div className="recent-post__wrapinfo">
                  <div className="recent-post__comment">
                    Lorem ipsum dolor sit amet, consectetur.{" "}
                  </div>
                  <div className="nameAdmin">
                    <div className="name">Admin</div>
                    <div className="namsinh"> - 12 June 2021</div>
                  </div>
                </div>
              </div>
              <div className="recent-post__sun">
                <div className="recent-post__wrapimg">
                  <img src="" alt="" />
                </div>

                <div className="recent-post__wrapinfo">
                  <div className="recent-post__comment">
                    Lorem ipsum dolor sit amet, consectetur.{" "}
                  </div>
                  <div className="nameAdmin">
                    <div className="name">Admin</div>
                    <div className="namsinh"> - 12 June 2021</div>
                  </div>
                </div>
              </div>
            </div>
          </div>




          <div className="blog-body-listsp">
            <div className="newarrival blog">
              <div className="newarrival__listsp">
                {
                    arr.map((e , index)=>{
                        return(
                 <div key={index} className="newarrival__sun cc">
                  <div className="newarrival__img cc">
                    <img src="" alt="" />
                  </div>

                  <div className="newarrival__in4sp">
                    <div className="newarrival__in4sp-left1">
                      <div className="cc__we">
                        We Offer the Best Quality Product to Our Customers
                      </div>
                      <div className="loren">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod... 
                      </div>
                      <div className="cc__admin">
                        by <div className="cc__admin-name">Admin</div>, 12 Jan
                        2021
                      </div>
                    </div>
                  </div>
                  


                </div>
                        )
                    })
                }
              </div>
            </div>
          </div>








        </div>


      </div>
    </>
  );
}

export default BlogForm;
