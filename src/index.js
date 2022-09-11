import React from 'react';
import ReactDOM  from 'react-dom';
import { faker } from '@faker-js/faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Appstate from './RuleOfState';
import SeasonDisplay from './SeasonDisplay';
import './style/index.css';

const App=()=>{
   return(
    <div className='ui container comments'>
        <ApprovalCard>
            <CommentDetail
                author="Sam"
                timeAgo="Today at 4:45pm"
                content="Nice blog"
                avatar={faker.image.avatar()}  
            />
         </ApprovalCard>
         <ApprovalCard>
            <CommentDetail
                author="Eugene"
                timeAgo="Today at 4:45pm"
                content=" I like it, goodjob!"
                avatar={faker.image.avatar()}      
            />
         </ApprovalCard>
         <ApprovalCard>
            <CommentDetail
                author="Jenifer"
                timeAgo="Today at 4:45pm"
                content=" Best blog ever"
                avatar={faker.image.avatar()}      
            />
        </ApprovalCard>
        <Appstate/>
        <SeasonDisplay/>
    </div>
   );
};

ReactDOM.render(<App/>,document.querySelector('#root'));

