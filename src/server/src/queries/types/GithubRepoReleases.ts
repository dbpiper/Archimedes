/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GithubRepoReleases
// ====================================================

export interface GithubRepoReleases_repository_releases_edges_node_author {
  __typename: "User";
  /**
   * The user's public profile name.
   */
  name: string | null;
  /**
   * The username used to login.
   */
  login: string;
  id: string;
}

export interface GithubRepoReleases_repository_releases_edges_node {
  __typename: "Release";
  /**
   * Identifies the title of the release.
   */
  name: string | null;
  /**
   * Identifies the date and time when the release was created.
   */
  publishedAt: any | null;
  /**
   * Identifies the date and time when the object was created.
   */
  createdAt: any;
  /**
   * Identifies the date and time when the object was last updated.
   */
  updatedAt: any;
  /**
   * Whether or not the release is a prerelease
   */
  isPrerelease: boolean;
  /**
   * The name of the release's Git tag
   */
  tagName: string;
  /**
   * The HTTP URL for this issue
   */
  url: any;
  id: string;
  /**
   * Identifies the description of the release.
   */
  description: string | null;
  /**
   * The author of the release
   */
  author: GithubRepoReleases_repository_releases_edges_node_author | null;
}

export interface GithubRepoReleases_repository_releases_edges {
  __typename: "ReleaseEdge";
  /**
   * The item at the end of the edge.
   */
  node: GithubRepoReleases_repository_releases_edges_node | null;
}

export interface GithubRepoReleases_repository_releases {
  __typename: "ReleaseConnection";
  /**
   * A list of edges.
   */
  edges: (GithubRepoReleases_repository_releases_edges | null)[] | null;
}

export interface GithubRepoReleases_repository {
  __typename: "Repository";
  /**
   * List of releases which are dependent on this repository.
   */
  releases: GithubRepoReleases_repository_releases;
}

export interface GithubRepoReleases {
  /**
   * Lookup a given repository by the owner and repository name.
   */
  repository: GithubRepoReleases_repository | null;
}

export interface GithubRepoReleasesVariables {
  owner: string;
  name: string;
  last: number;
}
