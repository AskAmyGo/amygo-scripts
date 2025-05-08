
async function askAmyGo() {
  const input = document.getElementById("amygo-input").value;
  const responseBox = document.getElementById("amygo-response");
  responseBox.innerHTML = "AmyGo is thinking... 💭";

  try {
    const res = await fetch("https://eo27a7qp8ringwa.m.pipedream.net", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ question: input })
    });

    const data = await res.json();
    responseBox.innerHTML = data.reply || "Hmm... AmyGo is quiet right now.";
  } catch (e) {
    responseBox.innerHTML = "Something went wrong. Try again later 💔";
  }
}
