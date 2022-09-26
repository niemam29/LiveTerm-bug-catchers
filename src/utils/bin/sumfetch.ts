import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  if (config.ascii === 'cveinnt') {
    return `                                                  

`;
  } else {
    return `
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                  sumfetch
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄              -----------
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄             ABOUT
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            ${config.name}
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓          
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓        
▐▓                                 ▐▓       -----------
▐▓        >  BUG CATCHERS          ▐▓        CONTACT 
▐▓        >  WEB 3.0 QA            ▐▓        <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓        <u><a href="https://github.com/${config.social.discord}" target="_blank">${config.social.discord}</a></u>
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓          
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           -----------
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀             Team 
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓             * Milan                
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀               <u><a>https://github.com/MilanVojnovic95</a></u>
                                            * Phillip
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                  <u><a>https://github.com/Filipv95</a></u>
                                            * Kacper
                                            <u><a>https://github.com/niemam29</a></u>

`;
  }
};

export default sumfetch;
