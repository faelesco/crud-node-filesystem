const fs = require('fs');
const isEqual = require('lodash.isequal');

console.log('[CRUD] Node - File System');

const crud = {
  posts: [],
  readPostById() {
    const fileContent = fs.readFileSync('./db.json', { encoding: 'utf-8' });
    crud.posts = fileContent ? JSON.parse(fileContent) : [];
    return crud.posts;
  },
  createPostById({ id, content }) {
    const dados = { id, content };
    crud.posts.push(dados);
    this.updateFile();
  },
  updatePostById(id, updatedContent) {
    const postToUpdate = crud.posts.find((post) => post.id === id);
    if (postToUpdate) {
      postToUpdate.content = updatedContent;
      this.updateFile();
    }
  },
  deletePostById(id) {
    const index = crud.posts.findIndex((post) => post.id === id);
    if (index !== -1) {
      crud.posts.splice(index, 1);
      this.updateFile();
    }
  },
  updateFile() {
    const oldData = fs.readFileSync('./db.json', { encoding: 'utf-8' });
    const updatedData = JSON.stringify(crud.posts);
    if (!isEqual(oldData, updatedData)) {
      fs.writeFileSync('./db.json', updatedData, { encoding: 'utf-8' });
    }
  },
};

// Read
console.log('Leitura do arquivo', crud.readPostById());

// Create
const date = new Date();
crud.createPostById({ id: "1", content: "batata2"});

// Update
const postIdToUpdate = 'id-do-post-a-ser-atualizado';
const updatedContent = 'Novo conteúdo do post';
console.log(updatedContent, crud.updatePostById(postIdToUpdate, updatedContent));

// Delete
const postIdToDelete = 'id-do-post-a-ser-deletado';
crud.deletePostById(postIdToDelete);

