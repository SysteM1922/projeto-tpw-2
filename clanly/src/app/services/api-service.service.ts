import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) { }

  authenticate(header: any): Observable<any> {
    const url = this.baseURL+'login/';
    return this.http.post(url, header);
  }

  signup(header: any): Observable<any> {
    const url = this.baseURL + 'signup/';
    return this.http.post(url, header);
  }

  logout(header: any) {
    const url = this.baseURL + 'logout/';
    this.http.put(url, header).subscribe();
  }

  getProfile(): Observable<any> {
    const url = this.baseURL + 'profile?token=' + sessionStorage.getItem("token");
    return this.http.get(url);
  }

  getBasicProfile(): Observable<any> {
    const url = this.baseURL + 'basic_profile?token=' + sessionStorage.getItem("token");
    return this.http.get(url);
  }

  updateProfile(header: any): Observable<any> {
    const url = this.baseURL + 'update_profile/';
    header.token = sessionStorage.getItem("token");
    return this.http.put(url, header);
  }

  createClan(header: any): Observable<any> {
    const url = this.baseURL + 'create_clan/';
    header.token = sessionStorage.getItem("token");
    return this.http.post(url, header);
  }

  getMyClans(): Observable<any> {
    const url = this.baseURL + 'my_clans?token=' + sessionStorage.getItem("token");
    return this.http.get(url);
  }

  editClan(header: any): Observable<any> {
    const url = this.baseURL + 'edit_clan/';
    header.token = sessionStorage.getItem("token");
    return this.http.put(url, header);
  }

  deleteClan(header: any): Observable<any> {
    const url = this.baseURL + 'delete_clan/';
    header.token = sessionStorage.getItem("token");
    return this.http.delete(url, header);
  }

  getClan(clanId: any): Observable<any> {
    const url = this.baseURL + 'get_clan?id=' + clanId + '&token=' + sessionStorage.getItem("token");
    return this.http.get(url);
  }

  followClan(header: any): Observable<any> {
    const url = this.baseURL + 'follow_clan/';
    header.token = sessionStorage.getItem("token");
    return this.http.put(url, header);
  }

  unfollowClan(header: any): Observable<any> {
    const url = this.baseURL + 'unfollow_clan/';
    header.token = sessionStorage.getItem("token");
    return this.http.put(url, header);
  }

  getFollowingClans(): Observable<any> {
    const url = this.baseURL + 'following_clans?token=' + sessionStorage.getItem("token");
    return this.http.get(url);
  }

  newPost(header: any): Observable<any> {
    const url = this.baseURL + 'create_post/';
    header.token = sessionStorage.getItem("token");
    return this.http.post(url, header);
  }

  getBasicPost(postId: any): Observable<any> {
    const url = this.baseURL + 'basic_post?id=' + postId + '&token=' + sessionStorage.getItem("token");
    return this.http.get(url);
  }

  createComment(header: any): Observable<any> {
    const url = this.baseURL + 'create_comment/';
    header.token = sessionStorage.getItem("token");
    return this.http.post(url, header);
  }

  deletePost(id: any): Observable<any> {
    const url = this.baseURL + 'delete_post?id=' + id + '&token=' + sessionStorage.getItem("token");
    return this.http.delete(url);
  }

  deleteComment(id: any): Observable<any> {
    const url = this.baseURL + 'delete_comment?id=' + id + '&token=' + sessionStorage.getItem("token");
    return this.http.delete(url);
  }

  getMainFeed(): Observable<any> {
    const url = this.baseURL + 'main_feed?token=' + sessionStorage.getItem("token");
    return this.http.get(url);
  }
}