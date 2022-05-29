function App() {
  function getAnswer() {
      const question = document.getElementById("question").value;
      const xhr = new XMLHttpRequest();

      xhr.onload = function() {
        const res = JSON.parse(this.responseText);
        document.getElementById("display").innerHTML = "<pre>" + JSON.stringify(res,null,2) + "</pre>";
      }

      xhr.open('GET', 'http://localhost:8989/search/' + question, true);
      xhr.send();
  }

  return (
    <div className="App">
      <h1>Turners Search</h1>
        <p>Ask us anything:</p>
        <input type="text" id="question"/>
        <input type="button" value="submit" onClick={getAnswer}/>
        <p id="display"></p>
    </div>
  );
}

export default App;
