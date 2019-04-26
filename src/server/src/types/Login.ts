/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Login
// ====================================================

export interface Login_viewer {
  __typename: "User";
  /**
   * The username used to login.
   */
  login: string;
}

export interface Login {
  /**
   * The currently authenticated user.
   */
  viewer: Login_viewer;
}
