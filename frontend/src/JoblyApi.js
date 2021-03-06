import axios from 'axios';

//helper methods for centralizing api queries/posts
class JoblyApi {
  static async request(endpoint, paramsOrData = {}, verb = "get") {
    if (localStorage.getItem("token") !== null) {
      paramsOrData._token = JSON.parse(localStorage.getItem("token")).token;
    } else {
      paramsOrData._token = "";
    }

    console.debug("API Call:", endpoint, paramsOrData, verb);

    try {
      return (await axios({
        method: verb,
        url: `http://localhost:3001/${endpoint}`,
        [verb === "get" ? "params" : "data"]: paramsOrData
      })).data;
      // axios sends query string data via the "params" key,
      // and request body data via the "data" key,
      // so the key we need depends on the HTTP verb
    }

    catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getCompanies() {
    let result = await this.request('companies');
    return result.companies;
  }

  static async searchCompany(search) {
    let result = await this.request(`companies/?search=${search}`);
    return result;
  }

  static async getJobs() {
    let result = await this.request('jobs');
    return result.jobs;
  }

  static async searchJobs(search) {
    let result = await this.request(`jobs/?search=${search}`);
    return result;
  }

  static async getCompanyJobs(handle) {
    let result = await this.request(`companies/${handle}`);
    return result;
  }

  static async login(data) {
    let result = await this.request('login', { data }, 'post');
    return result;
  }

  static async signUp(data) {
    let result = await this.request('users', data, 'post');
    return result;
  }

  static async update(data, username) {
    let result = await this.request(`users/${username}`, data, 'patch');
    return result;
  }

  static async getUser(username) {
    let result = await this.request(`users/${username}`);
    return result;
  }

  static async apply(id) {
    let result = await this.request(`jobs/${id}/apply`, {}, 'post');
    return result;
  }

  static async getJob(id) {
    let result = await this.request(`jobs/${id}`);
    return result;
  }
}

export default JoblyApi;