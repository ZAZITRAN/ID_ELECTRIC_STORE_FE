import "./catagories.scss";
import SPcatalog from "./SPcatalog";
import React, { useState } from "react";
function Catagories() {
  const [inputpt, setInputpt] = useState(0);

  return (
    <>
      <div className="catagories">

        <div className="catagories__toptext">
          <div className="catagories__textto">All Categories</div>
          <div className="catagories__textnho">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.{" "}
          </div>
        </div>

        <div className="catagories__body">

          <div className="thanhloc">
            <div className="thanhloc-scroll">
              <div className="thanhloc-scroll__name">All Categories</div>
              <div className="thanhloc-scroll__list">
                <div className="thanhloc-scroll__son">
                  <div className="thanhloc-scroll__son-name">
                    Computer & Laptop
                  </div>
                  <div className="thanhloc-scroll__son-sl">(25)</div>
                </div>

                <div className="thanhloc-scroll__son">
                  <div className="thanhloc-scroll__son-name">
                    Mobile & Tablet
                  </div>
                  <div className="thanhloc-scroll__son-sl">(125)</div>
                </div>

                <div className="thanhloc-scroll__son">
                  <div className="thanhloc-scroll__son-name">Camera</div>
                  <div className="thanhloc-scroll__son-sl"> (150)</div>
                </div>

                <div className="thanhloc-scroll__son">
                  <div className="thanhloc-scroll__son-name">
                    TV & Smart Box
                  </div>
                  <div className="thanhloc-scroll__son-sl">(75)</div>
                </div>

                <div className="thanhloc-scroll__son">
                  <div className="thanhloc-scroll__son-name">
                    Home Appliance
                  </div>
                  <div className="thanhloc-scroll__son-sl">(75)</div>
                </div>

                <div className="thanhloc-scroll__son">
                  <div className="thanhloc-scroll__son-name">Smart Watch</div>
                  <div className="thanhloc-scroll__son-sl">(45)</div>
                </div>
              </div>
            </div>
            <div className="thanhloc-keoPrice">
              <div className="thanhloc-keoPrice__text">Filter by Price</div>
              <div className="renge-input">
                <div className="renge-input__pt">
                  <div className="fill" style={{ width: `${inputpt}%` }}></div>
                </div>
                <input
                  className="input-keo"
                  onChange={(e) => setInputpt(e.target.value)}
                  value={inputpt}
                  min={0}
                  max={100}
                  type="range"
                />
              </div>
              <div className="thanhloc-keoPrice__price">
                <div className="thanhloc-keoPrice__textpr">Price:</div>
                <div className="thanhloc-keoPrice__number">$100 - $250 </div>
              </div>
            </div>

            <div className="thanhloc-location thanhloc-keoPrice">
              <div className="thanhloc-keoPrice__text">Filter by Location</div>

              <div className="location-sun">
                <input type="checkbox" />
                <div className="location-sun__name">Jakata</div>
              </div>
              <div className="location-sun">
                <input type="checkbox" />
                <div className="location-sun__name">Yogyakarta</div>
              </div>
              <div className="location-sun">
                <input type="checkbox" />
                <div className="location-sun__name">Bandung</div>
              </div>
              <div className="location-sun">
                <input type="checkbox" />
                <div className="location-sun__name">Semarang</div>
              </div>
              <div className="location-sun">
                <input type="checkbox" />
                <div className="location-sun__name">Surabaya</div>
              </div>
            </div>
            <div className="thanhloc-location thanhloc-keoPrice">
              <div className="thanhloc-keoPrice__text">Filter by Rating</div>

              <div className="location-sun">
                <input type="checkbox" />
                <div className="location-sun__name cata">
                <i className="fa-solid fa-star"></i>
                  
               </div>
              </div>
              <div className="location-sun">
                <input type="checkbox" />
                <div className="location-sun__name cata">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                </div>
              </div>
              <div className="location-sun">
                <input type="checkbox" />
                <div className="location-sun__name cata">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                </div>
              </div>
              <div className="location-sun">
                <input type="checkbox" />
                <div className="location-sun__name cata">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                </div>
              </div>
              <div className="location-sun">
                <input type="checkbox" />
                <div className="location-sun__name cata">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>

            <div className="filter-btn">Filter</div>
            <div className="resetfilter-btn">Reset Filter</div>

          </div>

          <div className="sp-loc">
            <div className="list-sques">
              <div className="sques-sun">
                <div className="sques-sun__img">
                  <img src="/catalogImg/Laptop.png" alt="" />
                </div>
                <div className="sques-sun__text">Computer & Laptop</div>
              </div>
              <div className="sques-sun">
                <div className="sques-sun__img">
                  <img src="/catalogImg/Smartphone.png" alt="" />
                </div>
                <div className="sques-sun__text">Mobile & Tablet</div>
              </div>
              <div className="sques-sun">
                <div className="sques-sun__img">
                  <img src="/catalogImg/Camera.png" alt="" />
                </div>
                <div className="sques-sun__text">Camera</div>
              </div>
              <div className="sques-sun">
                <div className="sques-sun__img">
                  <img src="/catalogImg/Tv And Remote.png" alt="" />
                </div>
                <div className="sques-sun__text">TV & Smart Box</div>
              </div>
              <div className="sques-sun">
                <div className="sques-sun__img">
                  <img src="/catalogImg/Air Conditioner.png" alt="" />
                </div>
                <div className="sques-sun__text">Home Appliance</div>
              </div>
              <div className="sques-sun">
                <div className="sques-sun__img">
                  <img src="/catalogImg/Smart Watch.png" alt="" />
                </div>
                <div className="sques-sun__text">Smart Watch</div>
              </div>
              <div className="sques-sun">
                <div className="sques-sun__img">
                  <img src="/catalogImg/Recording.png" alt="" />
                </div>
                <div className="sques-sun__text">Microphone & Audio</div>
              </div>
              <div className="sques-sun">
                <div className="sques-sun__img">
                  <img src="/catalogImg/Gamepad.png" alt="" />
                </div>
                <div className="sques-sun__text">Gaming</div>
              </div>
              <div className="sques-sun">
                <div className="sques-sun__img">
                  <img src="/catalogImg/Printer.png" alt="" />
                </div>
                <div className="sques-sun__text">Printer</div>
              </div>
              <div className="sques-sun">
                <div className="sques-sun__img">
                  <img src="/catalogImg/Headset.png" alt="" />
                </div>
                <div className="sques-sun__text">Accessories</div>
              </div>
              <div className="sques-sun">
                <div className="sques-sun__img">
                  <img src="/catalogImg/Speaker.png" alt="" />
                </div>
                <div className="sques-sun__text">Other</div>
              </div>
            </div>

            <div className="featured-brand">
              <div className="featured-brand-name">Featured Brand</div>
              <div className="list-featured-brand__img">
                <div className="featured-brand__img one">
                  <img src="/catalogImg/SimSong.png" alt="" />
                </div>
                <div className="featured-brand__img two">
                  <img src="/catalogImg/Harps.png" alt="" />
                </div>
                <div className="featured-brand__img three">
                  <img src="/catalogImg/DiskVan.png" alt="" />
                </div>
                <div className="featured-brand__img four">
                  <img src="/catalogImg/Ikon.png" alt="" />
                </div>
                <div className="featured-brand__img five">
                  <img src="/catalogImg/Strons.png" alt="" />
                </div>
              </div>
            </div>
            <SPcatalog></SPcatalog>







          </div>
        </div>
        
      </div>
    </>
  );
}

export default Catagories;