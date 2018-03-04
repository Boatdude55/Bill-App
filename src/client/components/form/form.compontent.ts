'use strict';
/* eslint no-sync: 0 */
//Typescript
import { Component } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../../api/services/http.service';

/**
 * Additional resources
 * Congressional Pictorial Directory including New Member Pictorial Directory
 * Reference material for FDsys API
 * src: https://www.govinfo.gov/developers
 * Congressional Bills (BILLS)[DEFAULT]
 * Congressional Calendars (CCAL)
 * Congressional Committee Prints (CPRT)
 * Congressional Documents (CDOC)
 * Congressional Hearings (CHRG)
 * Congressional Record - Daily (CREC)
 * Congressional Reports (CRPT)
 * Default Database is Congressional Bills and Congress Persons
 */

@Component({
  selector: 'search-form',
  templateUrl: './form.template.html',
  styleUrls: ['./form.style.css'],
  providers: [ HttpService ]
})

export class FormComponent {
  Search = {};
  constructor ( private httpService: HttpService ) { }
  
  
  model = {
    query: "",
    contents: ""
  };
  
  contents = "";
  
  CustomHeader = {
        headers: new HttpHeaders()
        .set('Content-Type',  'application/json')
        .append('Access-Control-Allow-Methods', 'GET, POST, CONNECT') 
        .append('Access-Control-Allow-Origin', '*'),
        responseType:'text' as 'text'
    }
    
    /**
     * GPO specifications
     * **GET Method
     *
     */
    FDsys = {
        Services: {
            rootURL: "http://api.fdsys.gov/link?",
            Link: {
                Bills:  {
                    /**Link Service for Bills
                     * Query: bill number, bill type, congress, bill version OR most recent
                     * Parameters:
                     * **collection: Required - Value is bills.
                     * **billtype: Required - Values are hr, s, hjres, sjres, hconres, sconres, hres, sres.
                     * **billversion: Optional - If bill version is not provided, the most recent version of a bill is returned. Values are as, cps, fph, lth, ppv, rds, rhv, rhuc, ash, eah, fps, lts, pap, rev, rih, sc, eas, hdh, nat, pwah, reah, ris, ath, eh, hds, oph, rah, res, rsv, ats, eph, ihv, ops, ras, renr, rth, cdh, enr, iph, pav, rch, rfh, rts, cds, esv, ips, pch, rcs, rfs, s_p, cph, fah, isv, pcs, rdh, rft, sas, mostrecent.
                     * **billnum: Required - This is the numerical bill number. Sample value is 1027.
                     * **congress: Required - This is the numerical Congress number. Sample value is 112.
                     * **link-type: Optional - This is the format of the returned document. Default is pdf. Other values are xml, html, mods, premis, contentdetail.
                     * Examples:
                     * **http://api.fdsys.gov/link?collection=bills&billtype=hr&billversion=ih&billnum=1&congress=112 
                     * **http://api.fdsys.gov/link?collection=bills&billtype=hconres&billnum=17&congress=112&link-type=xml
                     *
                     */
                        collection: "bills",
                        billType: {
                            value: "",
                            required: true
                        },
                        billVersion: {
                            value:  "",
                            required: false
                        },
                        billNum: {
                            value: "",
                            required: true
                        },
                        congress: {
                            value:  "",
                            required: true
                        },
                        linkType: "html"
                    }
            }
        }
    };
    
    configUrl ='http://api.fdsys.gov/link?collection=bills&billtype=hr&billversion=ih&billnum=1&congress=112&link-type=xml';
    
  onSubmit() {
    
    console.log("Form is working: ", this.model.query, this);
    
    //this.httpService.getMethod().subscribe( results => this.model.contents = results );
    this.httpService.postMethod( "/api", { "url": this.configUrl }, this.CustomHeader ).subscribe( results => this.model.contents = results );
    
  }

}