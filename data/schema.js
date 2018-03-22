import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
type Query {
  agency(id: Int, name: String): Agency @cacheControl(maxAge: 5)
  agencies: [Agency] @cacheControl(maxAge: 5)
  client(id: Int, name: String): Client @cacheControl(maxAge: 5)
  clients(agencyId: Int): [Client] @cacheControl(maxAge: 5)
  project(id: Int, name: String): Project @cacheControl(maxAge: 5)
  projects: [Project] @cacheControl(maxAge: 5)
  taskList(id: Int): TaskList @cacheControl(maxAge: 5)
  taskLists(projectId: Int): [TaskList] @cacheControl(maxAge: 5)
  task(id: Int): Task @cacheControl(maxAge: 5)
  tasks(projectId: Int): [Task] @cacheControl(maxAge: 5)
  participant(id: Int): Participant @cacheControl(maxAge: 5)
  participants(projectId: Int): [Participant] @cacheControl(maxAge: 5)
  segment(id: Int): Segment @cacheControl(maxAge: 5)
  segments(projectId: Int): [Segment] @cacheControl(maxAge: 5)
  response(id: Int): Response @cacheControl(maxAge: 5)
  responses(projectId: Int): [Response] @cacheControl(maxAge: 5)
}

type Mutation {
  addAgency(name: String!): Agency
  editAgency(id: Int!, name: String!): Agency
  deleteAgency(id: Int!): Agency
}

type Agency {
  id: Int
  name: String
  clients: [Client] @cacheControl(maxAge: 5)
}

type Client {
  id: Int
  name: String
  projects: [Project] @cacheControl(maxAge: 5)
  agency: Agency @cacheControl(maxAge: 5)
}

type Project {
  id: Int
  status: String
  platforms: [String]
  title: String
  description: String
  privacy_url: String
  client: Client
  taskLists: [TaskList] @cacheControl(maxAge: 5)
  tasks: [Task] @cacheControl(maxAge: 5)
  participants: [Participant] @cacheControl(maxAge: 5)
  segments: [Segment] @cacheControl(maxAge: 5)
  responses: [Response] @cacheControl(maxAge: 5)
}

type TaskList {
  id: Int
  label: String
  position: Int
  project: Project @cacheControl(maxAge: 5)
  tasks: [Task] @cacheControl(maxAge: 5)
}

type Task {
  id: Int
  description: String
  position: Int
  title: String
  type: String
  questions: [Question]
}

type Question {
  options: [Option]
  stimuli: [Stimulus]
  tags: [Tag]
  targets: [Target]
  task: Task
}

type Option {
  id: Int
}
type Stimulus {
  id: Int
}
type Tag {
  id: Int
}
type Target {
  id: Int
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
  project: Project @cacheControl(maxAge: 5)
}

type Response {
  id: Int
  iteration: Int
  task: Task @cacheControl(maxAge: 5)
  participant: Participant @cacheControl(maxAge: 5)
}
`;

const schema = ({ authHeader, tenantHeader }) => {
  return makeExecutableSchema({
    typeDefs,
    resolvers: resolvers({ authHeader, tenantHeader }),
  });
};

export default schema;
