//Angular imports
import { AfterViewInit, Component, OnInit } from '@angular/core';

//External imports


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {
  //input variables
  marriedCheckbox = false;
  inputA = 10000;
  inputB = 60000;
  inputC: number;
  inputD = 67521;
  inputE = 22.6;
  inputF = 122354219;
  inputG = 42.9;
  inputH: number;
  inputI = 321000000000;
  inputJ: number;
  inputK: number;
  inputL: number;
  inputM: number;

  //display variables
  showSourceData: boolean;

  constructor() {

  }

  async ngOnInit() {
    this.updateH();
	  this.updateJ();

    // document.getElementById('B').addEventListener('input', this.updateC);
    // document.getElementById('married').addEventListener('input', this.updateC);

    // document.getElementById('A').addEventListener('input', this.calculate);
    // document.getElementById('B').addEventListener('input', this.calculate);
    // document.getElementById('married').addEventListener('input', this.calculate);
  }

  async ngAfterViewInit() {
    //document.getElementById("C").addEventListener('input', calculate);

  }

  // replaceAll(search, replacement) {
  //   const target = this;
  //   return target.split(search).join(replacement);
  // };

	numberWithCommas(x) {
		return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
	}

  async onChangeB() {
    await this.updateC().then(() => {
      this.calculate();
    });
  }

	async updateC(){
		let a = this.inputB;
		const married = this.marriedCheckbox;
		let tax = 0;

		if (married === false) {
      a = a - 12950;
			if (a > 539900) { tax += 			Math.max(a - 539900) 					  * 0.37; }
			if (a > 215950) { tax += Math.min(Math.max(a - 215950, 0), 539900 - 215950) * 0.35; }
			if (a > 170050) { tax += Math.min(Math.max(a - 170050, 0), 215950 - 170050) * 0.32; }
			if (a >  89075) { tax += Math.min(Math.max(a -  89075, 0), 170050 -  89075) * 0.24; }
			if (a >  41775) { tax += Math.min(Math.max(a -  41775, 0),  89075 -  41775) * 0.22; }
			if (a >  10275) { tax += Math.min(Math.max(a -  10275, 0),  41775 -  10275) * 0.12; }
			if (a >      0) { tax += Math.min(Math.max(a -      0, 0),  10275 -      0) * 0.10; }
		}
		else{
      a = a - 25900;
			if (a > 647850) { tax += 			Math.max(a - 647850, 0) 				  * 0.37; }
			if (a > 431900) { tax += Math.min(Math.max(a - 431900, 0), 647850 - 431900) * 0.35; }
			if (a > 340100) { tax += Math.min(Math.max(a - 340100, 0), 431900 - 340100) * 0.32; }
			if (a > 178150) { tax += Math.min(Math.max(a - 178150, 0), 340100 - 178150) * 0.24; }
			if (a >  83550) { tax += Math.min(Math.max(a -  83550, 0), 178150 -  83550) * 0.22; }
			if (a >  20550) { tax += Math.min(Math.max(a -  20550, 0),  83550 -  20550) * 0.12; }
			if (a >      0) { tax += Math.min(Math.max(a -      0, 0),  20550 -      0) * 0.10; }
		}

		const c = tax / a * 100;

		this.inputC = Number(c.toFixed(1));

    return;
	}

	updateH() {
		this.inputH = this.inputF * (this.inputG * 0.01);
	}

	updateJ() {
		const j = this.inputI / this.inputH;

		this.inputJ = Number(j.toFixed(0));
	}

	updateK() {
		const b = this.inputB;
		const d = this.inputD;
		const k = b / d;

		this.inputK = Number(k.toFixed(2));
	}

	updateL() {
		const j = this.inputJ;
		const k = this.inputK;
		const c = this.inputC;
		const e = this.inputE;
		const l = (j * k) * (c / e);

		this.inputL = Number(l.toFixed(0));
	}

	updateM() {
		const a = this.inputA;
		const l = this.inputL;
		const m = a - l;

		this.inputM = Number(m.toFixed(0));

		if (m < 0) {
			document.getElementById('M').classList.remove('green');
			document.getElementById('M').classList.add('red');
			//document.getElementById("M").style.borderColor = "red";
		}
		else {
			document.getElementById('M').classList.remove('red');
			document.getElementById('M').classList.add('green');
			//document.getElementById("M").style.borderColor = "green";
		}
	}

	calculate() {
    this.updateK();
    this.updateL();
    this.updateM();
    // if (this.inputA !== null && this.inputA === undefined && this.inputB !== null && this.inputB !== undefined) {
    //   console.log('2');

    // }
	}

	reset() {
		this.inputA = null;
		this.inputB = null;
		this.inputC = null;
		this.inputK = null;
		this.inputL = null;
		this.inputM = null;
	}
}
