import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
type Query {
  testString: String
  agency(id: Int, name: String): Agency
  agencies: [Agency]
  client(id: Int, name: String): Client
  clients(agencyId: Int): [Client]
  project(id: Int, name: String): Project
  projects: [Project]
  taskList(id: Int): TaskList
  taskLists(projectId: Int): [TaskList]
  task(id: Int): Task
  tasks(projectId: Int): [Task]
  participant(id: Int): Participant
  participants(projectId: Int): [Participant]
  segment(id: Int): Segment
  segments(projectId: Int): [Segment]
  response(id: Int): Response
  responses(projectId: Int): [Response]
}

type Agency {
  id: Int
  name: String
  clients: [Client]
}

type Client {
  id: Int
  name: String
  projects: [Project]
  agency: Agency
}

type Project {
  id: Int
  status: String
  platforms: [String]
  title: String
  description: String
  privacy_url: String
  client: Client
  taskLists: [TaskList]
  tasks: [Task]
  participants: [Participant]
  segments: [Segment]
  responses: [Response]
}

type TaskList {
  id: Int
  label: String
  position: Int
  project: Project
  tasks: [Task]
}

type Task {
  id: Int
  description: String
  position: Int
  title: String
  type: String
}

type Participant {
  id: Int
  email: String
  name: String
  nickname: String
  gender: String
}

type Segment {
  id: Int
  code: String
  label: String
  limit: Int
  status: String
  project: Project
}

type Response {
  id: Int
  iteration: Int
  task: Task
  participant: Participant
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
