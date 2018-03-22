import { fetch, post, patch, destroy } from './fetch';

// add this somewhere in the middle
const Agency = {
  find({ authHeader, tenantHeader }, id) {
    return fetch(
      { authHeader, tenantHeader },
      `http://api.crowdlab.io/agencies/${id}`
    )
      .then(({ data }) => {
        return data.agency;
      })
      .catch((bullshit) => {
        console.log(bullshit);
      });
  },
  list({ authHeader, tenantHeader }) {
    return fetch(
      { authHeader, tenantHeader },
      `http://api.crowdlab.io/agencies`
    ).then(({ data }) => {
      return data.agencies;
    });
  },
  add({ authHeader, tenantHeader }, { name }) {
    return post(
      { authHeader, tenantHeader },
      `http://api.crowdlab.io/agencies/`,
      { agency: { name } }
    )
      .then(({ data }) => {
        return data.agency;
      })
      .catch((bullshit) => {
        console.log(bullshit);
      });
  },
  edit({ authHeader, tenantHeader }, { id, name }) {
    return patch(
      { authHeader, tenantHeader },
      `http://api.crowdlab.io/agencies/${id}`,
      { agency: { name } }
    )
      .then(() => {
        return Agency.find(id);
      })
      .catch((bullshit) => {
        console.log(bullshit);
      });
  },
  delete({ authHeader, tenantHeader }, { id }) {
    return destroy(
      { authHeader, tenantHeader },
      `http://api.crowdlab.io/agencies/${id}`
    )
      .then(() => {
        return null;
      })
      .catch((bullshit) => {
        console.log(bullshit);
      });
  },
};

const Client = {
  find({ authHeader, tenantHeader }, id) {
    return fetch(
      { authHeader, tenantHeader },
      `http://api.crowdlab.io/clients/${id}`
    )
      .then(({ data }) => {
        return data.client;
      })
      .catch((bullshit) => {
        console.log(bullshit);
      });
  },
  list({ authHeader, tenantHeader }, agencyId) {
    return fetch(
      { authHeader, tenantHeader },
      `http://api.crowdlab.io/agencies/${agencyId}/clients`
    )
      .then(({ data }) => {
        return data.clients;
      })
      .catch((bullshit) => {
        console.log(bullshit);
      });
  },
};

const Project = {
  find({ authHeader, tenantHeader }, id) {
    return fetch(
      { authHeader, tenantHeader },
      `http://api.crowdlab.io/projects/${id}`
    )
      .then(({ data }) => {
        return data.project;
      })
      .catch((bullshit) => {
        console.log(bullshit);
      });
  },
  list({ authHeader, tenantHeader }, clientId) {
    return fetch(
      { authHeader, tenantHeader },
      `http://api.crowdlab.io/clients/${clientId}/projects`
    )
      .then(({ data }) => {
        return data.projects;
      })
      .catch((bullshit) => {
        console.log(bullshit);
      });
  },
  list_all({ authHeader, tenantHeader }) {
    return fetch(
      { authHeader, tenantHeader },
      `http://api.crowdlab.io/projects`
    )
      .then(({ data }) => {
        return data.projects;
      })
      .catch((bullshit) => {
        console.log(bullshit);
      });
  },
};

const TaskList = {
  find({ authHeader, tenantHeader }, id) {
    return fetch(
      { authHeader, tenantHeader },
      `http://api.crowdlab.io/task_lists/${id}`
    )
      .then(({ data }) => {
        return data.task_list;
      })
      .catch((bullshit) => {
        console.log(bullshit);
      });
  },
  list({ authHeader, tenantHeader }, projectId) {
    return fetch(
      { authHeader, tenantHeader },
      `http://api.crowdlab.io/projects/${projectId}/task_lists`
    )
      .then(({ data }) => {
        return data.task_lists;
      })
      .catch((bullshit) => {
        console.log(bullshit);
      });
  },
};

const Task = {
  find({ authHeader, tenantHeader }, id) {
    return fetch(
      { authHeader, tenantHeader },
      `http://api.crowdlab.io/tasks/${id}`
    )
      .then(({ data }) => {
        return data.task;
      })
      .catch((bullshit) => {
        console.log(bullshit);
      });
  },
  list({ authHeader, tenantHeader }, taskListId) {
    return fetch(
      { authHeader, tenantHeader },
      `http://api.crowdlab.io/task_lists/${taskListId}/tasks`
    )
      .then(({ data }) => {
        return data.tasks;
      })
      .catch((bullshit) => {
        console.log(bullshit);
      });
  },
  list_project({ authHeader, tenantHeader }, projectId) {
    return fetch(
      { authHeader, tenantHeader },
      `http://api.crowdlab.io/projects/${projectId}/tasks`
    )
      .then(({ data }) => {
        return data.tasks;
      })
      .catch((bullshit) => {
        console.log(bullshit);
      });
  },
};

