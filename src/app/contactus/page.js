import Link from "next/link";
import Image from "next/image";
import MainImage from "../../../public/image/fixarman.jpg";
const ContactPage = () => {
  return (
    <div>
      <div className="container mt-5">
        <section>
          <div className="text-center">
            <h1 className="fw-bold display-1">Contact Us</h1>
            <p className="mb-3">
              We would love to listen from you.{" "}
            </p>
          </div>
        </section>
        <section className="row my-5">
          <div className="col-md-6 col-12 my-5">
            <div className="card mx-5">
              <img src="" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Our Commitment</h5>
                <p className="card-text">
                  We are committed to redefining the repair experience for our
                  customers. No more hassles of transporting your items for
                  repairs or waiting in long queues. With WeFixar, our team of
                  skilled professionals is just a call away, ready to address your
                  repair needs promptly and effectively.
                </p>
                <Link href="#" className="btn btn-primary">
                  Go somewhere
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 my-5 p-3 rounded border border-primary border-1">
            <form className="row g-3">
              <div>
                <div className="mb-3">
                  <label htmlFor="fullname" className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="fullName" placeholder="Jone Deo" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                  <label htmlFor="Phone" className="form-label"> Phone</label>
                  <input type="tel" className="form-control" id="phone" placeholder="+1" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows={3} defaultValue={""} />
                </div>
                <div className="mb-3 d-grid">
                  <input type="submit" value={"Send"} className="btn btn-primary"/>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};
export default ContactPage;
