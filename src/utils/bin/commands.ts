// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};


// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, We are ${config.name}. 
Welcome to our website!
More about us:
'sumfetch' - short summary.


​​### Who are Bugcatchers?


Bug catcher is a well-experienced QA who is familiar with the principles and products of WEB 3.0 of its functioning, and is also educated about access and testing of WEB 3.0 products as well as functioning in communities like DAOs.
- The primary responsibility of the bug catcher is to prevent defects.
In addition, they are responsible for identifying and eliminating any mistakes in code before its release.
Such errors could result from various issues such as insufficient data input or an improperly designed interface element. 
- Bug catcher responsibilities include designing and implementing tests, debugging, and defining corrective actions. 
- Bug catcher will also review system requirements and track quality assurance metrics (e.g. defect densities and open defect counts.) 
- The bug catcher role plays an important part in the product development process. Our bug catchers are responsible for conducting tests before product launches to ensure dapp runs smoothly and meets client (community) needs while being cost-effective.

### Bugcatcher duties?

- Review requirements, specifications, and technical design documents to provide timely and meaningful feedback
- Create detailed, comprehensive, and well-structured test plans and test cases
- Estimate, prioritize, plan, and coordinate testing activities
- Identify, record, and thoroughly document and track bugs
- Perform thorough regression testing when bugs are resolved
- Develop and apply testing processes for new and existing products to meet client needs
- Liaise with internal teams (e.g., developers and product managers) to identify system requirements
- Monitor debugging process results
- Track quality assurance metrics, like defect densities and open defect counts
- Stay up-to-date with new testing tools and test strategies
- Exposure to CI/CD

### Bug Catchers Tech Stack:

- JS, TS
- Cypress / Synpress
- Gherkin
- Java
- Selenium
- WebDriverIO


### What you can expect from the bug catchers squad and how we are organized:

Bug Catchers QA squad is formed around certain tasks and has a certain budget for it, and certain goals per quarter.
So that the DAO community can hold us accountable and periodically (every three months for example) hold a QA retrospective presentation,
where the contribution of the QA squad would often be seen and the ratio of the contribution and cost of the QA team would be considered to align or change according to the needs of the projects and the impact on project development.
I think this would make it easier for any other project leader because he would be responsible for budget calculations and goal planning only for the devs of a certain team or project and not for us from the QA team.

### QA squad leader/team would have the following duties:

1. Analyzing the needs of projects together with the Leader of the same and making a plan of QA actions and contributions.

2. Planning the budgets/timelines for the QA squad after creating an action plan for the project.
 
3. Should know all projects well enough to organize QA contributors, prioritize tasks and "step in" as help when needed.

4. Creating a QA retrospective report, which would show the actions and monitor the performance of the QA team for each project individually so that the community would be aware of our contribution.

5. Performing QA tasks like other QA contributors (manual testing and developing automation tests)


`;
};



// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

// Typical linux commands

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};


export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
Welcome to WEB 3.0 QA Squad


  ██████╗ ██╗   ██╗ ██████╗      ██████╗ █████╗ ████████╗ ██████╗██╗  ██╗███████╗██████╗ ███████╗
  ██╔══██╗██║   ██║██╔════╝     ██╔════╝██╔══██╗╚══██╔══╝██╔════╝██║  ██║██╔════╝██╔══██╗██╔════╝
  ██████╔╝██║   ██║██║  ███╗    ██║     ███████║   ██║   ██║     ███████║█████╗  ██████╔╝███████╗
  ██╔══██╗██║   ██║██║   ██║    ██║     ██╔══██║   ██║   ██║     ██╔══██║██╔══╝  ██╔══██╗╚════██║
  ██████╔╝╚██████╔╝╚██████╔╝    ╚██████╗██║  ██║   ██║   ╚██████╗██║  ██║███████╗██║  ██║███████║
  ╚═════╝  ╚═════╝  ╚═════╝      ╚═════╝╚═╝  ╚═╝   ╚═╝    ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚══════╝
                                                                                                 

Type 'help' to see the list of available commands.
Type 'about' to read more about us.
Type 'sumfetch' to display summary.
`;
};
