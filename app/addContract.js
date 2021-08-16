import { ethers } from 'ethers';
import "./index.scss";

const provider = new ethers.providers.Web3Provider(ethereum);
const spinner2 = document.querySelector('.spinner2');

export default async function addContract(id, contract, arbiter, beneficiary, value) {
  spinner2.classList.add("show");
  const buttonId = `approve-${id}`;

  const container = document.getElementById("container");
  container.innerHTML += createHTML(buttonId, arbiter, beneficiary, value);
  console.log(container);
  console.log(container.innerHTML);

  contract.on('Approved', () => {
    document.getElementById(buttonId).className = "complete";
    document.getElementById(buttonId).innerText = "✓ It's been approved!";
    spinner2.classList.remove('show');


    // save contract to the server:
    const request = new Request('http://localhost:3032/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ method: 'saveHTML', html: document.getElementById("container").innerHTML })
    });
    fetch(request)
      .then(response => {
        return response.json();
      }).then(response => {
        console.log(response.ack.toString());
      });
    //
  });

  document.getElementById(buttonId).addEventListener("click", async () => {
    const signer = provider.getSigner();
    await contract.connect(signer).approve();
  });

}

function createHTML(buttonId, arbiter, beneficiary, value) {
  return `
    <div class="existing-contract" id="id${buttonId}">
      <ul className="fields">
        <li>
          <div> Arbiter </div>
          <div> ${arbiter} </div>
        </li>
        <li>
          <div> Beneficiary </div>
          <div> ${beneficiary} </div>
        </li>
        <li>
          <div> Value </div>
          <div> ${value} </div>
        </li>
        <div class="button" id="${buttonId}">
          Approve
        </div>
      </ul>
    </div>
  `;
}
