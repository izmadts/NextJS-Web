import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="container mt-5">
      <section>
        <div className="text-center">
          <h1 className="fw-bold display-1">Welcome to WeFixar</h1>
          <p className="mb-3">
            your go-to doorstep repair service in Pakistan.{" "}
          </p>
          <p>
            At WeFixar, we understand the importance of convenience and the need
            for reliable solutions when it comes to repairs. Whether it's a home
            repair task or a technical fix, we bring expertise and efficiency
            right to your doorstep.
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
        <div className="col-md-6 col-12 my-5">
          <div className="card mx-5">
            <img src="" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Comprehensive Services</h5>
              <p className="card-text">
                From fixing household appliances to addressing complex technical
                issues, our wide range of services is designed to cover all your
                repair requirements. Our technicians are trained to handle
                diverse tasks, ensuring that you receive comprehensive solutions
                without the inconvenience of stepping out.
              </p>
              <Link href="#" className="btn btn-primary">
                Go somewhere
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="text-center">
          <h2 className="fw-bold display-4">Why Choose WeFixar?</h2>
          <div class="row d-flex align-items-stretch my-5">
            <div className="col-lg-3 col-6">
              <div class="card text-center hover-shadow-lg hover-translate-y-n10">
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body p-5">
                  <h5 class="card-title">Convenience</h5>
                  <p class="card-text">Our doorstep service saves you time and effort.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div class="card text-center hover-shadow-lg hover-translate-y-n10">
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body p-5">
                  <h5 class="card-title">Expertise</h5>
                  <p class="card-text">Skilled professionals with hands-on experience.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div class="card text-center hover-shadow-lg hover-translate-y-n10">
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body p-5">
                  <h5 class="card-title">Reliability</h5>
                  <p class="card-text">Trustworthy and efficient repairs for your peace of mind.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div class="card text-center hover-shadow-lg hover-translate-y-n10">
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body p-5">
                  <h5 class="card-title">Prompt Response</h5>
                  <p class="card-text">We prioritize your repair needs with a quick turnaround.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutPage;
