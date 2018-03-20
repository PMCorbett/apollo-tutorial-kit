import fetch from './fetch';

// add this somewhere in the middle
const Agency = {
  find(id) {
    return fetch(`http://api.crowdlab.io/agencies/${id}`)
      .then(({ data }) => {
        return data.agency;
      })
      .catch((bullshit) => {
        console.log(bullshit);
      });
  },
  list() {
    return fetch(`http://api.crowdlab.io/agencies/`)
      .then(({ data }) => {
        return data.agencies;
      })
      .catch((bullshit) => {
        console.log(bullshit);
      });
  },
};

const Client = {
  find(id) {
    return fetch(`http://api.crowdlab.io/clients/${id}`)
      .then(({ data }) => {
        return data.client;
      })
      .catch((bullshit) => {
        console.log(bullshit);
      });
  },
  list(agencyId) {
    return fetch(`http://api.crowdlab.io/agencies/${agencyId}/clients`)
      .then(({ data }) => {
        return data.clients;
      })
      .catch((bullshit) => {
        console.log(bullshit);
      });
  },
};

const Project = {
  find(id) {
    return fetch(`http://api.crowdlab.io/projects/${id}`)
      .then(({ data }) => {
        return data.project;
      })
      .catch((bullshit) => {
        console.log(bullshit);
      });
  },
  list(clientId) {
    return fetch(`http://api.crowdlab.io/clients/${clientId}/projects`)
      .then(({ data }) => {
        return data.projects;
      })
      .catch((bullshit) => {
        console.log(bullshit);
      });
  },
  list_all() {
    return fetch(`http://api.crowdlab.io/projects`)
      .then(({ data }) => {
        return data.projects;
      })
      .catch((bullshit) => {
        console.log(bullshit);
      });
  },
};

const TaskList = {
  find(id) {
    return fetch(`http://api.crowdlab.io/task_lists/${id}`)
      .then(({ data }) => {
        return data.task_list;
      })
      .catch((bullshit) => {
        console.log(bullshit);
      });
  },
  list(projectId) {
    return fetch(`http://api.crowdlab.io/projects/${projectId}/task_lists`)
      .then(({ data }) => {
        return data.task_lists;
      })
      .catch((bullshit) => {
        console.log(bullshit);
      });
  },
};

const Task = {
  find(id) {
    return fetch(`http://api.crowdlab.io/tasks/${id}`)
      .then(({ data }) => {
        return data.task;
      })
      .catch((bullshit) => {
        console.log(bullshit);
      });
  },
  list(taskListId) {
    return fetch(`http://api.crowdlab.io/task_lists/${taskListId}/tasks`)
      .then(({ data }) => {
        return data.tasks;
      })
      .catch((bullshit) => {
        console.log(bullshit);
      });
  },
  list_project(projectId) {
    return fetch(`http://api.crowdlab.io/projects/${projectId}/tasks`)
      .then(({ data }) => {
        return data.tasks;
      })
      .catch((bullshit) => {
        console.log(bullshit);
      });
  },
};

const Participant = {
  find(id) {
    return fetch(`http://api.crowdlab.io/participants/${id}`)
      .then(({ data }) => {
        return data.participant;
      })
      .catch((bullshit) => {
        console.log(bullshit);
      });
  },
  list_project(projectId) {
    return fetch(`http://api.crowdlab.io/projects/${projectId}/participants`)
      .then(({ data }) => {
        return data.participants;
      })
      .catch((bullshit) => {
        console.log(bullshit);
      });
  },
};

const Segment = {
  find(id) {
    return fetch(`http://api.crowdlab.io/segments/${id}`)
      .then(({ data }) => {
        return data.segment;
      })
      .catch((bullshit) => {
        console.log(bullshit);
      });
  },
  list_project(projectId) {
    return fetch(`http://api.crowdlab.io/projects/${projectId}/segments`)
      .then(({ data }) => {
        return data.segments;
      })
      .catch((bullshit) => {
        console.log(bullshit);
      });
  },
};

const Response = {
  find(id) {
    return fetch(`http://api.crowdlab.io/responses/${id}`)
      .then(({ data }) => {
        return data.response;
      })
      .catch((bullshit) => {
        console.log(bullshit);
      });
  },
  list_project(projectId) {
    return fetch(`http://api.crowdlab.io/projects/${projectId}/responses`)
      .then(({ data }) => {
        return data.responses;
      })
      .catch((bullshit) => {
        console.log(bullshit);
      });
  },
};

export {
  Agency,
  Client,
  Project,
  TaskList,
  Task,
  Participant,
  Segment,
  Response,
};
