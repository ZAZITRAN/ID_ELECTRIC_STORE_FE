import "./blogform.scss";
import "./bloglist.scss"
import "../HomePage-component/blog.scss";
import HeaderCata from "../Catalog-component/HeaderCata"
import Footer from "../component-recycle/Footer";
function BlogList() {
    let arr = [1,1,1]
  return (
    <>
    <HeaderCata textBlog="Blog"></HeaderCata>
      <div className="blog-page">
        <div className="catagories__toptext">
          <div className="catagories__textto">Blog Post</div>
          <div className="catagories__textnho">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.{" "}
          </div>
        </div>





      </div>
      <div className="setup-mar">

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

          <div className="blog-detail">
            <div className="blog-detail__texttop">6 Best Smartphone for e-Sport Pro Player</div>
            <div className="blog-detail__lichcomment">

                <div className="blog-detail__lichjune">
                    <img src="blogListImg/Calendar.png" alt="" />
                    <div>12 June 2021</div>
                </div>
                <div className="blog-detail__byaminone">
                    <img src="blogListImg/User.png" alt="" />
                    <div>by Admin One</div>
                </div>
                <div className="blog-detail__comment12">
                    <img src="blogListImg/Comment.png" alt="" />
                    <div>12 Comments</div>
                </div>
                
                
                
            </div>

            <div className="blog-detail__sp">
                <img src="" alt="" />
            </div>
            <div className="blog-detail__ttchitiet">To support performance in playing, a professional e-sport player must use the right device. To support performance in playing, a professional e-sport player must use the right e-sport-support smartphone.</div>
            <div className="blog-detail__ttchitiet">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            <div className="blog-detail__ttchitietColor">
                <div>“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ”</div>
                <span>- Sam Alabama</span>
            </div>
            <div className="blog-detail__ttchitiet">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </div>
            <div className="blog-detail__ttchitiet">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</div>
            
            <div className="blog-detail__tagstip">
                <div className="tips">
                    <div className="tips__text">Tags:</div>
                    <div className="tips__tbt">Tips, Blog, Tech</div>
                </div>
                <div className="share">
                    <div className="share__text">Share:</div>
                    <div className="share__tbt">
                        <img src="blogListImg/Facebook.png" alt="" />
                        <img src="blogListImg/Twitter.png" alt="" />
                        <img src="blogListImg/bx_bx-share-alt.png" alt="" />

                    </div>
                    
                    
                </div>
            </div>

            <div className="blog-body-listsp list">
            <div className="newarrival blog list">
                <div className="RelatedPost">Related Post</div>
              <div className="newarrival__listsp list">
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

      </div>
      <Footer></Footer>
    </>
  );
}

export default BlogList;
