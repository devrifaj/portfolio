export interface IProject {
  _id?: string;
  title: string;
  desc: string;
  client: string;
  completion_time: string;
  technologies: string[];
  project_img_url: string;
  live_link: string;
  github_link: string;
}

export type CreateProjectParams = {
  project: IProject;
};
