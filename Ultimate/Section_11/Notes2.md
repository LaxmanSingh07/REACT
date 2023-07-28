## How Events work in the React 
 


## Synthetic Events

👉 Wrapper around the DOM’s native event object
👉 Has same interface as native event objects, like stopPropagation() and preventDefault()
👉 Fixes browser inconsistencies, so that events work in the exact same way in all browsers
👉 Most synthetic events bubble (including focus, blur, and change), except for scrol



## Event Handlers

REACT Vs JS

👉 Attributes for event handlers are named using camelCase (onClick instead of onclick or click)
👉 Default behavior can not be prevented by returning false (only by using preventDefault())
👉 Attach “Capture” if you need to handle during capture phase (example: onClickCapture)



## Library vs Framework & React Ecosystem

### First An, Analogy


**`ALL-IN-ONE KIT`**

👍 <span style="color: green;">Ease of mind</span> 

👎<span style="color: red;">No Choice</span> 



**`SEPARETED PARTS`**

👍 <span style="color: green;">Freedom</span>

👎 <span style="color: red;">Decision Fatigue</span>

## REACT 3RD-PARY LIBRARIES ECOSYSTEM

| | |
| --- | --- |
|1.Routing (for SPAS)| React Router, React Location|
|Http Requests| Axios, Fetch|
|Remote state management| Redux, MobX,SWR,APOLLO|
|Global state management| React Context, Redux, Zustand|
|Styling| CSS, SASS, Styled Components, CSS Modules|
|Form Management| Formik, React Hook Form|
|Animation|Motion, Framer Motion, React Spring|
|Ui Components| Material UI, Chakra UI, Ant Design, Tailwind CSS|

## FRAMWORKS BUILT ON TOP OF REACT 

Next.js, Remix,Gatsby,Redwood.js,Blitz.js

Included out of the box:

👉 Routing
👉 Styling
👉 Data Fetching
👉 Image Optimization



