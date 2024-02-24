export enum QUERY_KEYS {
  // AUTH KEYS
  CREATE_USER_ACCOUNT = "createUserAccount",

  // USER KEYS
  GET_CURRENT_USER = "getCurrentUser",
  GET_USERS = "getUsers",
  GET_USER_BY_ID = "getUserById",

  // POST KEYS
  GET_POSTS = "getPosts",
  GET_INFINITE_POSTS = "getInfinitePosts",
  GET_RECENT_POSTS = "getRecentPosts",
  GET_POST_BY_ID = "getPostById",
  GET_USER_POSTS = "getUserPosts",
  GET_FILE_PREVIEW = "getFilePreview",

  //  SEARCH KEYS
  SEARCH_POSTS = "getSearchPosts",
  SEARCH_POSTS_BY_TAG = "getSearchPostsByTag",
  SEARCH_USERS = "getSearchUsers",

  // NOTIFICATION KEYS
  GET_NOTIFICATIONS = "getNotifications",

  // COMMENT KEYS
  GET_COMMENTS = "getComments",
  CREATE_COMMENT = "createComment",
  UPDATE_COMMENT = "updateComment",
  DELETE_COMMENT = "deleteComment",

  // LIKE KEYS
  LIKE_POSTS = "likePosts",
  SAVE_POSTS = "savePosts",
  DELETE_SAVED_POSTS = "deleteSavedPosts",
}
