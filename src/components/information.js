import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faEnvelope, faPhoneVolume, faUser, faPencil } from "@fortawesome/free-solid-svg-icons";


const Information = () => {
    return(
        <section className="section4" id="contactlink">
  <div id="sect4">
    <div className="info">
      <h2 className="h2">For More Information:</h2>
      <p className="p1">
        <strong>Hotlines: </strong>07035973706 &amp; 08108112759
      </p>
      <p className="p2">
        <strong>Email: </strong> info@ijawdancecontest.ng
      </p>
      <p className="p3">
        <strong>Audition Location: </strong> Nitro Studio, Tamara Hall,
        <br />
        Otiotio Road, Yenagoa, Bayelsa state.
      </p>
    </div>
    <form className="form">
      <div className="form1">
        <div className="fdiv1">
          <div className="border mg2">
            <FontAwesomeIcon icon={faUser} className="fa-regular fa-user icons" />
            <input type="text" name="f.name" placeholder="Name" />
          </div>
          <div className="border mg2">
            <FontAwesomeIcon icon={faEnvelope} className="fa-regular fa-envelope icons" />
            <input type="email" name="email" placeholder="Email Address" />
          </div>
        </div>
        <div className="fdiv2">
          <div className="border mg mg2">
            <FontAwesomeIcon icon={faPhoneVolume} className="fa-solid fa-phone-volume icons" />
            <input type="tel" name="number" placeholder="Phone" />
          </div>
          <div className="border mg mg2">
            <FontAwesomeIcon icon={faCircle} className="fa-solid fa-circle-info icons" />
            <input type="text" name="subject" placeholder="Subject" />
          </div>
        </div>
        <div className="border tarea mg2">
          <FontAwesomeIcon icon={faPencil} className="fa-solid fa-pencil icons" />
          <textarea
            name="comment"
            id="comment"
            placeholder="How can we help you? Feel free to get in touch!"
            rows={4}
            defaultValue={""}
          />
        </div>
      </div>
    </form>
  </div>
  <button id="button2">
    <strong>Get in Touch</strong>
  </button>
</section>

    )
}
    
export default Information;