import { ethers } from 'ethers';
import deploy from './deploy';
import addContract from './addContract';
import "./index.scss";

const spinner = document.querySelector('.spinner');

(function getHTML() {
  const request = new Request('http://localhost:3032/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({method: 'getHTML'})
  });
   fetch(request)
    .then(response => {
      return response.json();
    }).then(response => {
      if(response.html !== undefined){
        document.getElementById("container").innerHTML = response.html;
      }
    });
})();

let contracts = 0;
async function newContract() {
  spinner.classList.add("show");
  const beneficiary = document.getElementById("beneficiary").value;
  const arbiter = document.getElementById("arbiter").value;
  const value = ethers.utils.parseEther(ethers.BigNumber.from(document.getElementById("eth").value).toString());
  const contract = await deploy(arbiter, beneficiary, value);
  spinner.classList.remove('show');
  addContract(++contracts, contract, arbiter, beneficiary, value);
}

document.getElementById("deploy").addEventListener("click", newContract);