const jsonTest = `{
   "flow":{
      "onboarding":{
         "$contentActions":[
            {
               "input":{
                  "bypass":false,
                  "$cardContent":{
                     "document":{
                        "id":"c72575ff-8ef4-40ba-bf86-7f76b60fe8fa",
                        "type":"text/plain"
                     },
                     "editable":false,
                     "deletable":false,
                     "position":"right",
                     "editing":false
                  },
                  "$invalid":false
               },
               "$invalid":false
            }
         ],
         "$conditionOutputs":[
            {
               "stateId":"welcome",
               "conditions":[
                  {
                     "source":"input",
                     "comparison":"matches",
                     "values":[
                        ".*"
                     ]
                  }
               ],
               "$connId":"con_3",
               "$invalid":false,
               "$id":"9432e26e-b15f-4476-91bf-fe6729c24d53"
            }
         ],
         "$enteringCustomActions":[
            
         ],
         "$leavingCustomActions":[
            
         ],
         "$inputSuggestions":[
            
         ],
         "$defaultOutput":{
            "stateId":"fallback",
            "$invalid":false
         },
         "$tags":[
            {
               "id":"blip-tag-d9f5d3ef-eb61-4345-9522-cf1f82815925",
               "label":"UserInput",
               "background":"#000000",
               "canChangeBackground":false
            }
         ],
         "id":"onboarding",
         "root":true,
         "$position":{
            "top":"120px",
            "left":"644px"
         },
         "$title":"Início",
         "$invalidContentActions":false,
         "$invalidOutputs":false,
         "$invalidCustomActions":false,
         "$invalid":false
      },
      "fallback":{
         "$contentActions":[
            {
               "input":{
                  "bypass":true,
                  "$cardContent":{
                     "document":{
                        "id":"af78d509-df53-4299-bfd1-47b9ef51b052",
                        "type":"text/plain"
                     },
                     "editable":false,
                     "deletable":true,
                     "position":"right",
                     "editing":false
                  },
                  "$invalid":false
               },
               "$invalid":false
            }
         ],
         "$conditionOutputs":[
            {
               "stateId":"error",
               "conditions":[
                  {
                     "source":"input",
                     "comparison":"matches",
                     "values":[
                        ".*"
                     ]
                  }
               ],
               "$connId":"con_8",
               "$invalid":false,
               "$id":"5eac492b-15f0-4bfc-9589-43691a83a5ee"
            }
         ],
         "$enteringCustomActions":[
            
         ],
         "$leavingCustomActions":[
            
         ],
         "$inputSuggestions":[
            
         ],
         "$defaultOutput":{
            "stateId":"onboarding",
            "$invalid":false
         },
         "$tags":[
            
         ],
         "id":"fallback",
         "$position":{
            "top":"120px",
            "left":"877px"
         },
         "$title":"Exceções",
         "$invalidContentActions":false,
         "$invalidOutputs":false,
         "$invalidCustomActions":false,
         "$invalid":false
      },
      "welcome":{
         "$contentActions":[
            {
               "action":{
                  "type":"SendMessage",
                  "settings":{
                     "id":"00000000-0000-0000-0000-000000000000",
                     "type":"application/vnd.lime.chatstate+json",
                     "content":{
                        "state":"composing",
                        "interval":1000
                     }
                  },
                  "$cardContent":{
                     "document":{
                        "id":"00000000-0000-0000-0000-000000000000",
                        "type":"application/vnd.lime.chatstate+json",
                        "content":{
                           "state":"composing",
                           "interval":1000
                        }
                     },
                     "editable":true,
                     "deletable":true,
                     "position":"left",
                     "editing":false
                  }
               },
               "$invalid":false
            },
            {
               "action":{
                  "type":"SendMessage",
                  "settings":{
                     "id":"00000000-0000-0000-0000-000000000001",
                     "type":"text/plain",
                     "content":"Olá! {{contact.name}}!\nSeja bem-vindo(a)!"
                  },
                  "$cardContent":{
                     "document":{
                        "id":"00000000-0000-0000-0000-000000000001",
                        "type":"text/plain",
                        "content":"Olá! {{contact.name}}!\nSeja bem-vindo(a)!"
                     },
                     "editable":true,
                     "deletable":true,
                     "position":"left",
                     "editing":false
                  }
               },
               "$invalid":false
            },
            {
               "input":{
                  "bypass":false,
                  "$cardContent":{
                     "document":{
                        "id":"1a26f0cb-ef59-46ef-81c1-4a60c484ab9c",
                        "type":"text/plain",
                        "content":"Entrada do usuário"
                     },
                     "editable":false,
                     "deletable":true,
                     "position":"right",
                     "editing":false
                  },
                  "$invalid":false
               },
               "$invalid":false
            }
         ],
         "$conditionOutputs":[
            
         ],
         "$enteringCustomActions":[
            
         ],
         "$leavingCustomActions":[
            
         ],
         "$inputSuggestions":[
            
         ],
         "$defaultOutput":{
            "stateId":"fallback",
            "$invalid":false
         },
         "$tags":[
            {
               "id":"blip-tag-ea2cee8c-f29f-4b24-8efa-a7188c15b8cc",
               "label":"UserInput",
               "background":"#000000",
               "canChangeBackground":false
            }
         ],
         "id":"welcome",
         "$position":{
            "top":"240px",
            "left":"644px"
         },
         "$title":"Boas vindas",
         "$invalidContentActions":false,
         "$invalidOutputs":false,
         "$invalidCustomActions":false,
         "$invalid":false
      },
      "error":{
         "$contentActions":[
            {
               "action":{
                  "type":"SendMessage",
                  "settings":{
                     "id":"00000000-0000-0000-0000-000000000002",
                     "type":"application/vnd.lime.chatstate+json",
                     "content":{
                        "state":"composing",
                        "interval":1000
                     }
                  },
                  "$cardContent":{
                     "document":{
                        "id":"00000000-0000-0000-0000-000000000002",
                        "type":"application/vnd.lime.chatstate+json",
                        "content":{
                           "state":"composing",
                           "interval":1000
                        }
                     },
                     "editable":true,
                     "deletable":true,
                     "position":"left",
                     "editing":false
                  }
               },
               "$invalid":false
            },
            {
               "action":{
                  "type":"SendMessage",
                  "settings":{
                     "id":"00000000-0000-0000-0000-000000000003",
                     "type":"text/plain",
                     "content":"Desculpe, não consegui entender!"
                  },
                  "$cardContent":{
                     "document":{
                        "id":"00000000-0000-0000-0000-000000000003",
                        "type":"text/plain",
                        "content":"Desculpe, não consegui entender!"
                     },
                     "editable":true,
                     "deletable":true,
                     "position":"left",
                     "editing":false
                  }
               },
               "$invalid":false
            },
            {
               "input":{
                  "bypass":true,
                  "$cardContent":{
                     "document":{
                        "id":"e7bb1bfa-c726-4099-a668-25b5b84cf8b0",
                        "type":"text/plain"
                     },
                     "editable":false,
                     "deletable":true,
                     "position":"right",
                     "editing":false
                  },
                  "$invalid":false
               },
               "$invalid":false
            }
         ],
         "$conditionOutputs":[
            
         ],
         "$enteringCustomActions":[
            
         ],
         "$leavingCustomActions":[
            
         ],
         "$inputSuggestions":[
            
         ],
         "$defaultOutput":{
            "stateId":"onboarding",
            "$invalid":false
         },
         "$tags":[
            
         ],
         "id":"error",
         "$position":{
            "top":"240px",
            "left":"877px"
         },
         "$title":"Erro padrão",
         "$invalidContentActions":false,
         "$invalidOutputs":false,
         "$invalidCustomActions":false,
         "$invalid":false
      },
      "06c8a577-0496-4deb-ba42-ca72bc257eea":{
         "$contentActions":[
            {
               "action":{
                  "type":"SendMessage",
                  "settings":{
                     "id":"28a0b818-9c5b-49fa-80cb-e5aa59f0e2a1",
                     "type":"application/vnd.lime.chatstate+json",
                     "content":{
                        "state":"composing",
                        "interval":1000
                     }
                  },
                  "$cardContent":{
                     "document":{
                        "id":"28a0b818-9c5b-49fa-80cb-e5aa59f0e2a1",
                        "type":"application/vnd.lime.chatstate+json",
                        "content":{
                           "state":"composing",
                           "interval":1000
                        }
                     },
                     "editable":true,
                     "deletable":true,
                     "position":"left"
                  }
               },
               "$invalid":false
            },
            {
               "action":{
                  "type":"SendMessage",
                  "settings":{
                     "id":"b1e77845-a8fc-4939-949a-456daa18ded1",
                     "type":"text/plain",
                     "content":"Obrigada, {{primeiro_nome}}!\nPara terminar seu registro, vou precisar de um sobrenome também"
                  },
                  "$cardContent":{
                     "document":{
                        "id":"b1e77845-a8fc-4939-949a-456daa18ded1",
                        "type":"text/plain",
                        "content":"Obrigada, {{primeiro_nome}}!\nPara terminar seu registro, vou precisar de um sobrenome também"
                     },
                     "editable":true,
                     "deletable":true,
                     "position":"left"
                  }
               },
               "$invalid":false
            },
            {
               "action":{
                  "type":"SendMessage",
                  "settings":{
                     "id":"867b3276-a4c2-4823-8459-d57486539a0d",
                     "type":"application/vnd.lime.chatstate+json",
                     "content":{
                        "state":"composing",
                        "interval":1000
                     }
                  },
                  "$cardContent":{
                     "document":{
                        "id":"867b3276-a4c2-4823-8459-d57486539a0d",
                        "type":"application/vnd.lime.chatstate+json",
                        "content":{
                           "state":"composing",
                           "interval":1000
                        }
                     },
                     "editable":true,
                     "deletable":true,
                     "position":"left"
                  }
               },
               "$invalid":false
            },
            {
               "action":{
                  "type":"SendMessage",
                  "settings":{
                     "id":"1c75a13b-09c4-4fb7-bd59-1bfee645814d",
                     "type":"application/vnd.lime.media-link+json",
                     "content":{
                        "uri":"",
                        "type":"audio/mp3"
                     }
                  },
                  "$cardContent":{
                     "document":{
                        "id":"1c75a13b-09c4-4fb7-bd59-1bfee645814d",
                        "type":"application/vnd.lime.media-link+json",
                        "content":{
                           "uri":"",
                           "type":"audio/mp3"
                        }
                     },
                     "editable":true,
                     "deletable":true,
                     "position":"left"
                  }
               },
               "$invalid":false
            },
            {
               "input":{
                  "bypass":false,
                  "$cardContent":{
                     "document":{
                        "id":"f82af685-96ef-4833-a9cf-b2194d981fd2",
                        "type":"text/plain",
                        "textContent":"Entrada do usuário",
                        "content":"Entrada do usuário"
                     },
                     "editable":false,
                     "deletable":true,
                     "position":"right",
                     "editing":false
                  },
                  "$invalid":false
               },
               "$invalid":false
            }
         ],
         "$conditionOutputs":[
            {
               "stateId":"4589e399-85a3-4aab-ba08-b88725a0a8fb",
               "$connId":"con_13",
               "conditions":[
                  {
                     "source":"input",
                     "comparison":"exists",
                     "values":[
                        
                     ]
                  }
               ],
               "$id":"784ce8e1-aa56-4ba1-bbd3-879b8cf334ba",
               "$invalid":false
            }
         ],
         "$enteringCustomActions":[
            {
               "type":"TrackEvent",
               "$title":"Solicitacao sobrenome exibicao - Exibicao",
               "$invalid":false,
               "settings":{
                  "extras":{
                     
                  },
                  "category":"Solicitacao sobrenome exibicao",
                  "action":"Exibicao"
               },
               "conditions":[
                  
               ]
            }
         ],
         "$leavingCustomActions":[
            {
               "type":"TrackEvent",
               "$title":"Nome completo valido input - Retorna os inputs classificados como “Nome completo”",
               "$invalid":false,
               "settings":{
                  "extras":{
                     
                  },
                  "category":"Nome completo valido input",
                  "action":"Retorna os inputs classificados como “Nome completo”"
               },
               "conditions":[
                  
               ]
            },
            {
               "type":"TrackEvent",
               "$title":"Validacao nome inesperado  - Retorna todos os inputs classificados como “input inesperado”",
               "$invalid":false,
               "settings":{
                  "extras":{
                     
                  },
                  "category":"Validacao nome inesperado ",
                  "action":"Retorna todos os inputs classificados como “input inesperado”"
               },
               "conditions":[
                  
               ]
            }
         ],
         "$inputSuggestions":[
            
         ],
         "$defaultOutput":{
            "stateId":"fallback",
            "$invalid":false
         },
         "$tags":[
            {
               "id":"blip-tag-ac301422-512d-436c-9953-606307d7de97",
               "label":"TrackEvent",
               "background":"#61D36F",
               "canChangeBackground":false
            },
            {
               "id":"blip-tag-12ad82dc-75a5-4fdd-be12-12ee4ca8afdd",
               "label":"UserInput",
               "background":"#000000",
               "canChangeBackground":false
            }
         ],
         "id":"06c8a577-0496-4deb-ba42-ca72bc257eea",
         "root":false,
         "$title":" S.1.2.1\n Novo componente",
         "$position":{
            "top":"511px",
            "left":"479px"
         },
         "$invalidContentActions":false,
         "$invalidOutputs":false,
         "$invalidCustomActions":false,
         "$invalid":false,
         "goTo":null
      },
      "4589e399-85a3-4aab-ba08-b88725a0a8fb":{
         "$contentActions":[
            {
               "action":{
                  "type":"SendMessage",
                  "settings":{
                     "id":"31410cd0-1916-426e-83b6-9e89336139f2",
                     "type":"application/vnd.lime.chatstate+json",
                     "content":{
                        "state":"composing",
                        "interval":1000
                     }
                  },
                  "$cardContent":{
                     "document":{
                        "id":"31410cd0-1916-426e-83b6-9e89336139f2",
                        "type":"application/vnd.lime.chatstate+json",
                        "content":{
                           "state":"composing",
                           "interval":1000
                        }
                     },
                     "editable":true,
                     "deletable":true,
                     "position":"left"
                  }
               },
               "$invalid":false
            },
            {
               "action":{
                  "$id":"fdfda43c-4288-4cd2-9998-14c979f77a07",
                  "$typeOfContent":"raw-content",
                  "type":"SendRawMessage",
                  "settings":{
                     "metadata":{
                        
                     },
                     "type":"application/json",
                     "rawContent":"{\"recipient_type\":\"individual\",\"type\":\"interactive\",\"interactive\":{\"type\":\"list\",\"header\":{\"type\":\"text\",\"text\":\"Escolha uma opção\"},\"body\":{\"text\":\"Mensagem da lista\"},\"action\":{\"button\":\"Título da Lista\",\"sections\":[{\"title\":\"Escolha uma opção\",\"rows\":[{\"id\":\"1.0\",\"title\":\"Opção 1\",\"description\":\"Descrição\"},{\"id\":\"1.1\",\"title\":\"Opção 2\",\"description\":\"Descrição\"},{\"id\":\"1.2\",\"title\":\"Opção 3\",\"description\":\"Descrição\"}]}]}}}"
                  }
               },
               "$invalid":false
            },
            {
               "input":{
                  "bypass":false,
                  "$cardContent":{
                     "document":{
                        "id":"8b249be0-cf58-4c90-9e4e-c455b07c66fe",
                        "type":"text/plain",
                        "textContent":"Entrada do usuário",
                        "content":"Entrada do usuário"
                     },
                     "editable":false,
                     "deletable":true,
                     "position":"right",
                     "editing":false
                  },
                  "$invalid":false
               },
               "$invalid":false
            }
         ],
         "$conditionOutputs":[
            {
               "stateId":"06c8a577-0496-4deb-ba42-ca72bc257eea",
               "$connId":"con_18",
               "conditions":[
                  {
                     "source":"input",
                     "comparison":"exists",
                     "values":[
                        
                     ]
                  }
               ],
               "$id":"8a53165b-9c13-4e06-8350-2cb47acac62b",
               "$invalid":false
            }
         ],
         "$enteringCustomActions":[
            {
               "type":"TrackEvent",
               "$title":"Confirmacao nome e sobrenome exibicao - Exibicao",
               "$invalid":false,
               "settings":{
                  "extras":{
                     
                  },
                  "category":"Confirmacao nome e sobrenome exibicao",
                  "action":"Exibicao"
               },
               "conditions":[
                  
               ]
            }
         ],
         "$leavingCustomActions":[
            {
               "type":"TrackEvent",
               "$title":"Validacao sobrenome - Sobrenome valido",
               "$invalid":false,
               "settings":{
                  "extras":{
                     
                  },
                  "category":"Validacao sobrenome",
                  "action":"Sobrenome valido"
               },
               "conditions":[
                  
               ]
            },
            {
               "type":"TrackEvent",
               "$title":"Validacao sobrenome - Inesperado",
               "$invalid":false,
               "settings":{
                  "extras":{
                     
                  },
                  "category":"Validacao sobrenome",
                  "action":"Inesperado"
               },
               "conditions":[
                  
               ]
            },
            {
               "type":"TrackEvent",
               "$title":"Confirmacao nome e sobrenome selecao - Sim",
               "$invalid":false,
               "settings":{
                  "extras":{
                     
                  },
                  "category":"Confirmacao nome e sobrenome selecao",
                  "action":"Sim"
               },
               "conditions":[
                  
               ]
            },
            {
               "type":"TrackEvent",
               "$title":"Confirmacao nome e sobrenome selecao - Nao",
               "$invalid":false,
               "settings":{
                  "extras":{
                     
                  },
                  "category":"Confirmacao nome e sobrenome selecao",
                  "action":"Nao"
               },
               "conditions":[
                  
               ]
            },
            {
               "type":"TrackEvent",
               "$title":"Confirmacao nome e sobrenome selecao - Input inesperado",
               "$invalid":false,
               "settings":{
                  "extras":{
                     
                  },
                  "category":"Confirmacao nome e sobrenome selecao",
                  "action":"Input inesperado"
               },
               "conditions":[
                  
               ]
            },
            {
               "type":"TrackEvent",
               "$title":"Validacao sobrenome inesperado - Retorna todos os inputs de sobrenomes classificados como “inesperado”",
               "$invalid":false,
               "settings":{
                  "extras":{
                     
                  },
                  "category":"Validacao sobrenome inesperado",
                  "action":"Retorna todos os inputs de sobrenomes classificados como “inesperado”"
               },
               "conditions":[
                  
               ]
            },
            {
               "type":"TrackEvent",
               "$title":"Sobrenome valido input - Retorna todos os inputs de sobrenomes classificados como “Valido”",
               "$invalid":false,
               "settings":{
                  "extras":{
                     
                  },
                  "category":"Sobrenome valido input",
                  "action":"Retorna todos os inputs de sobrenomes classificados como “Valido”"
               },
               "conditions":[
                  
               ]
            },
            {
               "type":"TrackEvent",
               "$title":"Confirmacao nome e sobrenome inesperado - retorna os inputs inesperados",
               "$invalid":false,
               "settings":{
                  "extras":{
                     
                  },
                  "category":"Confirmacao nome e sobrenome inesperado",
                  "action":"retorna os inputs inesperados"
               },
               "conditions":[
                  
               ]
            }
         ],
         "$inputSuggestions":[
            
         ],
         "$defaultOutput":{
            "stateId":"fallback",
            "$invalid":false
         },
         "$tags":[
            {
               "id":"blip-tag-4b0b59e0-ae41-42b3-87bb-210cab3acb28",
               "label":"TrackEvent",
               "background":"#61D36F",
               "canChangeBackground":false
            },
            {
               "id":"blip-tag-048b3f44-430c-42fd-a4df-a41fdabac5c5",
               "label":"UserInput",
               "background":"#000000",
               "canChangeBackground":false
            }
         ],
         "id":"4589e399-85a3-4aab-ba08-b88725a0a8fb",
         "root":false,
         "$title":" S.1.2.2\nSobrenome",
         "$position":{
            "top":"524px",
            "left":"841px"
         },
         "$invalidContentActions":false,
         "$invalidOutputs":false,
         "$invalidCustomActions":false,
         "$invalid":false,
         "goTo":null
      },
      "1b984394-8477-41c5-8fbe-57b7dc1b3e80":{
         "$contentActions":[
            {
               "input":{
                  "bypass":true,
                  "$cardContent":{
                     "document":{
                        "id":"b4b7d47e-60c8-46dc-b47d-013795aee7f4",
                        "type":"text/plain",
                        "textContent":"Entrada do usuário",
                        "content":"Entrada do usuário"
                     },
                     "editable":false,
                     "deletable":true,
                     "position":"right",
                     "editing":false
                  },
                  "$invalid":false
               },
               "$invalid":false
            }
         ],
         "$conditionOutputs":[
            
         ],
         "$enteringCustomActions":[
            
         ],
         "$leavingCustomActions":[
            
         ],
         "$inputSuggestions":[
            
         ],
         "$defaultOutput":{
            "stateId":"fallback",
            "$invalid":false
         },
         "$tags":[
            
         ],
         "id":"1b984394-8477-41c5-8fbe-57b7dc1b3e80",
         "root":false,
         "$position":{
            "top":"409px",
            "left":"226px"
         },
         "$invalidContentActions":false,
         "$invalidOutputs":false,
         "$invalidCustomActions":false,
         "$invalid":false,
         "goTo":null
      }
   },
   "globalActions":{
      "$contentActions":[
         
      ],
      "$conditionOutputs":[
         
      ],
      "$enteringCustomActions":[
         
      ],
      "$leavingCustomActions":[
         
      ],
      "$inputSuggestions":[
         
      ],
      "$defaultOutput":{
         "stateId":"fallback",
         "$invalid":false
      },
      "$tags":[
         
      ],
      "id":"global-actions",
      "$invalidContentActions":false,
      "$invalidOutputs":false,
      "$invalidCustomActions":false
   }
}`