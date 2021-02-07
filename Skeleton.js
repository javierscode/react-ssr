import React from 'react'

const HTMLSkeleton = ({children, scripts})=>(
    <html>
        <head>
            <meta charSet="UTF-8"/>
            <title>Server Side Rendering with React</title>
        </head>
        <body>
            <div id="app" dangerouslySetInnerHTML={{__html: children}}>
            </div>
            { scripts && scripts.map((js, index )=> <script key={index} src={js} />)}
        </body>
    </html>
)

export default HTMLSkeleton;