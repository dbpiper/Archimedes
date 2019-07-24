import githubColors from 'github-colors';

declare module 'github-colors' {
  export interface GitHubColor {
    type: string;
    ace_mode: string;
    codemirror_mode: string;
    codemirror_mime_type: string;
    color: string;
    aliases: string[];
    extensions: string[];
    language_id: number;
  }

  interface GitHubColors {
    public get(lang: string, handleOthers?: boolean): GitHubColor;
  }

  const githubColors: GitHubColors;

  export default githubColors;
}
