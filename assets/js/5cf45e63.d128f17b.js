"use strict";(self.webpackChunkpublic_notes=self.webpackChunkpublic_notes||[]).push([[4466],{5168:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"tech/large-language-models/oraily-llm-course","title":"O\'Reilly Large Language Models and ChatGPT in 3 Weeks Course","description":"Here\'s my LLM usage workflow based on my personal experience and my takes on the Large Language Models and ChatGPT in 3 Weeks event.","source":"@site/docs/0100-tech/030-large-language-models/010-oraily-llm-course.md","sourceDirName":"0100-tech/030-large-language-models","slug":"/tech/large-language-models/oraily-llm-course","permalink":"/tech/large-language-models/oraily-llm-course","draft":false,"unlisted":false,"editUrl":"https://github.com/ahmadalli/public-notes/edit/main/docs/0100-tech/030-large-language-models/010-oraily-llm-course.md","tags":[],"version":"current","lastUpdatedBy":"ahmadali shafiee","lastUpdatedAt":1712491970000,"sidebarPosition":10,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Large Language Models (LLMs)","permalink":"/tech/large-language-models/"},"next":{"title":"ChatGPT","permalink":"/tech/large-language-models/chatgpt"}}');var o=n(4848),s=n(8453);const i={},r="O'Reilly Large Language Models and ChatGPT in 3 Weeks Course",l={},d=[{value:"Autoregressive and Autoencoding Models",id:"autoregressive-and-autoencoding-models",level:2},{value:"Chat Models",id:"chat-models",level:2},{value:"Prompt Structure",id:"prompt-structure",level:2},{value:"Defining the Task",id:"defining-the-task",level:3},{value:"Define the Output Format",id:"define-the-output-format",level:3},{value:"Few Shot Learning",id:"few-shot-learning",level:3},{value:"Chain of Thoughts",id:"chain-of-thoughts",level:3},{value:"Model Parameters",id:"model-parameters",level:2},{value:"Temperature",id:"temperature",level:3},{value:"Top P",id:"top-p",level:3},{value:"Classification",id:"classification",level:2},{value:"Recommendations",id:"recommendations",level:2},{value:"Cost",id:"cost",level:2},{value:"Model Output Evaluation",id:"model-output-evaluation",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"oreilly-large-language-models-and-chatgpt-in-3-weeks-course",children:"O'Reilly Large Language Models and ChatGPT in 3 Weeks Course"})}),"\n",(0,o.jsxs)(t.p,{children:["Here's my LLM usage workflow based on my personal experience and my takes on the ",(0,o.jsx)(t.a,{href:"https://learning.oreilly.com/live-events/large-language-models-and-chatgpt-in-3-weeks/0636920090988/0636920090987/",children:"Large Language Models and ChatGPT in 3 Weeks"})," event."]}),"\n",(0,o.jsx)(t.h2,{id:"autoregressive-and-autoencoding-models",children:"Autoregressive and Autoencoding Models"}),"\n",(0,o.jsxs)(t.p,{children:["Autoregressive models predict the next token based on the previous tokens. This means that they can only generate text in one direction and should generate text one token at a time. The GPT model family is an example of autoregressive models. This also means that the text can be shown as it's being generated which is a nice UX feature. ",(0,o.jsx)(t.strong,{children:"Autoregressive models are better for text generation."})]}),"\n",(0,o.jsxs)(t.p,{children:["Autoencoding models predict the next token based on the previous and next tokens. This means that they can generate text in both directions and generate text in batches instead of one token at a time. The BERT model family is an example of autoencoding models. Since the output of the model is not visible until the generation is complete, text generation with these models feels slower than autoregressive models. ",(0,o.jsx)(t.strong,{children:"Autoencoding models are better for text understanding and classification."})]}),"\n",(0,o.jsx)(t.p,{children:"There are also models that combine both approaches. The T5 model family is an example of these models."}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["Check out ",(0,o.jsx)(t.a,{href:"https://aliissa99.medium.com/transformer-gpt-3-gpt-j-t5-and-bert-4cf8915dd86f",children:"here"})," and ",(0,o.jsx)(t.a,{href:"https://github.com/christianversloot/machine-learning-articles/blob/main/differences-between-autoregressive-autoencoding-and-sequence-to-sequence-models-in-machine-learning.md",children:"here"})," to get a better understanding of the fundamentals and underlying concepts like transformers and the reason behind this behaviors."]})}),"\n",(0,o.jsx)(t.h2,{id:"chat-models",children:"Chat Models"}),"\n",(0,o.jsxs)(t.p,{children:["Autoregressive LLMs are good at completing text, but unless they've been trained on conversational data, they are not good at conversations and handling tasks. Chat models are trained ",(0,o.jsx)(t.a,{href:"https://openai.com/blog/chatgpt",children:"in a way"})," that they can handle conversations and tasks."]}),"\n",(0,o.jsx)(t.p,{children:"Chat histories, user interactions, and feedback (such as thumbs up/down, copying outputs, etc.) would be used to train newer versions of the model. This means that there may be noticeable differences in the outputs across different versions."}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(t.p,{children:"The latest version of a model is not always the best version for your use case. You need to have proper testing and evaluation in place and compare outputs to make sure that you are using the best version for your use case."})}),"\n",(0,o.jsx)(t.h2,{id:"prompt-structure",children:"Prompt Structure"}),"\n",(0,o.jsx)(t.h3,{id:"defining-the-task",children:"Defining the Task"}),"\n",(0,o.jsx)(t.p,{children:"Define the task before providing the context. Because the task comes before the context, when the model is generating next token, tokens that are related to the task will be more likely to be generated."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",children:"Write a reply to the following email <+ addition description of the command>:\n<the email>\n"})}),"\n",(0,o.jsx)(t.h3,{id:"define-the-output-format",children:"Define the Output Format"}),"\n",(0,o.jsxs)(t.p,{children:["After task definition, you can also define the output format. Here's an example output format that I've used for ",(0,o.jsx)(t.a,{href:"https://clevermsg.io/",children:"CleverMessages"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",children:"Use this format:\n\nMessageLength: (length of the message)\nInput: (the message the user wants to say)\nReplyTo: (optional: message the user wants to reply to)\nMessage: (what user should say)\n"})}),"\n",(0,o.jsx)(t.p,{children:"And I give the following context:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",children:"MessageLength: <from configuration>\nInput: <user input>\nReplyTo: <user input>\nMessage:\n"})}),"\n",(0,o.jsx)(t.p,{children:"and the model will generate the input in proper format."}),"\n",(0,o.jsx)(t.h3,{id:"few-shot-learning",children:"Few Shot Learning"}),"\n",(0,o.jsx)(t.p,{children:"If the model is not able to give you the answer just from the task definition, you can give it a few examples of the context and desired output. This is called few shot learning."}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"Usually three examples are enough for the model to learn the task."})}),"\n",(0,o.jsx)(t.h3,{id:"chain-of-thoughts",children:"Chain of Thoughts"}),"\n",(0,o.jsxs)(t.p,{children:["You can ask the model to reason through the generation of the response. You can add ",(0,o.jsx)(t.code,{children:"reason through it step by step"})," to the end of the prompt and the model will generate the response step by step, then give you the final response."]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"To make the output parsable by a program, you can put thinking steps as part of the output format."})}),"\n",(0,o.jsx)(t.h2,{id:"model-parameters",children:"Model Parameters"}),"\n",(0,o.jsx)(t.h3,{id:"temperature",children:"Temperature"}),"\n",(0,o.jsx)(t.p,{children:"Temperature controls how smooth the distribution of the next token's probabilities is. Lower temperature reduces the chance of generating unexpected tokens, making the output more predictable. Higher temperature increases the chance of generating unexpected tokens, making the output more creative."}),"\n",(0,o.jsx)(t.h3,{id:"top-p",children:"Top P"}),"\n",(0,o.jsx)(t.p,{children:"Top P controls how many tokens are considered when generating the next token based on their probabilities. Lower top P means fewer tokens are considered, making the output more predictable."}),"\n",(0,o.jsx)(t.h2,{id:"classification",children:"Classification"}),"\n",(0,o.jsxs)(t.p,{children:["LLMs can be used for classification tasks like sentiment analysis or similar labeling tasks. For example you can use ",(0,o.jsx)(t.a,{href:"https://huggingface.co/facebook/bart-large-mnli",children:"facebook/bart-large-mnli"})," without fine-tuning."]}),"\n",(0,o.jsx)(t.h2,{id:"recommendations",children:"Recommendations"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://tech.ebayinc.com/engineering/how-ebay-created-a-language-model-with-three-billion-item-titles/",children:"EBay uses BERT for product recommendations"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"cost",children:"Cost"}),"\n",(0,o.jsx)(t.p,{children:"You can analyze your application's token usage to estimate the cost of using closed source LLMs like OpenAI. You can also use open source LLMs and host them yourself to reduce the cost."}),"\n",(0,o.jsx)(t.h2,{id:"model-output-evaluation",children:"Model Output Evaluation"}),"\n",(0,o.jsxs)(t.p,{children:["To make sure the model is generating the desired output, you need to have proper test cases in place. You can use ",(0,o.jsx)(t.a,{href:"https://www.vellum.ai",children:"Vellum"})," playground to test your inputs and outputs and compare them with other models."]})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var a=n(6540);const o={},s=a.createContext(o);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);