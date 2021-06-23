window.addEventListener("beforeinstallprompt", function(event) {
    event.userChoice.then(function(result) {
      if (result.outcome == "dismissed") {
   
      } else {
   
      }
    });
  });