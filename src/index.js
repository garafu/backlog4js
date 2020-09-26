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

/**
 * Returns information about your space.
 */
Backlog.prototype.getSpace = async function () {
  return new Promise((resolve, reject) => {
    WebClient.get({
      url: `https://${this.host}/api/v2/space?apiKey=${this.apiKey}`,
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
 * Returns recent updates in your space.
 * @param {*} activities 
 */
Backlog.prototype.getRecentUpdates = async function (activities = {}) {
  return new Promise((resolve, reject) => {
    // Modify query string
    activities.apiKey = this.apiKey;

    // Get data.
    WebClient.get({
      url: `https://${this.host}/api/v2/space/activities`,
      data: activities,
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
 * Returns list of users in your space.
 */
Backlog.prototype.getUserList = async function () {
  return new Promise((resolve, reject) => {
    WebClient.get({
      url: `https://${this.host}/api/v2/users?apiKey=${this.apiKey}`,
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
 * Returns information about user.
 * @param {number} userId 
 */
Backlog.prototype.getUser = async function (userId) {
  return new Promise((resolve, reject) => {
    WebClient.get({
      url: `https://${this.host}/api/v2/users/${userId}?apiKey=${this.apiKey}`,
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
  return new Promise((resolve, reject) => {
    WebClient.get({
      url: `https://${this.host}/api/v2/users/myself?apiKey=${this.apiKey}`,
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
 * Returns list of status in the project.
 * @param {string} projectIdOrKey 
 */
Backlog.prototype.getStatusListOfProject = async function (projectIdOrKey) {
  return new Promise((resolve, reject) => {
    WebClient.get({
      url: `https://${this.host}/api/v2/projects/${projectIdOrKey}/statuses?apiKey=${this.apiKey}`,
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
 * Returns list of priorities.
 */
Backlog.prototype.getPriorityList = async function () {
  return new Promise((resolve, reject) => {
    WebClient.get({
      url: `https://${this.host}/api/v2/priorities?apiKey=${this.apiKey}`,
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
 * Returns list of resolutions.
 */
Backlog.prototype.getResolutionList = async function () {
  return new Promise((resolve, reject) => {
    WebClient.get({
      url: `https://${this.host}/api/v2/resolutions?apiKey=${this.apiKey}`,
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
 * Returns list of projects.
 * @param {boolean} archived For unspecified parameters, this form returns all projects. For ‘false’ parameters, it returns unarchived projects. For ‘true’ parameters, it returns archived projects.
 * @param {boolean} [all] Only applies to administrators. If ‘true,’ it returns all projects. If ‘false,’ it returns only projects they have joined (set to ‘false’ by default).
 */
Backlog.prototype.getProjectList = async function (archived, all) {
  return new Promise((resolve, reject) => {
    // Set query
    var query = { apiKey: this.apiKey };
    if (typeof (archived) === "boolean") {
      query.archived = archived;
    }
    if (typeof (all) === "boolean") {
      query.all = all;
    }

    // Get data.
    WebClient.get({
      url: `https://${this.host}/api/v2/projects`,
      data: query,
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
 * Returns list of Issue Types in the project.
 * @param {string} projectIdOrKey 
 */
Backlog.prototype.getIssueTypeList = async function (projectIdOrKey) {
  return new Promise((resolve, reject) => {
    WebClient.get({
      url: `https://${this.host}/api/v2/projects/${projectIdOrKey}/issueTypes`,
      data: {
        apiKey: this.apiKey
      },
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
 * Returns list of Categories in the project.
 * @param {string} projectIdOrKey 
 */
Backlog.prototype.getCategoryList = async function (projectIdOrKey) {
  return new Promise((resolve, reject) => {
    WebClient.get({
      url: `https://${this.host}/api/v2/projects/${projectIdOrKey}/categories`,
      data: {
        apiKey: this.apiKey
      },
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
 * Returns list of Versions/Milestones in the project.
 * @param {string} projectIdOrKey 
 */
Backlog.prototype.getVersionMilestoneList = async function (projectIdOrKey) {
  return new Promise((resolve, reject) => {
    WebClient.get({
      url: `https://${this.host}/api/v2/projects/${projectIdOrKey}/versions`,
      data: {
        apiKey: this.apiKey
      },
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
 * Returns list of Custom Fields in the project.
 * @param {string} projectIdOrKey 
 */
Backlog.prototype.getCustomoFieldList = async function (projectIdOrKey) {
  return new Promise((resolve, reject) => {
    WebClient.get({
      url: `https://${this.host}/api/v2/projects/${projectIdOrKey}/customFields`,
      data: {
        apiKey: this.apiKey
      },
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
 * Returns list of issues.
 * @param {*} query 
 */
Backlog.prototype.getIssueList = async function (query = {}) {
  return new Promise((resolve, reject) => {
    // Modify query string
    query.apiKey = this.apiKey;

    // Get data.
    WebClient.get({
      url: `https://${this.host}/api/v2/issues`,
      data: query,
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
 * Returns number of issues.
 * @param {*} query 
 */
Backlog.prototype.countIssue = async function (query = {}) {
  return new Promise((resolve, reject) => {
    // Modify query string
    query.apiKey = this.apiKey;

    // Get data.
    WebClient.get({
      url: `https://${this.host}/api/v2/issues/count`,
      data: query,
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
 * Adds new issue.
 * @param {*} issue 
 */
Backlog.prototype.addIssue = async function (issue) {
  return new Promise((resolve, reject) => {
    WebClient.post({
      url: `https://${this.host}/api/v2/issues?apiKey=${this.apiKey}`,
      data: issue,
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
 * Returns information about issue.
 * @param {string} issueIdOrKey 
 */
Backlog.prototype.getIssue = async function (issueIdOrKey) {
  return new Promise((resolve, reject) => {
    // Get data.
    WebClient.get({
      url: `https://${this.host}/api/v2/issues/${issueIdOrKey}?apiKey=${this.apiKey}`,
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
 * Updates information about issue.
 * @param {string} issueIdOrKey 
 * @param {*} issue 
 */
Backlog.prototype.updateIssue = async function (issueIdOrKey, issue) {
  return new Promise((resolve, reject) => {
    WebClient.patch({
      url: `https://${this.host}/api/v2/issues/${issueIdOrKey}?apiKey=${this.apiKey}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: issue,
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
 * Deletes issue.
 * @param {string} issueIdOrKey 
 */
Backlog.prototype.deleteIssue = async function (issueIdOrKey) {
  return new Promise((resolve, reject) => {
    WebClient.delete({
      url: `https://${this.host}/api/v2/issues/${issueIdOrKey}?apiKey=${this.apiKey}`,
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
Backlog.ISSUE_SORT = {
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
 * Enum for issue sort order.
 * @enum {string}
 */
Backlog.ISSUE_ORDER = {
  ASC: "asc",
  DESC: "desc"
};

module.exports = Backlog;
