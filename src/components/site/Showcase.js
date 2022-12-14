import React, {useState} from "react";
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { NavLink } from 'react-router-dom';

import { 
  ClipboardIcon,
  ArrowsExpandIcon,
} from '@heroicons/react/solid';

export default function Showcase(props) {
  
  const [syntaxBlock, setSyntaxBlock] = useState( props.syntaxBlock );

  const initalDelay = 500 // Keeps tooltips from becoming annaying.
  const secondaryDelay = 0 // Speed up tooltips once they are open.


  const text= "My Text goes here";




  const mytext = 
`<p>test</p>
<p>this is multiline text.</p>
<div>more text</div>`;


  const formatID = props => {
    var str = props
    var replaced = str.split(' ').join('-').toLowerCase()
    return replaced
  }

  const RenderSyntax = props =>  {  
    return (
      <SyntaxHighlighter language="javascript" style={a11yDark} showLineNumbers>
        {syntaxBlock}
      </SyntaxHighlighter>
    )
  }

  const RenderExample = props =>  {  
    return (
      <div className={props.class}>
        {props.component}
      </div>
    )
  }


  
  return (
    <div className="bg-white border border-gray-200 rounded-lg border-1 mb-14">
      <div className="flex items-center px-2 py-2 space-x-2 text-sm font-medium text-gray-700 border-b border-gray-200 whitespace-nowrap border-1">
        <div className="flex-1 ml-2">{props.title}</div>
        <ul className="flex" >
          {props.expandedUrl &&
            <li>
              <NavLink to={props.expandedUrl} aria-label="View Full Sreen Example" data-tip data-for={formatID(props.title) + '-expand'}  className="inline-flex items-center px-2.5 py-2 text-gray-500 hover:text-gray-700 font-medium bg-white border border-transparent rounded-md hover:bg-gray-100">
                <ArrowsExpandIcon className="w-5 h-5" />
              </NavLink>
            </li>
          }
          {/* 
          <li>
            <button onClick={toggleCodeBlock} onFocus={handleFocus} aria-label="View Code Example" data-tip data-for={formatID(props.title) + '-show'}  className="inline-flex items-center px-2.5 py-2 text-gray-500 hover:text-gray-700 font-medium bg-white border border-transparent rounded-md hover:bg-gray-100">
              <CodeIcon className="w-5 h-5" />
              <ReactTooltip id={formatID(props.title) + '-show'} arrowColor="transparent" delayShow={delay} place="top" effect="solid" aria-hidden="true">
                { syntaxBlock ? 'Hide Markup' : 'Show Markup' }
              </ReactTooltip>
            </button>
          </li>
          */}
 
       

          {/*
             <li>
          <Switch
            checked={DarkModeEnabled}
            onChange={setDarkModeEnabled}
            className={classNames(
              DarkModeEnabled ? 'bg-gray-500' : 'bg-gray-200',
              'relative inline-flex m-1.5 flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            )}
          >
            <span className="sr-only">Use setting</span>
            <span
              className={classNames(
                DarkModeEnabled ? 'translate-x-5' : 'translate-x-0',
                'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
              )}
            >
              <span
                className={classNames(
                  DarkModeEnabled ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200',
                  'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
                )}
                aria-hidden="true"
              >
                <SunIcon className="w-3 h-3 text-gray-700"/>
              </span>
              <span
                className={classNames(
                  DarkModeEnabled ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100',
                  'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
                )}
                aria-hidden="true"
              >
            <MoonIcon className="w-3 h-3 text-gray-700"/>

              </span>
            </span>
          </Switch>
               </li> 
          */}



        
        </ul>
      </div>
      <div>
        <div className="bg-gray-100 dark:bg-gray-800">
          <RenderExample component={props.component} class={props.class}/>
          <RenderSyntax/>
        </div>
      </div>
    </div>
  )
}