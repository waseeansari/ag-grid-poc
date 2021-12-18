import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss']
})
export class AgGridComponent implements OnInit {
  columnDefs: ColDef[] = [
    { headerName: 'Name', field: 'name', sortable: true, filter: true },
    { headerName: 'Code', field: 'code', sortable: true, filter: true },
    { headerName: 'Parent', field: 'parent', sortable: true, filter: true},
    { headerName: 'Phone', field: 'phone', sortable: true, filter: true},
    { headerName: 'Email', field: 'email', sortable: true, filter: true},
    { headerName: 'Country', field: 'country', sortable: true, filter: true},
    { headerName: 'Level', field: 'level', sortable: true, filter: true},
    //{ headerName: 'Status', field: 'status', sortable: true, filter: true},
    //{ headerName: 'Action', field: 'action', sortable: false, filter: false}
  ];

  rowData = [
    {name:"Sean Siculiano",parent:"Vickie Siculiano",phone:"917-846-0000",email:"vickie@siculiano.com",code:"Student-284",country:"United States",level:"BEGINNER 1"},
    {name:"Thomas Manthuruthil",parent:"James M More",phone:"214-529-6677",email:"james.more@gmail.com",code:"Student-277",country:"United States",level:"INTERMEDIATE 1"},
    {name:"Akshataa Vijayakumar",parent:"Vidya Sekhar",phone:"704-775-1609",email:"vidyageeth13@gmail.com",code:"Student-142",country:"United States",level:"INTERMEDIATE 2"},
    {name:"Harini Patel",parent:"Nimita Patel",phone:"803-517-1667",email:"patelnnp81@gmail.com",code:"Student-143",country:"United States",level:"INTERMEDIATE 3"},
    {name:"Geetha Sloka",parent:"Krishna Rompikuntha",phone:"704-712-5876",email:"nagarani.badveeti@gmail.com",code:"Student-144",country:"United States",level:"INTERMEDIATE 3"},
    {name:"Advaith Barath",parent:"Sreeja Nambath",phone:"201-616-1340",email:"sreejanambath@gmail.com",code:"Student-145",country:"United States",level:"INTERMEDIATE 3"},
    {name:"Vishnu Kannan",parent:"Ashok Raj",phone:"732-640-4325",email:"mailfrmswa@gmail.com",code:"Student-146",country:"United States",level:"INTERMEDIATE 3"},
    {name:"Sanjey Ramachandran",parent:"Ramachandran",phone:"856-278-3786",email:"ram1304@gmail.com",code:"Student-147",country:"United States",level:"INTERMEDIATE 3"},
    {name:"Devansh Pamecha",parent:"Gaurav Pamecha",phone:"216-835-5615",email:"gaurav.pamecha@gmail.com",code:"Student-148",country:"United States",level:"INTERMEDIATE 3"},
    {name:"Hanvesh Aduru",parent:"Chaithanya Aduru",phone:"804-252-8534",email:"mh4act@gmail.com",code:"Student-149",country:"United States",level:"INTERMEDIATE 3"},
    {name:"Aryan Sreshta",parent:"Sudev Rajah",phone:"201-214-8160",email:"archana.kolangara@gmail.com",code:"Student-150",country:"United States",level:"INTERMEDIATE 3"},
    {name:"Purakk Vardhan",parent:"Vijay Vardhan",phone:"248-990-3642",email:"vijayrishi@gmail.com",code:"Student-151",country:"United States",level:"INTERMEDIATE 3"},
    {name:"Adhvik Manoj",parent:"Manoj Rathnagiriswaran",phone:"908-803-2330",email:"manojnarayanan10@gmail.com",code:"Student-152",country:"Canada",level:"INTERMEDIATE 3"},
    {name:"Vaishnavi Gampa",parent:"Srikanth Gampa",phone:"980-333-8464",email:"srikanthgampa@gmail.com",code:"Student-153",country:"United States",level:"INTERMEDIATE 3"},
    {name:"Sanjeev Arunshankar",parent:"Perinayaki Devaraj",phone:"980-213-5001",email:"nayakidevaraj@gmail.com",code:"Student-154",country:"United States",level:"INTERMEDIATE 3"},
    {name:"Jonathan Otero",parent:"Georgette Otero",phone:"980-333-8667",email:"georgetteotero6@gmail.com",code:"Student-155",country:"United States",level:"INTERMEDIATE 3"},
    {name:"Saket Reddy",parent:"Sasidhar Reddy",phone:"908-279-5761",email:"sasidharreddyc@gmail.com",code:"Student-156",country:"United States",level:"INTERMEDIATE 3"},
    {name:"Kethana Vandanapu",parent:"Krishna Vandanapu",phone:"424-392-3370",email:"krishna.vandanapu.shp@gmail.com",code:"Student-157",country:"United States",level:"INTERMEDIATE 3"},
    {name:"Soham Dhavalikar",parent:"Ashwini Dhavalikar",phone:"216-533-3764",email:"Ashwinidhav20@gmail.com",code:"Student-159",country:"United States",level:"INTERMEDIATE 3"},
    {name:"Rishi Nair",parent:"Rajiv Nair",phone:"410-253-2597",email:"torajivnair@gmail.com",code:"Student-160",country:"United States",level:"INTERMEDIATE 3"},
    {name:"Vinaya Singh",parent:"Kritika Singh",phone:"903-330-2472",email:"kritika4@gmail.com",code:"Student-163",country:"United States",level:"INTERMEDIATE 3"},
    {name:"Aneesh Parasa",parent:"Lalitha Koppuravuri",phone:"813-956-2956",email:"koppuravurilalitha@gmail.com",code:"Student-164",country:"United States",level:"INTERMEDIATE 3"},
    {name:"Avighnav Vasudevan",parent:"Uma Venkatesan",phone:"309-533-1727",email:"umavweb@gmail.com",code:"Student-166",country:"United States",level:"INTERMEDIATE 3"},
    {name:"Advit Gupta",parent:"Amit Gupta",phone:"650-933-6158",email:"amitgupta18@gmail.com",code:"Student-167",country:"United States",level:"INTERMEDIATE 3"},
    {name:"Leon Mathew",parent:"Mathew Sebastian",phone:"408-802-3534",email:"mathew.sebastian@gmail.com",code:"Student-170",country:"United States",level:"INTERMEDIATE 3"},
    {name:"Mayukha Reddy",parent:"Prathyusha Tanneer",phone:"203-526-7529",email:"ptanneer@gmail.com",code:"Student-171",country:"United States",level:"INTERMEDIATE 3"},
    {name:"Vedanshi Rao",parent:"Rama Rao Kottamasu",phone:"614-743-6077",email:"ramaraokrr@gmail.com",code:"Student-173",country:"United States",level:"INTERMEDIATE 3"},
    {name:"Aneesh Adusumilli",parent:"Kalyani Vajhala",phone:"615-635-9121",email:"kalyani.vajhala@gmail.com",code:"Student-174",country:"United States",level:"INTERMEDIATE 3"},
    {name:"Nikitha Kanagaraj",parent:"Sangeetha Govindaswamy",phone:"804-496-8741",email:"sangeetha2g@gmail.com",code:"Student-176",country:"United States",level:"INTERMEDIATE 3"},
    {name:"Advaith Rajesh",parent:"Rajesh Anandakrishnan",phone:"202-352-4159",email:"rajesh.aaa@gmail.com",code:"Student-177",country:"United States",level:"INTERMEDIATE 3"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
