<a name="Backlog"></a>

## Backlog(host, apiKey)
Create and initialize backlog api v2 client instance.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| host | <code>string</code> | Backlog domain name. |
| apiKey | <code>string</code> | Backlog access api key. |


* [Backlog(host, apiKey)](#Backlog)
    * _instance_
        * [.getSpace()](#Backlog+getSpace)
        * [.getRecentUpdates(query)](#Backlog+getRecentUpdates)
        * [.getSpaceLogo()](#Backlog+getSpaceLogo) ⇒ <code>stream</code>
        * [.getSpaceNotification()](#Backlog+getSpaceNotification)
        * [.updateSpaceNotification(notification)](#Backlog+updateSpaceNotification)
        * [.getSpaceDiskUsage()](#Backlog+getSpaceDiskUsage)
        * [.getUserList()](#Backlog+getUserList)
        * [.getUser(userId)](#Backlog+getUser)
        * [.addUser(user)](#Backlog+addUser)
        * [.updateUser(userId, user)](#Backlog+updateUser)
        * [.getOwnUser()](#Backlog+getOwnUser)
        * [.getUserIcon(userId)](#Backlog+getUserIcon) ⇒ <code>stream</code>
        * [.getUserRecentUpdates(userId, [query])](#Backlog+getUserRecentUpdates)
        * [.getReceivedStarList(userId, [query])](#Backlog+getReceivedStarList)
        * [.countUserReceivedStars(userId, [query])](#Backlog+countUserReceivedStars)
        * [.getListOfRecentlyViewedIssues([query])](#Backlog+getListOfRecentlyViewedIssues)
        * [.getListOfRecentlyViewedProjects([query])](#Backlog+getListOfRecentlyViewedProjects)
        * [.getListOfRecentlyViewedWikis([query])](#Backlog+getListOfRecentlyViewedWikis)
        * [.getStatusListOfProject(projectIdOrKey)](#Backlog+getStatusListOfProject)
        * [.getPriorityList()](#Backlog+getPriorityList)
        * [.getResolutionList()](#Backlog+getResolutionList)
        * [.getProjectList(query)](#Backlog+getProjectList)
        * [.addProject(project)](#Backlog+addProject)
        * [.getProject(projectIdOrKey)](#Backlog+getProject)
        * [.updateProject(projectIdOrKey, project)](#Backlog+updateProject)
        * [.deleteProject(projectIdOrKey)](#Backlog+deleteProject)
        * [.getProjectIcon(projectIdOrKey)](#Backlog+getProjectIcon) ⇒ <code>stream</code>
        * [.getProjectRecentUpdates(projectIdOrKey)](#Backlog+getProjectRecentUpdates)
        * [.addProjectUser(projectIdOrKey, user)](#Backlog+addProjectUser)
        * [.getProjectUserList(projectIdOrKey, query)](#Backlog+getProjectUserList)
        * [.deleteProjectUser(projectIdOrKey, userId)](#Backlog+deleteProjectUser)
        * [.getIssueTypeList(projectIdOrKey)](#Backlog+getIssueTypeList)
        * [.getCategoryList(projectIdOrKey)](#Backlog+getCategoryList)
        * [.getVersionMilestoneList(projectIdOrKey)](#Backlog+getVersionMilestoneList)
        * [.getCustomoFieldList(projectIdOrKey)](#Backlog+getCustomoFieldList)
        * [.getIssueList(query)](#Backlog+getIssueList)
        * [.countIssue(query)](#Backlog+countIssue)
        * [.addIssue(issue)](#Backlog+addIssue)
        * [.getIssue(issueIdOrKey)](#Backlog+getIssue)
        * [.updateIssue(issueIdOrKey, issue)](#Backlog+updateIssue)
        * [.deleteIssue(issueIdOrKey)](#Backlog+deleteIssue)
        * [.getCommentList(issueIdOrKey, [query])](#Backlog+getCommentList)
        * [.addComment(issueIdOrKey, comment)](#Backlog+addComment)
        * [.countComment(issueIdOrKey)](#Backlog+countComment)
        * [.getComment(issueIdOrKey, commentId)](#Backlog+getComment)
        * [.deleteComment(issueIdOrKey, commentId)](#Backlog+deleteComment)
        * [.updateComment(issueIdOrKey, commentId, comment)](#Backlog+updateComment)
    * _static_
        * [.USER_ROLE_TYPE](#Backlog.USER_ROLE_TYPE) : <code>enum</code>
        * [.ISSUE_PARENT_CHILD](#Backlog.ISSUE_PARENT_CHILD) : <code>enum</code>
        * [.ISSUE_SORT_KEY](#Backlog.ISSUE_SORT_KEY) : <code>enum</code>
        * [.SORT_ORDER](#Backlog.SORT_ORDER) : <code>enum</code>

<a name="Backlog+getSpace"></a>

### backlog.getSpace()
Returns information about your space.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  
<a name="Backlog+getRecentUpdates"></a>

### backlog.getRecentUpdates(query)
Returns recent updates in your space.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  

| Param | Type |
| --- | --- |
| query | <code>\*</code> | 

<a name="Backlog+getSpaceLogo"></a>

### backlog.getSpaceLogo() ⇒ <code>stream</code>
Returns logo PNG image of your space.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  
<a name="Backlog+getSpaceNotification"></a>

### backlog.getSpaceNotification()
Returns space notification.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  
<a name="Backlog+updateSpaceNotification"></a>

### backlog.updateSpaceNotification(notification)
Updates space notification.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  

| Param | Type |
| --- | --- |
| notification | <code>string</code> | 

<a name="Backlog+getSpaceDiskUsage"></a>

### backlog.getSpaceDiskUsage()
Returns information about space disk usage.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  
<a name="Backlog+getUserList"></a>

### backlog.getUserList()
Returns list of users in your space.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  
<a name="Backlog+getUser"></a>

### backlog.getUser(userId)
Returns information about user.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  

| Param | Type |
| --- | --- |
| userId | <code>number</code> | 

<a name="Backlog+addUser"></a>

### backlog.addUser(user)
Adds new user to the space."Project Administrator" cannot add "Admin" user.You can’t use this API at `backlog.com` space.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  

| Param | Type |
| --- | --- |
| user | [<code>user</code>](#backlog.addUser.user) | 

<a name="Backlog+updateUser"></a>

### backlog.updateUser(userId, user)
Updates information about user. You can’t use this API at backlog.com space.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  

| Param | Type |
| --- | --- |
| userId | <code>number</code> | 
| user | <code>\*</code> | 

<a name="Backlog+getOwnUser"></a>

### backlog.getOwnUser()
Returns own information about user.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  
<a name="Backlog+getUserIcon"></a>

### backlog.getUserIcon(userId) ⇒ <code>stream</code>
Downloads user icon.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  
**Returns**: <code>stream</code> - See "content-disposition" or "content-type" header.  

| Param | Type |
| --- | --- |
| userId | <code>number</code> | 

<a name="Backlog+getUserRecentUpdates"></a>

### backlog.getUserRecentUpdates(userId, [query])
Returns user’s recent updates.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  

| Param | Type |
| --- | --- |
| userId | <code>number</code> | 
| [query] | <code>\*</code> | 

<a name="Backlog+getReceivedStarList"></a>

### backlog.getReceivedStarList(userId, [query])
Returns the list of stars that user received.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  

| Param | Type |
| --- | --- |
| userId | <code>number</code> | 
| [query] | <code>\*</code> | 

<a name="Backlog+countUserReceivedStars"></a>

### backlog.countUserReceivedStars(userId, [query])
Returns number of stars that user received.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  

| Param | Type |
| --- | --- |
| userId | <code>number</code> | 
| [query] | <code>\*</code> | 

<a name="Backlog+getListOfRecentlyViewedIssues"></a>

### backlog.getListOfRecentlyViewedIssues([query])
Returns list of issues which the user viewed recently.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  

| Param | Type |
| --- | --- |
| [query] | <code>\*</code> | 

<a name="Backlog+getListOfRecentlyViewedProjects"></a>

### backlog.getListOfRecentlyViewedProjects([query])
Returns list of projects which the user viewed recently.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  

| Param | Type |
| --- | --- |
| [query] | <code>\*</code> | 

<a name="Backlog+getListOfRecentlyViewedWikis"></a>

### backlog.getListOfRecentlyViewedWikis([query])
Returns list of Wikis which the user viewed recently.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  

| Param | Type |
| --- | --- |
| [query] | <code>\*</code> | 

<a name="Backlog+getStatusListOfProject"></a>

### backlog.getStatusListOfProject(projectIdOrKey)
Returns list of status in the project.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  

| Param | Type |
| --- | --- |
| projectIdOrKey | <code>string</code> | 

<a name="Backlog+getPriorityList"></a>

### backlog.getPriorityList()
Returns list of priorities.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  
<a name="Backlog+getResolutionList"></a>

### backlog.getResolutionList()
Returns list of resolutions.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  
<a name="Backlog+getProjectList"></a>

### backlog.getProjectList(query)
Returns list of projects.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  

| Param | Type |
| --- | --- |
| query | <code>\*</code> | 

<a name="Backlog+addProject"></a>

### backlog.addProject(project)
Adds new project.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  

| Param | Type |
| --- | --- |
| project | <code>\*</code> | 

<a name="Backlog+getProject"></a>

### backlog.getProject(projectIdOrKey)
Returns information about project.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  

| Param | Type |
| --- | --- |
| projectIdOrKey | <code>string</code> | 

<a name="Backlog+updateProject"></a>

### backlog.updateProject(projectIdOrKey, project)
Updates information about project.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  

| Param | Type |
| --- | --- |
| projectIdOrKey | <code>string</code> | 
| project | <code>\*</code> | 

<a name="Backlog+deleteProject"></a>

### backlog.deleteProject(projectIdOrKey)
Deletes project.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  

| Param | Type |
| --- | --- |
| projectIdOrKey | <code>string</code> | 

<a name="Backlog+getProjectIcon"></a>

### backlog.getProjectIcon(projectIdOrKey) ⇒ <code>stream</code>
Downloads project icon.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  

| Param | Type |
| --- | --- |
| projectIdOrKey | <code>string</code> | 

<a name="Backlog+getProjectRecentUpdates"></a>

### backlog.getProjectRecentUpdates(projectIdOrKey)
Returns recent update in the project.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  

| Param | Type |
| --- | --- |
| projectIdOrKey | <code>string</code> | 

<a name="Backlog+addProjectUser"></a>

### backlog.addProjectUser(projectIdOrKey, user)
Adds user to list of project members.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  

| Param | Type |
| --- | --- |
| projectIdOrKey | <code>string</code> | 
| user | <code>\*</code> | 

<a name="Backlog+getProjectUserList"></a>

### backlog.getProjectUserList(projectIdOrKey, query)
Returns list of project members.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  

| Param | Type |
| --- | --- |
| projectIdOrKey | <code>string</code> | 
| query | <code>\*</code> | 

<a name="Backlog+deleteProjectUser"></a>

### backlog.deleteProjectUser(projectIdOrKey, userId)
Removes user from list project members.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  

| Param | Type |
| --- | --- |
| projectIdOrKey | <code>string</code> | 
| userId | <code>number</code> | 

<a name="Backlog+getIssueTypeList"></a>

### backlog.getIssueTypeList(projectIdOrKey)
Returns list of Issue Types in the project.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  

| Param | Type |
| --- | --- |
| projectIdOrKey | <code>string</code> | 

<a name="Backlog+getCategoryList"></a>

### backlog.getCategoryList(projectIdOrKey)
Returns list of Categories in the project.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  

| Param | Type |
| --- | --- |
| projectIdOrKey | <code>string</code> | 

<a name="Backlog+getVersionMilestoneList"></a>

### backlog.getVersionMilestoneList(projectIdOrKey)
Returns list of Versions/Milestones in the project.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  

| Param | Type |
| --- | --- |
| projectIdOrKey | <code>string</code> | 

<a name="Backlog+getCustomoFieldList"></a>

### backlog.getCustomoFieldList(projectIdOrKey)
Returns list of Custom Fields in the project.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  

| Param | Type |
| --- | --- |
| projectIdOrKey | <code>string</code> | 

<a name="Backlog+getIssueList"></a>

### backlog.getIssueList(query)
Returns list of issues.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  

| Param | Type |
| --- | --- |
| query | <code>\*</code> | 

<a name="Backlog+countIssue"></a>

### backlog.countIssue(query)
Returns number of issues.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  

| Param | Type |
| --- | --- |
| query | <code>\*</code> | 

<a name="Backlog+addIssue"></a>

### backlog.addIssue(issue)
Adds new issue.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  

| Param | Type |
| --- | --- |
| issue | <code>\*</code> | 

<a name="Backlog+getIssue"></a>

### backlog.getIssue(issueIdOrKey)
Returns information about issue.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  

| Param | Type |
| --- | --- |
| issueIdOrKey | <code>string</code> | 

<a name="Backlog+updateIssue"></a>

### backlog.updateIssue(issueIdOrKey, issue)
Updates information about issue.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  

| Param | Type |
| --- | --- |
| issueIdOrKey | <code>string</code> | 
| issue | <code>\*</code> | 

<a name="Backlog+deleteIssue"></a>

### backlog.deleteIssue(issueIdOrKey)
Deletes issue.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  

| Param | Type |
| --- | --- |
| issueIdOrKey | <code>string</code> | 

<a name="Backlog+getCommentList"></a>

### backlog.getCommentList(issueIdOrKey, [query])
Get comment list.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  

| Param | Type |
| --- | --- |
| issueIdOrKey | <code>string</code> | 
| [query] | <code>object</code> | 

<a name="Backlog+addComment"></a>

### backlog.addComment(issueIdOrKey, comment)
Add comment.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  

| Param | Type |
| --- | --- |
| issueIdOrKey | <code>string</code> | 
| comment | <code>object</code> | 

<a name="Backlog+countComment"></a>

### backlog.countComment(issueIdOrKey)
Get number of comments.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  

| Param | Type |
| --- | --- |
| issueIdOrKey | <code>string</code> | 

<a name="Backlog+getComment"></a>

### backlog.getComment(issueIdOrKey, commentId)
Get specified comment information.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  

| Param | Type |
| --- | --- |
| issueIdOrKey | <code>string</code> | 
| commentId | <code>number</code> | 

<a name="Backlog+deleteComment"></a>

### backlog.deleteComment(issueIdOrKey, commentId)
Delete specified comment.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  

| Param | Type |
| --- | --- |
| issueIdOrKey | <code>string</code> | 
| commentId | <code>number</code> | 

<a name="Backlog+updateComment"></a>

### backlog.updateComment(issueIdOrKey, commentId, comment)
Update specified comment.

**Kind**: instance method of [<code>Backlog</code>](#Backlog)  

| Param | Type |
| --- | --- |
| issueIdOrKey | <code>string</code> | 
| commentId | <code>number</code> | 
| comment | <code>object</code> | 

<a name="Backlog.USER_ROLE_TYPE"></a>

### Backlog.USER\_ROLE\_TYPE : <code>enum</code>
Enum for user roleType.

**Kind**: static enum of [<code>Backlog</code>](#Backlog)  
**Read only**: true  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| ADMINISTRATOR | <code>number</code> | <code>1</code> | 
| NORMAL_USER | <code>number</code> | <code>2</code> | 
| REPORTER | <code>number</code> | <code>3</code> | 
| VIEWER | <code>number</code> | <code>4</code> | 
| GUEST_REPORTER | <code>number</code> | <code>5</code> | 
| GUEST_VIEWER | <code>number</code> | <code>6</code> | 

<a name="Backlog.ISSUE_PARENT_CHILD"></a>

### Backlog.ISSUE\_PARENT\_CHILD : <code>enum</code>
Enum for issue parentChild type.

**Kind**: static enum of [<code>Backlog</code>](#Backlog)  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| ALL | <code>number</code> | <code>0</code> | 
| EXCLUDE_CHILD_ISSUE | <code>number</code> | <code>1</code> | 
| CHILD_ISSUE | <code>number</code> | <code>2</code> | 
| NEITHER_PARENT_ISSUE_NOR_CHILD_ISSUE | <code>number</code> | <code>3</code> | 
| PARENT_ISSUE | <code>number</code> | <code>4</code> | 

<a name="Backlog.ISSUE_SORT_KEY"></a>

### Backlog.ISSUE\_SORT\_KEY : <code>enum</code>
Enum for issue sort key.

**Kind**: static enum of [<code>Backlog</code>](#Backlog)  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| ISSUETYPE | <code>string</code> | <code>&quot;issueType&quot;</code> | 
| CATEGORY | <code>string</code> | <code>&quot;category&quot;</code> | 
| VERSION | <code>string</code> | <code>&quot;version&quot;</code> | 
| MILESTONE | <code>string</code> | <code>&quot;milestone&quot;</code> | 
| SUMMARY | <code>string</code> | <code>&quot;summary&quot;</code> | 
| STATUS | <code>string</code> | <code>&quot;status&quot;</code> | 
| PRIORITY | <code>string</code> | <code>&quot;priority&quot;</code> | 
| ATTACHMENT | <code>string</code> | <code>&quot;attachment&quot;</code> | 
| SHAREDFILE | <code>string</code> | <code>&quot;sharedFile&quot;</code> | 
| CREATED | <code>string</code> | <code>&quot;created&quot;</code> | 
| CREATEDUSER | <code>string</code> | <code>&quot;createdUser&quot;</code> | 
| UPDATED | <code>string</code> | <code>&quot;updated&quot;</code> | 
| UPDATEDUSER | <code>string</code> | <code>&quot;updatedUser&quot;</code> | 
| ASSIGNEE | <code>string</code> | <code>&quot;assignee&quot;</code> | 
| STARTDATE | <code>string</code> | <code>&quot;startDate&quot;</code> | 
| DUEDATE | <code>string</code> | <code>&quot;dueDate&quot;</code> | 
| ESTIMATEDHOURS | <code>string</code> | <code>&quot;estimatedHours&quot;</code> | 
| ACTUALHOURS | <code>string</code> | <code>&quot;actualHours&quot;</code> | 
| CHILDISSUE | <code>string</code> | <code>&quot;childIssue&quot;</code> | 

<a name="Backlog.SORT_ORDER"></a>

### Backlog.SORT\_ORDER : <code>enum</code>
Enum for sort order.

**Kind**: static enum of [<code>Backlog</code>](#Backlog)  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| ASC | <code>string</code> | <code>&quot;asc&quot;</code> | 
| DESC | <code>string</code> | <code>&quot;desc&quot;</code> | 

