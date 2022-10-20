import config from '../../../config.json';
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig)

const sumfetchSmall = `
   sumfetch
  -----------
   ABOUT
   ${config.name}
         
    
  -----------
   CONTACT 
   <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
   <u><a href="https://github.com/${config.social.discord}" target="_blank">${config.social.discord}</a></u>
 
  -----------
   Team 
  * Milan                
  <u><a>https://github.com/MilanVojnovic95</a></u>
  * Phillip
  <u><a>https://github.com/Filipv95</a></u>
  * Kacper
  <u><a>https://github.com/niemam29</a></u>

`;

export const sumfetch = async (args: string[]): Promise<string> => {
  let isDesktop
  if (typeof window !== 'undefined') {
    isDesktop = parseInt(fullConfig.theme.screens.md, 10) < window.innerWidth
  }

  if (config.ascii === 'cveinnt') {
    return `                                                  

`;
  } else {

    if (!isDesktop) {
      return sumfetchSmall;
    }

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
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓        <u><a href="${config.social.discord}" target="_blank">${config.social.discord}</a></u>
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓           <u><a href="${config.social.twitter}" target="_blank">${config.social.twitter}</a></u>
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           -----------
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀             Team 
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓             Milan                
        ▀▓▓▄▄▀▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀                <u><a href="${config.github.milan}" target="_blank">${config.github.milan}</a></u>
          ▓▓▓▓▓▓▓▓▓▀▓▓▓▓▓▓▓                 Phillip
            ▀▓▓▓▓▓▓▓▓▓▓▓▀                    <u><a href="${config.github.phillip}" target="_blank">${config.github.phillip}</a></u>
                                            Kacper
                                             <u><a href="${config.github.kacper}" target="_blank">${config.github.kacper}</a></u>

`;
  }
};



