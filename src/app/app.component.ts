import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  loadedPosts = [];
  apiKey: any;
  profile: any;
  Uname: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onCreatePost(postData: { username: string; password: string }) {
    // Send Http request
    this.http
      .post("http://23.100.25.24:9090/api/v1/auth/login", postData)
      .subscribe((apiKey) => {
        this.apiKey = apiKey.token;
        console.log(this.apiKey);
      });
    console.log(postData);
  }

  onFetchPosts() {
    console.log(this.apiKey);
    // let head_obj = new Headers().set("Authorization", "bearer " + this.apiKey);
    // let head_obj = new Headers().set(
    //   "Authorization",
    //   "bearer " +
    //     "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI5ODkxNjQxMTgzIiwiZXhwIjoxNjcxNzIzMjk1LCJpYXQiOjE2NzE3MDUyOTV9.w_XXxMIxXiPs4vxTP9EDCx-saH2WvZ-oqOMnfZH8RZXtvPlxHlfsseXZLEVsIcbYB4jDIFR6mP1s_Q44iMkTlA"
    // );

    // this.http
    //   .get("http://23.100.25.24:9090/api/tenants/1", {
    //     headers: new HttpHeaders({
    //       Authorization:
    //         "bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI5ODkxNjQxMTgzIiwiZXhwIjoxNjcxNzIzMjk1LCJpYXQiOjE2NzE3MDUyOTV9.w_XXxMIxXiPs4vxTP9EDCx-saH2WvZ-oqOMnfZH8RZXtvPlxHlfsseXZLEVsIcbYB4jDIFR6mP1s_Q44iMkTlA",
    //     }),
    //   })
    //   .subscribe((res) => console.log(res));
    this.fetchAcc();
  }

  fetchAcc() {
    this.http
      .get("http://23.100.25.24:9090/api/tenants/1")
      .subscribe((getProfile) => {
        this.profile = getProfile;
        this.Uname = getProfile.name;
        console.log(getProfile);
      });
  }

  onClearPosts() {
    // Send Http request
  }
}
