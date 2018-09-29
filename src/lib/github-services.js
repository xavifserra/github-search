import React from 'react';
import axios from 'axios';

class GithubApi {

  getUsers (value) {
    return axios.get(`https://api.github.com/search/users?q=${value}+in:login`)
  }

}
// Create the SINGLETON
export const githubApi = new GithubApi();
