/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Releases
// ====================================================

export interface Releases_releases_author {
  __typename: "User";
  id: string;
  name: string | null;
  login: string;
}

export interface Releases_releases {
  __typename: "Release";
  id: string;
  name: string | null;
  tagName: string;
  url: string;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
  isPrerelease: boolean;
  description: string | null;
  author: Releases_releases_author | null;
}

export interface Releases {
  releases: (Releases_releases | null)[];
}

export interface ReleasesVariables {
  owner: string;
  name: string;
  last: number;
}
