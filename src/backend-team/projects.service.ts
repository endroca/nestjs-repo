import { Injectable } from '@nestjs/common';
import { Projects } from './models/projects.model';

const PROJECTS: (Partial<Projects> & { users: number[] })[] = [
  {
    id: 1,
    name: 'Apollo gateway',
    users: [1, 2],
  },
  {
    id: 2,
    name: 'Federated',
    users: [1, 2, 3, 4],
  },
  {
    id: 3,
    name: 'API core',
    users: [1, 2, 3, 4, 5],
  },
];

@Injectable()
export class ProjectsService {
  getProjects() {
    return PROJECTS;
  }
}
