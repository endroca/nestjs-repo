import { Query, Resolver } from '@nestjs/graphql';
import { Projects } from './models/projects.model';
import { ProjectsService } from './projects.service';

@Resolver(() => Projects)
export class ProjectsResolver {
  constructor(private service: ProjectsService) {}

  @Query(() => [Projects])
  getProjects() {
    return this.service.getProjects();
  }
}
