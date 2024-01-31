import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
export default function BlogPage(){
  return (
    <div>
      <section className="section gray-bg mt-5" id="blog">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <div className="section-title">
                <h2 className="fw-blod display-1">Latest Blogs</h2>
                <p>Read the latest Blogs and share your thoughts</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="blog-grid">
                <div className="blog-img">
                  <div className="date">04 FEB</div>
                  <Link href="#">
                    <Image src="https://www.bootdey.com/image/350x280/FFB6C1/000000"  width={350} height={280} alt="" className="img-fluid blogImage"/>
                  </Link>
                </div>
                <div className="blog-info">
                  <h5 className="fw-bold"><Link href="#">Prevent 75% of visitors from google analytics</Link></h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                  <div className="btn-bar">
                    <Link href="#" className="px-btn-arrow">
                      <span className="btn btn-primary">Read More <FontAwesomeIcon icon={faArrowAltCircleRight} className="smIcon" /> </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-grid">
                <div className="blog-img">
                  <div className="date">04 FEB</div>
                  <Link href="#">
                    <Image src="https://www.bootdey.com/image/350x280/87CEFA/000000" width={350} height={280} alt="" className="img-fluid blogImage"/>
                  </Link>
                </div>
                <div className="blog-info">
                  <h5 className="fw-bold"><Link href="#">Prevent 75% of visitors from google analytics</Link></h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                  <div className="btn-bar">
                    <Link href="#" className="px-btn-arrow">
                     <span className="btn btn-primary">Read More <FontAwesomeIcon icon={faArrowAltCircleRight} className="smIcon" /> </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-grid">
                <div className="blog-img">
                  <div className="date">04 FEB</div>
                  <Link href="#">
                    <Image src="https://www.bootdey.com/image/350x280/FF7F50/000000" width={350} height={280} alt="" className="img-fluid blogImage"/>
                  </Link>
                </div>
                <div className="blog-info">
                  <h5 className="fw-bold"><Link href="#">Prevent 75% of visitors from google analytics</Link></h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                  <div className="btn-bar">
                    <Link href="#" className="px-btn-arrow">
                      <span className="btn btn-primary">Read More <FontAwesomeIcon icon={faArrowAltCircleRight} className="smIcon" /> </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
export function generateMetadata() {
  return {
    title: "Blog Page WeFixar"
  }
}
