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
 * Returns logo PNG image of your space.
 * @returns {stream}
 */
Backlog.prototype.getSpaceLogo = async function () {
  return this._request({
    method: "GET",
    path: "/api/v2/space/image"
  });
};

/**
 * Returns space notification.
 */
Backlog.prototype.getSpaceNotification = async function () {
  return this._request({
    method: "GET",
    path: "/api/v2/space/notification"
  });
};

/**
 * Updates space notification.
 * @param {string} notification 
 */
Backlog.prototype.updateSpaceNotification = async function (notification) {
  return this._request({
    method: "PUT",
    path: "/api/v2/space/notification",
    body: { content: notification }
  });
};

/**
 * Returns information about space disk usage.
 */
Backlog.prototype.getSpaceDiskUsage = async function () {
  return this._request({
    method: "GET",
    path: "/api/v2/space/diskUsage"
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
  return this._request({
    method: "POST",
    path: "/api/v2/users",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: user
  });
};

/**
 * Updates information about user. You can’t use this API at backlog.com space.
 * @param {number} userId 
 * @param {*} user 
 */
Backlog.prototype.updateUser = async function (userId, user) {
  return this._request({
    method: "PATCH",
    path: `/api/v2/users/${userId}`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: user
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
 * Downloads user icon.
 * @param {number} userId 
 * @returns {stream}  See "content-disposition" or "content-type" header.
 */
Backlog.prototype.getUserIcon = async function (userId) {
  return this._request({
    method: "GET",
    path: `/api/v2/users/${userId}/icon`
  });
};

/**
 * Returns user’s recent updates.
 * @param {number} userId 
 * @param {*} [query] 
 */
Backlog.prototype.getUserRecentUpdates = async function (userId, query) {
  return this._request({
    method: "GET",
    path: `/api/v2/users/${userId}/activities`,
    query
  });
};

/**
 * Returns the list of stars that user received.
 * @param {number} userId 
 * @param {*} [query] 
 */
Backlog.prototype.getReceivedStarList = async function (userId, query) {
  return this._request({
    method: "GET",
    path: `/api/v2/users/${userId}/stars`,
    query
  });
};

/**
 * Returns number of stars that user received.
 * @param {number} userId 
 * @param {*} [query] 
 */
Backlog.prototype.countUserReceivedStars = async function (userId, query) {
  return this._request({
    method: "GET",
    path: `/api/v2/users/${userId}/stars/count`,
    query
  });
};

/**
 * Returns list of issues which the user viewed recently.
 * @param {*} [query] 
 */
Backlog.prototype.getListOfRecentlyViewedIssues = function (query) {
  return this._request({
    method: "GET",
    path: "/api/v2/users/myself/recentlyViewedIssues",
    query
  });
};

/**
 * Returns list of projects which the user viewed recently.
 * @param {*} [query] 
 */
Backlog.prototype.getListOfRecentlyViewedProjects = function (query) {
  return this._request({
    method: "GET",
    path: "/api/v2/users/myself/recentlyViewedProjects",
    query
  });
};

/**
 * Returns list of Wikis which the user viewed recently.
 * @param {*} [query] 
 */
Backlog.prototype.getListOfRecentlyViewedWikis = function (query) {
  return this._request({
    method: "GET",
    path: "/api/v2/users/myself/recentlyViewedWikis",
    query
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
    path: `/api/v2/projects/${projectIdOrKey}/users`,
    query
  });
};

/**
 * Removes user from list project members.
 * @param {string} projectIdOrKey 
 * @param {number} userId 
 */
Backlog.prototype.deleteProjectUser = function (projectIdOrKey, userId) {
  return this._request({
    method: "DELETE",
    path: `/api/v2/projects/${projectIdOrKey}/users`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: { userId }
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
 * Get comment list.
 * @param {string} issueIdOrKey 
 * @param {object} [query]
 */
Backlog.prototype.getCommentList = async function (issueIdOrKey, query = {}) {
  return this._request({
    method: "GET",
    path: `/api/v2/issues/${issueIdOrKey}/comments`,
    query
  });
};

/**
 * Add comment.
 * @param {string} issueIdOrKey 
 * @param {object} comment
 */
Backlog.prototype.addComment = async function (issueIdOrKey, comment) {
  return this._request({
    method: "POST",
    path: `/api/v2/issues/${issueIdOrKey}/comments`,
    body: comment
  });
};

/**
 * Get number of comments.
 * @param {string} issueIdOrKey 
 */
Backlog.prototype.countComment = async function (issueIdOrKey) {
  return this._request({
    method: "GET",
    path: `/api/v2/issues/${issueIdOrKey}/comments/count`
  });
};

/**
 * Get specified comment information.
 * @param {string} issueIdOrKey
 * @param {number} commentId
 */
Backlog.prototype.getComment = async function (issueIdOrKey, commentId) {
  return this._request({
    method: "GET",
    path: `/api/v2/issues/${issueIdOrKey}/comments/${commentId}`
  });
};

/**
 * Delete specified comment.
 * @param {string} issueIdOrKey 
 * @param {number} commentId
 */
Backlog.prototype.deleteComment = async function (issueIdOrKey, commentId) {
  return this._request({
    method: "DELETE",
    path: `/api/v2/issues/${issueIdOrKey}/comments/${commentId}`
  });
};

/**
 * Update specified comment.
 * @param {string} issueIdOrKey 
 * @param {number} commentId
 * @param {object} comment
 */
Backlog.prototype.updateComment = async function (issueIdOrKey, commentId, comment) {
  return this._request({
    method: "PATCH",
    path: `/api/v2/issues/${issueIdOrKey}/comments/${commentId}`,
    body: comment
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
