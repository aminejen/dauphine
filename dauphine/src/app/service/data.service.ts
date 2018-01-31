import { Injectable } from '@angular/core';
import {EbxConfig} from '../model/ebx-model/ebx-config'
import { EbxEntityWrapper } from '../model/ebx-model/ebx-entity-wrapper';
import	{	HttpClient,HttpHeaders	}	from	'@angular/common/http';
import	{	Observable	}	from	'rxjs/Observable';

@Injectable()
export class DataService {
  constructor(private http:HttpClient) { }

  save(ebxConfig:EbxConfig,request:EbxEntityWrapper){
    return this.http.post(this.constructurl(ebxConfig),request);
  }

  constructurl(ebxConfig:EbxConfig):string{
    return 'rest/data/v1/B'+ebxConfig.dataSpace+'/'+ebxConfig.dataSet+ebxConfig.xPath
}

  get(ebxConfig:EbxConfig):	Observable<any>	{
				return	this.http.get<any>(this.constructurl(ebxConfig)+"?pageSize=5&?pageFirstRecordFilter=./matricule=20507429");
		}

    getPage(link:string):	Observable<any>	{
          console.log(link.split("ebx-dataservices")[0]);
          return	this.http.get<any>(link.split("ebx-dataservices")[1]);
      }


  delete(ebxConfig:EbxConfig,key:string):	Observable<any>	{
  				return	this.http.delete(this.constructurl(ebxConfig)+"/"+key);
  }
}
