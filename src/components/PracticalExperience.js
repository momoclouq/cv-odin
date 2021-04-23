import React from "react";

const showMenu = (props) => {
    const listOfPEx = props.listOfPEx.map((ex, index) => {
        return (
            <div className="practicalExperienceShowItem" key={"PEx" + index}>
                <span>{ex.companyName} - </span>
                <span>{ex.positionTitle} - </span>
                <span>{ex.mainTask} - </span>
                <span>{ex.dateOfWork}</span>
            </div>
        )
    });

    return(
        <div className="practicalExperienceShow">
            {listOfPEx}
            <div className="line"></div>
            <button onClick={props.changeEditState}>edit</button>
        </div>
    );
}

const editMenu = (props) => {
    const listOfPEx = props.listOfPEx.map((ex, index) => {
        return (
            <div className="practicalExperienceShowItem" key={"PEx" + index}>
                <input type="text" placeholder="company name" value={ex.companyName} id={"companyName-" + index} onChange={props.handleChange}/>
                <input type="text" placeholder="position title" value={ex.positionTitle} id={"positionTitle-" + index} onChange={props.handleChange}/>
                <input type="text" placeholder="main task" value={ex.mainTask} id={"mainTask-" + index} onChange={props.handleChange}/>
                <input type="text" placeholder="date of work" value={ex.dateOfWork} id={"dateOfWork-" + index} onChange={props.handleChange}/>
            </div>
        )
    });

    return(
        <div className="practicalExperienceEdit">
            {listOfPEx}
            <div className="line"></div>
            <button onClick={props.addNewPracticalExperience}>add</button>
            <button onClick={props.changeEditState}>done</button>
        </div>
    );
}

class PracticalExperience extends React.Component {
    constructor(props){
        super(props);

        this.state={
            edit: false,
            listOfPEx: [{
                companyName: "",
                positionTitle: "",
                mainTask: "",
                dateOfWork: "",
            }],
        }
        
        this.changeEditState = this.changeEditState.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addNewPracticalExperience = this.addNewPracticalExperience.bind(this);
    }

    changeEditState(){
        this.setState((prevState) => {
            return {
                edit: !prevState.edit
            } 
        });
    }

    handleChange(event){
        let keys = event.target.id.split("-");
        let value = keys[0];
        let index = parseInt(keys[1]);

        this.setState((prevState) => {
            let temp = prevState.listOfPEx.map((value) => {
                return Object.assign({}, value);
            });

            temp[index][value] = event.target.value;

            return {
                listOfPEx: temp
            }
        });
    }

    addNewPracticalExperience(){
        this.setState((prevState) => {
            let temp = prevState.listOfPEx.map((value) => {
                return Object.assign({}, value);
            });

            temp.push({
                companyName: "",
                positionTitle: "",
                mainTask: "",
                dateOfWork: "",
            });

            return {
                listOfPEx: temp
            };
        })
    }

    render(){
        const propsEditMenu = {
            ...this.state,
            changeEditState: this.changeEditState,
            handleChange: this.handleChange,
            addNewPracticalExperience: this.addNewPracticalExperience
        }

        const propsShowMenu = {
            ...this.state,
            changeEditState: this.changeEditState
        }

        return(

            <div className="practicalExperience">
                <div className="practicalExperienceTitle">Practical Experiences</div>
                {this.state.edit ? editMenu(propsEditMenu) : showMenu(propsShowMenu)}
            </div>
        );

    }
}

export default PracticalExperience;