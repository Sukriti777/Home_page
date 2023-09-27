import React from "react";
import {
  UilInstagram,
  UilFacebook,
  UilTwitterAlt,
  UilWhatsapp,
  UilPhoneAlt,
} from "@iconscout/react-unicons";

function Footer() {
  return (
    <>
      {/* Become a Vendor Section */}
      <section className="bg-transparent m-auto ven-des w-[60%] p-8">
        <img
          className="m-auto mb-8 h-72"
          src="https://grapplertodd.com/wp-content/uploads/2022/04/vendor.png"
          alt="logo/image"
        />
        <Heading text="Become a Vendor" />
        <Para text="Join our thriving marketplace as a vendor and unlock new opportunities for your business. Showcase your products to a diverse customer base and boost your sales. Benefit from our user-friendly platform, robust marketing support, and seamless payment processing. Maximize your reach, connect with buyers worldwide, and grow your brand. Experience the advantages of being a valued vendor: increased visibility, flexible inventory management, and personalized seller tools. Don't miss out on this chance to expand your business and achieve your entrepreneurial goals. Sign up today and become a successful vendor" />
        <button className="btn btn-outline btn-success">Learn More</button>
      </section>

      {/* Social Handles Container Section */}

      <section className="w-[100%] bg-slate-600 m-auto text-white p-8 my-8">
        <Heading text="Follow Us!" />
        <Para text="Stay updated with our latest news and events, follow us for exclusive content!" />

        <div className="social-handles flex justify-evenly items-center w-[100%] my-8 ">
          <p className="flex items-center">
            <UilInstagram className="social-icons" size="50" />
            <IconName text="Instagram" />
          </p>
          <p className="flex items-center">
            <UilWhatsapp className="social-icons" size="50" />
            <IconName text="Whatsapp" />
          </p>
          <p className="flex items-center">
            <UilTwitterAlt className="social-icons" size="50" />
            <IconName text="Twitter" />
          </p>
          <p className="flex items-center">
            <UilFacebook className="social-icons" size="50" />
            <IconName text="Facebook" />
          </p>
        </div>
      </section>

      {/* Newsletter and telephone contact section */}

      <section className="m-auto ven-des w-[100%] p-8 my-10">
        <div className="phone-news  my-8 flex justify-between items-center">
          <div className="w-[50%] p-10 ">
            <p className=" flex justify-center items-center m-auto">
              <UilPhoneAlt className="social-icons" size="60" />
              <span className="m-10">
                For any queries, please call us at +91 6388835366.
                <br /> Our support hours are Monday to Friday, from 7 AM to 10
                PM.
              </span>
            </p>
          </div>

          <div className="w-[50%] flex justify-between items-center p-8  bg-black ">
            <span className="text-white text-xl font-bold p-8">Newsletter</span>

            <div className="form-control w-2/3 ">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>

              <div className="relative">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered w-full pr-16"
                />
                <button className="btn btn-success absolute top-0 right-0 rounded-l-none">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Maps Section */}
      <section className="m-auto map-sec w-[100%] my-10 bg-slate-600">
        <MapComponent />
      </section>

      {/* footer links of the site */}

      <footer className="w-full bg-gray-600 py-4">
        <div className="flex justify-center">
          <div className="flex gap-4">
            <a href="/terms" className="text-white hover:text-gray-300">
              Terms & Conditions
            </a>
            <span className="text-white">|</span>
            <a href="/privacy" className="text-white hover:text-gray-300">
              Privacy Policy
            </a>
            <span className="text-white">|</span>
            <a href="/shipping" className="text-white hover:text-gray-300">
              Shipping Policy
            </a>
            <span className="text-white">|</span>
            <a href="/cancellation" className="text-white hover:text-gray-300">
              Cancellation Policy
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
function IconName(props) {
  return (
    <>
      <span className="m-3 text-xl font-bold text-white">{props.text}</span>
    </>
  );
}
const Heading = (props) => {
  return <h4 className="text-3xl text-white font-bold mb-10">{props.text}</h4>;
};
const Para = (props) => {
  return <p className="bav-para mb-10 text-lg text-white">{props.text}</p>;
};

const MapComponent = () => {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          width="100%"
          height="510"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=amity%20university%20lucknow&t=&z=10&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          title="Google Map"
        ></iframe>
        <a href="https://2yu.co">2yu</a>
        <br />
        <style>
          {`
            .mapouter {
              position: relative;
              text-align: right;
              width: 100vw;
              height: 510px;
            }
            
            .gmap_canvas {
              overflow: hidden;
              background: none !important;
              height: 510px;
              width: 100%;
            }
            `}
        </style>
      </div>
    </div>
  );
};

function About() {
  return (
    <section className="bg-gray-600 m-auto about w-[100%] p-8">
      <div className="w-[60%] m-auto my-24">
        <img
          className="bg-black rounded-xl border-2 m-auto mb-8 h-72 p-5"
          src="https://static.wixstatic.com/media/da6d95_322a88373265494a9a721b245371eb3f~mv2.png/v1/fill/w_1604,h_1000,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/da6d95_322a88373265494a9a721b245371eb3f~mv2.png"
          alt="logo/image"
        />
        <Heading text="Story Behind KnotHastags!" />
        <Para text="KnotHastags was born in 2023 out of a passion for helping our clients bring their dream surprise events to life! Since our creation, we’ve committed ourselves to create impactful and creative experiences for our clients and their guests, no matter the size of the event. We always take into consideration the quality of the surprise event, and never fall below the bar our clients set. " />
        {/* <button className="btn btn-outline btn-success">Learn More</button> */}
      </div>
    </section>
  );
}
export default Footer;
