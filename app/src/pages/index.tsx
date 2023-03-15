export default function App(){
  const getResponse = () => {
    let inp = document.getElementById("inp");
    let response = document.getElementById("response");

    let x = (inp as HTMLInputElement).value;

    if(x){
      (response as HTMLElement).innerHTML += `<p class="quest">${x}</p>`;
      (inp as HTMLInputElement).value = "";
      fetch(`./api/gpt?q=${x}`)
      .then(e => {
        return e.json();
      })
      .then(e=>{
        (response as HTMLElement).innerHTML += `<p class="resp">${e.resp}</p>`;
      })
      .catch(error => {
        console.log(error)
      })
    }
  }

  return(
    <main>
      <p id="response"></p>
      <form action="javascript:void(0)" className="box">
        <input type="text" id="inp" placeholder="Make your question!"/>
        <button onClick={()=> getResponse()} id="btn">Send</button>
      </form>
    </main>
  )
}