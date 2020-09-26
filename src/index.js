const { WebClient } = require("at-framework/net");

/**
* 
* @param {string} host 
* @param {string} apiKey 
*/
var Backlog = function (host, apiKey) {
  this.host = host;
  this.apiKey = apiKey;
};

Backlog.prototype._request = async function (options) {
  return new Promise((resolve, reject) => {
    WebClient.request({
      method: options.method,
      url: `https://${this.host}${options.path}?apiKey=${this.apiKey}`,
      query: options.query,
      body: options.body,
      success: (req, res) => {
        if (res.statusCode === 200 || res.statusCode === 201) {
          if ((res.headers["content-type"] || "").toLowerCase().indexOf("application/json") >= 0) {
            resolve(res.data);
          } else {
            resolve(res);
          }
        } else {
          reject(res);
        }
      },
      error: (err) => {
        reject(err);
      }
    });
  });
};

/**
 * Returns information about your space.
 */
Backlog.prototype.getSpace = async function () {
  return this._request({
    method: "GET",
    path: "/api/v2/space"
  });
};

/**
 * Returns recent updates in your space.
 * @param {*} query 
 */
Backlog.prototype.getRecentUpdates = async function (query = {}) {
  return this._request({
    method: "GET",
    path: "/api/v2/space/activities",
    query
  });
};

/**
 * Returns list of users in your space.
 */
Backlog.prototype.getUserList = async function () {
  return this._request({
    method: "GET",
    path: "/api/v2/users"
  });
};

/**
 * Returns information about user.
 * @param {number} userId 
 */
Backlog.prototype.getUser = async function (userId) {
  return this._request({
    method: "GET",
    path: `/api/v2/users/${userId}`
  });
};

/**
 * @typedef backlog.addUser.user
 * @type {object}
 * @property {string} userId
 * @property {string} password
 * @property {string} name
 * @property {string} mailAddress
 * @property {number} roleType
 */
/**
 * Adds new user to the space.
 * "Project Administrator" cannot add "Admin" user.
 * You can’t use this API at `backlog.com` space.
 * @param {backlog.addUser.user} user 
 */
Backlog.prototype.addUser = async function (user) {
  return new Promise((resolve, reject) => {
    WebClient.post({
      url: `https://${this.host}/api/v2/users?apiKey=${this.apiKey}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: user,
      success: (req, res) => {
        if (res.statusCode === 200) {
          resolve(JSON.parse(res.data));
        } else {
          reject(res);
        }
      },
      error: (err) => {
        reject(err);
      }
    });
  });
};

/**
 * Updates information about user. You can’t use this API at backlog.com space.
 * @param {number} userId 
 * @param {*} user 
 */
Backlog.prototype.updateUser = async function (userId, user) {
  return new Promise((resolve, reject) => {
    WebClient.patch({
      url: `https://${this.host}/api/v2/users/${userId}?apiKey=${this.apiKey}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: user,
      success: (req, res) => {
        if (res.statusCode === 200) {
          resolve(JSON.parse(res.data));
        } else {
          reject(res);
        }
      },
      error: (err) => {
        reject(err);
      }
    });
  });
};

/**
 * Returns own information about user.
 */
Backlog.prototype.getOwnUser = async function () {
  return this._request({
    method: "GET",
    path: "/api/v2/users/myself"
  });
};

/**
 * Returns list of status in the project.
 * @param {string} projectIdOrKey 
 */
Backlog.prototype.getStatusListOfProject = async function (projectIdOrKey) {
  return this._request({
    method: "GET",
    path: `/api/v2/projects/${projectIdOrKey}/statuses`
  });
};

/**
 * Returns list of priorities.
 */
Backlog.prototype.getPriorityList = async function () {
  return this._request({
    method: "GET",
    path: "/api/v2/priorities"
  });
};

/**
 * Returns list of resolutions.
 */
Backlog.prototype.getResolutionList = async function () {
  return this._request({
    method: "GET",
    path: "/api/v2/resolutions"
  });
};

/**
 * Returns list of projects.
 * @param {*} query 
 */
Backlog.prototype.getProjectList = async function (query = {}) {
  return this._request({
    method: "GET",
    path: "/api/v2/projects",
    query
  });
};

/**
 * Adds new project.
 * @param {*} project 
 */
Backlog.prototype.addProject = async function (project) {
  return this._request({
    method: "POST",
    path: "/api/v2/projects",
    body: project
  });
};

/**
 * Returns information about project.
 * @param {string} projectIdOrKey 
 */
Backlog.prototype.getProject = async function (projectIdOrKey) {
  return this._request({
    method: "GET",
    path: `/api/v2/projects/${projectIdOrKey}`
  });
};

/**
 * Updates information about project.
 * @param {string} projectIdOrKey 
 * @param {*} project 
 */
Backlog.prototype.updateProject = function (projectIdOrKey, project) {
  return this._request({
    method: "PATCH",
    path: `/api/v2/projects/${projectIdOrKey}`,
    body: project
  });
};

/**
 * Deletes project.
 * @param {string} projectIdOrKey 
 */
Backlog.prototype.deleteProject = function (projectIdOrKey) {
  return this._request({
    method: "DELETE",
    path: `/api/v2/projects/${projectIdOrKey}`
  });
};

/**
 * Downloads project icon.
 * @param {string} projectIdOrKey 
 * @returns {stream}
 */
Backlog.prototype.getProjectIcon = function (projectIdOrKey) {
  return this._request({
    method: "GET",
    path: `/api/v2/projects/${projectIdOrKey}/image`
  });
};

