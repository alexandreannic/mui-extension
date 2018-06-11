import * as React from 'react';
import {SvgIcon} from '@material-ui/core';

const LinkedinIcon = ({className, ...props}: any) =>
  <SvgIcon className={'material-icons ' + className || ''} {...props}>
    <svg x="0px" y="0px" width="100%" height="100%" viewBox="0 0 430 430">
      <g>
        <path d="M398.355,0H31.782C14.229,0,0.002,13.793,0.002,30.817v368.471
		c0,17.025,14.232,30.83,31.78,30.83h366.573c17.549,0,31.76-13.814,31.76-30.83V30.817C430.115,13.798,415.904,0,398.355,0z
		 M130.4,360.038H65.413V165.845H130.4V360.038z M97.913,139.315h-0.437c-21.793,0-35.92-14.904-35.92-33.563
		c0-19.035,14.542-33.535,36.767-33.535c22.227,0,35.899,14.496,36.331,33.535C134.654,124.415,120.555,139.315,97.913,139.315z
		 M364.659,360.038h-64.966V256.138c0-26.107-9.413-43.921-32.907-43.921c-17.973,0-28.642,12.018-33.327,23.621
		c-1.736,4.144-2.166,9.94-2.166,15.728v108.468h-64.954c0,0,0.85-175.979,0-194.192h64.964v27.531
		c8.624-13.229,24.035-32.1,58.534-32.1c42.76,0,74.822,27.739,74.822,87.414V360.038z M230.883,193.99
		c0.111-0.182,0.266-0.401,0.42-0.614v0.614H230.883z"/>
      </g>
    </svg>
  </SvgIcon>
;

export default LinkedinIcon;