const Question = {
  list({ authHeader, tenantHeader }, taskId) {
    return fetch(
      { authHeader, tenantHeader },
      `http://api.crowdlab.io/tasks/${taskId}/questions`
    )
      .then(({ data }) => {
        return data.questions;
      })
      .catch((bullshit) => {
        console.log(bullshit);
      });
  },
};

const Participant = {
  find({ authHeader, tenantHeader }, id) {
    return fetch(
      { authHeader, tenantHeader },
      `http://api.crowdlab.io/participants/${id}`
    )
      .then(({ data }) => {
        return data.participant;
      })
      .catch((bullshit) => {
        console.log(bullshit);
      });
  },
  list_project({ authHeader, tenantHeader }, projectId) {
    return fetch(
      { authHeader, tenantHeader },
      `http://api.crowdlab.io/projects/${projectId}/participants`
    )
      .then(({ data }) => {
        return data.participants;
      })
      .catch((bullshit) => {
        console.log(bullshit);
      });
  },
};

const Segment = {
  find({ authHeader, tenantHeader }, id) {
    return fetch(
      { authHeader, tenantHeader },
      `http://api.crowdlab.io/segments/${id}`
    )
      .then(({ data }) => {
        return data.segment;
      })
      .catch((bullshit) => {
        console.log(bullshit);
      });
  },
  list_project({ authHeader, tenantHeader }, projectId) {
    return fetch(
      { authHeader, tenantHeader },
      `http://api.crowdlab.io/projects/${projectId}/segments`
    )
      .then(({ data }) => {
        return data.segments;
      })
      .catch((bullshit) => {
        console.log(bullshit);
      });
  },
};

const Response = {
  find({ authHeader, tenantHeader }, id) {
    return fetch(
      { authHeader, tenantHeader },
      `http://api.crowdlab.io/responses/${id}`
    )
      .then(({ data }) => {
        return data.response;
      })
      .catch((bullshit) => {
        console.log(bullshit);
      });
  },
  list_project({ authHeader, tenantHeader }, projectId) {
    return fetch(
      { authHeader, tenantHeader },
      `http://api.crowdlab.io/projects/${projectId}/responses`
    )
      .then(({ data }) => {
        return data.responses;
      })
      .catch((bullshit) => {
        console.log(bullshit);
      });
  },
};

const Forum = {
  create(
    { authHeader, tenantHeader },
    { projectId, taskListId, title, description, type, stimulusText }
  ) {
    post(
      { authHeader, tenantHeader },
      `http://api.crowdlab.io/task_lists/${taskListId}/tasks`,
      {
        task: {
          title,
          description,
          type: 'discussion',
          alias: `F${Math.floor(Math.random() * Math.floor(999))}`,
        },
      }
    )
      .then(({ data }) => {
        const task = data.task;
        const taskId = data.task.id;

        return post(
          { authHeader, tenantHeader },
          `http://api.crowdlab.io/tasks/${taskId}/questions`,
          {
            question: {
              type,
              alias: `FQ${Math.floor(Math.random() * Math.floor(999))}`,
              summary: description,
            },
          }
        )
          .then(({ data }) => {
            const questionId = data.question.id;

            return post(
              { authHeader, tenantHeader },
              `http://api.crowdlab.io/questions/${questionId}/stimuli`,
              {
                stimulus: {
                  type: 'text',
                  label: stimulusText,
                },
              }
            )
              .then(({ data }) => {
                const stimulusId = data.stimulus.id;

                return post(
                  { authHeader, tenantHeader },
                  `http://api.crowdlab.io/questions/${questionId}/options`,
                  {
                    option: {
                      type: 'post',
                    },
                  }
                )
                  .then(({ data }) => {
                    const optionId = data.option.id;

                    return task;
                  })
                  .catch((bullshit) => {
                    console.log(bullshit.response.data);
                  });
              })
              .catch((bullshit) => {
                console.log(bullshit.response.data);
              });
          })
          .catch((bullshit) => {
            console.log(bullshit.response.data);
          });
      })
      .catch((bullshit) => {
        console.log(bullshit.response.data);
      });
  },
};

export {
  Agency,
  Client,
  Forum,
  Participant,
  Project,
  Question,
  Response,
  Segment,
  Task,
  TaskList,
};
