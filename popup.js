document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("hace-algo").addEventListener("click", function () {
    chrome.tabs.query(
      {
        active: true,
        currentWindow: true,
      },
      function (tabs) {
        console.log("tabs", tabs);
        if (tabs[0]) {
          chrome.runtime.sendMessage({
            action: "tomarAsistencia",
            tabId: tabs[0].id,
          });
        }
      }
    );
  });
});
