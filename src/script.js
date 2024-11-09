// Set the date you're counting down to (8:00 PM ET / 3:00 AM SAST on November 6, 2024)
const worldCupStart = new Date("Jun 11, 2026 00:00:00").getTime();

// Update the countdown every second
const countdown = setInterval(function () {
  const now = new Date().getTime();
  const timeLeft = worldCupStart - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Add leading zeros using padStart()
  const formattedDays = String(days).padStart(2, "0");
  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  // Display the countdown
  document.getElementById(
    "countdown"
  ).innerHTML = `${formattedDays}d ${formattedHours}h ${formattedMinutes}m ${formattedSeconds}s`;

  // If the countdown is finished, display a message
  if (timeLeft < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "Enjoy the game!";
  }
}, 1000);