/**
 * Returns recent update in the project.
 * @param {string} projectIdOrKey 
 */
Backlog.prototype.getProjectRecentUpdates = function (projectIdOrKey) {
  return this._request({
    method: "GET",
    path: `/api/v2/projects/${projectIdOrKey}/activities`
  });
};

/**
 * Adds user to list of project members.
 * @param {string} projectIdOrKey 
 * @param {*} user 
 */
Backlog.prototype.addProjectUser = function (projectIdOrKey, user) {
  return this._request({
    method: "POST",
    path: `/api/v2/projects/${projectIdOrKey}/users`,
    body: user
  });
};

/**
 * Returns list of project members.
 * @param {string} projectIdOrKey 
 * @param {*} query 
 */
Backlog.prototype.getProjectUserList = function (projectIdOrKey, query) {
  return this._request({
    method: "GET",
    path: `/api/v2/projects/${projectIdOrKey}/users`
  });
};

/**
 * Returns list of Issue Types in the project.
 * @param {string} projectIdOrKey 
 */
Backlog.prototype.getIssueTypeList = async function (projectIdOrKey) {
  return this._request({
    method: "GET",
    path: `/api/v2/projects/${projectIdOrKey}/issueTypes`
  });
};

/**
 * Returns list of Categories in the project.
 * @param {string} projectIdOrKey 
 */
Backlog.prototype.getCategoryList = async function (projectIdOrKey) {
  return this._request({
    method: "GET",
    path: `/api/v2/projects/${projectIdOrKey}/categories`
  });
};

/**
 * Returns list of Versions/Milestones in the project.
 * @param {string} projectIdOrKey 
 */
Backlog.prototype.getVersionMilestoneList = async function (projectIdOrKey) {
  return this._request({
    method: "GET",
    path: `/api/v2/projects/${projectIdOrKey}/versions`
  });
};

/**
 * Returns list of Custom Fields in the project.
 * @param {string} projectIdOrKey 
 */
Backlog.prototype.getCustomoFieldList = async function (projectIdOrKey) {
  return this._request({
    method: "GET",
    path: `/api/v2/projects/${projectIdOrKey}/customFields`
  });
};

/**
 * Returns list of issues.
 * @param {*} query 
 */
Backlog.prototype.getIssueList = async function (query = {}) {
  return this._request({
    method: "GET",
    path: "/api/v2/issues",
    query
  });
};

/**
 * Returns number of issues.
 * @param {*} query 
 */
Backlog.prototype.countIssue = async function (query = {}) {
  return this._request({
    method: "GET",
    path: "/api/v2/issues/count",
    query
  });
};

/**
 * Adds new issue.
 * @param {*} issue 
 */
Backlog.prototype.addIssue = async function (issue) {
  return this._request({
    method: "POST",
    path: "/api/v2/issues",
    body: issue
  });
};

/**
 * Returns information about issue.
 * @param {string} issueIdOrKey 
 */
Backlog.prototype.getIssue = async function (issueIdOrKey) {
  return this._request({
    method: "GET",
    path: `/api/v2/issues/${issueIdOrKey}`
  });
};

/**
 * Updates information about issue.
 * @param {string} issueIdOrKey 
 * @param {*} issue 
 */
Backlog.prototype.updateIssue = async function (issueIdOrKey, issue) {
  return this._request({
    method: "PATCH",
    path: `/api/v2/issues/${issueIdOrKey}`,
    body: issue
  });
};

/**
 * Deletes issue.
 * @param {string} issueIdOrKey 
 */
Backlog.prototype.deleteIssue = async function (issueIdOrKey) {
  return this._request({
    method: "DELETE",
    path: `/api/v2/issues/${issueIdOrKey}`
  });
};

/**
 * Enum for user roleType.
 * @readonly
 * @enum {number}
 */
Backlog.USER_ROLE_TYPE = {
  ADMINISTRATOR: 1,
  NORMAL_USER: 2,
  REPORTER: 3,
  VIEWER: 4,
  GUEST_REPORTER: 5,
  GUEST_VIEWER: 6
};

/**
 * Enum for issue parentChild type.
 * @enum {number}
 */
Backlog.ISSUE_PARENT_CHILD = {
  ALL: 0,
  EXCLUDE_CHILD_ISSUE: 1,
  CHILD_ISSUE: 2,
  NEITHER_PARENT_ISSUE_NOR_CHILD_ISSUE: 3,
  PARENT_ISSUE: 4
};

/**
 * Enum for issue sort key.
 * @enum {string}
 */
Backlog.ISSUE_SORT_KEY = {
  ISSUETYPE: "issueType",
  CATEGORY: "category",
  VERSION: "version",
  MILESTONE: "milestone",
  SUMMARY: "summary",
  STATUS: "status",
  PRIORITY: "priority",
  ATTACHMENT: "attachment",
  SHAREDFILE: "sharedFile",
  CREATED: "created",
  CREATEDUSER: "createdUser",
  UPDATED: "updated",
  UPDATEDUSER: "updatedUser",
  ASSIGNEE: "assignee",
  STARTDATE: "startDate",
  DUEDATE: "dueDate",
  ESTIMATEDHOURS: "estimatedHours",
  ACTUALHOURS: "actualHours",
  CHILDISSUE: "childIssue"
};

/**
 * Enum for sort order.
 * @enum {string}
 */
Backlog.SORT_ORDER = {
  ASC: "asc",
  DESC: "desc"
};

module.exports = Backlog;
