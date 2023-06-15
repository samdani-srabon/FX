function updateTime() {
    const now = new Date();
    const londonTime = now.toLocaleString("en-US", {timeZone: "Europe/London", hour: "numeric", minute: "numeric", second: "numeric", hour12: true});
    const newyorkTime = now.toLocaleString("en-US", {timeZone: "America/New_York", hour: "numeric", minute: "numeric", second: "numeric", hour12: true});
    document.getElementById("london-time").innerHTML = londonTime;
    document.getElementById("newyork-time").innerHTML = newyorkTime;
  }
  setInterval(updateTime, 10);

