"use client"
import Image from "next/image";
import styles from "./page.module.css";
// import your icons
import { Library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// get our fontawesome imports
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
import BootstrapClient from "@/components/bootstrapclient.js";
import MainImage from "../../public/image/fixarman.jpg";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="container mt-5">
        <div class="row">
          <div className="col-md-6 col-12">
            <h1 className="mt-5 mb-2 fw-bold display-1">
             Get Fixed at Doorsteps
            </h1>
            <p className="mb-3">
              Where convenience meets quality service. Find
              skilled professionals is committed to bringing top-notch repair
              and maintenance services directly to your doorstep. From home
              repairs to technical fixes, we've got you covered. Experience
              hassle-free solutions without stepping out because your comfort
              is our priority. Discover the ease of getting everything fixed,
              right where you are. Your satisfaction, delivered.
            </p>
            <div class="input-group input-group-lg">
              <input
                type="text"
                class="form-control"
                placeholder="My Location is..."
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
              />
              <button class="input-group-text" id="getLocation">
              <FontAwesomeIcon icon={faLocationCrosshairs} style={{ width: "25px;", verticalAlign: "sub" }}/> 
                {" "}
              </button>
            </div>
            <input type="submit" value={'Let\'s Find Fixar'} className="btn btn-primary btn-lg my-3"/>
          </div>
          <div className="col-md-6 col-12 text-center">
          <div className="imageContainer">
          <Image src={MainImage} alt="" width={400} height={700} className="img-fluid"/>
          </div>
          </div>
        </div>
      </div>

      <BootstrapClient />
    </main>
  );
}
