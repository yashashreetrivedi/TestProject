import { Injectable } from '@angular/core';
import { Auth } from './auth.model';
import { HttpClient, HttpHeaderResponse, HttpHeaders, HttpResponse } from "@angular/common/http";


@Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    formData  : Auth;
    readonly URL ="https://localhost:44318/api/Auth"
    httpOptions = {
        headers : new HttpHeaders({
            'Ocp-Apim-Subscription-Key' : '1d177466f1f347f8a061e3b61dabf4e8',
            'Content-Type' :'application/json',
            'Access-Control-Allow-Origin' : '*'
            // 'Accept-Encoding' : 'gzip, deflate, br'

        })
    }

    constructor(private http : HttpClient) { }

    postAuth(str){
        return this.http.post(this.URL, str );

    }

  }