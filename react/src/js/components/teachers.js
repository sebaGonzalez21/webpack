import Teacher from './teacher.js'
import React,{Component} from 'react'


class Teachers extends Component {
  render(){
    return (
        <ul clasName="Teachers">
          {this.props.data.teachers.map((teacherData)=>{
            return <Teacher {...teacherData}/>
          })
          }
      </ul>
    )
  }
}

export default Teachers;
