import {
  Agency,
  Client,
  Project,
  TaskList,
  Task,
  Participant,
  Segment,
  Question,
  Response,
} from './connectors';

const resolvers = {
  Query: {
    agency(root, args) {
      return Agency.find(args.id);
    },
    agencies(root, args) {
      return Agency.list();
    },
    client(root, args) {
      return Client.find(args.id);
    },
    project(root, args) {
      return Project.find(args.id);
    },
    projects() {
      return Project.list_all();
    },
    taskList(root, args) {
      return TaskList.find(args.id);
    },
    taskLists(root, args) {
      return TaskList.list(args.projectId);
    },
    task(root, args) {
      return Task.find(args.id);
    },
    tasks(root, args) {
      return Task.list(args.projectId);
    },
    participant(root, args) {
      return Participant.find(args.id);
    },
    participants(root, args) {
      return Participant.list_project(args.projectId);
    },
    segment(root, args) {
      return Segment.find(args.id);
    },
    segments(root, args) {
      return Segment.list_project(args.projectId);
    },
    response(root, args) {
      return Response.find(args.id);
    },
    responses(root, args) {
      return Response.list_project(args.projectId);
    },
  },
  Mutation: {
    addAgency(root, args) {
      return Agency.add({ name: args.name });
    },
    editAgency(root, args) {
      return Agency.edit({ id: args.id, name: args.name });
    },
    deleteAgency(root, args) {
      return Agency.delete({ id: args.id });
    },
  },

  Agency: {
    clients({ id: agencyId }) {
      return Client.list(agencyId);
    },
  },
  Client: {
    agency(client) {
      return Agency.find(client.agency.id);
    },
    projects({ id: clientId }) {
      return Project.list(clientId);
    },
  },
  Project: {
    client(project) {
      return Client.find(project.client.id);
    },
    taskLists({ id: projectId }) {
      return TaskList.list(projectId);
    },
    tasks({ id: projectId }) {
      return Task.list_project(projectId);
    },
    participants({ id: projectId }) {
      return Participant.list_project(projectId);
    },
    segments({ id: projectId }) {
      return Segment.list_project(projectId);
    },
    responses({ id: projectId }) {
      return Response.list_project(projectId);
    },
  },
  TaskList: {
    project(taskList) {
      return Project.find(taskList.project.id);
    },
  },
  Response: {
    task(response) {
      return Task.find(response.task_id);
    },
  },
  Task: {
    questions({ id: taskId }) {
      return Question.list(taskId);
    },
  },
};

export default resolvers;
