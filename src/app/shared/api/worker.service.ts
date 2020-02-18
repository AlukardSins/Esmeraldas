import { Injectable } from '@angular/core'
import { Worker } from '../../worker.model'
import { Observable, throwError } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WorkerService {
  endpoint: string = 'http://localhost:4000/api/worker'
  headers = new HttpHeaders().set('Content-Type', 'application/json')

  constructor (private http: HttpClient) {}

  // Add worker
  AddWorker (data: Worker): Observable<any> {
    let API_URL = `${this.endpoint}/add`
    return this.http.post(API_URL, data).pipe(catchError(this.errorMgmt))
  }

  // Get all workers
  GetWorkers () {
    return this.http.get(`${this.endpoint}`)
  }

  // Get worker
  GetWorker (id): Observable<any> {
    let API_URL = `${this.endpoint}/${id}`
    return this.http.get(API_URL, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  // Update worker
  UpdateWorker (id, data: Worker): Observable<any> {
    let API_URL = `${this.endpoint}/edit/${id}`
    return this.http.put(API_URL, data, { headers: this.headers }).pipe(catchError(this.errorMgmt))
  }

  // Delete worker
  DeleteWorker (id): Observable<any> {
    var API_URL = `${this.endpoint}/delete/${id}`
    return this.http.delete(API_URL).pipe(catchError(this.errorMgmt))
  }

  // Error handling
  errorMgmt (error: HttpErrorResponse) {
    let errorMessage = ''
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`
    }
    console.log(errorMessage)
    return throwError(errorMessage)
  }
}
