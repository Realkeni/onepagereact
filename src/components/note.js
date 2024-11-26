import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";


const Note = () => {
    return(
        <section className="important-notes" id="notes">
  <div className="important_notes-container">
    <div className="notes-container">
      <div className="note-text">
        <h3>important things to note...</h3>S
      </div>
      <div className="notes">
        <div className="note">
          <FontAwesomeIcon icon={faMoneyBillWave} className="fa fa-money-bill-wave" />
          <h4>Pricing</h4>
          <p>
            audition forms are available <br /> for ₦1000 for single
            contestants, <br /> and ₦1500 for a group of five
          </p>
        </div>
        <div className="note">
          <FontAwesomeIcon icon={faTrophy} className="fa fa-trophy" />
          <h4>Prizes</h4>
          <p>
            1st Prize:₦2,000,00 <br />
            2nd Prize:₦1,000,000
            <br /> 3rd Prize:₦500,000
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    )
};

export default Note;
