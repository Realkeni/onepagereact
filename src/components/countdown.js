import Image from "next/image";

const Countdown = () => {
    // Set the target date and time for the countdown (e.g., Dec 31, 2024, 12:00:00)
var countdownDate = new Date("Dec 31, 2024 12:00:00").getTime();

// Function to update the countdown every second
function updateCountdown() {
    // Get the current date and time
    var now = new Date().getTime();
    // Calculate the remaining time in milliseconds
    var timeRemaining = countdownDate - now;

    // Check if the countdown has finished
    if (timeRemaining <= 0) {
        // Stop the countdown and display the message
        clearInterval(countdownInterval);
        document.querySelector(".countdown").innerHTML = "Audition has started!";
        return;
    }

    // Calculate days, hours, minutes, and seconds remaining
    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Add a zero in front of numbers < 10 (for two-digit format)
    document.getElementById("days").textContent = days.toString().padStart(2, '0');
    document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
}

// Start the countdown, calling updateCountdown every second
var countdownInterval = setInterval(updateCountdown, 1000);
 
  return (
    <section className="coundown-section">
      <div className="container">
        <h1>Countdown to Audition</h1>
        <div className="countdown">
          <div className="time">
            <span className="number" id="days">
              02
            </span>
            <div className="dash">___</div>
            <span className="label">Days</span>
          </div>
          <div className="colon">:</div>
          <div className="time">
            <span className="number" id="hours">
              02
            </span>
            <div className="dash">___</div>
            <span className="label">Hours</span>
          </div>
          <div className="colon">:</div>
          <div className="time">
            <span className="number" id="minutes">
              08
            </span>
            <div className="dash">___</div>
            <span className="label">Minutes</span>
          </div>
          <div className="colon">:</div>
          <div className="time">
            <span className="number" id="seconds">
              06
            </span>
            <div className="dash">___</div>
            <span className="label">seconds</span>
          </div>
        </div>
      </div>
      <div className="border-img">
        <Image
          id="topgrey"
          src="/shape-top-grey-80.png"
          alt=""
          width={50}
          height={50}
        />
      </div>
    </section>
  )
};

export default Countdown;
