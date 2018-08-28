import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from "./reducers/index";
import {add_item} from "./actions/item";

const store=createStore(reducers,{current_path:"/root"});
store.dispatch(add_item({name:"apps",type:"folder",creator:"Aman_Dhembla"}));
store.dispatch(add_item({name:"pictures",type:"folder",creator:"Aman_Dhembla"}));
store.dispatch(add_item({name:"videos",type:"folder",creator:"Aman_Dhembla"}));
store.dispatch(add_item({name:"docs",type:"folder",creator:"Aman_Dhembla"}));
store.dispatch(add_item({name:"a.pdf",type:"file",creator:"Aman_Dhembla"}));
store.dispatch(add_item({name:"b.jpg",type:"file",creator:"Aman_Dhembla"}));
store.dispatch(add_item({name:"work",parent:"docs",type:"folder",creator:"Aman_Dhembla"}));
store.dispatch(add_item({name:"c.pdf",parent:"docs",type:"file",creator:"Aman_Dhembla"}));
store.dispatch(add_item({name:"d.docx",parent:"docs",type:"file",creator:"Aman_Dhembla"}));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
