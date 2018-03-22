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
  Forum,
} from './connectors';

const resolvers = ({ authHeader, tenantHeader }) => ({
  Query: {
    agency(root, args) {
      return Agency.find({ authHeader, tenantHeader }, args.id);
    },
    agencies(root, args) {
      return Agency.list({ authHeader, tenantHeader });
    },
    client(root, args) {
      return Client.find({ authHeader, tenantHeader }, args.id);
    },
    project(root, args) {
      return Project.find({ authHeader, tenantHeader }, args.id);
    },
    projects() {
      return Project.list_all({ authHeader, tenantHeader });
    },
    taskList(root, args) {
      return TaskList.find({ authHeader, tenantHeader }, args.id);
    },
    taskLists(root, args) {
      return TaskList.list({ authHeader, tenantHeader }, args.projectId);
    },
    task(root, args) {
      return Task.find({ authHeader, tenantHeader }, args.id);
    },
    tasks(root, args) {
      return Task.list_project({ authHeader, tenantHeader }, args.projectId);
    },
    participant(root, args) {
      return Participant.find({ authHeader, tenantHeader }, args.id);
    },
    participants(root, args) {
      return Participant.list_project(
        { authHeader, tenantHeader },
        args.projectId
      );
    },
    segment(root, args) {
      return Segment.find({ authHeader, tenantHeader }, args.id);
    },
    segments(root, args) {
      return Segment.list_project({ authHeader, tenantHeader }, args.projectId);
    },
    response(root, args) {
      return Response.find({ authHeader, tenantHeader }, args.id);
    },
    responses(root, args) {
      return Response.list_project(
        { authHeader, tenantHeader },
        args.projectId
      );
    },
  },
  Mutation: {
    addAgency(root, args) {
      return Agency.add({ authHeader, tenantHeader }, { name: args.name });
    },
    editAgency(root, args) {
      return Agency.edit(
        { authHeader, tenantHeader },
        { id: args.id, name: args.name }
      );
    },
    deleteAgency(root, args) {
      return Agency.delete({ authHeader, tenantHeader }, { id: args.id });
    },
    addForum(root, args) {
      return Forum.create({ authHeader, tenantHeader }, args);
    },
  },

  Agency: {
    clients({ id: agencyId }) {
      return Client.list({ authHeader, tenantHeader }, agencyId);
    },
  },
  Client: {
    agency(client) {
      return Agency.find({ authHeader, tenantHeader }, client.agency.id);
    },
    projects({ id: clientId }) {
      return Project.list({ authHeader, tenantHeader }, clientId);
    },
  },
  Project: {
    client(project) {
      return Client.find({ authHeader, tenantHeader }, project.client.id);
    },
    taskLists({ id: projectId }) {
      return TaskList.list({ authHeader, tenantHeader }, projectId);
    },
    tasks({ id: projectId }) {
      return Task.list_project({ authHeader, tenantHeader }, projectId);
    },
    participants({ id: projectId }) {
      return Participant.list_project({ authHeader, tenantHeader }, projectId);
    },
    segments({ id: projectId }) {
      return Segment.list_project({ authHeader, tenantHeader }, projectId);
    },
    responses({ id: projectId }) {
      return Response.list_project({ authHeader, tenantHeader }, projectId);
    },
  },
  TaskList: {
    project(taskList) {
      return Project.find({ authHeader, tenantHeader }, taskList.project.id);
    },
  },
  Response: {
    task(response) {
      return Task.find({ authHeader, tenantHeader }, response.task_id);
    },
  },
  Task: {
    questions({ id: taskId }) {
      return Question.list({ authHeader, tenantHeader }, taskId);
    },
    taskList(task) {
      return TaskList.find({ authHeader, tenantHeader }, task.task_list.id);
    },
  },
});

export default resolvers;
