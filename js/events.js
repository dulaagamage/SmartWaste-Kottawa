let counters = {
      volunteers: 75,
      waste: 2150,
      zones: 6
    };
    Object.keys(counters).forEach(id => {
      let el = document.getElementById(id);
      let count = 0;
      let step = counters[id] / 60;
      let interval = setInterval(() => {
        count += step;
        if (count >= counters[id]) {
          count = counters[id];
          clearInterval(interval);
        }
        el.textContent = Math.floor(count);
      }, 20);
    });